const bill = document.getElementById('bill_input');
const tips = document.querySelectorAll('input[type="radio"]');
const custom = document.getElementById('custom');
const persons = document.getElementById('person_input');
const warning = document.querySelector('.labelTop p');
const tipAmount = document.querySelector('.tip');
const totalAmount = document.querySelector('.total');
const resetBtn = document.querySelector('.resetBtn');

var billAmount, personMany , tipSelected;

persons.addEventListener('blur', ()=>{
  displayResult();
}, false);

tips.forEach( (result) =>{
  result.addEventListener('click', ()=>{
    custom.value = '';
    displayResult();
  }, false)
})

custom.addEventListener('blur', () => {
  for(var i = 0; i < tips.length; i++){
    if(tips[i].checked){
      tips[i].checked = false;
      break;
    }
  }
  displayResult();
}, false);

bill.addEventListener('blur', ()=>{
  displayResult();
}, false);

resetBtn.addEventListener('click', () => {
  bill.value = '';
  persons.value = '';
  custom.value = '';
  for(var i = 0; i < tips.length; i++){
    if(tips[i].checked){
      tips[i].checked = false;
      break;
    }
  }
  tipAmount.textContent = '$0.00';
  totalAmount.textContent = '$0.00';
})

function displayResult(){
  if(persons.value == 0 || persons.value.length === 0){
    warning.textContent = 'Should Not be Zero';
  }
  else{
    warning.textContent = '';

    billAmount = bill.value;
    personMany = persons.value;
    tipSelected= getTip();

    var temp = billAmount / personMany;
    tipAmount.textContent = '$ ' + round(temp * tipSelected);
    var temp2 = temp * tipSelected;
    totalAmount.textContent = '$ ' + round(temp + temp2);
  }
}

function getTip(){
  if(custom.value.length != 0){
    return custom.value / 100;
  }
  else{
    var id;
    for(var i = 0; i < tips.length; i++){
      if(tips[i].checked){
        id = tips[i].id;
        break;
      }
    }
  
    switch(id){
      case 'five':
        return 0.05;
        break;
      case 'ten':
        return 0.10;
        break;
      case 'fifthteen':
        return 0.15;
        break;
      case 'twentyFive':
        return 0.25;
        break;
      case 'fifhty':
        return 0.50;
        break;
      default:
        return 0;
        break;
    }
  }
}

function round(num){
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return Math.round(m) / 100 *Math.sign(num);
}
