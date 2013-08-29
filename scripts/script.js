$(document).ready(function() {
	$("#gallery li img").hover(function(){
		$('#main-img').attr('src',$(this).attr('src'));
	});
});