const products = [
  { name: "T-Shirt", price: 500, image: "https://via.placeholder.com/150" },
  { name: "Pants", price: 900, image: "https://via.placeholder.com/150" },
  { name: "Bag", price: 750, image: "https://via.placeholder.com/150" },
  { name: "Sunglasses", price: 300, image: "https://via.placeholder.com/150" }
];

let cartCount = 0;

function loadProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="100" />
      <h3>${product.name}</h3>
      <p>Price: ${product.price} BDT</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

loadProducts();
