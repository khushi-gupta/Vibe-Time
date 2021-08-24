let hours=document.querySelector('#h1');
let minutes=document.querySelector('#m1');
let seconds=document.querySelector('#s1');
let startBtn=document.querySelector('#start');
let stopBtn=document.querySelector('#stop');
let resetBtn=document.querySelector('#reset');
let song=document.querySelector('.enter');
let songStartBtn=document.querySelector('#go');
let timersong=document.querySelector('#timer');
let control;
startBtn.addEventListener('click',function a(){
  startBtn.disabled=true;
  if(hours.value==""||minutes.value==""||seconds.value=="")
  {
    alert("Please Fill All Fields,Input 0 for no value");
    startBtn.disabled=false;
  }
  else if(hours.value>60||minutes.value>60||seconds.value>60)
  {
    alert("Input Valid Time");
    startBtn.disabled=false;
  }
  else if(hours.value==0&&minutes.value==0&&seconds.value==0)
  {
    startBtn.disabled=false;
  }
  else
  {
  let x=hours.value;
  let y=minutes.value;
  let z=seconds.value;
  x=parseInt(x);
  y=parseInt(y);
  z=parseInt(z);
  console.log(x,y,z);
  function frame()
  {
    z--;
    if(z==-1)
    {
      if(y!=0)
      {
        z=59;
        y--;
      }
      else if(y==0)
      {
        if(x!=0)
        {
          y=59;
          z=59;
          x--;
        }
        else if(x==0)
        {
          clearInterval(control);
          timersong.play();
          seconds.value="";
          minutes.value="";
          hours.value="";
          startBtn.disabled=false;
          stopBtn.disabled=false;
          return;
        }
      }
    }
    if(x<10)
    hours.value='0'+x;
    else {
    hours.value=x;
    }
    if(y<10)
    minutes.value='0'+y;
    else
    minutes.value=y;
    if(z<10)
    {
      seconds.value='0'+z;
    }
    else
    seconds.value=z;
  }
  frame();
  control=setInterval(frame,1000);

}
})

stopBtn.addEventListener('click',()=>{
  startBtn.disabled=false;
  clearInterval(control);
})
resetBtn.addEventListener('click',()=>{
  startBtn.disabled=false;
  stopBtn.disabled=false;
  seconds.value="";
  minutes.value="";
  hours.value="";
  clearInterval(control);
})
