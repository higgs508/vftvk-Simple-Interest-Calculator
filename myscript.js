//Write a function that reads the value of the range slider and displays it the <span>adjacent to the slider.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// Create compute() function

function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var result = document.getElementById("result");
    
    
        let v=document.getElementById("principal").value;
        if(v<=0)
        {
            alert('value should be a positive number')
            document.getElementById("principal").focus();
            return false;
        }
    
    var year = new Date().getFullYear()+parseInt(y);
    

               
    var interest = (p*r*y)/100;
    
   document.getElementById("result").innerHTML="<br\>If you deposit "+p+",<br\>at an interest rate of "+r+"%<br\>You will receive an amount of "+interest+",<br\>in the year "+year+"<br\>"
    
    
}
