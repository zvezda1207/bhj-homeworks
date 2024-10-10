let timerStart = 59; 

        function countdown() {
            const timerElement = document.getElementById('timer');
            timerElement.textContent = timerStart; 
            
            if (timerStart <= 0) { 
                clearInterval(timerInterval); 
                alert("Вы победили в конкурсе!"); 
            } else {
                timerStart--; 
            }
        }

        const timerInterval = setInterval(countdown, 1000); 