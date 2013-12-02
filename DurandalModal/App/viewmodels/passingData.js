define(['plugins/dialog'], function(dialog) {

        var message = ko.observable();
        var response = ko.observable();

        var show = function () {
            dialog.show("viewmodels/passingDataDialog", message())
                .done(function (data) {
                    response(data);
                });
        };

        return {
            show: show,
            message: message,
            response: response
        };
});