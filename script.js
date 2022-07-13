// STOPWATCH-1 VARIABLES
const stopwatch_1 = document.getElementById("stopwatch_1");
const playPauseButton_1 = document.getElementById("play-pause_1");
const stopButton_1 = document.getElementById("stop_1");
let stopwatchInterval_1;
let runningTime_1 = 0;

// STOPWATCH-1 DATA VARIABLES
const convStart_1 = document.getElementById("conv-start-1");
const convEnd_1 = document.getElementById("conv-end-1");
const expEnd_1 = document.getElementById("exp-end-1");

// STOPWATCH-1 EVENT LISTENERS
playPauseButton_1.addEventListener("click", playPauseOne);
stopButton_1.addEventListener("click", stopOne);

// STOPWATCH-1 DATA EVENT LISTENERS
convStart_1.addEventListener("click", addDataConv_1);
convEnd_1.addEventListener("click", addDataFconv_1);

// STOPWATCH-1 ADD DATA CONVULSION FUNCTION
function addDataConv_1() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_1.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s1").appendChild(node);
}

// STOPWATCH-1 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_1() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_1.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s1").appendChild(node);
}

// STOPWATCH-1 START FUNCTION
function startOne() {
  let startTime = Date.now() - runningTime_1;

  stopwatchInterval_1 = setInterval(() => {
    runningTime_1 = Date.now() - startTime;
    stopwatch_1.textContent = calculateTimeOne(runningTime_1);
  }, 1000);
}

// STOPWATCH-1 PLAY-PAUSE FUNCTION
function playPauseOne() {
  const isPaused = !playPauseButton_1.classList.contains("running");

  if (isPaused) {
    playPauseButton_1.classList.add("running");
    startOne();
  } else {
    playPauseButton_1.classList.remove("running");
    pauseOne();
  }
}

// STOPWATCH-1 PAUSE FUNCTION
function pauseOne() {
  clearInterval(stopwatchInterval_1);
}

// STOPWATCH-1 STOP FUNCTION
function stopOne() {
  playPauseButton_1.classList.remove("running");
  runningTime_1 = 0;
  clearInterval(stopwatchInterval_1);
  stopwatch_1.textContent = "00:00";
}

// STOPWATCH-1 CALCULATE TIME FUNCTION
function calculateTimeOne(runningTime_1) {
  const total_seconds = Math.floor(runningTime_1 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

//-----------------2--------------------------------------

// STOPWATCH-2 VARIABLES
const stopwatch_2 = document.getElementById("stopwatch_2");
const playPauseButton_2 = document.getElementById("play-pause_2");
const stopButton_2 = document.getElementById("stop_2");
let stopwatchInterval_2;
let runningTime_2 = 0;

// STOPWATCH-2 DATA VARIABLES
const convStart_2 = document.getElementById("conv-start-2");
const convEnd_2 = document.getElementById("conv-end-2");
const expEnd_2 = document.getElementById("exp-end-2");

// STOPWATCH-2 EVENT LISTENERS
playPauseButton_2.addEventListener("click", playPauseTwo);
stopButton_2.addEventListener("click", stopTwo);

// STOPWATCH-2 DATA EVENT LISTENERS
convStart_2.addEventListener("click", addDataConv_2);
convEnd_2.addEventListener("click", addDataFconv_2);

// STOPWATCH-2 ADD DATA CONVULSION FUNCTION
function addDataConv_2() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_2.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s2").appendChild(node);
}

// STOPWATCH-2 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_2() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_2.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s2").appendChild(node);
}

// STOPWATCH-2 START FUNCTION
function startTwo() {
  let startTime = Date.now() - runningTime_2;

  stopwatchInterval_2 = setInterval(() => {
    runningTime_2 = Date.now() - startTime;
    stopwatch_2.textContent = calculateTimeTwo(runningTime_2);
  }, 1000);
}

// STOPWATCH-2 PLAY-PAUSE FUNCTION
function playPauseTwo() {
  const isPaused = !playPauseButton_2.classList.contains("running");

  if (isPaused) {
    playPauseButton_2.classList.add("running");
    startTwo();
  } else {
    playPauseButton_2.classList.remove("running");
    pauseTwo();
  }
}

// STOPWATCH-2 PAUSE FUNCTION
function pauseTwo() {
  clearInterval(stopwatchInterval_2);
}

// STOPWATCH-2 STOP FUNCTION
function stopTwo() {
  playPauseButton_2.classList.remove("running");
  runningTime_2 = 0;
  clearInterval(stopwatchInterval_2);
  stopwatch_2.textContent = "00:00";
}

