//step 1: initialize map configuration
function initMap() {
//step 2: us JS navigator to log user coordinates	
  navigator.geolocation.getCurrentPosition(function(position) {
//create object to store lat/long data  
		var monkLocation = {
			lat: 40.8054491,
			lng: -73.9654415
	}; 
//step 3: instantiate the google.maps.Map constructor
	var map = new google.maps.Map(document.getElementById('map'), {
     //configure map with options object
	center: monkLocation,
  	zoom: 10,
    scrollwheel: false
		});	
//step 4: use google.maps.Marker constructor to create a marker      
	var marker = new google.maps.Marker({
		position: monkLocation,
		map: map,
		title: "Monk's Cafe"
    });    
  });
}

initMap();
