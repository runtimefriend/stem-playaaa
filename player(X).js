const testSong = "Mona Wonderlick - Golden"

let audioBuffer = null;
const loadFile = ( path ) => {
    var soundFile = document.createElement("audio");
    soundFile.preload = "auto";


    //Load the sound file (using a source element for expandability)
    var src = document.createElement("source");
    src.src = `./audio/${testSong}/` + path;
    soundFile.appendChild(src);

    //Load the audio tag
    //It auto plays as a fallback
    soundFile.load();
    soundFile.volume = 0.5;
    soundFile.currentTime = 2.5;
    return soundFile
}

const playAll1 = () => {
    // let audio = new Audio( 'audio/'+testSong+'/bass.mp3' );
    // audio.currentTime = 0;
    // audio.play();

    loadFile( `bass.mp4` ).play()
    loadFile( `guitar.mp4` ).play()
    loadFile( `drums.mp4` ).play()
    loadFile( `melody1.mp4` ).play()
    loadFile( `melody2.mp4` ).play()

}


let audioSource
function playAll2() {
    var audioContext = new window.AudioContext()

    audioSource = audioContext.createBufferSource()
	var serverRequest = new XMLHttpRequest()
	serverRequest.open("GET", 'audio/'+testSong+'/melody1.mp4', true)
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