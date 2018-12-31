// JavaScript Document

$(function(){
	//收货地址管理现有地址下边框
	$(".merParty:last").css("border-bottom","none 0");
	//收货管理页设为默认地址
	$(".merPartyB_mr").click(function(){
		var inpv = $(this).val();
		var thisIe = $(this).text();
		$(".merParty").removeClass("merParty_col");	
		$("#xianYouhuodz"+inpv).addClass("merParty_col");
	});
	//收货管理删除用户地址
	$(".sctyB_a").click(function(){
		var inpv = $(this).attr("name");
		$("#xianYouhuodz"+inpv).remove();	
	});
	//新增地址JS
	//修改收货地址
	$("#xingMin_k").blur(function(){
		if( $("#xingMin_k").val()=="" ){
			$("#kongYi").show();
			$("#save_botton").attr("disabled","disabled");
		}else{
			$("#kongYi").hide();	
			$("#save_botton").attr("disabled",false);
		}	
	});
	//街道地址
	$("#jieDaodz").blur(function(){
		var dz = $("#jieDaodz").val();
		dzleng = dz.length;
		if( dz==""|| dzleng<3 ){
			$("#kongSan").show();
			$("#save_botton").attr("disabled","disabled");
			return false;	
		}else{
			$("#kongSan").hide();
			$("#save_botton").attr("disabled",false);
		}	
	});
	//手机
	$("#dzShouji").blur(function(){
		//手机正则
		var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
		var sj_v = $("#dzShouji").val();
		//固话正则
		var gh_a = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ ; 
		var gh_v = $("#guDingdhua").val();
		if( sj_v.length!=11||!sj_v.match(sj_a) ){
			$("#kongSi").show();//alert("输入错误");
			$("#save_botton").attr("disabled","disabled");
		}else{
			$("#kongSi").hide();//alert("正确");
			$("#save_botton").attr("disabled",false);
		}
		if( gh_v.match(gh_a) ){
			$("#kongSi").hide();
		}
	});
	//固定电话
	$("#guDingdhua").blur(function(){
		//手机正则
		var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
		var sj_v = $("#dzShouji").val();
		//固话正则
		var gh_a = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ ; 
		var gh_v = $("#guDingdhua").val();
		if( !gh_v.match(gh_a) ){
			$("#kongSi").show();
			$("#save_botton").attr("disabled","disabled");
		}else{
			$("#kongSi").hide();
			$("#save_botton").attr("disabled",false);
		}
		if( sj_v.length==11&&sj_v.match(sj_a) ){
			$("#kongSi").hide();
		}
	});
	
	
	
	
});
//收货地址管理提交
function souHuoform(){
	//收货人姓名
	if( $("#xingMin_k").val()=="" ){
		$("#kongYi").show();
		return false;
	}
	//街道地址
	var dz = $("#jieDaodz").val();
	dzleng = dz.length;
	if( dz==""|| dzleng<3 ){
		$("#kongSan").show();
		return false;	
	}
	//邮政编码
	if( $("#youZegbm").val()=="" || $("#youZegbm").val().length<6 ){
		$("#kongJiu").show();
		return false;	
	}
	//手机正则
	var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
	var sj_v = $("#dzShouji").val();
	//固话正则
	var gh_a = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ ; 
	var gh_v = $("#guDingdhua").val();
	//手机
	if( sj_v.length!=11||!sj_v.match(sj_a) ){
		if( !gh_v.match(gh_a) ){
			$("#kongSi").show();
			return false;
		}
	}
	//固定电话
	if( !gh_v.match(gh_a) ){
		if( sj_v.length!=11||!sj_v.match(sj_a) ){
			$("#kongSi").show();
			return false;	
		}
	}
	//地区
	if( $(".selectH_a").children("option:selected").text()=="请选择" ){
		$("#kongEr").show();
		$(".addressModify_div").show();

		return false;	
	}
	if( $(".selectH_b").children("option:selected").text()=="请选择" ){
		$("#kongEr").show();
		$(".addressModify_div").show();

		return false;	
	}
	if( $(".selectH_c").children("option:selected").text()=="请选择" ){
		$("#kongEr").show();
		$(".addressModify_div").show();
		return false;	
	}	
	return true;
}


//新增收货地址
function cancelDd(){
	$("#cc_blackBg").show();
	$("#bianJixingz").show();
}
//点击关闭
function quxiao_spanGb(){
	$("#cc_blackBg").hide();
	$("#bianJixingz").hide();
}


