//Write your javascript logic here

function getExpressionOutput(input) {
  try {
    return eval(input)
  }
  catch (e) {
    console.warn('Invalid expression', input)
    return input
  }
}

function onClickShowOutput() {
  let expression = '5+2*10'
  const output = getExpressionOutput(expression)
  console.log(output)
  document.getElementById('output').innerHTML = output
}
