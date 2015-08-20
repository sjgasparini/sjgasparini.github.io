@@ -0,0 +1,51 @@
$(document).ready(function(){
	//alert("The legal drinking age in the United States is 21.");	
	$(".nav a").click(function(e){

		e.preventDefault();
		goTo = $(this).attr("href")
		$("html, body").animate({

			scrollTop:$(goTo).offset().top - $(".nav").height()

		}, 1000)//end animate

	})//end nav a click

	total = 5
	current = 1


	$(".left").click(function(){
		if(current>1){
		$(".slider").animate({left:"+=500"},"300")
		current = current-1
		$(".slider2").animate({left:"+=200"},"300")
		}
			else if(current=1)
			{
			$(".slider").animate({left:"-=2000"}, 0)
			$(".slider2").animate({left:"-=800"}, 0)
			current = 5
			$(".slider").animate({left:"+=500"}, "300")
			$(".slider2").animate({left:"+=200"}, "300")
			}
	})//end left

	$(".right").click(function(){
		if(current<total){
		$(".slider").animate({left:"-=500"},"300")
		current = current+1
		$(".slider2").animate({left:"-=200"},"300")
		}
			else if(current=5)
			{
			$(".slider").animate({left:"+=2000"}, 0)
			$(".slider2").animate({left:"+=800"}, 0)
			current = 1
			$(".slider").animate({left:"-=500"}, "300")
			$(".slider2").animate({left:"-=200"}, "300")
			}
	})//end right

})//end doc ready
