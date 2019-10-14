### Project Scturcture

```js
./src
├── App.js
├── api
│   └── index.js
├── assets
│   ├── fonts // Font created for loadsmat custom icons
│   └── images
├── components // UI components folder
│   ├── Footer
│   ├── Header
│   ├── Layout
│   ├── Loader
│   ├── ShippmentDetails
│   ├── ShippmentItem
│   └── ShippmentList
├── ducks // Using Duck patten
│   ├── fixtures
│   ├── root.js
│   ├── shippment.js
│   ├── shippments.js
├── index.css
├── index.js
├── lib // Application helpers
│   ├── EquipmentType.js
│   ├── EquipmentType.test.js
│   ├── dateFormater.js
│   ├── dateFormater.test.js
│   └── getActions.js
├── serviceWorker.js
└── store.js
```

## Application

or this project, I decided to make it as simple as possible, taking into account my limitations of time,

as a pattern I chose to use Ducks (Redux Reducer Bundles)
because it centralizes all the business logic and makes us think of models within our application.

for the icons I chose to create a font using the icomoon app, the main reason was to maintain consistency as the project was already using icons with the font-awesome I believe that for new people entering the project this would reduce the overhead

to handle the css I decided to use css modules, the reason for this was to reduce the dependencies of the project, as this option is already included in the create-react-app.

for larger projects I would use a preprocessor like SASS

to handle requests i have opted to use axios with redux thunk both allow me to have greater flexibility without adding too much overhed and weight in the application

to keep the code always organized and cohesively I added the prettier in the project in combination with lint-staged, this allows me to format the code before the commit, leaving the entire codebase consistent

as linter I used eslint in combination with style linte to ensure good quality code

## Nex steps

I would like to

turn this project into a pwa so that it could make use of the service worker and allow the use of the offline application

apply the google worktime (runtime cache) to cache requests that were not modified in the serve, this would reduce the number of requests in the application

to apply a pre-processor SASS or stylus css

add the project into a CI and modify the application endpoint depending on env

add component testing with ENZYME

the main reason that I have not implemented these changes at the moment is my time constraint

# Considerations

I would like to thank you for the opportunity, I found the test very amusing and I await feedback from you.
