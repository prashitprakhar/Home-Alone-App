// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDblr3KGKAlQ5bPX04Akc5I-fl4Jncml5o",
    authDomain: "home-alone-app.firebaseapp.com",
    databaseURL: "https://home-alone-app.firebaseio.com",
    projectId: "home-alone-app",
    storageBucket: "home-alone-app.appspot.com",
    messagingSenderId: "168648876035"
  }
};
