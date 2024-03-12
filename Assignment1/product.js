let cartItems = [];

function addToCart(productName, price) {
    let existingItem = cartItems.find(item => item.productName === productName);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ productName, price, quantity: 1 });
    }
    
    displayCart();
    
    alert(`Added ${productName} to cart.`);
}

function removeFromCart(productName) {
    const index = cartItems.findIndex(item => item.productName === productName);
    
    if (index !== -1) {
        cartItems.splice(index, 1);
    }
    
    displayCart();
}

function displayCart() {
    const cartItemsElement = document.getElementById("cartItems");
    cartItemsElement.innerHTML = "";
    
    cartItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `
            <p>${item.productName} - $${item.price} - Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart('${item.productName}')">Remove</button>
        `;
        cartItemsElement.appendChild(itemElement);
    });
}
