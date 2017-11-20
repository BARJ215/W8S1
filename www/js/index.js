//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
	
	//set up listener for button click
	$(document).on('click', getPosition);
	
	//change time box to show message
	$('#time').val("Press the button to get location data");
    
    navigator.geolocation.watchPosition(successPosition,failPosition);
	
});


//Call this function when you want to get the current position
function getPosition() {
	
	//change time box to show updated message
	$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
	navigator.geolocation.getCurrentPosition(successPosition, failPosition);
}


//called when the position is successfully determined
function successPosition(position) {
	
	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	var unixTime = new Date(position.timestamp);
    var date = unixTime.toDateString();
	var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var acc = position.coords.accuracy;
    var alt = position.coords.altitude;
    var altAcc = position.coords.altitudeAccuracy;
    var head = position.coords.heading;
    var speed = position.coords.speed;
    
    
	
	//OK. Now we want to update the display with the correct values
	$('#time').val("Recieved data at " + date);
	$('#lattext').val(latitude);
    $('#longtext').val(longitude);
    $('#accText').val(acc);
    $('#altText').val(alt);
    $('#altAccText').val(altAcc);
    $('#headText').val(head);
    $('#speed').val(speed);
    
	
}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
	
}