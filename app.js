const catImg = document.getElementById('cat-img');
const dogImg = document.getElementById('dog-img');
const horseImg = document.getElementById('horse-img');


catImg.addEventListener('click', () => {
    let catAudio = document.getElementById('cat-sound');
    catAudio.play();


    catImg.classList.add('animated');
    setTimeout(function() {
        catImg.classList.remove('animated');
    }, 2000);

});

dogImg.addEventListener('click', () =>{
    let dogAudio = document.getElementById('dog-sound');
    dogAudio.play();
    dogImg.classList.add('animated-dog');
    setTimeout(function() {
        dogImg.classList.remove('animated-dog');
    }, 2000);

});
horseImg.addEventListener('click', () =>{
    let horseAudio = document.getElementById('horse-sound');
    horseAudio.playbackRate = 0.4;
    horseAudio.play();
    horseImg.classList.add('animated-horse');
    setTimeout(function() {
        horseImg.classList.remove('animated-horse');
    }, 5000);

});


//const keyA = document.dispatchEvent(new KeyboardEvent ('keypress,', { 'key': 'a' }));

//const keyA = document.addEventListener('keydown', () => { console.log('test')})

    // eslint-disable-next-line no-empty
//if( keyA.textContent === 'a'){
 // let catAudio = document.getElementById('cat-sound');
   //// catAudio.play();

