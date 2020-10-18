window.addEventListener('load',()=>{
    const sounds = document.querySelectorAll('.sound');
    const taps = document.querySelectorAll('.taps div');
    const visual = document.querySelector('.visual');
    let colors=[
        'red'
        ,'rgb(0, 172, 86)',
        'rgb(26, 12, 109)',
        'rgb(169, 0, 84)',
        'rgb(5, 144, 175)',
        'rgb(121, 3, 150)',
        'rgb(115, 179, 13)',
        'rgb(138, 6, 112)'
    ]

    taps.forEach((tap,index) => {
        tap.addEventListener('click',function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createffect(index)
        })
    })

    // createffect
    const createffect = (index)=>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation= 'jump 1.5s ease';
        bubble.addEventListener('animationend',function () {
            visual.removeChild(this);
        })
    }
});