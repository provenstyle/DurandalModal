define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'PassingData', title:'Passing Data', moduleId: 'viewmodels/passingData', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        },
        about: function() {
            app.showDialog('viewmodels/about');
        }
    };
});