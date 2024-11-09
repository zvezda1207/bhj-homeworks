document.addEventListener("DOMContentLoaded", function() {
    const cartProductConainer = document.querySelector(".cart__products");

    function addToCart(productId, productImageSrc, quantity) {

        const existingProduct = cartProductConainer.querySelector(`[data-id="${productId}"]`);

        if (existingProduct) {
            const countElement = existingProduct.querySelector(".cart__product-count");
            countElement.textContent = parseInt(countElement.textContent) + quantity;
        } else {
            const newProduct = document.createElement("div");
            newProduct.classList.add("cart__product")
            newProduct.setAttribute("data-id", productId);

            newProduct.innerHTML = `
                <img class="cart__product-image" src="${productImageSrc}">
                <div class="cart__product-count">${quantity}</div>`;

                cartProductConainer.appendChild(newProduct);
        }
    }

    const quanityControls = document.querySelectorAll(".product__quantity-controls");
    quanityControls.forEach(control => {
        const decButton = control.querySelector(".product__quantity-control_dec");
        const incButton = control.querySelector(".product__quantity-control_inc");
        const quantityValue = control.querySelector(".product__quantity-value");
        const addButton = control.parentElement.querySelector(".product__add");

        decButton.addEventListener("click", () => {
            if (parseInt(quantityValue.textContent) > 1) {
                quantityValue.textContent = parseInt(quantityValue.textContent) - 1;
            }
        });

        incButton.addEventListener("click", () => {
            quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
        });

        addButton.addEventListener("click", () => {
            const productId = control.closest(".product").getAttribute("data-id");
            const productImageSrc = control.closest(".product").querySelector(".product__image").src;

            console.log("Product ID:", productId);
            console.log("Product Image Source:", productImageSrc);

            const quantity = parseInt(quantityValue.textContent);

            addToCart(productId, productImageSrc, quantity);
        });
    });
});

