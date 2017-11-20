
<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->


var q;
var r;
var a = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"  
];
var a_outlook =[
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    -1,
    -1,
    -1,
    -1,
    -1,
];


$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
      magic8ball();
  });            
});  

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    shake.startWatch(magic8ball(),40);
}


function magic8ball(){
    var q = $('#questionText').val();
    r= random();
    navigator.notification.alert(a[r]);
    if(a_outlook[r]>0){
        //good
        navigator.notification.beep(1);
    }else if(a_outlook[r]<0){
        //bad
        navigator.vibrate(200);
    }else{
        //neutral
        navigator.notification.beep(1);
        navigator.vibrate(200);
    } 
}

function random(){
	return Math.floor(Math.random()*20);
}
