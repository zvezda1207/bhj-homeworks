const uploadForm = document.getElementById("form");
const progress = document.getElementById("progress");
const fileInput = document.getElementById("file");

fileInput.addEventListener("change", function() {
    progress.value = 0.0;  
});

uploadForm.addEventListener("submit", function(event) {
    event.preventDefault();  
    
    const formData = new FormData(uploadForm);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

    xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
            const percentComplete = e.loaded / e.total;
            progress.value = percentComplete;
        }
    });

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("Файл успешно загружен на сервер:", xhr.responseText);
        } else {
            console.error("Ошибка загрузки:", xhr.statusText);
        }
    };
    
    xhr.onerror = function() {
        console.log("Произошла ошибка при загрузке данных на сервер:", xhr.statusText);
    }

    xhr.send(formData);
    });
