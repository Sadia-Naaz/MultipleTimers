const activeTimers = document.getElementById("active-timers");
function setNewTimer(){
    const hours = parseInt(document.getElementById("hours").value,10)||0;
    const minutes = parseInt(document.getElementById("minutes").value,10)||0;
    const seconds= parseInt(document.getElementById("seconds").value,10)||0;
   if(hours < 0 || minutes < 0 || seconds < 0){
    alert("enter a valid value");
    return;
   }
   const total_time_in_seconds =hours*3600+minutes*60+seconds;
   console.log(total_time_in_seconds);
   createTimer(total_time_in_seconds);

}
function createTimer(time_in_second){
    console.log("clicked");
    const timerDiv = document.createElement("div");
    timerDiv.id="timerDiv";
    const TimerDisplay= document.createElement("span");
    timerDiv.appendChild(TimerDisplay);

    const timeInterval = setInterval(()=>{
       
        time_in_second--;
        const display_hours = Math.floor(time_in_second/3600);
        const display_minutes = Math.floor((time_in_second % 3600)/60);
        const display_seconds = Math.floor((time_in_second % 60));
     
TimerDisplay.textContent = `Time-Left: ${display_hours}:${display_minutes}:${display_seconds}`;
console.log(TimerDisplay);
if(time_in_second<=0){
    clearInterval(timeInterval);
    const end_msg = document.createElement("div");
    end_msg.innerText ="Time is Up!";
    timerDiv.innerHTML="";
    timerDiv.appendChild(end_msg);
}
},1000);
const stopButton = document.createElement("button");
stopButton.textContent="stop";
stopButton.onclick=()=> clearInterval(timeInterval);
 
const deleteButton = document.createElement("button");
deleteButton.textContent="delete";
deleteButton.onclick=()=>{
    clearInterval(timeInterval);
    timerDiv.remove()
};
activeTimers.appendChild(timerDiv);
    timerDiv.appendChild(stopButton);
    timerDiv.appendChild(deleteButton);


};
