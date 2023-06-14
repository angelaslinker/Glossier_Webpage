const video = document.getElementById("myVideo");

video.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
});
