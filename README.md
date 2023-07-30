# About
Simple React app - setup by vite. Primarly using Typescript, Material UI components and OpenLayers for the map part.
Store solution made using Redux, axios being wrapped in httpservice to prevent any issues in the future with perhaps
migrating to other fetch api.
# Setup
Clone project: 
```
$ git clone https://github.com/DewEnforcer/cleverfarm_sensors_react.git
```
Install dependencies:
```
$ npm install
```
Run the app:
```
$ npm run dev
```

That's almost it! The app is configured to run initally using mockdata stored in @/src/sensors/sensors.json. To change this, remove the promise code from sensorsService.ts fetch functions and uncomment the return snippets with httpservice!