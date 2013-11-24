$(function(){
	
	$("#accordion").accordion({
		headings: "h2",
		content: "p",
		callback: function(){
			alert("changed");
		},
		duration:10000


	});

});