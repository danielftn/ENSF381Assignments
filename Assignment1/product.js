function addToCart(productName, price) {
    var cartItems = document.getElementById("cartItems");
    var cartItem = document.createElement("div");
    var quantity = 1;
    
    var existingItem = document.getElementById(productName.replace(/ /g, '_'));
    if (existingItem) {
        var quantitySpan = existingItem.querySelector('.quantity');
        quantity = parseInt(quantitySpan.textContent) + 1;
        quantitySpan.textContent = quantity;
        alert("Product added to cart!");
        return;
    }

    cartItem.innerHTML = `<p>${productName}: $${price} <span class="quantity">1</span><button class="remove-button" onclick="removeFromCart(this)">Remove</button></p>`;
    cartItem.id = productName.replace(/ /g, '_');
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
