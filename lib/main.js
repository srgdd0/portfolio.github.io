$(document).ready(function(){
    $('.header').height($(window).height());
});

$(document).ready(function(){
	//$('.header').height($(window).height()); //100%vh
		
	$(".navbar a").click(function(e){
		e.preventDefault();
		
		let navigationHeight = $(".navbar").innerHeight();
		let body = $("html, body");
		
		body.animate({
			scrollTop: $("#" + $(this).data('value')).offset().top - navigationHeight
		}, 1000);
	})


	//randomizer
	let parent = $("#randomizer");
	let minField = parent.find("input#min");
	let maxField = parent.find("input#max");
	let btn = parent.find(".btn");
	let result = parent.find("#result");

	

	btn.on("click", function() {
		let  minValue = parseInt(minField.val()) || 1;
		let  maxValue = parseInt(maxField.val()) || 100;
		
		result.html(getRandomInt(minValue, maxValue));
	});

	function getRandomInt(min, max) {
		return Math.floor(min + (Math.random() * (max + 1 - min)));
	}
})
*