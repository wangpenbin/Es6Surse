// JavaScript Document
$(function(){
	//登录页输入账户、密码
	$(".loginNum input,.loginPass input").focus(function(){
		  $(this).css("background-color","#FDF6C8");
		  $(this).siblings("p").show();
		  
	}).blur(function(){
		 if ($(this).val() == '') {
			$(this).css("background-color","#FDF6C8"); 
			$(this).siblings("p").show();
		 }
		 if ($(this).val() != '') {
			$(this).css("background-color","#FFF"); 
			$(this).siblings("p").hide();
		 }
	});	
});

function subform(obj){
	//用户名
	if( obj.email.value === "" ){
		$("#email_p").show();
		return false;
	}else{
		$("#email_p").hide();	
	}
	//密码
	if( obj.pass.value === "" ){
		$("#pass_p").show();
		return false;
	}else{
		$("#pass_p").hide();	
	}
	return true;
}
	
	
	
	
	
		














