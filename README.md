# Thuisbezorg Code Challenge

## To run

```
npm install
npm run serve
```

## TODO

- Responsive
- Unit tests
- Make the change language button nicer
- Inject variables into component styling
- Include proper effects on user action like hover / focus (pending order / detail card)
- Turn the LastOrders component into a paramterized vue plugin (order number max 5, min 2)
- Optional: Allow customer to change user data and make a mock request to (mockbin.org/request)
- Perhaps expand on load success / fail and include retry logic and error handling though that might be overkill

#### Regarding my choices

There are a few things I've done different than I normally would.
Mostly because of the scale of the project and the fact that its a "mock" project.
For example I've included a Vuex store even though it would probably be overkill, mostly to show that I am familiar with it.
Back during my Angular days we used NGRX (Angular version of Vuex) at all times, however NGRX
itself kinda suffers from immense amounts of boilerplate. One fetch() could end up spawninga as much as 4 actions

- MAKE_CALL
- CALL_SUCCESS
- CALL_FAILURE (error handling / retry)
- CALL_FINALIZE

I felt that kind of level of error handling was excessive considering the nature of this project, so I've largely foregone it.
Nevertheless, I have included some actions to showcase my general familiarty with the "one-way data flow" concept.

I try to adhere to the "Smart views" / "Dumb components" seperation
where the data retrieval will be in the views (passed down from services) and the
components just have "props / parameters" and data gets passed down into them
rather then the components themselves making calls or subscribing to the store
