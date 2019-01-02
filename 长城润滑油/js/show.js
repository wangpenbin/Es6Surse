// JavaScript Document
$(function(){
	//首页鼠标经过商城频道
	$(".pingDao").hover(
		function(){
			$(".channelMall").css("display","block");
		},
		function(){
			$(".channelMall").css("display","none");	
		}
	);	
});
