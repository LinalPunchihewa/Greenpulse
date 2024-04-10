let CircularBar1 = document.querySelector(".circular-bar1");
let PercentValue1 = document.querySelector(".percent1");

let InitialValue1 = 0;
let finaleValue1 = 85;
let speed1 = 20;

let timer1 = setInterval(() => {
  InitialValue1 += 1;

  CircularBar1.style.background = `conic-gradient(#4285f4 ${InitialValue1/100 * 360}deg, #e8f0f7 0deg)`;
  PercentValue1.innerHTML = InitialValue1+"%";

  if(InitialValue1 >= finaleValue1){
    clearInterval(timer1);
  }
}, speed1)


let CircularBar2 = document.querySelector(".circular-bar2");
let PercentValue2 = document.querySelector(".percent2");

let InitialValue2 = 0;
let finaleValue2 = 70;
let speed2 = 20;

let timer2 = setInterval(() => {
  InitialValue2 += 1;

  CircularBar2.style.background = `conic-gradient(#4285f4 ${InitialValue2/100 * 360}deg, #e8f0f7 0deg)`;
  PercentValue2.innerHTML = InitialValue2+"%";

  if(InitialValue2 >= finaleValue2){
    clearInterval(timer2);
  }
}, speed2)


let CircularBar3 = document.querySelector(".circular-bar3");
let PercentValue3 = document.querySelector(".percent3");

let InitialValue3 = 0;
let finaleValue3 = 90;
let speed3 = 20;

let timer3 = setInterval(() => {
  InitialValue3 += 1;

  CircularBar3.style.background = `conic-gradient(#4285f4 ${InitialValue3/100 * 360}deg, #e8f0f7 0deg)`;
  PercentValue3.innerHTML = InitialValue3+"%";

  if(InitialValue3 >= finaleValue3){
    clearInterval(timer3);
  }
}, speed3)

let CircularBar4 = document.querySelector(".circular-bar4");
let PercentValue4 = document.querySelector(".percent4");

let InitialValue4 = 0;
let finaleValue4 = 70;
let speed4 = 20;

let timer4 = setInterval(() => {
  InitialValue4+= 1;

  CircularBar4.style.background = `conic-gradient(#4285f4 ${InitialValue4/100 * 360}deg, #e8f0f7 0deg)`;
  PercentValue4.innerHTML = InitialValue4+"%";

  if(InitialValue4 >= finaleValue4){
    clearInterval(timer4);
  }
}, speed4)

let CircularBar5 = document.querySelector(".circular-bar5");
let PercentValue5 = document.querySelector(".percent5");

let InitialValue5 = 0;
let finaleValue5 = 90;
let speed5 = 20;

let timer5 = setInterval(() => {
  InitialValue5 += 1;

  CircularBar5.style.background = `conic-gradient(#4285f4 ${InitialValue5/100 * 360}deg, #e8f0f7 0deg)`;
  PercentValue5.innerHTML = InitialValue5+"%";

  if(InitialValue5 >= finaleValue5){
    clearInterval(timer5);
  }
}, speed5)
