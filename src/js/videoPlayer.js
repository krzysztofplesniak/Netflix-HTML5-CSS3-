var video = videojs('videoBackground');

video.ready(function(){
	 
	 setTimeout(function(){
	 	video.play();
	 	video.volume(0); 	
	 }, 2000);
});