package Code {
	
	import flash.display.MovieClip;
	
	import flash.display.MovieClip;
	import com.greensock.*;
	import com.greensock.loading.*;
	import com.greensock.events.*;
	import com.greensock.plugins.*;
	
	
	public class Page extends MovieClip {
		
		private var loading:Loading=new Loading();
		private var videoArea:MovieClip=new MovieClip();
		private var queue:LoaderMax ;
		public function Page() {
			// constructor code
			
			
			
			queue = new LoaderMax({name:"mainQueue",onComplete:completeHandler,onError:errorHandler,requireWithRoot:this,onProgress:progressHandler});
			queue.append( new SWFLoader('vedio.swf',{name:"inner_flash",container:videoArea}));
			
			queue.load();
			
			this.addChild(loading);
			
		}
		
		
		//事件
		function progressHandler(event:LoaderEvent):void
		{
			var pre:int = Math.abs(event.target.progress * 100);
			ShowLoading(pre);
		}
		//加载栏目完成
		function completeHandler(event:LoaderEvent):void
		{
			
			
		}
		
		private function ShowLoading(pre):void{
			trace(pre);
			loading.Per=pre;
		}
		
		function errorHandler(event:LoaderEvent):void
		{
			//trace("error occured with " + event.target + ": " + event.text);
		}
	}
	
}
