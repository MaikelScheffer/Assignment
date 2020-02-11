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

#### Uitleg keuzes

Er zijn een aantal dingen die ik anders heb gedaan dan normaliter, grotendeels door de schaal van het project.
Aangezien dit geen groot project is en ook nooit uitgebreid zal worden zijn er een aantal abstracties overgeslagen.
Andere dingen zoals Vuex heb ik juist erin gelaten, maar zonder 'FETCH_LOAD_SUCCCESS' en 'FETCH_LOAD_FAILURE' en dergelijke error / retry handling.
Mochten jullie dat soort dingen wel willen zien dan kan ik dat alsnog doen.
