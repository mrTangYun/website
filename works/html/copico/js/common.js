var Copico = {};

// 页面浮动
Copico.floatCopico = function(){
  var aFloat = [];
  jQuery(".floatCopico").each(function(index, el) {
     var sTransform = jQuery(this)[0].style.transform;
     var patt1=new RegExp(/translate\((-?\d+)px[^\d-]+(-?\d+)px\)/g);
     var _a = patt1.exec(sTransform);
     if (_a === null){

     }
     else{
        var x = _a[1],
            y = _a[2],
            r = Math.random()+.1;
        var _a = [jQuery(this),x,y,r];
        aFloat.push(_a);
        //console.log(jQuery(this));
     }
  });

  //console.log(aFloat);
  var WIDTH = jQuery(window).outerWidth(),
      HEIGHT = jQuery(window).outerHeight();

  jQuery(window).resize(function(event) {
     /* Act on the event */
     WIDTH = jQuery(this).outerWidth();
     HEIGHT = jQuery(this).outerHeight();
  });
  jQuery(window).mousemove(function(event) {
     /* Act on the event */
     //console.log(event.screenX,event.screenY);
     //console.log(WIDTH);
     var rx = (event.screenX - WIDTH/2) / (WIDTH/2),
         ry = (event.screenY - HEIGHT/2) / (HEIGHT/2);
     //console.log(rx,ry);    
     for (var i = 0; i < aFloat.length; i++) {
        var elem = aFloat[i][0],
            sCss = elem[0].style.transform,
            nx = aFloat[i][1]*1 + -10*rx*aFloat[i][3],
            ny = aFloat[i][2]*1 + -10*ry*aFloat[i][3];
        //console.log(nx,ny);
        //console.log(sCss.replace(/translate\([^)]+\)/g,"translate("+nx+"px, "+ny+"px)"));
        elem[0].style.transform = sCss.replace(/translate\([^)]+\)/g,"translate("+nx+"px, "+ny+"px)");
     };

  });
};

Copico.bindEvent = function(sym){
  sym.$("top-potatochips")[0].addEventListener('click',function(){
    window.open("potatochips.html", "_self");
  },false);
  sym.$("top-crisp")[0].addEventListener('click',function(){
    window.open("crisp.html", "_self");
  },false);
  sym.$("top-biscuit")[0].addEventListener('click',function(){
    window.open("biscuit.html", "_self");
  },false);
  sym.$("top-frenchfries")[0].addEventListener('click',function(){
    window.open("frenchfries.html", "_self");
  },false);
  sym.$("top-chain")[0].addEventListener('click',function(){
    window.open("chain.html", "_self");
  },false);
  sym.$("top-logo")[0].addEventListener('click',function(){
    window.open("index.html", "_self");
  },false);
  sym.$("top-potatochips").addClass('pointer aMenu');
  sym.$("top-crisp").addClass('pointer aMenu');
  sym.$("top-biscuit").addClass('pointer aMenu');
  sym.$("top-frenchfries").addClass('pointer aMenu');
  sym.$("top-chain").addClass('pointer aMenu');
  sym.$("top-logo").addClass('pointer aMenu');
  sym.$("top-homepage").addClass('pointer');

  if (sym.$("top-homepage")[0]){
    sym.$("top-homepage")[0].addEventListener('mouseenter',function(){
      sym.getSymbol("top-homepage").play();
    },false);
    sym.$("top-homepage")[0].addEventListener('mouseleave',function(){
      sym.getSymbol("top-homepage").playReverse();
    },false);
    sym.$("top-homepage")[0].addEventListener('click',function(){
      window.open("homepage.html", "_self");
    },false);
  }
  
  /*
   mouseenter 
 mouseleave 
 */

};

//首页
Copico.homePageReady= function(sym){
  this.bindEvent(sym);
};

//产品页
Copico.productPageReady = function(sym){
  this.bindEvent(sym);

  sym.$("TextContent").html(jQuery("#content").html());
  sym.$("products").html(jQuery("#Data-products").html());

  var swiper = new Swiper('.swiper-container', {
      //pagination: '.swiper-pagination',
      slidesPerView: 3,

      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      //paginationClickable: true,
      spaceBetween: 0
   });  


  if (jQuery("#DataColobox a").length > 0 ){
    jQuery("#DataColobox a").colorbox({maxWidth:"100%",maxHeight:"90%",rel:'group3', current:""});

    //jQuery(sym.$("btn-cpmlcx")[0]).addClass('pointer').attr("href",jQuery("#Data-menu").attr("href")).colorbox({loop:false,maxWidth:"100%",maxHeight:"90%",rel:'group1', current:""});
  }
  jQuery(".swiper-container .swiper-slide img").click(function(){
    jQuery("#DataColobox a").eq(0).click();
  });
  jQuery(sym.$("btn-cpmlcx")[0]).addClass('pointer').click(function(){
    jQuery("#DataColobox a").eq(0).click();
  });
  //jQuery(".swiper-container .swiper-slide img").colorbox({maxWidth:"100%",maxHeight:"90%",rel:'group2', current:""});
  
 
    
};

//产业链
Copico.chainPageReady = function(sym){
  this.bindEvent(sym);

  function bindData(index,$elem){
    sym.$("videoTitle-"+index).html($elem.attr("data-title"));
    sym.$("videoContent-"+index).html($elem.html());
    //绑定图片
    if ($elem.attr("data-img") && $elem.attr("data-img") != ""){
      sym.$("videoImg-"+index).html("<img src='"+$elem.attr("data-img")+"' width='100%' height='100%'/>");    
    }

    var mp4 = jQuery("#Data-videos").attr("data-mp4"),
        webm = jQuery("#Data-videos").attr("data-webm");

    jQuery(sym.$("line")[0]).addClass('pointer').click(function(){
        jQuery("#popVideo").show();
        Player.src([
          { type: "video/mp4", src: mp4 },
          { type: "video/webm", src: webm }
        ]);
        Player.on("canplay",function(){
            Player.play();
        });
    });
  }
  bindData(0,jQuery("#Data-videos .item").eq(0));
  bindData(1,jQuery("#Data-videos .item").eq(1));
  bindData(2,jQuery("#Data-videos .item").eq(2));

  var Player = videojs("popWorkWindowVideo");
  jQuery("#popVideo .close").click(function(){
    Player.pause();
    jQuery("#popVideo").hide();
  });

};