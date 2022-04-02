const leftArrow = document.querySelector('.left_btn');
const rightArrow = document.querySelector('.right_btn');
const leftArrowMobile = document.querySelector('.left_btn_mobile');
const rightArrowMobile = document.querySelector('.right_btn_mobile');
const section = document.querySelector('.one-part');
const title = document.querySelector('.two-part h1');
const para = document.querySelector('.two-part p');

var counter = 0;

const image = [
  'url("/images/desktop-image-hero-1.jpg")',
  'url("/images/desktop-image-hero-2.jpg")',
  'url("/images/desktop-image-hero-3.jpg")'
]
const descriptions = {
  title1: 'Discover innovative ways to decorate',
  title2: 'We are available all across the globe',
  title3: 'Manufactured with the best materials',
  para1: ' We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  para2: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  para3: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
}

leftArrow.addEventListener('click', ()=>{
  leftClick();
  setTimeout(()=>{
    removeAnimation();
  },1000)
})
rightArrow.addEventListener('click', ()=>{
  rightClick();
  setTimeout(()=>{
    removeAnimation();
  }, 1000)
  
})
leftArrowMobile.addEventListener('click', ()=>{
  leftClick();
  setTimeout(()=>{
    removeAnimation();
  },1000)
})
rightArrowMobile.addEventListener('click', ()=>{
  rightClick();
  setTimeout(()=>{
    removeAnimation();
  },1000)
})

function removeAnimation(){
  title.classList.remove('animate__slideInRight');
  para.classList.remove('animate__slideInRight');
  section.classList.remove('animate__slideInRight');
  title.classList.remove('animate__slideInLeft');
  para.classList.remove('animate__slideInLeft');
  section.classList.remove('animate__slideInLeft');
}

function leftClick(){
  counter--;
  if(counter == 0){
    section.style.backgroundImage = image[0];
    title.textContent = descriptions.title1;
    para.textContent = descriptions.para1;
  }else if(counter == 1){
    section.style.backgroundImage = image[1];
    title.textContent = descriptions.title2;
    para.textContent = descriptions.para2;
  }else{
    section.style.backgroundImage = image[2];
    title.textContent = descriptions.title3;
    para.textContent = descriptions.para3;
    counter = 2;
  }
  title.classList.add('animate__slideInLeft');
  para.classList.add('animate__slideInLeft');
  section.classList.add('animate__slideInLeft');
}

function rightClick(){
  counter++;
  if(counter == 0){
    section.style.backgroundImage = image[0];
    title.textContent = descriptions.title1;
    para.textContent = descriptions.para1;
    
  }else if(counter == 1){
    section.style.backgroundImage = image[1];
    title.textContent = descriptions.title2;
    para.textContent = descriptions.para2;
  }else if(counter == 2){
    section.style.backgroundImage = image[2];
    title.textContent = descriptions.title3;
    para.textContent = descriptions.para3;
  }
  else{
    section.style.backgroundImage = image[0];
    title.textContent = descriptions.title1;
    para.textContent = descriptions.para1;
    counter = 0;
  }
  title.classList.add('animate__slideInRight');
  para.classList.add('animate__slideInRight');
  section.classList.add('animate__slideInRight');
}
