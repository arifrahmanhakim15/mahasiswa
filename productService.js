async function loadProducts() {
    const res = await fetch("data/products.json");
    return await res.json();
}
