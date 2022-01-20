const audioTrack = document.querySelector("audio");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");

playButton.addEventListener("click", playAudioTrack);

function playAudioTrack(ev){
    audioTrack.play();
}

pauseButton.addEventListener("click", pauseAudioTrack);

function pauseAudioTrack(ev){
    audioTrack.pause();
}