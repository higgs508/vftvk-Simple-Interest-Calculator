function compute()
{
    var principal = document.getElementById("principal");
	var rate = document.getElementById("rate");
	var years = document.getElementById("years");
	var interest = (principal*years*rate/100);
	var date = currentTime.getFullYear();
	var future = date + years;
}

var rangeslider = document.getElementById("rate");
var output = document.getElementById("intrate");
output.innerHTML = rangeslider.value;

rangeslider.onchange = function()
{
	output.innerHTML = rangeslider.value;
}
        
