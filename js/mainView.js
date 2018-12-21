//MainView
function MainView() {
   var myModel;
   var myController;
   var self = this;

   this.headerFooterView = new HeaderFooterView();
   this.start = function(model, controller) {
      myModel = model;
      myController = controller;
   }
   this.update = function() {
      $('body').contents().remove();
      var state = myModel.getModelState();
      if (state.pagename) {//если есть название стр, то url надо менять
         location.hash = state.pagename;
      }
      switch (state.pagename) {
         case 'login':
            break;
         case 'faq':
            break;
         default:
            self.headerFooterView.start(myModel.headerFooterModel, myController.headerFooterController);
            break;
      }
   }
}
