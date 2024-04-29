const audios = document.querySelectorAll("audio");
let buttonsArray = document.getElementsByClassName("btn");
let stopBtn = document.getElementsByClassName("stop");


const buttons = Array.from(buttonsArray);


buttons.forEach((button,indexOfBtn) => {
    button.addEventListener("click",() => {
        playAudio(indexOfBtn);
    });
});


function playAudio(indexOfBtn){

    audios.forEach((audio,indexOfAudio) =>{
        if (indexOfAudio !== indexOfBtn){
            audio.pause();
        }
       
    });
    audios[indexOfBtn].play();
}


stopBtn[0].addEventListener("click",function(){
    audios.forEach(audio =>{
        audio.pause();
    });
});