(() => {
    let score = 0;
    let misses = 0;
    let maxScore = 10;
    let maxMisses = 5;
    
    let moleKillCount = document.getElementById("dead");
    let lostes = document.getElementById("lost"); 

    function getHole(index) {
        return document.getElementById(`hole${index}`);
    };
         
    for (let i = 1; i <= 9; i++) {
        getHole(i).onclick = () => {
            if (getHole(i).className.includes("hole_has-mole")) {
                score++;  
                moleKillCount.textContent = score;
            } else {
                misses++;
                lostes.textContent = misses;
            }
              
            if (score >= maxScore) {
                alert('Вы выиграли!');
                resetGame();
            } else if (misses >= maxMisses) {
                alert('Вы проиграли!');
                resetGame();
            }
        };
    }    

    function resetGame() {
        score = 0;
        misses = 0;
        moleKillCount.textContent = score;
        lostes.textContent = misses;
    };

  })();

//   (() => {

//     let score = 0;
//     let misses = 0;
//     let maxScore = 10;
//     let maxMisses = 5;

//     let moleKillCount = document.getElementById("dead");
//     let lostes = document.getElementById("lost");

//     function getHole(index) {
//         return document.getElementById(`hole${index}`);
//     };

//     for (let i = 1; i <= 9; i++) {
//         getHole(i).onclick = () => {
//             if (getHole(i).className.includes("hole_has-mole")) {
//                 score++;
//                 moleKillCount.textContent = score; 
//             } else {
//                 misses++;
//                 lostes.textContent = misses; 
//             }

//             if (score >= maxScore) {
//                 alert('Вы выиграли!');
//                 resetGame();
//             } else if (misses >= maxMisses) {
//                 alert('Вы проиграли!');
//                 resetGame();
//             }
//         };
//     }

//     function resetGame() {
//         score = 0;
//         misses = 0;
//         moleKillCount.textContent = score;
//         lostes.textContent = misses; 
//     };

// })();
