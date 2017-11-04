$(document).ready(function () {
	$(".animateAbout").hide();
	
	
	$("#imagination").click(function() {
		$(".animateAbout").hide("slow");
		$("#aboutImagination").show("slow");
	})
	
	$("#technology").click(function() {
		$(".animateAbout").hide("slow");
		$("#aboutTechnology").show("slow");
	})
	
	$("#innocence").click(function() {
		$(".animateAbout").hide("slow");
		$("#aboutInnocence").show("slow");
	})
	
	
	
	$("#brand").click(function(){
	
	$(".lead").animate({
    fontSize: "2em",
  }, 1500 );
});
	
	$("#contactbtn").click(function(){

		alert("Thank you! We will reply as soon as possible");
	})
	
	var myDate =  new Date();
	var day = myDate.getDay();
	console.log(day);
	
	switch(day)
		{
			case 0:
				$(".specialPrice").css({"font-size":"120%"});
				$("#announcement").text("Today is Sunday. Special prices! :)");
				break;
			case 1:
					$(".noSpecialPrice").css({"font-size":"120%"});
				$("#announcement").text("Today is Monday. No special prices!");
				break;
			case 2:
				$(".noSpecialPrice").css({"font-size":"120%"});
				$("#announcement").text("Today is Tuesday. No special prices, but come back tomorrow!");
				break;
			case 3:
				$(".specialPrice").css({"font-size":"120%"});
				$("#announcement").text("Today is Wednesday. Special prices! :)");
				break;
			case 4:
				$(".noSpecialPrice").css({"font-size":"120%"});
				$("#announcement").text("Today is Thursday. No special prices!");
				break;
			case 5:
			$(".noSpecialPrice").css({"font-size":"120%"});
				$("#announcement").text("Yay! you made it to Friday. No special prices today but come back tomorrow!");
				break;
			case 6:
				$(".specialPrice").css({"font-size":"120%"});
				$("#announcement").text("Today is Saturday. Special prices! :)");
				break;
			default:
				$("#announcement").text("We have special prices on weekend and Wednesday.");
		}
	
	
})
	
