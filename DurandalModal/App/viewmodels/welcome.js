define(['plugins/dialog'], function (dialog) {
   var ctor = function () {
        var self = this;
        this.displayName = 'Welcome to the Durandal Starter Kit!';
        this.description = 'Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain.';
        this.features = [
            'Clean MV* Architecture',
            'JS & HTML Modularity',
            'Simple App Lifecycle',
            'Eventing, Modals, Message Boxes, etc.',
            'Navigation & Screen State Management',
            'Consistent Async Programming w/ Promises',
            'App Bundling and Optimization',
            'Use any Backend Technology',
            'Built on top of jQuery, Knockout & RequireJS',
            'Integrates with other libraries such as SammyJS & Bootstrap',
            'Make jQuery & Bootstrap widgets templatable and bindable (or build your own widgets).'
        ];

       this.showModal = function() {
          dialog.show('viewModels/myModal', self.message())
             .done(function(data) {
                self.result(data);
             });
       };

       this.showModal2 = function () {
           dialog.show({
               viewUrl: 'views/message.html',
               message: 'Hello World'
           });
       };

       this.result = ko.observable('');
       this.message = ko.observable('');
   };

    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

    return ctor;
});