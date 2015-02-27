$(document).ready(function(){
	
	var timer;

	createPad(16);

	hoverPad();

	$("button").click(function(){
		$("#grid").empty();
		var padsize = prompt("New pad pixels?");
		createPad(padsize);
		hoverPad();
	});
});

function createPad(px){

	var upgrade = px * 20

	$grid = $("#grid");

	$grid.css("height", px).css("width", px).css("background-color", "#E3E3E3");

	for (i = 0; i < px; i++)
	{
		$grid.append("<div></div>");
	}

	$("#grid > div").addClass("column");

	$(".column").css("width", 1).css("height", px).css("float", "left")

	for (j = 0; j < px; j++)
	{
		$("#grid > div").append("<div></div>");
	}

	$(".column > div").addClass("pad");
}

function hoverPad(){

	$(".column > div").hover(
		
		function(){
			$(this).css("background-color", "#2E54FF")
		},
		
		function(){
			var self = $(this)
			timer = setTimeout(function(){
				$(self).css("background-color", "#E3E3E3");
			}, 10000);
		}
	);
}