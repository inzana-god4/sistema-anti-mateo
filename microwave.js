let seconds=120;

let running=false;

const display=document.getElementById("display");
const plate=document.querySelector(".plate");
const status=document.getElementById("status");

function update(){

let m=Math.floor(seconds/60);

let s=seconds%60;

display.textContent=
String(m).padStart(2,"0")+":"+
String(s).padStart(2,"0");

}

document.getElementById("start").onclick=()=>{

if(running)return;

running=true;

plate.style.display="block";

status.innerHTML="Calentando usuario...";

const timer=setInterval(()=>{

seconds--;

update();

if(seconds<=0){

clearInterval(timer);

status.innerHTML="✅ Usuario correctamente calentado.";

setTimeout(()=>{

location="moscagpt.html";

},3000);

}

},1000);

};

document.getElementById("door").onclick=()=>{

running=false;

seconds=120;

update();

plate.style.display="none";

status.innerHTML="Abriste la puerta.<br>Reiniciando protocolo...";

};
