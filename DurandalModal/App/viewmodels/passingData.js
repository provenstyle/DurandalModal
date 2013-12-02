define(['plugins/dialog'], function (dialog) {

    var message = ko.observable();
    var response = ko.observable();

    var activate = function () {
        message('');
        response('');
    };

    var show = function () {
        dialog.show("viewmodels/passingDataDialog", message())
            .done(function (data) {
                response(data);
            });
    };

    return {
        activate:activate,
        show: show,
        message: message,
        response: response
    };
});