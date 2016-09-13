requirejs.config({
  paths: {
    text: '../node_modules/text/text',
    durandal:'../node_modules/durandal/js',
    plugins : '../node_modules/durandal/js/plugins',
    transitions : '../node_modules/durandal/js/transitions',
    knockout: '../node_modules/knockout/build/output/knockout-latest',
    jquery: '../node_modules/jquery/dist/jquery',
    foundation: '../node_modules/foundation-sites/dist/foundation.min.js'
  }
});

define(function (require) {
   var system = require('durandal/system'),
       app = require('durandal/app');

   system.debug(true);

   app.title = 'Nour Ziyadeh';

   app.configurePlugins({
     router:true,
     dialog: true
   });

   app.start().then(function() {
     app.setRoot('shell');
   });
});
