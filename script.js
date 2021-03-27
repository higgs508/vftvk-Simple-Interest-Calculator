var rangeslider = document.getElementById("rate");
var output = document.getElementById("intRate");
output.innerHTML = rangeslider.value;

rangeslider.onchange = function() {
  output.innerHTML = this.value;
}
