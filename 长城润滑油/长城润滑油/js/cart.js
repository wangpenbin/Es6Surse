// JavaScript Document
//购物车加减JS
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
			$('#but_decr'+id).css({"color":"#E9E9E9","cursor":"default"});//减、改变灰色
		}
		if( v < maxNum ){
			$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
			$('#but_incr'+id).css({"color":"#C91735","cursor":"pointer"});//加、添加高亮颜色
		}
		//所选商品总额
		var xj = parseInt($("#digital_j"+id).html());//商品单价
		$("#digital_x"+id).html(xj*v);//商品总金额
		if( $("#xZ"+id).is(":checked") ){
			var totalNum = parseInt( $(".totalNum").html() );//所选商品总额	
			totalNum = totalNum - xj ;//已选商品总额
			$(".totalNum").html(totalNum)	
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
				$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属
				$('#but_decr'+id).css({"color":"#C91735","cursor":"pointer"});//减、添加高亮颜色性
			}
			if( v < maxNum){
				$('#but_incr'+id).removeAttr("disabled");//减、移除disabled属
				$('#but_incr'+id).css({"color":"#C91735","cursor":"pointer"});//减、添加高亮颜色性	
			}
			if( v === maxNum ){
				$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
				$('#but_incr'+id).css({"color":"#E9E9E9","cursor":"default"});//加、改变灰色
			}
			//所选商品总额
			var xj = parseInt($("#digital_j"+id).html());//商品单价
			$("#digital_x"+id).html(xj*v);//商品总金额
			if( $("#xZ"+id).is(":checked") ){
				var totalNum = parseInt( $(".totalNum").html() );//所选商品总额	
				totalNum = totalNum + xj ;//已选商品总额
				$(".totalNum").html(totalNum)	
			}
			
			
	}
}
//购物车产品加减当产品值为空、或者直接输入0时JS
function xiaoJiFen(id){
	var name = $("#digital"+id).val();
	if( name.length==0 ){
		$("#digital"+id).val(1);
	}
	var v = $("#digital"+id).val();//产品数量
		v = parseInt(v);
	if( v === 0 ){
		alert("产品数量为0,删除商品");
		$("#digital"+id).val(1);
		$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
		$('#but_decr'+id).css({"color":"#E9E9E9","cursor":"default"});//减、改变灰色
		$("#cartTr"+id).remove();
		//已选商品数量
		$(".electNum").text( 0 );
		$("input[name='items']:checked").each(function(){ 
			if( $(this).is(":checked") ){
				var $tmp=$('[name=items]:checkbox').length;
				$(".electNum").text( $tmp );
			}else{
				$(".electNum").text( 0 );
			}
		});
		//所选商品总额
		var soloTotal;
		var totalNum='0';
		$("input[name='items']:checked").each(function(){ 
			var xid=$(this).val();
			soloTotal = parseInt( $("#digital_x"+xid).html() );//单个商品总额
			totalNum=parseInt(totalNum)+soloTotal;
			$(".totalNum").html(totalNum);	
			//已选商品数量
			var $tmp=$('[name=items]:checkbox').length;
			$(".electNum").text( $tmp );
		});
		
	}
	if( v === 1 ){
		$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
		$('#but_decr'+id).css({"color":"#E9E9E9","cursor":"default"});//减、改变灰色
	}
	if( v > 1 ){
		$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
		$('#but_decr'+id).css({"color":"#C91735","cursor":"pointer"});//减、添加高亮颜色	
	}
	if( v < maxNum ){
		$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
		$('#but_incr'+id).css({"color":"#C91735","cursor":"pointer"});//加、添加高亮颜色
	}
	if( v === maxNum ){
		$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
		$('#but_incr'+id).css({"color":"#E9E9E9","cursor":"default"});//加、改变灰色
	}
		/*
		var tv = $("#digital"+id).val();
		//alert(tv);
		var spDj = parseInt( $("#digital_j"+id).html() );//单价
		var bbb = $("#digital_x"+id).html();//原始小计 
		$("#digital_x"+id).html( tv*spDj );
		var ccc = parseInt($(".totalNum").html());//原始总积分
		var ddd = ccc-bbb;
		//ddd+tv*spDj
		$(".totalNum").html(ddd+tv*spDj)
		
		*/
		
		
		//商品小计
		var spDj = parseInt( $("#digital_j"+id).html() );//单价
		$("#digital_x"+id).html( v*spDj );
		
		//所选商品总积分
		$(".totalNum").html(0);
		$("[name=items]:checked").each(function(){
		   var bj = $(this).val();
		   
		   var totalNum = parseInt( $(".totalNum").html() );//所选商品总额	
		   var soloTotal = parseInt( $("#digital_x"+bj).html() );//单个商品总额
		   if( this.checked === true ){
				totalNum = totalNum + soloTotal ;//已选商品总额
				$(".totalNum").html(totalNum)	
			}
        });


}
//清空购物车JS
function emptyQk(){
	$("#sectPx").remove();
	$(".cartTable").remove();		
}
//删除单一商品
function delSc( de ){
	$("#cartTr"+de).remove();
	//所选商品总额
	var soloTotal;
	var totalNum='0';
	$("input[name='items']:checked").each(function(){ 
		var xid=$(this).val();
		soloTotal = parseInt( $("#digital_x"+xid).html() );//单个商品总额
		totalNum=parseInt(totalNum)+soloTotal;
		$(".totalNum").html(totalNum);	
		//已选商品数量
		var $tmp=$('[name=items]:checkbox').length;
		$(".electNum").text( $tmp );
    });
	if($("input[name='items']:checked").length==0){
		$(".electNum").text(0);
		$(".totalNum").html(0)
	}
}
//全选、删除选择商品
function outDe(){
	$("input[name='items']:checked").each(function(){
		var xid=$(this).val();
		if( this.checked === true ){
			$("#cartTr"+xid).remove();
		}
		//所选商品总额
		var soloTotal;
		var totalNum='0';
		soloTotal = parseInt( $("#digital_x"+xid).html() );//单个商品总额
		totalNum=parseInt(totalNum)+soloTotal;
		$(".totalNum").html(totalNum);	
		//已选商品数量
		var $tmp=$('[name=items]:checkbox').length;
		$(".electNum").text( $tmp );
		if($("input[name='items']:checked").length==0){
			$(".electNum").text(0);
			$(".totalNum").html(0)
		}
	});	
}