// STOPWATCH-2 CALCULATE TIME FUNCTION
function calculateTimeTwo(runningTime_2) {
  const total_seconds = Math.floor(runningTime_2 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

//-------------------------------3--------------------------

// STOPWATCH-3 VARIABLES
const stopwatch_3 = document.getElementById("stopwatch_3");
const playPauseButton_3 = document.getElementById("play-pause_3");
const stopButton_3 = document.getElementById("stop_3");
let stopwatchInterval_3;
let runningTime_3 = 0;

// STOPWATCH-3 DATA VARIABLES
const convStart_3 = document.getElementById("conv-start-3");
const convEnd_3 = document.getElementById("conv-end-3");
const expEnd_3 = document.getElementById("exp-end-3");

// STOPWATCH-3 EVENT LISTENERS
playPauseButton_3.addEventListener("click", playPauseThree);
stopButton_3.addEventListener("click", stopThree);

// STOPWATCH-3 DATA EVENT LISTENERS
convStart_3.addEventListener("click", addDataConv_3);
convEnd_3.addEventListener("click", addDataFconv_3);

// STOPWATCH-3 ADD DATA CONVULSION FUNCTION
function addDataConv_3() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_3.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s3").appendChild(node);
}

// STOPWATCH-3 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_3() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_3.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s3").appendChild(node);
}

// STOPWATCH-3 START FUNCTION
function startThree() {
  let startTime = Date.now() - runningTime_3;

  stopwatchInterval_3 = setInterval(() => {
    runningTime_3 = Date.now() - startTime;
    stopwatch_3.textContent = calculateTimeThree(runningTime_3);
  }, 1000);
}

// STOPWATCH-3 PLAY-PAUSE FUNCTION
function playPauseThree() {
  const isPaused = !playPauseButton_3.classList.contains("running");

  if (isPaused) {
    playPauseButton_3.classList.add("running");
    startThree();
  } else {
    playPauseButton_3.classList.remove("running");
    pauseThree();
  }
}

// STOPWATCH-3 PAUSE FUNCTION
function pauseThree() {
  clearInterval(stopwatchInterval_3);
}

// STOPWATCH-3 STOP FUNCTION
function stopThree() {
  playPauseButton_3.classList.remove("running");
  runningTime_3 = 0;
  clearInterval(stopwatchInterval_3);
  stopwatch_3.textContent = "00:00";
}

// STOPWATCH-3 CALCULATE TIME FUNCTION
function calculateTimeThree(runningTime_3) {
  const total_seconds = Math.floor(runningTime_3 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

// FINAL BOX ONE ------------------------------------------------------------

// START BOX TWO ------------------------------4-----------------------------

// STOPWATCH-4 VARIABLES
const stopwatch_4 = document.getElementById("stopwatch_4");
const playPauseButton_4 = document.getElementById("play-pause_4");
const stopButton_4 = document.getElementById("stop_4");
let stopwatchInterval_4;
let runningTime_4 = 0;

// STOPWATCH-4 DATA VARIABLES
const convStart_4 = document.getElementById("conv-start-4");
const convEnd_4 = document.getElementById("conv-end-4");
const expEnd_4 = document.getElementById("exp-end-4");

// STOPWATCH-4 EVENT LISTENERS
playPauseButton_4.addEventListener("click", playPauseFour);
stopButton_4.addEventListener("click", stopFour);

// STOPWATCH-4 DATA EVENT LISTENERS
convStart_4.addEventListener("click", addDataConv_4);
convEnd_4.addEventListener("click", addDataFconv_4);

// STOPWATCH-4 ADD DATA CONVULSION FUNCTION
function addDataConv_4() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_4.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s4").appendChild(node);
}

// STOPWATCH-4 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_4() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_4.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s4").appendChild(node);
}

// STOPWATCH-4 START FUNCTION
function startFour() {
  let startTime = Date.now() - runningTime_4;

  stopwatchInterval_4 = setInterval(() => {
    runningTime_4 = Date.now() - startTime;
    stopwatch_4.textContent = calculateTimeFour(runningTime_4);
  }, 1000);
}

// STOPWATCH-4 PLAY-PAUSE FUNCTION
function playPauseFour() {
  const isPaused = !playPauseButton_4.classList.contains("running");

  if (isPaused) {
    playPauseButton_4.classList.add("running");
    startFour();
  } else {
    playPauseButton_4.classList.remove("running");
    pauseFour();
  }
}

// STOPWATCH-4 PAUSE FUNCTION
function pauseFour() {
  clearInterval(stopwatchInterval_4);
}

