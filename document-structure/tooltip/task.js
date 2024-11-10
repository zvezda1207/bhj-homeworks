let tooltipTextActive = null;

document.querySelectorAll(".has-tooltip").forEach(element => {
    element.addEventListener("click", function(event) {
        event.preventDefault();

        let tooltip = document.querySelector(".tooltip");

        if (!tooltip) {
            tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            document.body.appendChild(tooltip);
        }
        const tooltipText = this.getAttribute("title");

        if (tooltipTextActive === tooltipText) {
            tooltip.classList.toggle("tooltip_active"); 
            return; 
        }

        tooltip.textContent = tooltipText;
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



