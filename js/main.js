/* Mapa */

function init_map(){
	var myOptions = {
		zoom:10,
		center:new google.maps.LatLng(1.1577917,30.734995000000026),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false
		};
		map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
		marker = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(1.1577917,30.734995000000026)
		});
		
		

		google.maps.event.addListener(marker, 'click',

		function(){
			infowindow.open(map,marker);
		});
			infowindow.open(map,marker);
		}



		google.maps.event.addDomListener(window, 'load', init_map);

/* Our Team */

var main = function() {

  
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-profile');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.profile').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-profile');
    nextSlide.fadeIn(600).addClass('active-profile');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-profile');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.profile').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-profile');
    prevSlide.fadeIn(600).addClass('active-profile');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

}

$(document).ready(main);