// STOPWATCH-4 STOP FUNCTION
function stopFour() {
  playPauseButton_4.classList.remove("running");
  runningTime_4 = 0;
  clearInterval(stopwatchInterval_4);
  stopwatch_4.textContent = "00:00";
}

// STOPWATCH-4 CALCULATE TIME FUNCTION
function calculateTimeFour(runningTime_4) {
  const total_seconds = Math.floor(runningTime_4 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

//-------------------------------------5------------------------------------

// STOPWATCH-5 VARIABLES
const stopwatch_5 = document.getElementById("stopwatch_5");
const playPauseButton_5 = document.getElementById("play-pause_5");
const stopButton_5 = document.getElementById("stop_5");
let stopwatchInterval_5;
let runningTime_5 = 0;

// STOPWATCH-5 DATA VARIABLES
const convStart_5 = document.getElementById("conv-start-5");
const convEnd_5 = document.getElementById("conv-end-5");
const expEnd_5 = document.getElementById("exp-end-5");

// STOPWATCH-5 EVENT LISTENERS
playPauseButton_5.addEventListener("click", playPauseFive);
stopButton_5.addEventListener("click", stopFive);

// STOPWATCH-5 DATA EVENT LISTENERS
convStart_5.addEventListener("click", addDataConv_5);
convEnd_5.addEventListener("click", addDataFconv_5);

// STOPWATCH-5 ADD DATA CONVULSION FUNCTION
function addDataConv_5() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_5.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s5").appendChild(node);
}

// STOPWATCH-5 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_5() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_5.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s5").appendChild(node);
}

// STOPWATCH-5 START FUNCTION
function startFive() {
  let startTime = Date.now() - runningTime_5;

  stopwatchInterval_5 = setInterval(() => {
    runningTime_5 = Date.now() - startTime;
    stopwatch_5.textContent = calculateTimeFive(runningTime_5);
  }, 1000);
}

// STOPWATCH-5 PLAY-PAUSE FUNCTION
function playPauseFive() {
  const isPaused = !playPauseButton_5.classList.contains("running");

  if (isPaused) {
    playPauseButton_5.classList.add("running");
    startFive();
  } else {
    playPauseButton_5.classList.remove("running");
    pauseFive();
  }
}

// STOPWATCH-5 PAUSE FUNCTION
function pauseFive() {
  clearInterval(stopwatchInterval_5);
}

// STOPWATCH-5 STOP FUNCTION
function stopFive() {
  playPauseButton_5.classList.remove("running");
  runningTime_5 = 0;
  clearInterval(stopwatchInterval_5);
  stopwatch_5.textContent = "00:00";
}

// STOPWATCH-5 CALCULATE TIME FUNCTION
function calculateTimeFive(runningTime_5) {
  const total_seconds = Math.floor(runningTime_5 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

//----------------------------------6---------------------------------------

// STOPWATCH-6 VARIABLES
const stopwatch_6 = document.getElementById("stopwatch_6");
const playPauseButton_6 = document.getElementById("play-pause_6");
const stopButton_6 = document.getElementById("stop_6");
let stopwatchInterval_6;
let runningTime_6 = 0;

// STOPWATCH-6 DATA VARIABLES
const convStart_6 = document.getElementById("conv-start-6");
const convEnd_6 = document.getElementById("conv-end-6");
const expEnd_6 = document.getElementById("exp-end-6");

// STOPWATCH-6 EVENT LISTENERS
playPauseButton_6.addEventListener("click", playPauseSix);
stopButton_6.addEventListener("click", stopSix);

// STOPWATCH-6 DATA EVENT LISTENERS
convStart_6.addEventListener("click", addDataConv_6);
convEnd_6.addEventListener("click", addDataFconv_6);

// STOPWATCH-6 ADD DATA CONVULSION FUNCTION
function addDataConv_6() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_6.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s6").appendChild(node);
}

// STOPWATCH-6 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_6() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_6.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s6").appendChild(node);
}

// STOPWATCH-6 START FUNCTION
function startSix() {
  let startTime = Date.now() - runningTime_6;

  stopwatchInterval_6 = setInterval(() => {
    runningTime_6 = Date.now() - startTime;
    stopwatch_6.textContent = calculateTimeSix(runningTime_6);
  }, 1000);
}

// STOPWATCH-6 PLAY-PAUSE FUNCTION
function playPauseSix() {
  const isPaused = !playPauseButton_6.classList.contains("running");

  if (isPaused) {
    playPauseButton_6.classList.add("running");
    startSix();
  } else {
    playPauseButton_6.classList.remove("running");
    pauseSix();
  }
}

