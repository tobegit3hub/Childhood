/*
 *@Author </> Team
 *Date 25/05/2012
 */
 
 
$(function() {
	
	//change the dot
	$('#header_dot').hover(function() {
		$('#header_dot span').css('background','white');
	},
	function(){
		$('#header_dot span').css('background','none');
	});
	
	$('#before_sixties_dot').hover(function() {
		$('#before_sixties_dot span').css('background','white');
	},
	function(){
		$('#before_sixties_dot span').css('background','none');
	});
	
	$('#sixties_dot').hover(function() {
		$('#sixties_dot span').css('background','white');
	},
	function(){
		$('#sixties_dot span').css('background','none');
	});
	
	$('#seventies_dot').hover(function() {
		$('#seventies_dot span').css('background','white');
	},
	function(){
		$('#seventies_dot span').css('background','none');
	});
	
	$('#eighties_dot').hover(function() {
		$('#eighties_dot span').css('background','white');
	},
	function(){
		$('#eighties_dot span').css('background','none');
	});
	
	$('#nineties_first_half_dot').hover(function() {
		$('#nineties_first_half_dot span').css('background','white');
	},
	function(){
		$('#nineties_first_half_dot span').css('background','none');
	});
	
	$('#nineties_last_half_dot').hover(function() {
		$('#nineties_last_half_dot span').css('background','white');
	},
	function(){
		$('#nineties_last_half_dot span').css('background','none');
	});
	
	$('#millennium_dot').hover(function() {
		$('#millennium_dot span').css('background','white');
	},
	function(){
		$('#millennium_dot span').css('background','none');
	});
	
	$('#footer_dot').hover(function() {
		$('#footer_dot span').css('background','white');
	},
	function(){
		$('#footer_dot span').css('background','none');
	});
	
	
	
	
	//Scroll to the click ID
	$('#header_dot').click(function() {
		$.scrollTo('header',2500);
	});
	
	$('#before_sixties_dot').click(function() {
		$.scrollTo('#before_sixties',2500);
	});
	
	$('#sixties_dot').click(function() {
		$.scrollTo('#sixties',2500);
	});
	
	$('#seventies_dot').click(function() {
		$.scrollTo('#seventies',2500);
	});
	
	$('#eighties_dot').click(function() {
		$.scrollTo('#eighties',2500);
	});
	
	$('#nineties_first_half_dot').click(function() {
		$.scrollTo('#nineties_first_half',2500);
	});
	
	$('#nineties_last_half_dot').click(function() {
		$.scrollTo('#nineties_last_half',2500);
	});
	
	$('#millennium_dot').click(function() {
		$.scrollTo('#millennium',2500);
	});
	
	$('#footer_dot').click(function() {
		$.scrollTo('footer',2500);
	});
});



//Timeline current
window.onscroll = function() {
	var scroll_top = 0
	var body_top = (document.documentElement.scrollHeight > document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.clientHeight;
	var screen_top = document.getElementById("timeline").offsetHeight

	if(document.documentElement.scrollTop) {
		scroll_top = document.documentElement.scrollTop
	}
	else if(document.body.scrollTop) {
		scroll_top = document.body.scrollTop
	}
	
	var top_percent = (scroll_top / body_top) * screen_top
	
	document.getElementById("current_line").style.marginTop = top_percent + "px";

	if(scroll_top > 100) {
		$(".hint").stop().animate({opacity: '0'},800);
	}
	else {
		$(".hint").stop().animate({opacity: '1'},800);
	}
}


$(document).ready(function(){
	
	//Image
	$("#web_title").hide().fadeIn(5000);
	
	$('.cartoon ul li img').mouseover(function(){
		$(this).stop().animate({opacity: '1'},800);
	});
	$('.cartoon ul li img').mouseout(function(){
		$(this).stop().animate({opacity: '0.90'},800);
	});
	
	$('.cartoon ul li a img').mouseover(function(){
		$(this).stop().animate({opacity: '0.90'},800);
	});
	$('.cartoon ul li a img').mouseout(function(){
		$(this).stop().animate({opacity: '0.60'},800);
	});


//Timeline
	$('#timeline').mouseover(function(){
		$('#timeline').stop().animate({opacity: '0.70'},1000);
	});
	$('#timeline').mouseout(function(){
		$('#timeline').stop().animate({opacity: '0.25'},1000);
	});
});
