function addToCart(productName, price) {
    var cartItems = document.getElementById("cartItems");
    var existingItem = document.getElementById(productName.replace(/ /g, '_'));

    if (existingItem) {
        var quantitySpan = existingItem.querySelector('.quantity');
        var quantity = parseInt(quantitySpan.textContent) + 1;
        quantitySpan.textContent = quantity;
        alert("Product added to cart!");
        return;
    }

    var cartItem = document.createElement("div");
    cartItem.id = productName.replace(/ /g, '_');

    var productParagraph = document.createElement("p");
    productParagraph.textContent = `${productName}: $${price}`;

    var quantitySpan = document.createElement("span");
    quantitySpan.textContent = "1";
    quantitySpan.className = "quantity";

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", function () {
        removeFromCart(this);
    });

    productParagraph.appendChild(quantitySpan);
    productParagraph.appendChild(removeButton);

    cartItem.appendChild(productParagraph);
    cartItems.appendChild(cartItem);
    alert("Product added to cart!");
}

function removeFromCart(button) {
    var item = button.parentNode.parentNode;
    var quantitySpan = item.querySelector('.quantity');
    var quantity = parseInt(quantitySpan.textContent);

    if (quantity > 1) {
        quantitySpan.textContent = quantity - 1;
    } else {
        item.parentNode.removeChild(item);
    }
}
