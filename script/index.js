//heart count functionality

const hearts = document.querySelectorAll('.heart-btn');
const heartCount = document.getElementById('heart-count')

let totalHeartCount = 0;

for(let i = 0; i < hearts.length; i++){
    hearts[i].addEventListener('click', function(){
        totalHeartCount++;

        heartCount.innerText = totalHeartCount;

        hearts[i].classList.add('fa-solid', 'text-red-500'); 
    })
}