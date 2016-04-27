('use strict')

$(function(){
	// leaveAComment();
	var val_for_not_reajaxing = false;
	$('#load_post, .section_main .post_link > a').on('click', function(e){
		e.preventDefault();
		if (val_for_not_reajaxing) return;
		$('.section_1, .response, .section_2, #load_post').animate({opacity: 0}, 600);
		setTimeout(leaveAComment, 650);
		val_for_not_reajaxing = true;
	})
})



function leaveAComment(){
	var sectionPost = document.createElement('div');
	sectionPost.classList.add('load_section');
	document.getElementsByClassName('section_main')[0].appendChild(sectionPost);
	var otherPost = document.createElement('div');
	otherPost.classList.add('load_article');
	document.getElementsByTagName('article')[0].appendChild(otherPost);
	$('.load_section').load('mainAjax.html', function(){
		$('.section_1, .response, .section_2').hide();
	});
	$('.load_article').load('otherAjax.html');
}