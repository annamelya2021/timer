const t={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockface:document.querySelector(".js-clockface")},e={intervalId:null,isActive:!1,start(){if(this.isActive)return;const e=Date.now();this.isActive=!0,this.intervalId=setInterval((()=>{!function({hours:e,mins:n,secs:o}){t.clockface.textContent=`${e}:${n}:${o}`}(function(t){const e=n(Math.floor(t%5184e6/36e5)),o=n(Math.floor(t%36e5/6e4)),c=n(Math.floor(t%6e4/1e3));return{hours:e,mins:o,secs:c}}(Date.now()-e))}),1e3)},stop(){clearInterval(this.intervalId),this.isActive=!1}};function n(t){return String(t).padStart(2,"0")}t.startBtn.addEventListener("click",(()=>{e.start()})),t.stopBtn.addEventListener("click",(()=>{e.stop()}));
//# sourceMappingURL=02-timer.a4c0f827.js.map