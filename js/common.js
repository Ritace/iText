//hover
$( document ).ready(function() {
	$('.gnavi ul li a').each(function(){
		$(this).hover(function(){
				$(this).addClass('won');
			},function(){
				$(this).removeClass('won');
		});
	});
	
	url_path = location.href;
	url_list = url_path.split("/");
	if( url_list[url_list.length-1] == ''){
		url_list[url_list.length-1] = "index.html";
	}
	//alert(url_path);
	$('.gnavi li').each(function(){
		var h = $('a',this).attr("href");
		if( url_list[3].match(h) ){
			$(this).addClass('now');
			$("a",this).addClass('now');
		}		
		$(this).hover(function(){
			$(this).addClass('now');
		},function(){
			var h = $('a',this).attr("href");
			if( url_list[3].match(h) == null ){
				$(this).removeClass('now');
			}
		});
	});
	// プロダクトのサブメニュー
	if( (url_list[3] == 'products') || (url_list[3] == 'casestudy') ){
		$('.product_detail_nav li , .box_clm2 li').each(function(){
			var h = $('a',this).attr("href");
			if( url_path.match(h) ){
				$(this).addClass('navon');
			}
		});
	}
	// カンパニーのサブメニュー
	if( url_list[3] == 'company'){
		$('.box_pagenav_detail a').each(function(){
			var h = $(this).attr("href");
			var h = h.split("/");
			if( h[h.length-1] == ''){
				h[h.length-1] = "index.html";
			}
			if( h[2] == url_list[4]){
				$(this).addClass('navon');
			}
		});
	}
	
});