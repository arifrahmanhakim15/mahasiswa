let allProducts = [];

function renderProducts(products) {
    allProducts = products;
    const container = document.getElementById("produkContainer");
    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
        <div class="card" onclick="location.href='product.html?id=${p.id}'">
            <img src="${p.img}" width="100%" />
            <h3>${p.nama}</h3>
            <p>${formatRupiah(p.harga)}</p>
        </div>`;
    });
}

function applyFilters() {
    let result = [...allProducts];
    const search = document.getElementById("searchInput").value.toLowerCase();
    const sort = document.getElementById("sortSelect").value;
    const cat = document.getElementById("catSelect").value;

    if (search)
        result = result.filter(p => p.nama.toLowerCase().includes(search));

    if (cat)
        result = result.filter(p => p.kategori === cat);

    if (sort === "low")
        result.sort((a, b) => a.harga - b.harga);
    if (sort === "high")
        result.sort((a, b) => b.harga - a.harga);

    renderProducts(result);
}
