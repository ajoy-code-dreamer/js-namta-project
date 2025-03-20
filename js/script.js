// ============ namta project ============
let inputNumber = document.querySelector(".namtaNumber");
let submit_btn = document.querySelector(".submit_btn");
let error_text = document.querySelector(".error_text");
let namta_result = document.querySelector(".namta_result");
let inpValue 

submit_btn.addEventListener("click", function(){
    inpValue = inputNumber.value;
    namta_result.innerHTML = "";
    inputNumber.value = "";

    if(inpValue.trim() === ""){
        error_text.innerHTML = "Please Enter a Number";
    }else if(isNaN(inpValue)){
        error_text.innerHTML = "Please Enter a Number";
    }
    else{
        error_text.innerHTML = "";
        for(let i = 1; i <= 10; i++){
            namta_result.innerHTML += `<li>${inpValue} x ${i} = ${inpValue * i} </li>`
            
        }
        
    }


})


// ============ namta project ============