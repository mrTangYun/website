/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         
         yepnope({
                     nope:["css/colorbox.css","js/jquery-1.8.2.min.js","js/dist/js/swiper.js","js/jquery.colorbox-min.js","js/common.js"],
         				complete:function(){
         					Copico.productPageReady(sym);
         
         				}
         			});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1695, function(sym, e) {
         // insert code here
         Copico.floatCopico();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-logo}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         sym.getSymbol("top-logo").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-logo}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.getSymbol("top-logo").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-chain}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.getSymbol("top-chain").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-chain}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         sym.getSymbol("top-chain").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-potatochips}", "mouseleave", function(sym, e) {
         sym.getSymbol("top-potatochips").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-potatochips}", "mouseenter", function(sym, e) {
         sym.getSymbol("top-potatochips").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-crisp}", "mouseleave", function(sym, e) {
         sym.getSymbol("top-crisp").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-crisp}", "mouseenter", function(sym, e) {
         sym.getSymbol("top-crisp").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-biscuit}", "mouseleave", function(sym, e) {
         sym.getSymbol("top-biscuit").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-biscuit}", "mouseenter", function(sym, e) {
         sym.getSymbol("top-biscuit").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-frenchfries}", "mouseleave", function(sym, e) {
         sym.getSymbol("top-frenchfries").playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top-frenchfries}", "mouseenter", function(sym, e) {
         sym.getSymbol("top-frenchfries").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'top-logo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("top-logo");
   //Edge symbol end:'top-logo'

   //=========================================================
   
   //Edge symbol: 'top-chain'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("top-chain");
   //Edge symbol end:'top-chain'

   //=========================================================
   
   //Edge symbol: 'top-frenchfries'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("top-frenchfries");
   //Edge symbol end:'top-frenchfries'

   //=========================================================
   
   //Edge symbol: 'top-biscuit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("top-biscuit");
   //Edge symbol end:'top-biscuit'

   //=========================================================
   
   //Edge symbol: 'top-crisp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("top-crisp");
   //Edge symbol end:'top-crisp'

   //=========================================================
   
   //Edge symbol: 'top-potatochips'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("top-potatochips");
   //Edge symbol end:'top-potatochips'

   //=========================================================
   
   //Edge symbol: 'top-homepage'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("top-homepage");
   //Edge symbol end:'top-homepage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1751196");