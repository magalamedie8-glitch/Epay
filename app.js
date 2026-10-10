if("serviceWorker" in navigator)addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
const pill=document.getElementById("net");
function net(){const off=!navigator.onLine;if(pill)pill.hidden=!off;document.body.classList.toggle("offline",off)}
addEventListener("online",net);addEventListener("offline",net);net();
let dp;const ib=document.getElementById("install");
addEventListener("beforeinstallprompt",e=>{e.preventDefault();dp=e;if(ib)ib.hidden=false});
if(ib)ib.onclick=async()=>{if(!dp)return;dp.prompt();await dp.userChoice;dp=null;ib.hidden=true};