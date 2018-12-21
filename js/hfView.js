//header & footer View
function HeaderFooterView() {
   var self = this;
   var myModel = null;
   var myController = null;

   this.start = function(model, controller) {
     myModel = model;
     myController = controller;
     drawHeaderFooter();
  }
   function drawHeaderFooter() {
      $('body').append(`
         <header id="header">
            <ul id="headerMenu">
               <li>FAQ</li>
               <li>Вход</li>
            </ul>
         </header>
         `);
 }
}