// STOPWATCH-6 PAUSE FUNCTION
function pauseSix() {
  clearInterval(stopwatchInterval_6);
}

// STOPWATCH-6 STOP FUNCTION
function stopSix() {
  playPauseButton_6.classList.remove("running");
  runningTime_6 = 0;
  clearInterval(stopwatchInterval_6);
  stopwatch_6.textContent = "00:00";
}

// STOPWATCH-6 CALCULATE TIME FUNCTION
function calculateTimeSix(runningTime_6) {
  const total_seconds = Math.floor(runningTime_6 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

// FINAL BOX TWO ----------------------------------------------------------------

// START BOX THREE ----------------7-------------------------

// STOPWATCH-7 VARIABLES
const stopwatch_7 = document.getElementById("stopwatch_7");
const playPauseButton_7 = document.getElementById("play-pause_7");
const stopButton_7 = document.getElementById("stop_7");
let stopwatchInterval_7;
let runningTime_7 = 0;

// STOPWATCH-7 DATA VARIABLES
const convStart_7 = document.getElementById("conv-start-7");
const convEnd_7 = document.getElementById("conv-end-7");
const expEnd_7 = document.getElementById("exp-end-7");

// STOPWATCH-7 EVENT LISTENERS
playPauseButton_7.addEventListener("click", playPauseSeven);
stopButton_7.addEventListener("click", stopSeven);

// STOPWATCH-7 DATA EVENT LISTENERS
convStart_7.addEventListener("click", addDataConv_7);
convEnd_7.addEventListener("click", addDataFconv_7);

// STOPWATCH-7 ADD DATA CONVULSION FUNCTION
function addDataConv_7() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_7.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s7").appendChild(node);
}

// STOPWATCH-7 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_7() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_7.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s7").appendChild(node);
}

// STOPWATCH-7 START FUNCTION
function startSeven() {
  let startTime = Date.now() - runningTime_7;

  stopwatchInterval_7 = setInterval(() => {
    runningTime_7 = Date.now() - startTime;
    stopwatch_7.textContent = calculateTimeSeven(runningTime_7);
  }, 1000);
}

// STOPWATCH-7 PLAY-PAUSE FUNCTION
function playPauseSeven() {
  const isPaused = !playPauseButton_7.classList.contains("running");

  if (isPaused) {
    playPauseButton_7.classList.add("running");
    startSeven();
  } else {
    playPauseButton_7.classList.remove("running");
    pauseSeven();
  }
}

// STOPWATCH-7 PAUSE FUNCTION
function pauseSeven() {
  clearInterval(stopwatchInterval_7);
}

// STOPWATCH-7 STOP FUNCTION
function stopSeven() {
  playPauseButton_7.classList.remove("running");
  runningTime_7 = 0;
  clearInterval(stopwatchInterval_7);
  stopwatch_7.textContent = "00:00";
}

// STOPWATCH-7 CALCULATE TIME FUNCTION
function calculateTimeSeven(runningTime_7) {
  const total_seconds = Math.floor(runningTime_7 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

//---------------------------8-------------------------------

// STOPWATCH-8 VARIABLES
const stopwatch_8 = document.getElementById("stopwatch_8");
const playPauseButton_8 = document.getElementById("play-pause_8");
const stopButton_8 = document.getElementById("stop_8");
let stopwatchInterval_8;
let runningTime_8 = 0;

// STOPWATCH-8 DATA VARIABLES
const convStart_8 = document.getElementById("conv-start-8");
const convEnd_8 = document.getElementById("conv-end-8");
const expEnd_8 = document.getElementById("exp-end-8");

// STOPWATCH-8 EVENT LISTENERS
playPauseButton_8.addEventListener("click", playPauseEight);
stopButton_8.addEventListener("click", stopEight);

// STOPWATCH-8 DATA EVENT LISTENERS
convStart_8.addEventListener("click", addDataConv_8);
convEnd_8.addEventListener("click", addDataFconv_8);

// STOPWATCH-8 ADD DATA CONVULSION FUNCTION
function addDataConv_8() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_8.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s8").appendChild(node);
}

// STOPWATCH-8 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_8() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_8.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s8").appendChild(node);
}

// STOPWATCH-8 START FUNCTION
function startEight() {
  let startTime = Date.now() - runningTime_8;

  stopwatchInterval_8 = setInterval(() => {
    runningTime_8 = Date.now() - startTime;
    stopwatch_8.textContent = calculateTimeEight(runningTime_8);
  }, 1000);
}

