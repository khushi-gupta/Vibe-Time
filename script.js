let hours=document.querySelector('#h1');
let minutes=document.querySelector('#m1');
let seconds=document.querySelector('#s1');
let startBtn=document.querySelector('#start');
let stopBtn=document.querySelector('#stop');
let resetBtn=document.querySelector('#reset');
let song=document.querySelector('.enter');
let songStartBtn=document.querySelector('#go');

startBtn.addEventListener('click',()=>{
  console.log(seconds.value);
  if(hours.value==""||minutes.value==""||seconds.value=="")
  {
    alert("Please Fill All Fields,Input 0 for no value");
  }
  else if(hours.value>60||minutes.value>60||seconds.value>60)
  {
    alert("Input Valid Time");
  }
  let x=hours.value;
  let y=minutes.value;
  let z=seconds.value;
  let control=setInterval(frame,1000);

  function frame()
  {
    
  }
})
