var numberClicked = false;
var Check = /[*{2,}]/;
function add(char){
    if (numberClicked == false){
        if(isNaN(char) == true){

        }
        else {
            document.getElementById('display').value += char;
        }
    }
    else {
        document.getElementById('display').value += char;
    }

    if(isNaN(char) == true) {
        if(char ="*"){
            if(document.getElementById('display').value == '' || null){
                numberClicked = false;
            }
            else{

                if(Check.test(document.getElementById('display').value)==true){
                    numberClicked = false;
                }
                else{
                    numberClicked = true;
                }
            }
        }
           
        
        else{
        numberClicked = false;
        }
    }
    
    else{
        numberClicked = true;
    }
}

function calculate(){
    var display = document.getElementById('display');
    var result = eval(display.value);
    document.getElementById('result').value = result;
}

function reset(){
    document.getElementById('display').value = "";
    document.getElementById('result').value = ""
}

