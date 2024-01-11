
let input1 = [];
let operator

//this ONLY shows the live numbers pressed

$(".digit").click((evt) => {
  let currentValue = $("#calcInput").val();
  // Append the clicked button's value to the current input value
  $("#calcInput").val(currentValue + evt.target.innerHTML);
});

$(".op").click((evt) => {
  input1.push(parseFloat($("#calcInput").val())); //when an OP clicked, input1 value updated
  operator = $(evt.target).data("operator") ?? operator;
  clearDisplay();
});

$("#equal").click((evt) => {
  switch (operator) {
    case "plus":
      calculation(plus);
      break;
    case "minus":
      calculation(minus);
      break;
    case "times":
        calculation(times);
    case "divide":
        calculation(divide);
    default:
      break;
  }
});

function plus(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function times(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculation(operatorFunction) {
  const result = operatorFunction(...input1);
  $("#calcInput").val(result);
  input1 = [];
}

function clearDisplay() {
  $("#calcInput").val("");
}