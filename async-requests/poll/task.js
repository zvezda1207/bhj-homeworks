let pollAnswers = document.getElementById("poll__answers");
let pollTitle = document.getElementById("poll__title");
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.onload = function () {

    if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        pollTitle.textContent = response.data.title;
        response.data.answers.forEach((answer) => {
          let button = document.createElement("button");
          button.className = "poll__answer";
          button.textContent = answer;
          pollAnswers.appendChild(button);

          button.onclick = function() {
            alert("Спасибо, ваш голос засчитан!");
          };
        });
                         
    } else {
      console.error("Ошибка загрузки" + xhr.status);
    }
};


