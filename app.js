var result = document.getElementById("result");

function getNumber(num){
    result.value += num;
}

function clearVal(){
    result.value=""
}

function getResult(){
    result.value=eval(result.value)
}