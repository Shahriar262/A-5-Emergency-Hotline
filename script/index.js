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


//copy count functionality

const copy = document.querySelectorAll('.copy-btn');
const copyCount = document.getElementById('copy-count');
const numbers = document.querySelectorAll('.helpline-num');

let totalCopyCount = 0;

for(let i = 0; i < copy.length; i++){
    copy[i].addEventListener('click', function(){
        const numberText = numbers[i].innerText.trim();
        navigator.clipboard.writeText(numberText)
       .then(function(){
         totalCopyCount++;
         copyCount.innerText = totalCopyCount;
         alert(`Hotline number ${numberText} copied!`);
      })
        
      .catch(function(err){
        alert(`Failed to copy ${err}`);
      });
        
    })
}