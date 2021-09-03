// 
function getPin() {
     const pin = Math.round(Math.random() * 10000);
     const pinString = pin + '';
     if (pinString.length == 4) {
          return pin;
     }
     else {
          return getPin();
     }

}

// generate pin
function generatePin() {
     const pin = getPin();
     document.getElementById("display-pin").value = pin;

}

// key-padd add event handler
document.getElementById("key-pad").addEventListener('click', function (event) {
     const number = event.target.innerText;
     const calCInput = document.getElementById("typed-numbers");
     if (isNaN(number)) {
          if (number == 'C') {
               calCInput.value = '';

          }
     }
     else {

          const previousNumber = calCInput.value;
          const newNumber = previousNumber + number;
          calCInput.value = newNumber;
     }
})

function verifyPin() {
     const pin = document.getElementById('display-pin').value;
     const typedNumbers = document.getElementById('typed-numbers').value;
     const successMessage = document.getElementById('notify-success');
     const failError = document.getElementById('notify-fail');
     if (pin == typedNumbers) {
          successMessage.style.display = 'block';
          failError.style.display = 'none';

     }
     else {
          successMessage.style.display = 'none';
          failError.style.display = 'block';
     }
}




