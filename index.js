let myImage = document.getElementById("myImage");
let myArtist = document.getElementById("myArtist");
let myTitle = document.getElementById("myTitle");
let myAudio = document.getElementById("myAudio");
let nextButton = document.getElementById("nextButton");
let play = document.getElementById("playButton");
let pause = document.getElementById("pauseButton");
let reset = document.getElementById("resetButton");

let currentIndex = 0;

let playlist = [{
    image: "./images/sweet.png",
    artist: "Rheyr",
    title: "Sweet",
    song: "./music/sweet.mp3"
},
{
    image: "./images/kurse.png",
    artist: "Axgxst",
    title: "Kurse",
    song: "./music/kurse.mp3"
},
{
    image: "./images/bruhmanegod.png",
    artist: "bruhmanegod",
    title: "?",
    song: "./music/bruh.mp3"
}
]

function updateTrack() {
    const track = playlist[currentIndex];
    myImage.src = track.image;
    myArtist.textContent = track.artist;
    myTitle.textContent = track.title;
    myAudio.src = track.song;
    myAudio.load();
    myAudio.play();
}

play.addEventListener("click", ()=> {
    myAudio.play();
})

pause.addEventListener("click", ()=> {
    myAudio.pause()
})

reset.addEventListener("click", ()=> {
    myAudio.currentTime = 0;
})

nextButton.addEventListener("click", ()=> {
    currentIndex = (currentIndex + 1) % playlist.length;
    updateTrack()
})

updateTrack();