$(document).ready(function(){

	$(".readmore").click(function(){
		$("#show-this-on-click").slideDown();
		$(".readless").show();
		return false;
	});


	$(".readless").click(function(){
		$("#show-this-on-click").slideUp();
		$(".readless").hide();
		$(".readmore").show();
		return false;
	
	});

	(".readmoreagain").click(function(){
		$("#show-this-on-clicktoo").slideDown();
		$(".readlesstoo").show();
		return false;
	});


	$(".readlesstoo").click(function(){
		$("#show-this-on-clicktoo").slideUp();
		$(".readlesstoo").hide();
		$(".readmoreagain").show();
		return false;
	
	});


	});