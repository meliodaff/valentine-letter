let yesBtn = document.querySelector('.yes-btn');
let noBtn = document.querySelector('.no-btn');
let image = document.querySelector('img')
let header = document.querySelector('h1')
let celebratingAudio = new Audio('chipichapa.mp3')
let sadAudio = new Audio('kitten-sounds.mp3')
let h3 = document.querySelector('h3')
let h2 = document.querySelector('h2')


let noCount = 4;
yesBtn.addEventListener('click', () => {
    header.style.fontFamily = 'arial'
    h2.style.fontFamily = 'arial'
    header.textContent = '🥰😍😘😽💋🐥YEHEY🔥🌟⭐️✨😍🥰😘'
    image.setAttribute('src', 'maracas.gif')
    image.style.width = '300px'
    noBtn.disabled = true
    noBtn.classList.add('no-cursor')
    celebratingAudio.play()
    sadAudio.pause()
    yesBtn.style.opacity = '0'
    noBtn.style.opacity = '0'
    h2.textContent = 'fishball daaaaate naaaaah'
    h3.style.opacity = '0'
})

noBtn.addEventListener('click', () => {
    noCount--
    if(noCount === 3){
        yesBtn.style.height = '60px'
        yesBtn.style.width = '60px'
        yesBtn.style.paddingRight = '70px'
        noBtn.style.height = '40px'
        noBtn.style.width = '40px'
        image.setAttribute('src', 'puss-in-boots-pleasing.gif')
        noBtn.style.fontSize = '10px'
        sadAudio.play()
        h3.style.opacity = '0%'
        header.textContent = 'Why press no'
    }
    else if (noCount === 2){
        yesBtn.style.height = '80px'
        yesBtn.style.width = '80px'
        image.setAttribute('src', 'milk-and-mocha-please.gif')
        image.style.width = '350px'
        image.style.height = '250px'
        noBtn.style.fontSize = '5px'
        header.textContent = 'stop pressing no please :(('
    }
    else if (noCount === 1){
        yesBtn.style.height = '100px'
        yesBtn.style.width = '100px'
        image.setAttribute('src', 'happy-pretty-please.gif')
        image.style.width = '390px'
        image.style.height = '250px'
        noBtn.style.fontSize = '3px'
        header.textContent = '😔😔😔😔😔'
    }
    else{
        noBtn.disabled = true
        noBtn.classList.add('no-cursor')
    }
})