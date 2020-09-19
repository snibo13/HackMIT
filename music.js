let playlist = ["tbnLqRW9Ef0"];
//Lofi music streams
let lofi =
["OVPPOwMpSpQ","5qap5aO4i9A","DWcJFNfaw9c","-5KAN9_CzSA","7NOSDKb0HlU"];

function getPlaylist() {
  if (playlist.length == 0) {
    return lofi[Math.floor(Math.random() * lofi.length)];
  } else {
    return playlist.shift(); //Queue data structure
  }
}

function addToPlaylist(videoURL) {
  //All text after the equals sign in url
  //https://www.youtube.com/watch?v=-5KAN9_CzSA
  let videoID = videoURL.substring(videoURL.indexOf("=") + 1);
  playlist.push(videoID);
  //If default lofi was playing before
  if (playlist.length == 1) {
    getPlaylist();
  }

}
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '200',
    width: '200',
    videoId: getPlaylist(),
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
//player.cueVideoById(lofi[0]);

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  //Video ended
  if (event.data == 0) {
    event.target.videoId = getPlaylist();
    //event.target.playerVideo();

  }

}

function stopVideo() {
  player.stopVideo();
}
