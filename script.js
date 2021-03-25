var rangeslider = document.getElementById("rate");
var output = document.getElementById("intrate");
output.innerHTML = rangeslider.value;

rangeslider.onchange = function()
{
	output.innerHTML = rangeslider.value;
}
        
