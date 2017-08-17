var canvas = document.getElementById('clock');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;
function ToRad(degrees){
	var deg = Math.PI /180;
	return degrees*deg;
}

function renderClock(){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var today = date.toDateString();
	var time = date.toLocaleTimeString();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var newMinutes = minutes + seconds/60;
	var milliSeconds = date.getMilliseconds();
	var newSeconds = seconds + milliSeconds/1000;
	var newHour = hour + minutes/60;
//BACKGROUND
	var gradient = ctx.createRadialGradient(250,250,5,250,250,300);
	gradient.addColorStop(0,'#09303a');
	gradient.addColorStop(1,'black');
	ctx.beginPath();
	ctx.fillStyle = gradient;
	ctx.fillRect(0,0,w,h);	

//SETTINGS
	ctx.shadowBlur = 28;
	ctx.shadowColor = "#28d1fa";
	ctx.lineWidth = 17;

//CLOCK	
	ctx.beginPath();
	ctx.strokeStyle = "#28d1fa";
	ctx.arc(250,250,200,ToRad(270),ToRad(newHour*15*2 - 90));
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "#000000"
	ctx.arc(250,250,200,ToRad(270),ToRad(newHour*15*2 - 90),true);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.strokeStyle = "#28d1fa"
	ctx.arc(250,250,170,ToRad(270),ToRad(newMinutes*6 - 90));
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "#000000"
	ctx.arc(250,250,170,ToRad(270),ToRad(newMinutes*6 - 90),true);
	ctx.stroke();


	ctx.beginPath();
	ctx.strokeStyle = "#28d1fa"
	ctx.arc(250,250,140,ToRad(270),ToRad(newSeconds*6 - 90));
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "#000000"
	ctx.arc(250,250,140,ToRad(270),ToRad(newSeconds*6 - 90),true);
	ctx.stroke();

//TABLE
	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillStyle = "#28d1fa";
	ctx.fillText(today,170,250);

	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillStyle = "#28d1fa";
	ctx.fillText(time,170,290);

	window.requestAnimationFrame(renderClock);



}
window.requestAnimationFrame(renderClock);

//setInterval(renderClock, 1000)