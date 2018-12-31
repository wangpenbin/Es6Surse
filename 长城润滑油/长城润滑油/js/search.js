// JavaScript Document
$(function(){	
	//输入关键字
	$(".searchDiv_form_L").focus(function(){
		  if($(this).val() ==this.defaultValue){  
			  $(this).val("").css("color","#333");           
		  } 
	}).blur(function(){
		 if ($(this).val() == '') {
			$(this).val(this.defaultValue).css("color","#717371");
		 }
	});	
	
	
});





