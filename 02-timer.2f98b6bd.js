!function(){var t={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockface:document.querySelector(".js-clockface")},n={intervalId:null,isActive:!1,start:function(){if(!this.isActive){var n=Date.now();this.isActive=!0,this.intervalId=setInterval((function(){var c,o,a,i,r=Date.now();!function(n){var e=n.hours,c=n.mins,o=n.secs;t.clockface.textContent="".concat(e,":").concat(c,":").concat(o)}((c=r-n,o=e(Math.floor(c%5184e6/36e5)),a=e(Math.floor(c%36e5/6e4)),i=e(Math.floor(c%6e4/1e3)),{hours:o,mins:a,secs:i}))}),1e3)}},stop:function(){clearInterval(this.intervalId),this.isActive=!1}};function e(t){return String(t).padStart(2,"0")}t.startBtn.addEventListener("click",(function(){n.start()})),t.stopBtn.addEventListener("click",(function(){n.stop()}))}();
//# sourceMappingURL=02-timer.2f98b6bd.js.map