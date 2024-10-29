const rotators = document.querySelectorAll(".rotator");

rotators.forEach(rotator => {
    const spans = rotator.querySelectorAll(".rotator__case");
    let currentIndex = 0;

    setInterval(function() {
        spans[currentIndex].classList.remove("rotator__case_active");
        currentIndex = (currentIndex + 1) % spans.length;
        spans[currentIndex].classList.add("rotator__case_active");
    }, 1000);
});

