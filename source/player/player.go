package player

import (
	"fmt"
	"log"
	"main/utility"
	"os"
	"path"
	"time"

	"github.com/faiface/beep"
	"github.com/faiface/beep/mp3"
	"github.com/faiface/beep/speaker"
)

func Useit() {
	home := utility.GetRootPath()

	audioPath := path.Join(home, "/Source/stem-player/audio/Mona Wonderlick - Golden")
	bassFile := path.Join(audioPath, "drums.mp3")
	fmt.Println(bassFile)
	melodyFile := path.Join(audioPath, "melody1.mp3")
	fmt.Println(melodyFile)

	f1, err1 := os.Open(bassFile)
	if err1 != nil {
		log.Fatal(err1)
	}

	f2, err2 := os.Open(melodyFile)
	if err2 != nil {
		log.Fatal(err2)
	}

	streamer1, format1, err := mp3.Decode(f1)
	if err != nil {
		log.Fatal(err)
	}
	defer streamer1.Close()

	streamer2, _, err := mp3.Decode(f2)

	if err != nil {
		log.Fatal(err)
	}
	defer streamer2.Close()

	speaker.Init(format1.SampleRate, format1.SampleRate.N(time.Second/10))

	done1 := make(chan bool)
	speaker.Play(beep.Seq(streamer1, beep.Callback(func() {
		done1 <- true
	})))

	//<-done1

	done2 := make(chan bool)
	speaker.Play(beep.Seq(streamer2, beep.Callback(func() {
		done2 <- true
	})))

	<-done2
	//beep.Silence(2)
}
