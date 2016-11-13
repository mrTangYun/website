/** Event handler for mouse wheel event.

		 *鼠标滚动事件

		 */

		var wheel = function(event) {

			var delta = 0;

			if (!event) /* For IE. */

				event = window.event;

			if (event.wheelDelta) { /* IE/Opera. */

				delta = event.wheelDelta / 120;

			} else if (event.detail) {

				/** Mozilla case. */

				/** In Mozilla, sign of delta is different than in IE.

				 * Also, delta is multiple of 3.

				 */

				delta = -event.detail / 3;

			}

			/** If delta is nonzero, handle it.

			 * Basically, delta is now positive if wheel was scrolled up,

			 * and negative, if wheel was scrolled down.

			 */

			if (delta)

				handle(delta);

			/** Prevent default actions caused by mouse wheel.

			 * That might be ugly, but we handle scrolls somehow

			 * anyway, so don't bother here..

			 */

			if (event.preventDefault)

				event.preventDefault();

			event.returnValue = false;

		}



		/** Initialization code. 

		 * If you use your own event management code, change it as required.

		 */

		if (window.addEventListener) {

			/** DOMMouseScroll is for mozilla. */

			window.addEventListener('DOMMouseScroll', wheel, false);

		}

		/** IE/Opera. */

		window.onmousewheel = document.onmousewheel = wheel;



		/** This is high-level function.

		 * It must react to delta being more/less than zero.

		 */

		var handle = function(delta) {

			//var random_num = Math.floor((Math.random() * 100) + 50);

			navclick(delta);

            

		}

		

		

		var tempx = 0;
		var maxmenunav = 4;
		var Sensitivity = 2;
		var allowwheel = 0;

	var navclick = function(down){
		    //$(document).attr("title","vv:"+tempx+" allow:"+allowwheel);
			if (allowwheel ==0) return;

			++tempx;
			
			
			if (tempx>Sensitivity)	{
               
			   tempx = 0;
			   if (down<0){
			       navindex++;
			       if (navindex>maxmenunav) navindex=maxmenunav;}
			   else {
			    	navindex--;
			       if (navindex<0) navindex=0;}	
             
		
                window.location.hash = "#section"+ (navindex+1);
			    $('ul.nav a').eq(navindex).click();
			     $('ul.nav a img').stop(true);
			    $('ul.nav a img').eq(navindex).animate({right:'0px'},300);

			     for(var i=0; i<=maxmenunav; i++)
				    {  if (i!=navindex) $('ul.nav a img').eq(i).animate({right:'-68px'},300);	}

			   }
			}

		

