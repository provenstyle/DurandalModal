define(['plugins/dialog'], function (dialog) {

        var message = ko.observable();
        var response = ko.observable();
        var activate = function (data) {
            message(data);
            response('');
        };
        var ok = function () {
            dialog.close(this, response());
        };

        return {
            activate: activate,
            message: message,
            response: response,
            ok: ok
        };
});