let input1 = "";
let input2 = "";

function clearDisplay(){
    $("#calcInput").val("");
}

//first value inputted

$(".digit").click((evt) => {
    let currentValue = $("input").val();
    // Append the clicked button's value to the current input value
    $("input").val(currentValue + evt.target.innerHTML);
    input1 = parseInt($("input").val(), 10);
});

//second value inputted

$(".plus").click((evt) => {
    
})



function plus(num1,num2){
    $("input").val(num1+num2);
}

function minus(num1,num2){
    console.log(num1-num2);
}

function calculation(num1,num2,operator){
    operator(num1,num2);
}


//1. Create a calculator numbers using grid

//2. When a button clicked, or a key pressed, it will show in the text area.