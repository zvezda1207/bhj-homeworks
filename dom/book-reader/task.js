const book = document.getElementById("book");
const fontSizes = document.getElementsByClassName("font-size");

Array.from(fontSizes).forEach(fontSize => {
    fontSize.addEventListener("click", function(event) {
        event.preventDefault();
        Array.from(fontSizes).forEach(fs => fs.classList.remove("font-size_active"));
        book.classList.remove("book_fs-small", "book_fs-big");
        fontSize.classList.add("font-size_active");

        if (fontSize.getAttribute("data-size") === "small") {
            book.classList.add("book_fs-small")
        } else if (fontSize.getAttribute("data-size") === "big") {
            book.classList.add("book_fs-big")
        }
    });
});

