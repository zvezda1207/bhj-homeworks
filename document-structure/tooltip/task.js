document.querySelectorAll(".has-tooltip").forEach(element => {
    element.addEventListener("click", function(event) {
        event.preventDefault();

        const tooltip = document.querySelector(".tooltip");
        tooltip.textContent = this.getAttribute("title");
        tooltip.classList.add("tooltip_active");          

        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.bottom}px`;
    });
});

document.addEventListener("click", function(event) {
    if (!event.target.classList.contains("has-tooltip")) {
        const tooltip = document.querySelector(".tooltip");
        tooltip.classList.remove("tooltip_active");
    }
});