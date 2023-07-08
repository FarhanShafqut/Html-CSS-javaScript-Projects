// farhan project
let gif = document.getElementById('gif')
let scroll = document.getElementById('scroll')
let play = document.getElementById("play")
let audio = new Audio('songs/1.mp3')
let countdown = document.getElementById('time')
let songIndex= 0;
let songinfo = Array.from(document.getElementsByClassName('songitems'))
let songs = [
    {songname:"NCS1",filepath:".songs/1.mp3",cover:"covers/1.jpg"},
    {songname:"NCS2",filepath:".songs/2.mp3",cover:"covers/2.jpg"},
    {songname:"NCS3",filepath:".songs/3.mp3",cover:"covers/3.jpg"},
    {songname:"NCS4",filepath:".songs/4.mp3",cover:"covers/4.jpg"},
    {songname:"NCS5",filepath:".songs/5.mp3",cover:"covers/5.jpg"},
    {songname:"NCS6",filepath:".songs/6.mp3",cover:"covers/6.jpg"},
    {songname:"NCS7",filepath:".songs/7.mp3",cover:"covers/7.jpg"},
    {songname:"NCS8",filepath:".songs/8.mp3",cover:"covers/3.jpg"},
    {songname:"NCS9",filepath:".songs/9.mp3",cover:"covers/9.jpg"}
]

let = play.addEventListener("click", ()=>{
    if (audio.paused||audio.currentTime <=0) {
        audio.play();
        play.classList.remove('fa-circle-play')
        play.classList.add('fa-pause-circle')
        gif.style.opacity=1;
        // time recorder
        function time () {
            presentTime = ((audio.duration - audio.currentTime)/60)
            presentTime =presentTime.toFixed(2);
            countdown.innerText = presentTime;
    
}
time1 = setInterval(time,600 )
    }
    else{
        audio.pause();
        play.classList.remove('fa-pause-circle')
        play.classList.add('fa-circle-play')
        gif.style.opacity=0;
        clearInterval(time1)
    }
})


audio.addEventListener('timeupdate',()=>{
    scrollProgress = parseInt((audio.currentTime/audio.duration) *100)
    scroll.value=scrollProgress
    bigg();
})

scroll.addEventListener('change',()=>{
    audio.currentTime = scroll.value * audio.duration/100;
})

songinfo.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].cover
    element.getElementsByClassName('nameOfSong')[0].innerText = songs[i].songname
})

let time1;
 Array.from(document.getElementsByClassName("smallPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        pllay();
        gif.style.opacity=1;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audio.src = (`songs/${songIndex + 1}.mp3`)
        audio.currentTime = 0;
        play.classList.remove('fa-circle-play')
        play.classList.add('fa-pause-circle')
        audio.play();
        function time () {
            presentTime = ((audio.duration - audio.currentTime)/60)
            presentTime =presentTime.toFixed(2);
            countdown.innerText = presentTime;
            // auto play
    
}
time1 = setInterval(time,600 )
})
})

// importnat part > we dont have to constantly change the element we can just create adefault setting so whenever we change a command previouse folder reverts to its previouse settings

const pllay = () => Array.from(document.getElementsByClassName("smallPlay")).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-circle-play');
    clearInterval(time1)
})

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex >=9){
        songIndex=0
    }
    else {
        songIndex = songIndex + 1;
    }
    audio.src = (`songs/${songIndex + 1}.mp3`)
    audio.currentTime = 0;
    play.classList.remove('fa-circle-play')
    play.classList.add('fa-pause-circle')
    audio.play();
})

document.getElementById('reverse').addEventListener('click', ()=>{
    if (songIndex <=0){
        songIndex=0
    }
    else {
        songIndex = songIndex - 1;
    }
    audio.src = (`songs/${songIndex + 1}.mp3`)
    audio.currentTime = 0;
    play.classList.remove('fa-circle-play')
    play.classList.add('fa-pause-circle')
    audio.play();
})

let bigg = () => {
    setInterval(() => {
      if (scroll.value == 100 && audio.paused) {
        songIndex = (songIndex + 1) % songs.length;
        audio.src = `songs/${songIndex + 1}.mp3`;
        audio.currentTime = 0;
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-pause-circle');
        audio.play();
      }
    }, 1000);
  };
  