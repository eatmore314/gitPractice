let myImage = document.getElementById("nextButton");
let myArtist = document.getElementById("myArtist");
let myTitle = document.getElementById("myTitle");
let myAudio = document.getElementById("myAudio");
let nextButton = document.getElementById("nextButton");
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

nextButton.addEventListener("click", ()=> {
    currentIndex = (currentIndex + 1) % playlist.length;
    updateTrack()
})

updateTrack();