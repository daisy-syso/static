$(document).ready(function(){
	/*病状点击*/
	$("#BingZhuang ul li").click(function(){
		
		if ($(this).is(".change"))
		{
			$(this).removeClass("change")
			$(this).find(".box").slideUp(300)	
			return false;
		}
		$("#BingZhuang").find(".box").slideUp(0);
		$(this).parent().find("li.change").removeClass("change")
		$(this).addClass("change")
		
		$(this).find(".box").slideDown(300)	
		
	})
	
	
	
	$(".SearchTab li").click(function(){
		var value=$(this).attr("data-value");
		$(this).parent().find(".change").removeClass("change");
		$(this).addClass("change")
		$("#searchtype").val(value)
		
	})
})