$(function(){
	//购物车判断商品数量、加、减是否可点击
	$(".cc_digital").each(function(){
		var v=$(this).val();
		var id=$(this).attr('title');
		if( v ==1 ){
			$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
			$('#but_decr'+id).css({"color":"#E9E9E9","cursor":"default"});//减、改变灰色
			$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
			$('#but_incr'+id).css({"color":"#C91735","cursor":"pointer"});//加、添加高亮颜色
		}
		else if(v < maxNum&&v>1){
			$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
			$('#but_decr'+id).css({"color":"#C91735","cursor":"pointer"});//减、添加高亮颜色
			$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
			$('#but_incr'+id).css({"color":"#C91735","cursor":"pointer"});//加、添加高亮颜色
		}
		else{
			$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
			$('#but_decr'+id).css({"color":"#C91735","cursor":"pointer"});//减、添加高亮颜色
			$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
			$('#but_incr'+id).css({"color":"#E9E9E9","cursor":"pointer"});//加、添加灰色
		}
	});	
	
	//全选
     $(".selectQx_inp").click(function(){
		 //所有checkbox跟着全选的checkbox走。
		$("[name=items]:checkbox").attr("checked", this.checked );
		//商品选中商品数量显示
		var $tmp=$("[name=items]:checkbox").length;
		if( $("[name=items]:checkbox").is(":checked") ){
			$(".electNum").text( $tmp );
		}else{
			$(".electNum").text( 0 );
		}
		//计算已选商品价JS
		$(".totalNum").html(0);
		$("[name=items]:checkbox").each(function(){
		   var bj = $(this).val();
		   if( $(this).is(":checked") ){
				$("#cartTr"+bj).addClass("backgroundF7E5C6");
				
				var soloTotal = parseInt( $("#digital_x"+bj).html() );//单个商品总额
				var totalNum = parseInt( $(".totalNum").html() );//所选商品总额
				totalNum = totalNum + soloTotal ;//已选商品总额
				$(".totalNum").html(totalNum)
			}else{
				$("#cartTr"+bj).removeClass("backgroundF7E5C6");
				$(".totalNum").html(0);
			}
        });
		
	 });
	 $("[name=items]:checkbox").click(function(){
		 //定义一个临时变量，避免重复使用同一个选择器选择页面中的元素
		var $tmp=$("[name=items]:checkbox");
		//用filter方法筛选出选中的复选框。并直接给CheckedAll赋值
		$(".selectQx_inp").attr("checked",$tmp.length==$tmp.filter(":checked").length);
		//已选商品数量
		var num = $(".electNum").text();
		if( this.checked === true ){
			num++;
		}else{
			num--;
		}
		if( num < 0 ){
			return false;
		}
		$(".electNum").text( num );
		//已选商品总额
		$(this).each(function(){
		   var bj = $(this).val();
		   var totalNum = parseInt( $(".totalNum").html() );//所选商品总额	
		   var soloTotal = parseInt( $("#digital_x"+bj).html() );//单个商品总额
		   if( this.checked === true ){
				$("#cartTr"+bj).addClass("backgroundF7E5C6");
				totalNum = totalNum + soloTotal ;//已选商品总额
				$(".totalNum").html(totalNum)	
			}else{
				$("#cartTr"+bj).removeClass("backgroundF7E5C6");
				totalNum = totalNum - soloTotal ;//已选商品总额
				$(".totalNum").html(totalNum)
			}
        });
	 });
	 
});







