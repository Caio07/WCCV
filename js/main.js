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


/* Active state on menu and fade */

// Cache selectors
var lastId,
    topMenu = $("#navbar"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    }),
    noScrollAction = false;

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    noScrollAction = true;
    menuItems
        .parent().removeClass("active")
        .end().filter("[href=" + href +"]").parent().addClass("active");
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    },{
        duration: 1000,
        complete: function() {
            setTimeout(function(){ noScrollAction = false; }, 10);
        }
    });
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   if(!noScrollAction){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
       }
   }    
});