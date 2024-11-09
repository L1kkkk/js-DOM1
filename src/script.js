function calculate(operation) {
  const num1 = parseFloat(document.getElementById('number1').value);
  const num2 = parseFloat(document.getElementById('number2').value);
  const resultField = document.getElementById('result');
  
  if (isNaN(num1) || isNaN(num2)) {
      resultField.textContent = "Введіть вірно 1 і 2  числа";
      resultField.style.color = 'red';
      return;
  }

  let result;
  switch (operation) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result = num1 - num2;
          break;
      case '*':
          result = num1 * num2;
          break;
      case '/':
          if (num2 === 0) {
              resultField.textContent = "На нуль ділення неможливе";
              resultField.style.color = 'red';
              return;
          }
          result = num1 / num2;
          result = Math.round(result * 100) / 100; 
          break;
  }

  resultField.textContent = `Результат: ${result}`;
  resultField.style.color = 'green';
}
