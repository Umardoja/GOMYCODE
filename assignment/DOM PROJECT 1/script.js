const totalPriceEl = document.querySelector(".total");

function updateTotal() {
  let total = 0;

  const products = document.querySelectorAll(".list-products > .card-body");

  products.forEach((product) => {
    const quantity = product.querySelector(".quantity");
    const unitPrice = product.querySelector(".unit-price");

    const qty = parseInt(quantity.textContent);
    const price = parseInt(unitPrice.textContent);

    total += qty * price;
  });

  totalPriceEl.textContent = `${total} $`;
}

const products = document.querySelectorAll(".list-products > .card-body");

products.forEach((product) => {
  const plusBtn = product.querySelector(".fa-plus-circle");
  const minusBtn = product.querySelector(".fa-minus-circle");
  const deleteBtn = product.querySelector(".fa-trash-alt");
  const heartBtn = product.querySelector(".fa-heart");
  const quantityEl = product.querySelector(".quantity");

  // ➕ Increase
  plusBtn.addEventListener("click", () => {
    let qty = parseInt(quantityEl.textContent);
    quantityEl.textContent = qty + 1;
    updateTotal();
  });

  // ➖ Decrease
  minusBtn.addEventListener("click", () => {
    let qty = parseInt(quantityEl.textContent);
    if (qty > 0) {
      quantityEl.textContent = qty - 1;
      updateTotal();
    }
  });

  // 🗑 Delete
  deleteBtn.addEventListener("click", () => {
    product.remove();
    updateTotal();
  });

  // ❤️ Like
  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("liked");
  });
});
