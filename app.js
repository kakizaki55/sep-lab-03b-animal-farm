const catImg = document.getElementById('cat-img');
const dogImg = document.getElementById('dog-img');
const horseImg = document.getElementById('horse-img');


catImg.addEventListener('click', () => {
    let catAudio = document.getElementById('cat-sound');
    console.log('click');
    catAudio.play();
    catImg.classList.add('animated');
});

dogImg.addEventListener('click', () =>{
    let dogAudio = document.getElementById('dog-sound');
    dogAudio.play();

});
horseImg.addEventListener('click', () =>{
    let horseAudio = document.getElementById('horse-sound');
    horseAudio.playbackRate = 0.5;
    horseAudio.play();

});

