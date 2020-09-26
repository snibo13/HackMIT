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

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '170',
    width: '270',
    autoplay: 0,
    controls: 1,
    videoId: lofi[0],
  }),


  player2 = new YT.Player('player2', {
    height: '170',
    width: '270',
    autoplay: 0,
    controls: 1,
    videoId: lofi[1],
  });

  player3 = new YT.Player('player3', {
      height: '170',
      width: '270',
      autoplay: 0,
      controls: 1,
      videoId: lofi[2],
    });

}
