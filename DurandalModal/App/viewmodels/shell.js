define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: ['Welcome',''], title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'PassingData', title:'Passing Data', moduleId: 'viewmodels/passingData', nav: true },
                { route: 'MessageBox', title:'Message Box', moduleId: 'viewmodels/messageBox', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        },
        about: function() {
            app.showDialog('viewmodels/about');
        }
    };
});