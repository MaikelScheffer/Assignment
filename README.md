# Thuisbezorg Code Challenge

## To run

```
npm install
npm run serve
```

## TODO

- Customer info box is having oddly in tablet / mobile mode. Caused by something in the CSS framework.
  Possibly make it a fold-out on the side on mobile/tablet instead. Or hide completely.
- Unit tests
- REMINDER INCLUDE TRANSLATIONS
- Perhaps include a "Order Status" component
- Display all details for the "Order details" page
- Optional: Turn the LastOrders component into a parameterized vue plugin (order number max 5, min 2)
- Optional: Allow customer to change user data and make a mock request to (mockbin.org/request)
- Loading indicators while application is getting store values?
- Include temp caching when making calls?
- Make sure the currency symbol changes on language change

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
I'd only really use it if I were to include "view state" as in validation / 'loading' booleans and such in a store module partial.
In such cases **every** view update change would pass through the store using mutations.
Which can be exactly what you'd like to do, but as mentioned I've forgone it in this case.

Nevertheless, I have included some actions to showcase my general familiarty with the "one-way data flow" concept.

I try to adhere to the "Smart views" / "Dumb components" seperation
where the data retrieval will be in the views / pages (passed down from services) and the
components just have "props / parameters" and data gets passed down into them
rather then the components themselves making calls or subscribing to the store
I know a lot of people prefer the alternative approach where every component
goes to the store to acquire their required data, but I prefer this.
This way I have more control in what data ends up being displayed.
