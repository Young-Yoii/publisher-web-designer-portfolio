$(function(){
	$(".board li").click(function(){
		$(this).children("div").slideToggle();
	});
});

$(function(){
	$(".ao1").click(function(){
		$(".modal1").fadeIn(); 
	});
	$(".m_content").click(function(){
		$(".modal1").fadeOut(); 
	});
	$(".ao2").click(function(){
		$(".modal2").fadeIn();
	});
		$(".m2_content").click(function(){
		$(".modal2").fadeOut();
	});
	$(".ao3").click(function(){
		$(".modal3").fadeIn();
	});
		$(".m3_content").click(function(){
		$(".modal3").fadeOut();
	});
});


