var video = videojs('videoBackground');

console.log(videojs);

console.log(video);

video.ready(function(){
	 setTimeout(function(){
	 	video.play();
	 }, 3000);
});