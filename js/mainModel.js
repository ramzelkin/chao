//MainModel
function MainModel() {
   var myView;
   var modelState = {};
   this.headerFooterModel = new HeaderFooterModel();
   this.start=function(view) {
      myView=view;
   }

   this.setModelState = function(state) {
      modelState = state;
      myView.update();
   }

   this.getModelState = function() {
      return modelState;
   }
}
