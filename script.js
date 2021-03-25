function compute()
{
    var principal = document.getElementById("principal");
	var rate = document.getElementById("rate");
	var years = document.getElementById("years");
	var interest = (principal*years*rate/100);
	var date = currentTime.getFullYear();
	var future = date + years;
}

var rangeSlider = document.getElementById("rate");
var output = document.getElementById("intRate");
output.innerHTML = rangeSlider.value;

rangeslider.oninput = function(){
		output.innerHTML = this.value;
}
        
