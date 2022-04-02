const inputText = document.querySelector('.inputText');
const button1 = document.querySelector('.getStartedBtn');
const validate = document.querySelector('.validation');

const inputText2 = document.querySelector('.inputText2');
const button2 = document.querySelector('.getStartedBtn2');
const validate2 = document.querySelector('.validation2');

button1.addEventListener('click', ()=>{
  validation(inputText, validate);
});

button2.addEventListener('click', ()=>{
  validation(inputText2, validate2);
});

function validation(textField, message){
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!textField.value.match(mailFormat)){
    message.textContent = 'Please check you email';
    message.style.color = "red";
    textField.style.border = "1px solid red";
  }
  else{
    message.textContent = 'Email Valid';
    message.style.color = "green";
    textField.style.border = "1px solid green";

  }
}