// JavaScript Document
(function($){
		$.fn.jqueryzoom = function(options){
		var settings = {
				xzoom: 436,//缩放宽度默认宽 度zoomed width default width
				yzoom: 436,//放大DIV默认宽度 zoomed div default width
				offset: 10,	//放大DIV默认偏移 zoomed div default offset
				position: "right",//缩放默认位置时，偏移位置是图像的右边 zoomed div default position,offset position is to the right of the image
				lens:1, //缩放镜头在图像上，默认情况下为1 zooming lens over the image,by default is 1;
				preload: 1
			};
			if(options) {
				$.extend(settings, options);
			}
		    var noalt='';
		    $(this).hover(function(){
				var imageLeft = this.offsetLeft;
				var imageRight = this.offsetRight;
				var imageTop =  $(this).get(0).offsetTop;
				var imageWidth = $(this).children('img').get(0).offsetWidth;
				var imageHeight = $(this).children('img').get(0).offsetHeight;
				noalt= $(this).children("img").attr("alt");
				var bigimage = $(this).children("img").attr("jqimg");
				$(this).children("img").attr("alt",'');
				if($("div.zoomdiv").get().length == 0){
					$(this).after("<div class='zoomdiv'><img class='bigimg' src='"+bigimage+"'/></div>");
					$(this).append("<div class='jqZoomPup'>&nbsp;</div>");
				}
		    if(settings.position == "right"){
            if(imageLeft + imageWidth + settings.offset + settings.xzoom > screen.width){
            leftpos = imageLeft  - settings.offset - settings.xzoom;
            }else{
		    leftpos = imageLeft + imageWidth + settings.offset;
            }
		    }else{
		    leftpos = imageLeft - settings.xzoom - settings.offset;
		    if(leftpos < 0){
            leftpos = imageLeft + imageWidth  + settings.offset;
		    }
		    }
		    $("div.zoomdiv").css({ top: imageTop,left: leftpos });
		    $("div.zoomdiv").width(settings.xzoom);
		    $("div.zoomdiv").height(settings.yzoom);
            $("div.zoomdiv").show();
            if(!settings.lens){
              $(this).css('cursor','crosshair');
			}
				   $(document.body).mousemove(function(e){
                   mouse = new MouseEvent(e);
                   /*$("div.jqZoomPup").hide();*/
				    var bigwidth = $(".bigimg").get(0).offsetWidth;
				    var bigheight = $(".bigimg").get(0).offsetHeight;
				    var scaley ='x';
				    var scalex= 'y';
				    if(isNaN(scalex)|isNaN(scaley)){
				    var scalex = (bigwidth/imageWidth);
				    var scaley = (bigheight/imageHeight);
				    $("div.jqZoomPup").width((settings.xzoom)/scalex );
		    		$("div.jqZoomPup").height((settings.yzoom)/scaley);
                    if(settings.lens){
                    $("div.jqZoomPup").css('visibility','visible');
					}
				   }

                    xpos = mouse.x - $("div.jqZoomPup").width()/2 - imageLeft;
                    ypos = mouse.y - $("div.jqZoomPup").height()/2 - imageTop ;
                    if(settings.lens){
                    xpos = (mouse.x - $("div.jqZoomPup").width()/2 < imageLeft ) ? 0 : (mouse.x + $("div.jqZoomPup").width()/2 > imageWidth + imageLeft ) ?  (imageWidth -$("div.jqZoomPup").width() -2)  : xpos;
					ypos = (mouse.y - $("div.jqZoomPup").height()/2 < imageTop ) ? 0 : (mouse.y + $("div.jqZoomPup").height()/2  > imageHeight + imageTop ) ?  (imageHeight - $("div.jqZoomPup").height() -2 ) : ypos;
                    }
                    if(settings.lens){
                    $("div.jqZoomPup").css({ top: ypos,left: xpos });
                    }

					scrolly = ypos;
					$("div.zoomdiv").get(0).scrollTop = scrolly * scaley;
					scrollx = xpos;
					$("div.zoomdiv").get(0).scrollLeft = (scrollx) * scalex ;
				    });
		    },function(){
               $(this).children("img").attr("alt",noalt);
		       $(document.body).unbind("mousemove");
		       if(settings.lens){
		       $("div.jqZoomPup").remove();
		       }
		       $("div.zoomdiv").remove();
		    });

        count = 0;
		if(settings.preload){
		$('body').append("<div style='display:none;' class='jqPreload"+count+"'>sdsdssdsd</div>");
		$(this).each(function(){
        var imagetopreload= $(this).children("img").attr("jqimg");
        var content = jQuery('div.jqPreload'+count+'').html();
        jQuery('div.jqPreload'+count+'').html(content+'<img src=\"'+imagetopreload+'\">');
		});
		}
		}
})(jQuery);