// STOPWATCH-8 PLAY-PAUSE FUNCTION
function playPauseEight() {
  const isPaused = !playPauseButton_8.classList.contains("running");

  if (isPaused) {
    playPauseButton_8.classList.add("running");
    startEight();
  } else {
    playPauseButton_8.classList.remove("running");
    pauseEight();
  }
}

// STOPWATCH-8 PAUSE FUNCTION
function pauseEight() {
  clearInterval(stopwatchInterval_8);
}

// STOPWATCH-8 STOP FUNCTION
function stopEight() {
  playPauseButton_8.classList.remove("running");
  runningTime_8 = 0;
  clearInterval(stopwatchInterval_8);
  stopwatch_8.textContent = "00:00";
}

// STOPWATCH-8 CALCULATE TIME FUNCTION
function calculateTimeEight(runningTime_8) {
  const total_seconds = Math.floor(runningTime_8 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

//-----------------------------9------------------------

// STOPWATCH-9 VARIABLES
const stopwatch_9 = document.getElementById("stopwatch_9");
const playPauseButton_9 = document.getElementById("play-pause_9");
const stopButton_9 = document.getElementById("stop_9");
let stopwatchInterval_9;
let runningTime_9 = 0;

// STOPWATCH-9 DATA VARIABLES
const convStart_9 = document.getElementById("conv-start-9");
const convEnd_9 = document.getElementById("conv-end-9");
const expEnd_9 = document.getElementById("exp-end-9");

// STOPWATCH-9 EVENT LISTENERS
playPauseButton_9.addEventListener("click", playPauseNine);
stopButton_9.addEventListener("click", stopNine);

// STOPWATCH-9 DATA EVENT LISTENERS
convStart_9.addEventListener("click", addDataConv_9);
convEnd_9.addEventListener("click", addDataFconv_9);

// STOPWATCH-9 ADD DATA CONVULSION FUNCTION
function addDataConv_9() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_9.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s9").appendChild(node);
}

// STOPWATCH-9 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_9() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_9.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s9").appendChild(node);
}

// STOPWATCH-9 START FUNCTION
function startNine() {
  let startTime = Date.now() - runningTime_9;

  stopwatchInterval_9 = setInterval(() => {
    runningTime_9 = Date.now() - startTime;
    stopwatch_9.textContent = calculateTimeNine(runningTime_9);
  }, 1000);
}

// STOPWATCH-9 PLAY-PAUSE FUNCTION
function playPauseNine() {
  const isPaused = !playPauseButton_9.classList.contains("running");

  if (isPaused) {
    playPauseButton_9.classList.add("running");
    startNine();
  } else {
    playPauseButton_9.classList.remove("running");
    pauseNine();
  }
}

// STOPWATCH-9 PAUSE FUNCTION
function pauseNine() {
  clearInterval(stopwatchInterval_9);
}

// STOPWATCH-9 STOP FUNCTION
function stopNine() {
  playPauseButton_9.classList.remove("running");
  runningTime_9 = 0;
  clearInterval(stopwatchInterval_9);
  stopwatch_9.textContent = "00:00";
}

// STOPWATCH-9 CALCULATE TIME FUNCTION
function calculateTimeNine(runningTime_9) {
  const total_seconds = Math.floor(runningTime_9 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

// FINAL BOX THREE -------------------------------------------------------------

// START BOX FOUR ------------------10-----------------

// STOPWATCH-10 VARIABLES
const stopwatch_10 = document.getElementById("stopwatch_10");
const playPauseButton_10 = document.getElementById("play-pause_10");
const stopButton_10 = document.getElementById("stop_10");
let stopwatchInterval_10;
let runningTime_10 = 0;

// STOPWATCH-10 DATA VARIABLES
const convStart_10 = document.getElementById("conv-start-10");
const convEnd_10 = document.getElementById("conv-end-10");
const expEnd_10 = document.getElementById("exp-end-10");

// STOPWATCH-10 EVENT LISTENERS
playPauseButton_10.addEventListener("click", playPauseTen);
stopButton_10.addEventListener("click", stopTen);

// STOPWATCH-10 DATA EVENT LISTENERS
convStart_10.addEventListener("click", addDataConv_10);
convEnd_10.addEventListener("click", addDataFconv_10);

// STOPWATCH-10 ADD DATA CONVULSION FUNCTION
function addDataConv_10() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_10.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s10").appendChild(node);
}

// STOPWATCH-10 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_10() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_10.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s10").appendChild(node);
}

