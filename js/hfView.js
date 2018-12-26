//header & footer View
function HeaderFooterView() {
   var self = this;
   var myModel = null;
   var myController = null;
   self.enter;

   this.start = function(model, controller) {
     myModel = model;
     myController = controller;
     drawHeaderFooter();
     self.enter = $('#enter')[0];
  }
   function drawHeaderFooter() {
      $('body').append(`
         <header id="header">
            <ul id="headerMenu">
               <li>FAQ</li>
               <li id="enter">Вход</li>
            </ul>
         </header>
         `);
 }
}
