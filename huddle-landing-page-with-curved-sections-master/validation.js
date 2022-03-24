const inputText = document.getElementById('emailInput');
const button = document.getElementById('emailSubmit');
const message = document.querySelector('.valid');

button.addEventListener('click', () => {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!inputText.value.match(mailFormat)){
    message.style.display = 'block';
    // message.style.color = "red";
    inputText.style.border = "1px solid red";
  }
  else{
    message.textContent = 'Email Valid';
    message.style.color = "green";
    inputText.style.border = "1px solid green";
  }
});