// STOPWATCH-10 START FUNCTION
function startTen() {
  let startTime = Date.now() - runningTime_10;

  stopwatchInterval_10 = setInterval(() => {
    runningTime_10 = Date.now() - startTime;
    stopwatch_10.textContent = calculateTimeTen(runningTime_10);
  }, 1000);
}

// STOPWATCH-10 PLAY-PAUSE FUNCTION
function playPauseTen() {
  const isPaused = !playPauseButton_10.classList.contains("running");

  if (isPaused) {
    playPauseButton_10.classList.add("running");
    startTen();
  } else {
    playPauseButton_10.classList.remove("running");
    pauseTen();
  }
}

// STOPWATCH-10 PAUSE FUNCTION
function pauseTen() {
  clearInterval(stopwatchInterval_10);
}

// STOPWATCH-10 STOP FUNCTION
function stopTen() {
  playPauseButton_10.classList.remove("running");
  runningTime_10 = 0;
  clearInterval(stopwatchInterval_10);
  stopwatch_10.textContent = "00:00";
}

// STOPWATCH-10 CALCULATE TIME FUNCTION
function calculateTimeTen(runningTime_10) {
  const total_seconds = Math.floor(runningTime_10 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

//-----------------------11--------------------------

// STOPWATCH-11 VARIABLES
const stopwatch_11 = document.getElementById("stopwatch_11");
const playPauseButton_11 = document.getElementById("play-pause_11");
const stopButton_11 = document.getElementById("stop_11");
let stopwatchInterval_11;
let runningTime_11 = 0;

// STOPWATCH-11 DATA VARIABLES
const convStart_11 = document.getElementById("conv-start-11");
const convEnd_11 = document.getElementById("conv-end-11");
const expEnd_11 = document.getElementById("exp-end-11");

// STOPWATCH-11 EVENT LISTENERS
playPauseButton_11.addEventListener("click", playPauseEleven);
stopButton_11.addEventListener("click", stopEleven);

// STOPWATCH-11 DATA EVENT LISTENERS
convStart_11.addEventListener("click", addDataConv_11);
convEnd_11.addEventListener("click", addDataFconv_11);

// STOPWATCH-11 ADD DATA CONVULSION FUNCTION
function addDataConv_11() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_11.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s11").appendChild(node);
}

// STOPWATCH-11 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_11() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_11.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s11").appendChild(node);
}

// STOPWATCH-11 START FUNCTION
function startEleven() {
  let startTime = Date.now() - runningTime_11;

  stopwatchInterval_11 = setInterval(() => {
    runningTime_11 = Date.now() - startTime;
    stopwatch_11.textContent = calculateTimeEleven(runningTime_11);
  }, 1000);
}

// STOPWATCH-11 PLAY-PAUSE FUNCTION
function playPauseEleven() {
  const isPaused = !playPauseButton_11.classList.contains("running");

  if (isPaused) {
    playPauseButton_11.classList.add("running");
    startEleven();
  } else {
    playPauseButton_11.classList.remove("running");
    pauseEleven();
  }
}

// STOPWATCH-11 PAUSE FUNCTION
function pauseEleven() {
  clearInterval(stopwatchInterval_11);
}

// STOPWATCH-11 STOP FUNCTION
function stopEleven() {
  playPauseButton_11.classList.remove("running");
  runningTime_11 = 0;
  clearInterval(stopwatchInterval_11);
  stopwatch_11.textContent = "00:00";
}

// STOPWATCH-11 CALCULATE TIME FUNCTION
function calculateTimeEleven(runningTime_11) {
  const total_seconds = Math.floor(runningTime_11 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

//------------------------12------------------------------

// STOPWATCH-12 VARIABLES
const stopwatch_12 = document.getElementById("stopwatch_12");
const playPauseButton_12 = document.getElementById("play-pause_12");
const stopButton_12 = document.getElementById("stop_12");
let stopwatchInterval_12;
let runningTime_12 = 0;

// STOPWATCH-12 DATA VARIABLES
const convStart_12 = document.getElementById("conv-start-12");
const convEnd_12 = document.getElementById("conv-end-12");
const expEnd_12 = document.getElementById("exp-end-12");

// STOPWATCH-12 EVENT LISTENERS
playPauseButton_12.addEventListener("click", playPauseTwelve);
stopButton_12.addEventListener("click", stopTwelve);

// STOPWATCH-12 DATA EVENT LISTENERS
convStart_12.addEventListener("click", addDataConv_12);
convEnd_12.addEventListener("click", addDataFconv_12);

// STOPWATCH-12 ADD DATA CONVULSION FUNCTION
function addDataConv_12() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_12.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s12").appendChild(node);
}

// STOPWATCH-12 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_12() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_12.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s12").appendChild(node);
}

