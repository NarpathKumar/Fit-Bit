console.clear();
var div = document.getElementsByClassName('number-div')[0];
var inputText = document.getElementsByClassName('input')[0];
var result = "";
div.addEventListener('click',function(e){
    if(e.target.innerText === "C") {
        inputText.value = 0;
        result = ""
    }
    else if(e.target.innerText === "="){
            if(inputText.value === "0" || inputText.value === ""){
                alert('Enter Valid Input');
                result = ""
            }
            else {
                inputText.value = eval(result);
                result = ""
            }
        }
    else {
        inputText.value += e.target.innerText;
        result += e.target.innerText;
    }
})

  