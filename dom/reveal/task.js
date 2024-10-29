window.addEventListener("scroll", function() {

const blocks = document.querySelectorAll(".reveal");

  blocks.forEach(block => {
    const {top, bottom} = block.getBoundingClientRect();
        if (bottom > 0 && top < window.innerHeight) {
        block.classList.add("reveal_active");    
    }
  });
});