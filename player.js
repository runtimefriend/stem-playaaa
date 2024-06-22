const testSong = "Mona Wonderlick - Golden"

let audioBuffer = null;

const playAll1 = () => {
    // let audio = new Audio( 'audio/'+testSong+'/bass.mp3' );
    // audio.currentTime = 0;
    // audio.play();

    var soundFile = document.createElement("audio");
    soundFile.preload = "auto";

    //Load the sound file (using a source element for expandability)
    var src = document.createElement("source");
    src.src = `./audio/${testSong}/melody1.mp4`;
    soundFile.appendChild(src);

    //Load the audio tag
    //It auto plays as a fallback
    soundFile.load();
    soundFile.volume = 0.5;
    soundFile.currentTime = 2.5;
    soundFile.play();
}

let audioSource
function playAll2() {
    var audioContext = new window.AudioContext()

    audioSource = audioContext.createBufferSource()
	var serverRequest = new XMLHttpRequest()
	serverRequest.open("GET", 'audio/'+testSong+'/melody1.mp3', true)
	serverRequest.responseType = 'arraybuffer'
	serverRequest.onload = function() {
        audioContext.decodeAudioData(serverRequest.response, function(buffer) {
            audioSource.buffer = buffer
            audioSource.start()
          })
	}
    
	serverRequest.send();
}


//loadSound( )