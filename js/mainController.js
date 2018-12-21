//MainController
function MainController() {
   var mainView;
   var mainModel;
   var self = this;
   self.headerFooterController = new HeaderFooterController();
   window.onhashchange = function() {
      var URLHash=window.location.hash;
      var stateStr=URLHash.substr(1);//обрезаем # в uri
      if ( stateStr!="" ) { // если закладка непустая, читаем из неё состояние и отображаем
         var parts=stateStr.split("_");
         if (parts[0] != mainModel.getModelState().pagename) {
            switch (parts[0]) {
               case 'login':
                  break;
               case 'faq':
                  break;
            }
         }
      }
      else {
         self.index(); // иначе показываем страницу route
      }
   }


   this.start = function(model, view) {
      mainModel = model;
      mainView = view;
   }
   this.index = function() {
      mainModel.headerFooterModel.start(mainView.headerFooterView);
      mainModel.setModelState({});//чтобы при первой загрузке стр к index.html не добавлялось название закладки
   }
}
