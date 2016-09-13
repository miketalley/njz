define(function (require) {
  var router = require('plugins/router');

  return {
     router: router,
     activate: function () {
       router.map([
         { route: '', title:'Home', moduleId: 'modules/home', nav: true },
         { route: 'gallery', title:'Gallery', moduleId: 'modules/gallery', nav: true }
       ]).buildNavigationModel();

       return router.activate();
     }
   };
});
