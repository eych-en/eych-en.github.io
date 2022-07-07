
const part1 = function() {
	$('#part1Error').addClass('d-none');
	$('#part1Success').addClass('d-none');
	$.ajax({
		url: "https://goodmorning-axa-dev.azure-api.net/register",
		method: "POST",
		data: {
			"Name": $('#part1Name').val(),
			"Email": $('#part1Email').val(),
			"Mobile": "0" + $('#part1Mobile').val(),
			"PositionApplied": $('#part1PositionApplied').val(),
			"Source": $('#part1Source').val(),
		},
		contentType: "application/json",
	}).done(function(d,s,x) {
		$('#part1Success').removeClass('d-none');
		$('#part1Success').html(d);
		console.log(d);
	}).fail(function(x,s,e) {
		$('#part1Error').removeClass('d-none');
		console.log(s);
	});
}

const validateMobile = function(obj) {
	obj.val(obj.val().replace(/[^0-9]/g, ''));
}

$(document).on("scroll", function(){
	if
		($(document).scrollTop() > 86){
		$("#banner").addClass("shrink");
	}
	else
	{
		$("#banner").removeClass("shrink");
	}
});

/*
$.ajax({
  url: "test.html",
	method: "POST",
	data: [],
	contentType: "application/json",
}).done(function(d,s,x) {
  
}).fail(function(x,s,e) {
  
}).always(function(d,s,x) {
  
});
*/