// STOPWATCH-12 START FUNCTION
function startTwelve() {
  let startTime = Date.now() - runningTime_12;

  stopwatchInterval_12 = setInterval(() => {
    runningTime_12 = Date.now() - startTime;
    stopwatch_12.textContent = calculateTimeTwelve(runningTime_12);
  }, 1000);
}

// STOPWATCH-12 PLAY-PAUSE FUNCTION
function playPauseTwelve() {
  const isPaused = !playPauseButton_12.classList.contains("running");

  if (isPaused) {
    playPauseButton_12.classList.add("running");
    startTwelve();
  } else {
    playPauseButton_12.classList.remove("running");
    pauseTwelve();
  }
}

// STOPWATCH-12 PAUSE FUNCTION
function pauseTwelve() {
  clearInterval(stopwatchInterval_12);
}

// STOPWATCH-12 STOP FUNCTION
function stopTwelve() {
  playPauseButton_12.classList.remove("running");
  runningTime_12 = 0;
  clearInterval(stopwatchInterval_12);
  stopwatch_12.textContent = "00:00";
}

// STOPWATCH-12 CALCULATE TIME FUNCTION
function calculateTimeTwelve(runningTime_12) {
  const total_seconds = Math.floor(runningTime_12 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

// FINAL BOX FOUR ------------------------------------------

// START BOX FIVE -----------------13------------------------

// STOPWATCH-13 VARIABLES
const stopwatch_13 = document.getElementById("stopwatch_13");
const playPauseButton_13 = document.getElementById("play-pause_13");
const stopButton_13 = document.getElementById("stop_13");
let stopwatchInterval_13;
let runningTime_13 = 0;

// STOPWATCH-13 DATA VARIABLES
const convStart_13 = document.getElementById("conv-start-13");
const convEnd_13 = document.getElementById("conv-end-13");
const expEnd_13 = document.getElementById("exp-end-13");

// STOPWATCH-13 EVENT LISTENERS
playPauseButton_13.addEventListener("click", playPauseThirteen);
stopButton_13.addEventListener("click", stopThirteen);

// STOPWATCH-13 DATA EVENT LISTENERS
convStart_13.addEventListener("click", addDataConv_13);
convEnd_13.addEventListener("click", addDataFconv_13);

// STOPWATCH-13 ADD DATA CONVULSION FUNCTION
function addDataConv_13() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_13.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s13").appendChild(node);
}

// STOPWATCH-13 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_13() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_13.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s13").appendChild(node);
}

// STOPWATCH-13 START FUNCTION
function startThirteen() {
  let startTime = Date.now() - runningTime_13;

  stopwatchInterval_13 = setInterval(() => {
    runningTime_13 = Date.now() - startTime;
    stopwatch_13.textContent = calculateTimeThirteen(runningTime_13);
  }, 1000);
}

// STOPWATCH-13 PLAY-PAUSE FUNCTION
function playPauseThirteen() {
  const isPaused = !playPauseButton_13.classList.contains("running");

  if (isPaused) {
    playPauseButton_13.classList.add("running");
    startThirteen();
  } else {
    playPauseButton_13.classList.remove("running");
    pauseThirteen();
  }
}

// STOPWATCH-13 PAUSE FUNCTION
function pauseThirteen() {
  clearInterval(stopwatchInterval_13);
}

// STOPWATCH-13 STOP FUNCTION
function stopThirteen() {
  playPauseButton_13.classList.remove("running");
  runningTime_13 = 0;
  clearInterval(stopwatchInterval_13);
  stopwatch_13.textContent = "00:00";
}

// STOPWATCH-13 CALCULATE TIME FUNCTION
function calculateTimeThirteen(runningTime_13) {
  const total_seconds = Math.floor(runningTime_13 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

//---------------------14--------------------------

// STOPWATCH-14 VARIABLES
const stopwatch_14 = document.getElementById("stopwatch_14");
const playPauseButton_14 = document.getElementById("play-pause_14");
const stopButton_14 = document.getElementById("stop_14");
let stopwatchInterval_14;
let runningTime_14 = 0;

// STOPWATCH-14 DATA VARIABLES
const convStart_14 = document.getElementById("conv-start-14");
const convEnd_14 = document.getElementById("conv-end-14");
const expEnd_14 = document.getElementById("exp-end-14");

// STOPWATCH-14 EVENT LISTENERS
playPauseButton_14.addEventListener("click", playPauseFourteen);
stopButton_14.addEventListener("click", stopFourteen);

// STOPWATCH-14 DATA EVENT LISTENERS
convStart_14.addEventListener("click", addDataConv_14);
convEnd_14.addEventListener("click", addDataFconv_14);

// STOPWATCH-14 ADD DATA CONVULSION FUNCTION
function addDataConv_14() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_14.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s14").appendChild(node);
}

// STOPWATCH-14 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_14() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_14.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s14").appendChild(node);
}

