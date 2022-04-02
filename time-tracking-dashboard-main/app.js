const dailyBtn = document.querySelector('.daily');
const weeklyBtn = document.querySelector('.weekly');
const monthlyBtn = document.querySelector('.monthly');

const stat1 = document.querySelectorAll('.stats_one');
const stat2 = document.querySelectorAll('.stats_two');


dailyBtn.addEventListener('click', function loadData(){
  fetch("data.json").then(Response => Response.json()).then(data =>{
    for(var i = 0; i < stat1.length; i++){
      stat1[i].textContent = data[i].timeframes.daily.current + "hrs";
      stat2[i].textContent = "Last Day - " + data[i].timeframes.daily.previous + "hrs";
      stat1[i].classList.add('animate__zoomIn');
      stat2[i].classList.add('animate__zoomIn');
    }
  });
  dailyBtn.classList.add('onState');
  weeklyBtn.classList.remove('onState');
  monthlyBtn.classList.remove('onState');
  addRemove();
});

weeklyBtn.addEventListener('click', function loadData(){
  fetch("data.json").then(Response => Response.json()).then(data =>{
    for(var i = 0; i < stat1.length; i++){
      stat1[i].textContent = data[i].timeframes.weekly.current + "hrs";
      stat2[i].textContent = "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
      stat1[i].classList.add('animate__zoomIn');
      stat2[i].classList.add('animate__zoomIn');
    }
  });
  dailyBtn.classList.remove('onState');
  weeklyBtn.classList.add('onState');
  monthlyBtn.classList.remove('onState');
  addRemove()
});

monthlyBtn.addEventListener('click', function loadData(){
  fetch("data.json").then(Response => Response.json()).then(data =>{
    for(var i = 0; i < stat1.length; i++){
      stat1[i].textContent = data[i].timeframes.monthly.current + "hrs";
      stat2[i].textContent = "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
      stat1[i].classList.add('animate__zoomIn');
      stat2[i].classList.add('animate__zoomIn');
    }
  });
  dailyBtn.classList.remove('onState');
  weeklyBtn.classList.remove('onState');
  monthlyBtn.classList.add('onState');
  addRemove();
});

function addRemove(){
  for(var i = 0; i < stat1.length; i++){
    stat1[i].classList.remove('animate__zoomIn');
    stat2[i].classList.remove('animate__zoomIn');
  }
}
