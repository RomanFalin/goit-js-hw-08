import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const iframePlayer = new Player(iframe);

function onVideoPlay(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

iframePlayer.on("timeupdate", throttle(onVideoPlay, 1000));
iframePlayer.setCurrentTime(localStorage.getItem("videoplayer-current-time")).catch(function (error) {
    return;
});