function MouseEvent(e) {
this.x = e.pageX
this.y = e.pageY
}
//鼠标经过预览图片函数
function preview(img){
	$("#preview .jqzoom img").attr("src",$(img).attr("src"));
	$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}

$(function(){
	//图片放大镜效果
	$(".jqzoom").jqueryzoom({xzoom:436,yzoom:436});
	//图片预览小图移动效果,页面加载时触发
	var tempLength = 0; //临时变量,当前移动的长度
	var viewNum = 5; //设置每次显示图片的个数量
	var moveNum = 2; //每次移动的数量
	var moveTime = 300; //移动速度,毫秒
	var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
	var scrollItems = $(".spec-scroll .items ul li"); //移动容器里的集合
	var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
	var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度
	//鼠标经过放大效果的小图片
	$(".spec-scroll .items ul li:first").addClass("bor2sod000");
	$(".spec-scroll .items ul li").hover(function(){
		$(this).addClass("bor2sod000").siblings().removeClass("bor2sod000");
	});
	//调用下面  详细页产品介绍、用户评价、购买、服务、切换JS
	xxSwitch(".xxListData",".goodsThe li");
	
	
	
	
	
});
//详细页选中商品、数量、类型JS
function speciColour( xz ){
	if( $("#xzXg"+xz).hasClass("tb-selected") ){
		$("#xzXg"+xz).removeClass("tb-selected");	
	}else{
		$("#xzXg"+xz).addClass("tb-selected").siblings("li").removeClass("tb-selected");
	}
}

//详细页产品加减JS
var maxNum = 999;//最大数字限制
function boutton(type,id){
   if(type==1){
		//减
		var v = $("#digital"+id).val();
		v = parseInt(v);
		if( true === isNaN(v) ){
			alert("数量有误");
			return false;
		}
		if( v <= 1 ){
			return false;
		}
		if( v === 1 ){
			return false;
		}
		v--;
		$("#digital"+id).val(v);
		if( v === 1 ){
			//this.disabled = "true";//添加disabled属性
			$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
		}
		if( v < maxNum ){
			$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
		}
	}else{
		    //加
			var v = $("#digital"+id).val();
			v = parseInt(v);
			if( true === isNaN(v) ){
				alert("数量有误");
				return false;
			}
			if( v > maxNum ){
				return false;
			}
			v++;
			$("#digital"+id).val(v);
			if( v > 1 ){
				$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
			}
			if( v === maxNum ){
				$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
			}
	}
}
//详细页产品加减当产品值为空、或者直接输入0时JS
function xiaoJiFen(id){
	var name = $("#digital"+id).val();
	if( name.length==0 ){
		$("#digital"+id).val(1);
	}
	var v = $("#digital"+id).val();//产品数量
		v = parseInt(v);
	if( v === 0 ){
		$("#digital"+id).val(1);
		$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
	}
	if( v === 1 ){
		$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
	}
	if( v > 1 ){
		$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
	}
	if( v < maxNum ){
		$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
	}
	if( v === maxNum ){
		$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
	}
}
//详细页产品介绍、用户评价、购买、服务、切换JS
function xxSwitch(obj,objTab){
	$(obj).first().show();
	$(objTab).first().addClass("xxCurrent");
	$(objTab).click(function(){
		$(this).addClass("xxCurrent").siblings().removeClass("xxCurrent");
		var name=$(this).attr("name");
		if($(obj).has(name)){
			$(obj).hide();
			$(obj+"."+name).show();	
		};
	});
};














//请选择类型、属性JS
/*function joinRu(){
	if( $("#tb-thumbA li").hasClass("tb-selected")==false ){
		$("#leiXingP_b").show();
		$("#leiXingP_c").hide();
		$(".cartGwc").attr("href","javascript:void(0)");
	}else if( $("#tb-thumbB li").hasClass("tb-selected")==false ){
		$("#leiXingP_c").show();
		$("#leiXingP_b").hide();
		$(".orderDg").attr("href","javascript:void(0)");
	}else{
		$("#leiXingP_b").hide();
		$("#leiXingP_c").hide();
		$(".cartGwc").attr("href","#");
		$(".orderDg").attr("href","#");	
	}
}
*/












