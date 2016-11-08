$(function(){
	var msIE = false;
	var RR1,RR2,RR3,RR4;
	if(true){
		msIE=true;
		$("#touched").html("").css({left:620,top:250});
		var R = Raphael("touched", 400, 400);
		var l = 200,t=196;
		if($.browser.msie){
			l = 200;
			t=196;
		}
		RR1 = R.circle(l, t, 40).attr({"stroke": "#00a6dd", "stroke-width": 1});
		RR2 = R.circle(l, t, 40).attr({"stroke": "#00a6dd", "stroke-width": 1});
		RR3 = R.circle(l, t, 40).attr({"stroke": "#00a6dd", "stroke-width": 1});
		//RR4 = R.circle(l, t, 40).attr({"stroke": "#00a6dd", "stroke-width": 1});
	}
	var ripple=(function(d,m){
			var E=new Image,c,B=30,v,u,i,q,k=15,p,C,g,t,A=[],l=[],a,r,o,y,h=true,j=false,D,e=document.createElement("canvas"),x;
			function z(){
				v=E.width;
				u=E.height;
				i=v>>1;
				q=u>>1;
				t=v*(u+2)*2;
				e.width=v;
				e.height=u;
				p=v;
				C=v*(u+3);
				x=e.getContext("2d");
				m.appendChild(e);
				x.drawImage(E,0,0,v,u);
				for(var F=0;F<t;F++){
					l[F]=A[F]=0
				}
				o=x.getImageData(0,0,v,u);
				y=o.data;
				a=x.getImageData(0,0,v,u);
				r=a.data;
				f()
			}
			function w(){
				if(D){
					clearInterval(D)
				}
			}
			function f(){
				w();
				D=setInterval(n,B)
			}
			function n(){
				if(j){
					b(v,u);
					x.putImageData(a,0,0)
				}
			}
			function s(H,F){
				H<<=0;
				F<<=0;
				j=true;
				for(var I=F-k;I<F+k;I++){
					for(var G=H-k;G<H+k;G++){
						A[p+(I*v)+G]+=512
					}
				}
			}
			function b(){
				var Q,U,T,W,V,Y,I;
				Q=p;
				p=C;
				C=Q;
				Q=0;
				g=p;
				var G=v,X=u,H=A,P=g,J=C,N=l,F=a.data,S=o.data,O=i,K=q,R=false;
				for(var L=0;L<X;L++){
					for(var M=0;M<G;M++){
						W=(H[P-G]+H[P+G]+H[P-1]+H[P+1])>>1;
						W-=H[J+Q];
						W-=W>>5;
						H[J+Q]=W;
						W=1024-W;
						I=N[Q];
						N[Q]=W;
						if(I!=W){
							R=true;
							U=(((M-O)*W/1024)<<0)+O;
							T=(((L-K)*W/1024)<<0)+K;
							if(U>=G){
								U=G-1
							}
							if(U<0){
								U=0
							}
							if(T>=X){
								T=X-1
							}
							if(T<0){
								T=0
							}
							Y=(U+(T*G))*4;
							V=Q*4;
							F[V]=S[Y];
							F[V+1]=S[Y+1];
							F[V+2]=S[Y+2]
						}
						++P;
						++Q
					}
				}
				g=P;
				j=R
			}
			E.onload=z;
			E.src=d;
			return{
				start:f,stop:w,disturb:s
			}
});
		
	if(window.canvas){
		var y = ripple("content/images/ultrabook_market_screen.jpg",document.getElementById("screen"));
	}

	var touchTime = setInterval(function(){
		$(".idle .ripple").removeClass("anim");
		setTimeout(function(){
			$(".idle .ripple").eq(1).addClass("anim");
			setTimeout(function(){
				$(".idle .ripple").eq(2).addClass("anim");
				setTimeout(function(){
					$(".idle .ripple").eq(3).addClass("anim");
					setTimeout(function(){
						$(".idle .ripple").eq(0).addClass("anim");
					},500);
				},500);
			},500);
		},500);
	},3000);
	
	$(".stage_3_press").click(function(){
		location.hash="#vps=ssc:nav";
		if(msIE){
				RR1.animate({r:"980"},2000);
				setTimeout(function(){
					RR2.animate({r:"980"},2000);
				},300);
				setTimeout(function(){
					RR3.animate({r:"980"},2000,function(){
						RR1.attr({"r":40});
						RR2.attr({"r":40});
						RR3.attr({"r":40});	
					});
				},600);
				/*
				setTimeout(function(){
					RR4.animate({r:"980"},2000,function(){
						
						RR4.attr({"r":40});
					});
				},900);
				*/
		}
		setTimeout(function(){
			var I=4;
			for(var H=0;H<I;H++){
				if(window.canvas){
					y.disturb(100,90)
				}
				
			}
			setTimeout(function(){
				for(var J=0;J<I;J++){
					if(window.canvas){
						y.disturb(100,90)
					}
					
				}
			}
			,1500)
		}
		,500);
		$(".stage_3_press_tishi").show();
		$(".touched .ripple,.touchedmid .ripple,.touchedsml .ripple").removeClass("anim");
		
		setTimeout(function(){
			$(".touched .ripple").eq(1).addClass("anim");
			$(".touchedmid .ripple").eq(1).addClass("anim");
			$(".touchedsml .ripple").eq(1).addClass("anim");
			setTimeout(function(){
				$(".touched .ripple").eq(2).addClass("anim");
				$(".touchedmid .ripple").eq(2).addClass("anim");
				$(".touchedsml .ripple").eq(2).addClass("anim");
				setTimeout(function(){
					$(".touched .ripple").eq(3).addClass("anim");
					$(".touchedmid .ripple").eq(3).addClass("anim");
					$(".touchedsml .ripple").eq(3).addClass("anim");
					setTimeout(function(){
						$(".touched .ripple").eq(4).addClass("anim");
						$(".touchedmid .ripple").eq(4).addClass("anim");
						$(".touchedsml .ripple").eq(4).addClass("anim");
						$(".stage_3_press_tishi").hide();
					},300);
				},300);
			},300);
		},300);
		$(".touched .ripple").eq(0).addClass("anim");
		$(".touchedsml .ripple").eq(0).addClass("anim");
		$(".touchedmid .ripple").eq(0).addClass("anim");
		
	});	
});