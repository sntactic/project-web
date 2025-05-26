let players = []
let player 
let touche = {}
let buzz = [true , true , true , true]
let buzzer = true

for (let i = 1 ; i<= 4 ; i++){
    players.push(document.getElementById(`joueur${i}`))
}

function signal_(frequence , duree , type) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = type; 
    oscillator.frequency.setValueAtTime(frequence, audioCtx.currentTime); 
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime); 

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, duree); 
}


function remove_hover(){
    for (plyr of players){
        plyr.classList.remove('hover')
    }
}

function select_player(n){
    return players[n-1]
}



document.addEventListener('keydown' , (e) => {
    player = select_player(e.key)

    touche[e.key] = true

    if ((player && buzz[e.key-1]===true && buzzer) || (player && (touche['Enter'] || touche[' ']))){
        console.log(buzzer)
        if(buzzer === true ) {
            signal_(350 , 500 , "square")
            buzzer = false
        }
        console.log(buzzer)
        buzz[e.key*1-1] = false
        player.classList.add('hover')
        scr = document.getElementById(`score${e.key}`)

        if (touche['Enter']){
            signal_(600 , 250 , "sin")
            scr.textContent = scr.textContent*1+1
        }

        if (touche[' ']){
            signal_(100 , 250 , "square")
            scr.textContent = scr.textContent*1-1
        }
        touche = {}
    }

    document.addEventListener('keyup' , (e) => {
        if(e.key === "Shift"){
            buzzer = true
        }

        if(e.key === "z"){
            touche = {}
            remove_hover()
            buzz = [true , true , true , true]
            buzzer = true
        }
    
    })
})
