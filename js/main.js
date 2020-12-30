// ----------------- Button sound ------------

var bleep = new Audio();
bleep.src = "./assets/button-09.mp3";
bleep.volume = 0.3;

// -------------- Song Collection -------------

var audioCollection = [
    // ----------- English Songs --------------
    './assets/Music/videoplayback.m4a',
    './assets/Music/videoplayback (1).m4a',
    './assets/Music/videoplayback (2).m4a',
    './assets/Music/videoplayback (3).m4a',
    './assets/Music/videoplayback (4).m4a',
    './assets/Music/videoplayback (9).m4a',
    './assets/Music/videoplayback (10).m4a',
    './assets/Music/videoplayback (11).m4a',
    './assets/Music/videoplayback (12).m4a',
    './assets/Music/videoplayback (13).m4a',
    './assets/Music/videoplayback (14).m4a',
    './assets/Music/videoplayback (15).m4a',
    './assets/Music/videoplayback (16).m4a',
    './assets/Music/videoplayback (17).m4a',
    './assets/Music/videoplayback (18).m4a',
    './assets/Music/videoplayback (19).m4a',
    './assets/Music/videoplayback (20).m4a',
    './assets/Music/videoplayback (21).m4a',
    './assets/Music/videoplayback (22).m4a',
    './assets/Music/videoplayback (23).m4a',
    './assets/Music/Alan-Walker-Ava-Max-Alone-Pt-II-Lyrics__FB6nO_qZQ4 (1).mp3',
    './assets/Music/FRIENDS  - Marshmello, Anne-Marie .mp3',
    // ----------- Hindi Songs ---------------
    './assets/Music/videoplayback (5).m4a',
    './assets/Music/videoplayback (6).m4a',
    './assets/Music/videoplayback (7).m4a',
    './assets/Music/videoplayback (8).m4a',
    // ----------- Anime Songs ---------------
    './assets/Music/videoplayback (24).m4a',
    './assets/Music/videoplayback (25).m4a',
    './assets/Music/videoplayback (26).m4a',
    './assets/Music/videoplayback (27).m4a',
    './assets/Music/videoplayback (28).m4a',
    './assets/Music/videoplayback (29).m4a',
    './assets/Music/videoplayback (30).m4a',
    './assets/Music/videoplayback (31).m4a',
    './assets/Music/videoplayback (32).m4a',
];

let maxCount = 21
let minCount = 0

function hindi(){
    maxCount = 25
    minCount = 22
    document.getElementById('hindi').style.color = "rgb(70, 179, 55)";
    document.getElementById('english').style.color = "rgb(53, 115, 207)";
    document.getElementById('other').style.color = "rgb(53, 115, 207)";
}

function english(){
    maxCount = 21
    minCount = 0
    document.getElementById('hindi').style.color = "rgb(53, 115, 207)";
    document.getElementById('english').style.color = "rgb(70, 179, 55)";
    document.getElementById('other').style.color = "rgb(53, 115, 207)";
}

function other(){
    maxCount = 34
    minCount = 26
    document.getElementById('hindi').style.color = "rgb(53, 115, 207)";
    document.getElementById('english').style.color = "rgb(53, 115, 207)";
    document.getElementById('other').style.color = "rgb(70, 179, 55)";
}

let index = Math.floor(Math.random() * (maxCount - minCount + 1) + minCount);
let audio = new Audio(audioCollection[index]);
audio.volume = 0.5;

let player = 0;

window.addEventListener('load', ()=>{
    var dur = Math.floor(audio.duration/60) + "min" + " " + Math.floor(audio.duration - (Math.floor(audio.duration/60))*60) + "sec";
    document.getElementById('totTime').innerHTML += dur;
    document.getElementById('currTime').innerHTML += "0min 0sec";
});

function playpauseBtn(){
    if(player == 0){
        document.querySelector('#pause').style.display = "none";
        document.querySelector('#play').style.display = "block";
    }
    if(player == 1){
        document.querySelector('#play').style.display = "none";
        document.querySelector('#pause').style.display = "block";
    }
}

function plaY(){
    audio.play();
    player = 1;
    playpauseBtn();
    document.querySelector('.playPause button').style.animationPlayState = "running";
}

function pausE(){
    audio.pause();
    player = 0;
    playpauseBtn();
    document.querySelector('.playPause button').style.animationPlayState = "paused";
}

function changE(){
    pausE()
    index = Math.floor(Math.random() * (maxCount - minCount + 1) + minCount);
    console.log(index);
    audio = new Audio(audioCollection[index]);
    plaY();
}

function repeaT(){
    audio.currentTime = 0;
}

function currTime(){
    document.getElementById('currTime').innerHTML = Math.floor(audio.currentTime/60) + "min" + " " + Math.floor(audio.currentTime - (Math.floor(audio.currentTime/60))*60) + "sec";
    document.getElementById('totTime').innerHTML = Math.floor(audio.duration/60) + "min" + " " + Math.floor(audio.duration - (Math.floor(audio.duration/60))*60) + "sec";
}

setInterval(currTime, 1000);

