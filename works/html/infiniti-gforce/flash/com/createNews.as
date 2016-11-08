package com {

	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.display.Shape;
	import flash.events.MouseEvent;
	import flash.geom.Rectangle;
	import flash.events.Event;
	import flash.net.URLRequest;
	import flash.net.URLLoader;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import flash.text.TextFieldAutoSize;
	import com.ScrollerShapeSprite;
	
	import caurina.transitions.Tweener;

	public class createNews extends MovieClip {

		private var pro            :TextField;
		private var pro_fmt        :TextFormat;
		private var protoplam_item :int;
		private var holderMC:Sprite;
		
		private var promaske       :Sprite;
		private var promaskeWidth  :Number;
		private var promaskeHeight :Number;
		
		private var prochild       :Shape;
		private var probgColor     :uint;
		private var slide          :Number = 0;
		private var slideSpeed     :Number = 4;
		
		private var prokututu      :MovieClip;
		private var proLoader      :URLLoader = new URLLoader();
		private var proXML         :XML = new XML();
		private var datam          :XML;
		//private var btnDown:downArrow_btn =  new downArrow_btn;
		//private var btnUp:upArrow_btn = new upArrow_btn;
		private var locationX      :Number;
		private var locationY      :Number;
		private var xmlString      :String;

		//private var scrollerShape  :ScrollerShapeSprite = new ScrollerShapeSprite();
		private var scrollerShape  :Shape=new Shape();
		private var scroller       :MovieClip = new MovieClip();
		private var trackerDistance:Number;
		private var tempY          :Number = 0;
		
		private var txtColor         :uint;
		private var tFont          :String;
		private var tFontSize      :Number;
		
		private var SColor         :uint;
		private var tColor         :uint;
		private var tBarColor      :uint;


		public function createNews(_x:Number,_y:Number,_xmlString:String, _promaskeWidth:Number, _promaskeHeight:Number,_txtColor:uint,
								   _tFont:String,_tFontSize:Number,_SColor:uint,_tColor:uint,_tBarColor:uint):void {
			
			txtColor         = _txtColor;
			tFont          = _tFont;
			tFontSize      = _tFontSize;
			tColor         = _tColor;
			tBarColor      = _tBarColor;
			
			SColor         = _SColor;
			promaskeWidth  = _promaskeWidth;
			promaskeHeight = _promaskeHeight;
			locationX      = _x;
			locationY      = _y;
			xmlString      = _xmlString;

			proLoader.addEventListener(Event.COMPLETE, proxmlLoaded);
			proLoader.load(new URLRequest(xmlString));


		}
		private function proxmlLoaded(event:Event):void {

			proXML = new XML(event.target.data);

			protoplam_item = proXML.news.length();

			this.proolustur(protoplam_item, proXML);
			//trace(protoplam_item);

		}

		private function proolustur2(protoplam_item:int,_datam:XML) {
			datam = _datam;
			holderMC = new Sprite();
			this.addChild(holderMC);
			
			
			scrollerShape.graphics.beginFill(tColor);
			scrollerShape.graphics.drawRect(0,0,17,5);
			scrollerShape.graphics.endFill();
			

			holderMC.x = locationX;
			holderMC.y = locationY;

			/*holderMC.addChild(btnUp);
			holderMC.addChild(btnDown);
			btnUp.x = btnDown.x = 220;
			btnUp.y = 10;
			btnDown.y = 200;*/

			promaske = new Sprite();
			promaske.graphics.beginFill(0xFF0000);
			promaske.graphics.drawRect(0, 0, promaskeWidth, promaskeHeight);

			holderMC.addChild(promaske);
			prokututu = new MovieClip();
			holderMC.addChild(prokututu);
		
			for (var i:int =0; i<protoplam_item; i++) {

				pro            = new TextField();
				pro.width      = promaske.width - 9;
				pro.multiline  = true;
				pro.wordWrap   = true;
				pro.selectable = false;
				pro.autoSize   = TextFieldAutoSize.LEFT;


				//font2 =new Font2();
				pro_fmt               = new TextFormat();
				pro_fmt.font          = tFont;
				pro_fmt.size          = tFontSize;
				pro_fmt.color         = txtColor;
				pro.defaultTextFormat = pro_fmt;

				pro.x = 0;

				var nameString:String =(datam.news.@Place[i]).substr(0) + "\n" +
				(datam.news.@Date[i]).substr(0) + "\n" +
				(datam.news.@Time[i]).substr(0) + "\n" +
				(datam.news.@Ticket[i]).substr(0)+ "\n" +
				 "\n";

				nameString = nameString.substr(0,nameString.length);

				pro.htmlText =  nameString ;

				prokututu.addChild(pro);
				
				pro.y  = tempY;
				tempY += pro.textHeight;
				
				
				
				for (var j:int = 0; j < pro.width; j++) {

				var seperator:Shape = new Shape();
				seperator.graphics.beginFill(SColor);
				seperator.graphics.drawRect(0,0,1.8,1.8);
				seperator.graphics.endFill();
				
				seperator.x = j*3;
				prokututu.addChild(seperator);
				seperator.y = tempY - 5;

				}
				
			}
			trackerDistance  = 14;
			prokututu.mask   = promaske;
			holderMC.addChild(scroller);
			scroller.addChild(scrollerShape);
			scroller.x = promaske.width + trackerDistance;
			scroller.y = 0;
			scroller.buttonMode = true;


			for (i = 0; i < promaske.height-240; i++) {
				var tracker:Shape = new Shape();
				tracker.graphics.beginFill(tBarColor);
				tracker.graphics.drawRect(promaske.width + trackerDistance + 6,-5,2.6,2.6);
				tracker.graphics.endFill();
				holderMC.addChild(tracker);
				tracker.y = i*3.4;

			}
			scroller.addEventListener(MouseEvent.MOUSE_DOWN,dragStart);
			/*btnDown.addEventListener(MouseEvent.MOUSE_DOWN, godown);
			stage.addEventListener(MouseEvent.MOUSE_UP, stopSlideDown);
			btnUp.addEventListener(MouseEvent.MOUSE_DOWN, goUp);
			stage.addEventListener(MouseEvent.MOUSE_UP, stopSlideUp);*/
			stage.addEventListener(MouseEvent.MOUSE_WHEEL, MouseScroll);
			
			
		}

		private function proolustur(protoplam_item:int,_datam:XML) {
			
			datam = _datam;
			holderMC = new Sprite();
			this.addChild(holderMC);
			
			
			//滚动条按钮
			scrollerShape.x=5;
			
			scrollerShape.graphics.beginFill(tColor);
			scrollerShape.graphics.drawRect(0,0,17,5);
			scrollerShape.graphics.endFill();
			

			holderMC.x = locationX;
			holderMC.y = locationY;

			/*holderMC.addChild(btnUp);
			holderMC.addChild(btnDown);
			btnUp.x = btnDown.x = 220;
			btnUp.y = 10;
			btnDown.y = 200;*/

			promaske = new Sprite();
			promaske.graphics.beginFill(0xFF0000);
			promaske.graphics.drawRect(0, 0, promaskeWidth, promaskeHeight);

			holderMC.addChild(promaske);
			prokututu = new MovieClip();
			holderMC.addChild(prokututu);
		
			for (var i:int =0; i<protoplam_item; i++) {

				pro            = new TextField();
				pro.width      = promaske.width - 9;
				pro.multiline  = true;
				pro.wordWrap   = true;
				pro.selectable = false;
				pro.autoSize   = TextFieldAutoSize.LEFT;


				//font2 =new Font2();
				pro_fmt               = new TextFormat();
				pro_fmt.font          = tFont;
				pro_fmt.size          = tFontSize;
				pro_fmt.color         = txtColor;
				pro.defaultTextFormat = pro_fmt;

				pro.x = 0;

				var nameString:String =(datam.news.@Place[i]).substr(0) + "\n" +
				(datam.news.@Date[i]).substr(0) + "\n" +
				(datam.news.@Time[i]).substr(0) + "\n" +
				(datam.news.@Ticket[i]).substr(0)+ "\n" +
				 "\n";

				nameString = nameString.substr(0,nameString.length);

				pro.htmlText =  nameString ;

				prokututu.addChild(pro);
				
				pro.y  = tempY;
				tempY += pro.textHeight;
				
				
				
				for (var j:int = 0; j < pro.width; j++) {

				var seperator:Shape = new Shape();
				seperator.graphics.beginFill(SColor);
				seperator.graphics.drawRect(0,0,1.8,1.8);
				seperator.graphics.endFill();
				
				seperator.x = j*3;
				prokututu.addChild(seperator);
				seperator.y = tempY - 5;

				}
				
			}
			trackerDistance  = 14;
			prokututu.mask   = promaske;
			holderMC.addChild(scroller);
			scroller.addChild(scrollerShape);
			scroller.x = promaske.width + trackerDistance;
			scroller.y = 0;
			scroller.buttonMode = true;


			for (i = 0; i < promaske.height-240; i++) {
				var tracker:Shape = new Shape();
				tracker.graphics.beginFill(tBarColor);
				tracker.graphics.drawRect(promaske.width + trackerDistance + 6,-5,2.6,2.6);
				tracker.graphics.endFill();
				holderMC.addChild(tracker);
				tracker.y = i*3.4;

			}
			scroller.addEventListener(MouseEvent.MOUSE_DOWN,dragStart);
			/*btnDown.addEventListener(MouseEvent.MOUSE_DOWN, godown);
			stage.addEventListener(MouseEvent.MOUSE_UP, stopSlideDown);
			btnUp.addEventListener(MouseEvent.MOUSE_DOWN, goUp);
			stage.addEventListener(MouseEvent.MOUSE_UP, stopSlideUp);*/
			stage.addEventListener(MouseEvent.MOUSE_WHEEL, MouseScroll);
		}
		//////////////////////////////////////////////////SLIDER EVENT////////////////////////////////////////////////////
		private function dragStart(event:MouseEvent):void {
			var dragRect:Rectangle = new Rectangle(promaske.width + trackerDistance, 0, 0, promaske.height-event.target.height);
			event.target.addEventListener(Event.ENTER_FRAME,scrollContent);
			event.target.startDrag(false,dragRect);
			stage.addEventListener(MouseEvent.MOUSE_UP,dragStop);

		}
		private function dragStop(event:MouseEvent):void {

			scroller.stopDrag();
			stage.removeEventListener(MouseEvent.MOUSE_UP,dragStop);
			scroller.removeEventListener(Event.ENTER_FRAME,scrollContent);

		}
		private function scrollContent(event:Event):void {
			scrollContentLiar();
		}
		private function scrollContentLiar():void {
			var scrollPercent:Number = Math.ceil(100 * ((scroller.y)/(promaske.height-scroller.height)));
			Tweener.addTween(prokututu, {y:-(scrollPercent * prokututu.height)/(100), time:1});
		}
		////////////////////////////////MOUSE SCROLLING/////////////////////////////////////////////////////////////////
		private function MouseScroll(event:MouseEvent):void {
			if (scroller.y > promaske.height-3*scroller.height) {
				scroller.y = promaske.height-3*scroller.height;
			}
			if (event.delta < 0) {
				if (scroller.y < ((scroller.y + promaske.height)-scroller.height)) {
					scroller.y -= (event.delta*3);
					if (scroller.y > ((scroller.y+ promaske.height)-scroller.height)) {
						scroller.y = (scroller.y+ promaske.height)-scroller.height;
					}
					scrollContentLiar();
				}
			} else {
				if (scroller.y > 0) {
					scroller.y -= (event.delta*3);
					if (scroller.y < 0) {
						scroller.y = 0;
					}
					scrollContentLiar();
				}
			}
		}
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		/*private function godown(event:MouseEvent):void {
		
		event.target.addEventListener(Event.ENTER_FRAME, TimerHandlerDown);
		
		
		}
		private function TimerHandlerDown(event:Event):void {
		
		
		if (prokututu.y>-1 * (prokututu.height-pro.height)) {
		slide -= slideSpeed;
		prokututu.y =  slide;
		}
		}
		private function goUp(event:MouseEvent):void {
		event.target.addEventListener(Event.ENTER_FRAME, TimerHandlerUp);
		
		}
		private function TimerHandlerUp(event:Event):void {
		
		if (prokututu.y<0) {
		slide += slideSpeed;
		prokututu.y =  slide;
		}
		}
		private function stopSlideDown(event:MouseEvent):void {
		
		btnDown.removeEventListener(Event.ENTER_FRAME, TimerHandlerDown);
		
		}
		private function stopSlideUp(event:MouseEvent):void {
		
		btnUp.removeEventListener(Event.ENTER_FRAME, TimerHandlerUp);
		}*/




	}

}