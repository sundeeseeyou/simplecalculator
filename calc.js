
let input2 = "";

function clearDisplay(){
    $("#calcInput").val("");
}


//first value inputted

$(".digit").click((evt) => {
    let currentValue = $("#calcInput").val();
    // Append the clicked button's value to the current input value
    $("#calcInput").val(currentValue + evt.target.innerHTML);
    
});

//second value inputted


//plus button pressed
$(".op").click((evt) => {
    let input1 = parseFloat($("#calcInput").val());
    let operator = $(evt.target).data("operator");

    switch(operator) {
        case "plus":
            calculation(input1,2,plus);
            break;
        case "minus":
            calculation(input1,2,minus)
            break;
            default:
                break;
    }

})



function plus(num1,num2){
   console.log (num1+num2);
}

function minus(num1,num2){
    console.log(num1-num2);
}

function calculation(num1,num2,operatorFunction){
    operatorFunction(num1,num2);
}
    // switch (evt){
    //     case plus:
    //         alert("plus");
    //         break;
    //     case minus:
    //         break;
    //     case times:
    //         break;
    //     case divide:
    //         break;
    //     default:
    
    // }

//1. Create a calculator numbers using grid

//2. When a button clicked, or a key pressed, it will show in the text area.