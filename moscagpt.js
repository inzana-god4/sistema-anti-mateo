const input=document.getElementById("prompt");
const send=document.getElementById("send");
const chat=document.getElementById("messages");

const responses=[

"bzz",

"bzz bzz",

"bzzzzzz",

"bzz?",

"bzz bzz bzz",

"bzzzzz."

];

const secret={

"capital de francia":"París.\n\nbzz",

"2+2":"4\n\nbzz",

"hola":"bzz hola",

"adios":"bzz..."

};

function add(text,cls){

chat.innerHTML+=`<div class="${cls}">${text}</div>`;

chat.scrollTop=chat.scrollHeight;

}

send.onclick=()=>{

const msg=input.value.trim();

if(!msg)return;

add(msg,"user");

input.value="";

setTimeout(()=>{

const m=msg.toLowerCase();

if(secret[m]){

add(secret[m],"ai");

return;

}

const r=Math.floor(Math.random()*responses.length);

add(responses[r],"ai");

},600);

}

input.addEventListener("keydown",e=>{

if(e.key==="Enter") send.click();

});
