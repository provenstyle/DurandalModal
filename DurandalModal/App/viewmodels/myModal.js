define(['plugins/dialog'], function(dialog) {

   var close = function () {
      dialog.close(this, 'close');
   };
   
   var yes = function () {
      dialog.close(this, 'yes');
   };
   
   var no = function () {
      dialog.close(this, 'no');
   };

   var message = ko.observable('');

   var activate = function(data) {
      message(data);
   };

   return {
      activate: activate,
      close: close,
      yes:yes,
      no: no,
      message:message
   };
});