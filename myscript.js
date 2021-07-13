//Write a function that reads the value of the range slider and displays it the <span>adjacent to the slider.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// Create compute() function

function compute()
{
    
    //Create a variable called 'principal' and assign to it the value of the input element "principal"
    var p = document.getElementById("principal").value;
    
    //Create a 'if' to alert if principal is <=0
    if (p <= 0) text = "Please enter a positive number.";

    //Create a variable called rate and assign to it the value of the input element "rate"
    var r = document.getElementById("rate").value;

    //Create a variable called years and assign to it the value of the input element "years"
    var y = document.getElementById("years").value;

    //Create a variable called interest and assign to it the value of principal * years * rate / 100
    var interest = p * y * r /100;
    
   //Write the logic to convert the 'No of Years' into the actual year in the future.
    var year = new Date().getFullYear()+parseInt(years);
    
    //Get reference to the element named 'result'
    document.getElementById("result").innerHTML="If you deposit "+p+",\
    <br\>at an interest rate of "+r+"%\
    <br\>You will receive an amount of "+interest+",\
    <br\>in the year "+year+"\<br\>"
}
