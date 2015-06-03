$.fn.simpleAccordion = function(){
	this.each(function(){
		var accordion = this;
		$("> dd:not('dt.active + dd')", accordion).hide();
		$("> dt", accordion).click(function(){
			if($("+ dd", this).css("display") == "none"){
				$("> dd", accordion).slideUp("fast");
				$("> dt.active", accordion).removeClass("active");
				$(this).addClass("active").next("dd").slideDown("fast");
			}
		});
	});
	return this;
}