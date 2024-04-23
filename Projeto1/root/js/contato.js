const Audio = document.getElementById("audio");
const inputRange=document.getElementById("input-range");
inputRange.addEventListener("input",()=>{Audio.volume=inputRange.value;});