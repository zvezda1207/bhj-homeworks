let clickCount = 0;
const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

function updateCounter() {
    clickCount++;
    clickerCounter.textContent = clickCount;

    if (clickCount % 2 === 0) {
        cookie.style.width = "100px";
        cookie.style.height = "auto";
    } else {
        cookie.style.width = "250px";
        cookie.style.height = "auto"; 
    }    
}

cookie.onclick = updateCounter;



