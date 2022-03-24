const adviceId = document.querySelector('span');
const advice = document.querySelector('p');
const btn = document.getElementById('btn');

btn.addEventListener('click', function getAdvice(){
  fetch('https:api.adviceslip.com/advice').then(response =>{
    return response.json();
  }).then(adviceData =>{
    const adviceObj = adviceData.slip;
    advice.textContent = '\"' + adviceObj.advice + '\"';
    adviceId.textContent = adviceObj.id;
    // console.log(adviceObj);
  }).catch(error =>{
    console.log(error);
  })
});

