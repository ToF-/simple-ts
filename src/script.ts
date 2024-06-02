// author: chatgpt
import { squareRoot } from './mathUtils';

document.getElementById('greetButton')?.addEventListener('click', function() {
  const numberInput = document.getElementById('numberInput') as HTMLInputElement;
  const greeting = document.getElementById('greeting');
  const result = document.getElementById('result');

  if (greeting && result && numberInput) {
    greeting.innerText = 'Hello, world!';

    const number = parseFloat(numberInput.value);

    if (!isNaN(number)) {
      const sqrtValue = squareRoot(number);
      result.innerText = `The square root of ${number} is ${sqrtValue}`;
    } else {
      result.innerText = 'Please enter a valid number.';
    }
  }
});

