// window.addEventListener('load', function () {
//     const sounds = document.querySelectorAll('.sound');
//     const pads = document.querySelectorAll('.pads div');
//     const visual = document.querySelector('.visual');
//     const colors = [
//         'lightgray',
//         'lightgreen',
//         'olive',
//         'mediumslateblue',
//         'mediumvioletred'
//     ]

//     console.log(sounds);
//     console.log(pads);
//     pads.forEach(function(pad,index) {
//         pad.addEventListener('click',function () {
//             sounds[index].currentTime = 0;
//             sounds[index].play();
//             createBubbles(index);
//         });
//     })

//     function createBubbles(index){
//         var bubble = document.createElement('div');
//         bubble.style.backgroundColor = colors[index];
//         bubble.style.animation = 'jump ease 1s'
//         visual.appendChild(bubble);
//         bubble.addEventListener('animationend',function(){
//             visual.removeChild(this);
//         })
//     }
// })





const colors = [
    'lightgray',
    'lightgreen',
    'olive',
    'mediumslateblue',
    'mediumvioletred'
]
const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const visual= document.querySelector('.visual');

pads.forEach(function(pad,index){
    pad.addEventListener('click',function(){
        sounds[index].currentTime=0;
        sounds[index].play();
        createBubbles(index);
    })
})

function createBubbles(index){
    var bubble = document.createElement('div');
    bubble.style.backgroundColor= colors[index];
    bubble.style.animation = 'jump 1s ease-in-out';
    visual.appendChild(bubble);
}