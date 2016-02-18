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