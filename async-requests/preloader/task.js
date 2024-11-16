let items = document.getElementById("items");
let xhr = new XMLHttpRequest();
let loader = document.getElementById("loader");

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

xhr.onload = function() {

    if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);

        loader.classList.remove("loader_active");

        let valutes = response.response.Valute;

        items.innerHTML = "";

        for (let key in valutes) {
            let charCode = valutes[key].CharCode;
            let value = valutes[key].Value; 

            items.insertAdjacentHTML("beforeend", `
                <div class="item">
                    <div class="item__code">${charCode}</div>
                    <div class="item__value">${value}</div>
                    <div class="item__currency">руб.</div>
                </div>`);                  
        }
    }
}; 

xhr.onerror = function () {
    console.error("Произошла ошибка при загрузке данных на сервер");
    loader.classList.remove("loader_active");
};


