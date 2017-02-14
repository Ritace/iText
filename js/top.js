$( document ).ready(function() {
	
	$("#bottom_link #pagetop").css("position","fixed").css("left","1053.5px").css("top","575px");
	$(window).scroll(function (event) {
    	var scroll = $(window).scrollTop();
    	console.log("scroll",scroll);

    	// console.log($('html')[0].scrollHeight -window.innerHeight - 475 );
		if (scroll < ($('html')[0].scrollHeight- window.innerHeight - 475)  ){
			console.log("aaa");
			$("#bottom_link #pagetop").css("position","fixed").css('-webkit-transform','translateZ(0)');
		}
		else{
			$("#bottom_link #pagetop").css("position","static").css('-webkit-transform','translateZ(0)');
		}
	});
});