//header & footer Controller
function HeaderFooterController() {
   var self = this;
   var myModel = null;
   var mainController = null;

   this.start = function(model, controller, enter) {
      myModel = model;
      mainController = controller;
      enter.addEventListener('click', enterUser, false);
   }

   var enterUser = function(){
      mainController.goToLogin();
   }
}
