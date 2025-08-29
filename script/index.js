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


//call button functionality
const callButtons = document.querySelectorAll('.call-btn');
const coins = document.getElementById('coin-btn');
const callHistoryContainer = document.querySelector('aside'); 

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function() {
        let currentCoins = parseInt(coins.innerText);
        
        if (currentCoins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        currentCoins -= 20;
        coins.innerText = currentCoins;

        const card = callButtons[i].closest('.card-container');
        const serviceName = card.querySelector('.service-name').innerText;
        const serviceNumber = card.querySelector('.helpline-num').innerText;

        alert(`Calling ${serviceName} ${serviceNumber}...`);

        //set local time
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        
        const historyEntry = document.createElement('div');
        historyEntry.classList.add('border-2','border-none','bg-gray-100','rounded-[8px]','mb-2','h-[70px]','px-2','py-2', 'flex', 'justify-between', 'items-center');
        historyEntry.innerHTML = `
           <div>
             <p class="font-semibold mb-1">${serviceName}</p>
             <p class="text-gray-500 text-sm">${serviceNumber}</p>
           </div>
             <p class="text-gray-900 text-[13px] font-medium mt-[25px]">${timeString}</p>
        `;
        callHistoryContainer.appendChild(historyEntry);
    });
}

//clear call history functionality
const clearButton = document.getElementById('clear-btn');
const historyDiv = document.getElementById('history-div');

clearButton.addEventListener('click',function(){
   callHistoryContainer.innerHTML = '';
   callHistoryContainer.appendChild(historyDiv);
});
