document.addEventListener ("DOMContentLoaded", () => {

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
      const valueElement = dropdown.querySelector(".dropdown__value");
      const listElement = dropdown.querySelector(".dropdown__list");

      valueElement.addEventListener("click", (event) => {
        event.stopPropagation(); // Останавливаем всплытие для управления открытием/закрытием
        listElement.classList.toggle("dropdown__list_active");  
      });
      
      const items = dropdown.querySelectorAll(".dropdown__item");
      items.forEach(item => {
        item.addEventListener("click", (event) => {
          event.preventDefault();          
          const selectedValue = item.querySelector(".dropdown__link").textContent;
          valueElement.textContent = selectedValue;
          event.stopPropagation();
          listElement.classList.remove("dropdown__list_active");
        });
      });
    });

    document.addEventListener("click", () => {
        dropdowns.forEach(dropdown => {
            const listElement = dropdown.querySelector(".dropdown__list"); 
            listElement.classList.remove("dropdown__list_active"); 
        });
    });
});

