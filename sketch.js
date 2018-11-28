function preload(){
    
}

function setup(){
    
}

function draw(){
    
}

function playSound(sound, keyID) {
    if(keyIsDown(keyID) == true) {
         if (sound.isPlaying() == false){    
            sound.play();
         }
    }
}