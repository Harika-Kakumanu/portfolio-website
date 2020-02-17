//Write your javascript logic here
let user_input = '';
let plus_symbol = (value) => {
  user_input = user_input + value;
  console.log(user_input);
  document.getElementById('output').innerHTML = user_input;
}

let ac_symbol = (value) => {
  user_input = '';
  document.getElementById('output').innerHTML = user_input;
}

function getExpressionOutput(user_input) {
  try {
    return eval(user_input);
  }
  catch (e) {
    user_input = "Invalid Expression";
    return user_input
  }
}

function onClickShowOutput() {
  let expression = user_input;
  const output = getExpressionOutput(expression);
  console.log(output);
  document.getElementById('output').innerHTML = output;
  user_input = output;
}
