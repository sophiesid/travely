;(function($) {
	"use strict";
	var teamSlider = $('.ba-slider');
	teamSlider.slick({
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 500,
		slide: '.ba-slide',
		prevArrow: '.ba-arrows__prev',
		nextArrow: '.ba-arrows__next'
	});


	var fadeSlider = $('.ba-findout__slider');
	fadeSlider.slick({
		speed: 500,
		fade: true,
		prevArrow: '.ba-arrows__prev--second',
		nextArrow: '.ba-arrows__next--second',
		cssEase: 'linear'
	});


	function initMap() {

		var mapDiv = document.querySelector('.ba-map'),
		address = mapDiv.innerHTML;

		var roma = {
			lat: 41.902783,
			lng: 12.496366
		};

		var paris = {
			lat: 48.856614,
			lng: 2.352222
		};

		var madrid = {
			lat: 40.416775,
			lng: -3.703790
		};


		var baMap = new google.maps.Map(mapDiv, {
			zoom: 5,
			center: roma,
			disableDefaultUI: true,
			styles: [
			{
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#f5f5f5"
				}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#616161"
				}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
				{
					"color": "#f5f5f5"
				}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#bdbdbd"
				}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#eeeeee"
				}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#757575"
				}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#e5e5e5"
				}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#9e9e9e"
				}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#ffffff"
				}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#757575"
				}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#dadada"
				}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#616161"
				}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#9e9e9e"
				}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#e5e5e5"
				}
				]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#eeeeee"
				}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#c9c9c9"
				}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#9e9e9e"
				}
				]
			}
			]
		});

		var marker = new google.maps.Marker({
			position: paris,
			map: baMap,
			animation: google.maps.Animation.DROP,
			icon: 'img/marker.png'
		});

		var marker2 = new google.maps.Marker({
			position: madrid,
			map: baMap,
			animation: google.maps.Animation.DROP,
			icon: 'img/marker.png'
		});

		var marker3 = new google.maps.Marker({
			position: roma,
			map: baMap,
			animation: google.maps.Animation.DROP,
			icon: 'img/marker.png'
		});
	}

	window.onload = initMap;



	// Select all links with hashes
		$('a[href*="#"]')
		  // Remove links that don't actually link to anything
		  .not('[href="#"]')
		  .not('[href="#0"]')
		  .click(function(event) {
		    // On-page links
		    if (
		    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		    	&&
		    	location.hostname == this.hostname
		    	) {
		      // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		      // Does a scroll target exist?
		      if (target.length) {
		        // Only prevent default if animation is actually gonna happen
		        event.preventDefault();
		        $('html, body').animate({
		        	scrollTop: target.offset().top
		        }, 800, function() {
		          // Callback after animation
		          // Must change focus!
		          var $target = $(target);
		          $target.focus();
		          if ($target.is(":focus")) { // Checking if the target was focused
		          	return false;
		          } else {
		            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
		            $target.focus(); // Set focus again
		        }
		    });
		    }
		}
	});


})(jQuery);