// STOPWATCH-14 START FUNCTION
function startFourteen() {
  let startTime = Date.now() - runningTime_14;

  stopwatchInterval_14 = setInterval(() => {
    runningTime_14 = Date.now() - startTime;
    stopwatch_14.textContent = calculateTimeFourteen(runningTime_14);
  }, 1000);
}

// STOPWATCH-14 PLAY-PAUSE FUNCTION
function playPauseFourteen() {
  const isPaused = !playPauseButton_14.classList.contains("running");

  if (isPaused) {
    playPauseButton_14.classList.add("running");
    startFourteen();
  } else {
    playPauseButton_14.classList.remove("running");
    pauseFourteen();
  }
}

// STOPWATCH-14 PAUSE FUNCTION
function pauseFourteen() {
  clearInterval(stopwatchInterval_14);
}

// STOPWATCH-14 STOP FUNCTION
function stopFourteen() {
  playPauseButton_14.classList.remove("running");
  runningTime_14 = 0;
  clearInterval(stopwatchInterval_14);
  stopwatch_14.textContent = "00:00";
}

// STOPWATCH-14 CALCULATE TIME FUNCTION
function calculateTimeFourteen(runningTime_14) {
  const total_seconds = Math.floor(runningTime_14 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

//-----------------------------------15--------------------------------------

// STOPWATCH-15 VARIABLES
const stopwatch_15 = document.getElementById("stopwatch_15");
const playPauseButton_15 = document.getElementById("play-pause_15");
const stopButton_15 = document.getElementById("stop_15");
let stopwatchInterval_15;
let runningTime_15 = 0;

// STOPWATCH-15 DATA VARIABLES
const convStart_15 = document.getElementById("conv-start-15");
const convEnd_15 = document.getElementById("conv-end-15");
const expEnd_15 = document.getElementById("exp-end-15");

// STOPWATCH-15 EVENT LISTENERS
playPauseButton_15.addEventListener("click", playPauseFifteen);
stopButton_15.addEventListener("click", stopFifteen);

// STOPWATCH-15 DATA EVENT LISTENERS
convStart_15.addEventListener("click", addDataConv_15);
convEnd_15.addEventListener("click", addDataFconv_15);

// STOPWATCH-15 ADD DATA CONVULSION FUNCTION
function addDataConv_15() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_15.textContent);
  node.appendChild(textnode);
  document.getElementById("row-1_s15").appendChild(node);
}

// STOPWATCH-15 ADD DATA FINAL CONVULSION FUNCTION
function addDataFconv_15() {
  const node = document.createElement("td");
  const textnode = document.createTextNode(stopwatch_15.textContent);
  node.appendChild(textnode);
  document.getElementById("row-2_s15").appendChild(node);
}

// STOPWATCH-15 START FUNCTION
function startFifteen() {
  let startTime = Date.now() - runningTime_15;

  stopwatchInterval_15 = setInterval(() => {
    runningTime_15 = Date.now() - startTime;
    stopwatch_15.textContent = calculateTimeFifteen(runningTime_15);
  }, 1000);
}

// STOPWATCH-15 PLAY-PAUSE FUNCTION
function playPauseFifteen() {
  const isPaused = !playPauseButton_15.classList.contains("running");

  if (isPaused) {
    playPauseButton_15.classList.add("running");
    startFifteen();
  } else {
    playPauseButton_15.classList.remove("running");
    pauseFifteen();
  }
}

// STOPWATCH-15 PAUSE FUNCTION
function pauseFifteen() {
  clearInterval(stopwatchInterval_15);
}

// STOPWATCH-15 STOP FUNCTION
function stopFifteen() {
  playPauseButton_15.classList.remove("running");
  runningTime_15 = 0;
  clearInterval(stopwatchInterval_15);
  stopwatch_15.textContent = "00:00";
}

// STOPWATCH-15 CALCULATE TIME FUNCTION
function calculateTimeFifteen(runningTime_15) {
  const total_seconds = Math.floor(runningTime_15 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

// FINAL APP
