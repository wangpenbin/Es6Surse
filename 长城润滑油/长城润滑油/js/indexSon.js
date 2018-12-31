// JavaScript Document
$(function(){
	//$(".channelMall li:last").css("border-bottom","solid 1px #4084C1");
	$(".channelMall li:last").css("border-bottom","solid 1px #EC404C");
	//图片移动效果
	var rank_move_time  = 300;//偏移时速
	var rank_move_range = 13;
	$(".hover_moving_img").hover(
		function(){
			$(this).stop().animate({"marginLeft":-rank_move_range},rank_move_time);
		},
		function(){
			$(this).stop().animate({"marginLeft":0},rank_move_time);
		}
	);



	
});











	
	
	
		














