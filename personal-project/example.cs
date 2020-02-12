// Examples in this file will not compile as they lack access to the .NET Framework

// Request object shape (contract)
public class AddChapterRequest
{
    [Required, MaxLength(200)]
    public string Name { get; set; }

    [MaxLength(100_000)]
    public string Content { get; set; }

    public IFormFile? BannerImage { get; set; }
}

// Controller to handle the request after POST
[Authorize]
[ValidateAntiForgeryToken]
[HttpPost("{storyId:guid}/entries")]
public async Task<IActionResult> AddChapter(string storyId, AddChapterRequest request)
{
    // Bad requests implicity return any model validation errors
    if (ModelState.IsValid == false) return BadRequest();
    if (storyId == string.Empty) return BadRequest();

    var command = new AddChapter(request.StoryId, request.Name, request.Content)
    {
        BannerImage = request.BannerImage,
    };

    // upon completion, the domain model will throw the event
    Result<Chapter> chapterResult = await _mediator.Send(command);

    if (chapterResult.IsFailure) return FromResult(chapterResult);

    return FromResult(chapterResult);
}

// Command interface with generic retunr type wrapped into a Result object
// the result object in this case will hold validation / error messages that
// can be caused by the user like 'incorrect' ids
// this is done because unlike domain events which concern themselves with past events
// commands are an instruction that can fail, so when it does so we need to notify the user
public interface ICommand<TReturn> : IRequest<Result<TReturn>> { }


// Command                Command / Return value
public class AddChapter : ICommand<Chapter?>
{
    public string StoryId { get; }

    public string Name { get; }

    public string Content { get; }

    public IFormFile? BannerImage { get; set; }

    public AddChapter(string questId, string name, string content)
    {
        StoryId = questId;
        Name = name;
        Content = content;
    }
}

// Handler decorater (wrapping handlers in handlers)
// that ensures the command will try again if a database error was thrown
// up to a maximum of 3 times. You can also do config based wrapping
// but I prefer these explicit annotations for clarity
[DatabaseRetry]
public class AddChapterCommandHandler : ICommandHandler<AddChapter, Chapter?>
{
    private readonly StoryDbContext _context;
    private readonly IMediator _mediator;

    public AddChapterCommandHandler(StoryDbContext context, IMediator mediator)
    {
        _context = context;
        _mediator = mediator;
    }

    public async Task<Result<Chapter?>> Handle(AddChapter request, CancellationToken cancellationToken)
    {
        var chapterResult = Chapter.Create(request.StoryId, request.Name, request.Content);

        // normally a command should not issue other commands
        // but I should've rather split the two "AddChapter" and "UploadImage" 
        // into two loose commands that should be made by a overhanging service 
        // However, since I do not use this specific command elsewhere 
        // I decided to favour YAGNI. I probably wouldn't do this in a group project
        Result<string> bannerPathResult = await _mediator.Send(new UploadImage(request.BannerImage));

        // if this result is clear that means the bussiness logic validated
        // and processed the received data. If something was wrong either of 
        // these will fail and the data will not be saved to the database
        // and the validation messages will be returned
        Result<Chapter> result = Result.Combine(chapterResult, bannerPathResult);

        if (result.IsFailure) return result.ConvertFailure<Chapter?>();

        chapterResult.Value.ChangeBanner(bannerPathResult.Value);

        _context.Add(chapterResult.Value);

        // database retries are handled by the wrapping decorator
        // This special commit method actually is responsible
        // for orchestating the entire domain events transmissions
        // if it completes succesfully, the domain events prepared by
        // the domain model will be broadcast. 
        // This ensure we don't incorrectly transmit domain events
        // ahead of time when the database call might fail on us
        // See: https://lostechies.com/jimmybogard/2014/05/13/a-better-domain-events-pattern/
        await _context.Commit(cancellationToken);

        return Result.Ok(chapterResult.Value);
    }
}