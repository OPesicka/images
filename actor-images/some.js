
		const timeoutDuration = 5000;

export default function apiCall(route, body = {}, method='POST') {
  const request = new Promise((resolve, reject) => {

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const requestDetails = {
      method,
      mode: 'cors',
      headers,
    };

    if(method !== 'GET') requestDetails.body = JSON.stringify(body);

    function handleErrors(response) {
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    }

    const serverURL = process.env.REACT_APP_SERVER_URL || `http://localhost:3000`;

    fetch(`hello`, requestDetails)
      .then(handleErrors)
      .then(data => resolve(data))
      .catch(err => reject(err));

  });

  const timeout = new Promise((request, reject) => {
    setTimeout(reject, timeoutDuration, `Request timed out!`);
  });

  return new Promise((resolve, reject) => {
    Promise.race([request, timeout])
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}


x += (y + 4 >> -z === w) ? b ** c : ~a;


// This is the main Node.js source code file of your actor.
// An actor is a program that takes an input and produces an output.

// For more information, see https://docs.apify.com/sdk/js/


import { Actor } from 'apify';

await Actor.init()

console.log('Loading input');
// Structure of input is defined in input_schema.json.
const input = await Actor.getInput();
console.log('First number: ', input?.firstNumber);
console.log('Second number: ', input?.secondNumber);

// 👉 Complete the code so that result is
// the sum of firstNumber and secondNumber.
// 👇👇👇👇👇👇👇👇👇👇
const result = null;
// 👆👆👆👆👆👆👆👆👆👆

console.log('The result is: ', result);

// Structure of output is defined in .actor/actor.json
await Actor.pushData({
    firstNumber: input?.firstNumber,
    secondNumber: input?.secondNumber,
    sum: result,
});

await Actor.exit();


