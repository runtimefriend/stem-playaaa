LEFT OFF: 
continue making GUI and implementing combined audio stream out




File/Folder Selection
	select folder that contains the stems

playlists 
	Song Selection (ability to drag/drop arrange , can arrange across playlists: moving song between playlists)
	Ctrl+c/v to have song in multiple lists
	

shuffle toggle - global w hotkeys
loop toggle - global w hotkeys

Melody
Accompaniment
Percussion
Bass
FX


gain
release
attack


Global Hotkeys , change playlists





Look into Unreal/Unity integration
    possibly small bit of C++ logic in editor as plugin

use Go for DLL
communicates via DLL (or as a service)
build Electron client
game engine/electron client handles audio and settings UI



ALL AUDIO PROCESSING IN APP (send out audio stream as output)

users need ability to set frame size and frame latency
prioritize our application (high priority)

Use audio ads or watermarks for free version





Software that dims selected tracks
Set normal volume and dim volume
Set dim time (attack)
Play multiple tracks at once, in sync
Ability to create playlist of multitrack songs
	also needs options for if playlist song doesn't have stems, or if they have different stems
Think about how it determines which stem is which, is it based off filename
It'd be nice to integrate into OBS, to also dim selected OBS audio tracks
What software are streamers using to play custom audio tracks
VLC? How to modify VLC or plugin for VLC?
	or possibly super-minimal interface to start songs and skip songs
Think about how to monetize or open-source + donations
OBS plugins maybe have to be open source
If standalone player, how do we connect with OBS, websocket or plugin?

Currently, in OBS can use compressor and "sidechain" to make compressor affect other channels

Making music, open-source? or Patreon exclusive, subscription use it however you like if you're subscribed? If it's good enough.