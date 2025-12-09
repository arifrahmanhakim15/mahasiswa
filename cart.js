function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

function addToCart(id) {
    let cart = getCart();
    const item = cart.find(i => i.id === id);

    if (item) item.qty++;
    else cart.push({ id, qty: 1 });

    saveCart(cart);
}

function updateCartUI() {
    const cart = getCart();
    const count = cart.reduce((t, i) => t + i.qty, 0);
    document.getElementById("cartCount").innerText = count;
}
