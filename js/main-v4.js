/*=== rotate plus-cross ===*/
	
	$(".plus").click(function(){
	    $(this).toggleClass("rotate2");
	    var parent = $(this).parent();
	  	var parentParent = $(parent).parent();
	  	var mapInfo = $(parentParent).find('.infoCon');
	  	var nameAni = $(parentParent).find('.placeNameL');
	  	
	  	
	  	if ( 	$('.infoCon').hasClass("active") ) {
					$('.infoCon').not(this).each(function() {
						$(this).slideUp().removeClass('active');
						console.log('slideUP')
						
							mapInfo.slideToggle('2000',"swing", function () {
							console.log('slideToggle1')
								mapInfo.addClass('active');
								console.log('addclass')
					})	
							});
		
			    

		} else {
			console.log('else')
	
			mapInfo.slideToggle('2000',"swing", function () {
		    	mapInfo.addClass('active');
		    })	  
			
		}
		
		
		
		





		if ( $('.plus').hasClass("rotate2") ) {
	
			$('.plus').not(this).each(function(){
	         $(this).removeClass("rotate2");
	
	         });
	     };
		     
		    
	
					  
		  	
	});

/*=== rotate compas on mouse move mapInfo.toggleClass('active', $(this).is(':visible')); ===*/	

	var img = $('.compas');
if(img.length > 0){
    var offset = img.offset();
    function mouse(evt){
        var center_x = (offset.left) + (img.width()/2);
        var center_y = (offset.top) + (img.height()/2);
        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (20 / Math.PI) * -2) +10; 
        img.css('-moz-transform', 'rotate('+degree+'deg)');
        img.css('-webkit-transform', 'rotate('+degree+'deg)');
        img.css('-o-transform', 'rotate('+degree+'deg)');
        img.css('-ms-transform', 'rotate('+degree+'deg)');
    }
    $(document).mousemove(mouse);
}


$(window).mouseleave(function() {
	
	var degree = 0; 
	$(".compas").css('-webkit-transform', 'rotate('+degree+'deg)'),
					('-moz-transform', 'rotate('+degree+'deg)'),
					('-o-transform', 'rotate('+degree+'deg)'),
					('-ms-transform', 'rotate('+degree+'deg)') ;	
});








