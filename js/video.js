function play() {
    var video=document.getElementById("videoPlayer");
    video.play();
}
function pause(){
    var video = document.getElementById("videoPlayer");
    video.pause();
}
function stop(){
    var video = document.getElementById("videoPlayer");
    video.pause();
    video.currentTime = 0;
}
function speedUp(){
    var video = document.getElementById("videoPlayer");
    video.play();
    video.playbackRate = 2;
}
function slowDown(){
    var video = document.getElementById("videoPlayer");
    video.play();
    video.playbackRate = 0.5;
}
function normalSpeed() {
    var video = document.getElementById("videoPlayer");
    video.play();
    video.playbackRate = 1;
}