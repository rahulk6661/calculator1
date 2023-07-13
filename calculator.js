var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var operand1=0;
var operand2=0;
var operator=null;
for(var i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(value=='+' ||value=='-' || value =='*' || value =='/' || value=='%')
        {
           operator =value;
           display.innerText +=value;
           operand1 = parseFloat(display.textContent);
        } 
    
        else if(value=='=')
     {
        operand2 = parseFloat(display.innerText.split(operator)[1]);
            console.log(operand2);
            //show result on display
           // clearcontent('value');
            //var result=eval(operand1+""+operator+""+operand2);
            if(operator=='+')
            {
            var result=eval(operand1+operand2);
            display.innerText=result;
            }
          else if(operator=='-'){
            var result=eval(operand1-operand2);
            display.innerText=result;
        }
        else if(operator=='*'){
            var result=eval(operand1*operand2);
            display.innerText=result;
        }
        else if(operator=='/'){
            var result=eval(operand1/operand2);
            display.innerText=result;
        }
        else if(operator=='%'){
            var result=eval(operand1%operand2);
            display.innerText=result;
        }
        else{
            display.innerText="error";
        }
            operator = null;
            operand1 = result;
            operand2 = null;
    }
        else if(value=='AC') 
        {
           display.innerText ="";
           //resetting the values here
           operator = null;
           operand1 = 0;
           operand2 = null;
        }
        else{
            display.innerText +=value;
        }

        
        
    });
}