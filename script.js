const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const quantityInput = document.getElementById('quantity');
const cartBtn = document.getElementById('cartBtn');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cartItems');

let currentProduct = null;
let cartData = [];

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    currentProduct = {
      name: card.dataset.name,
      img: card.querySelector('img').src,
      qty: 1
    };
    modalTitle.textContent = currentProduct.name;
    quantityInput.value = 1;
    modal.classList.remove('hidden');
  });
});

document.getElementById('closeModal').onclick = () => {
  modal.classList.add('hidden');
};

document.getElementById('plus').onclick = () => {
  quantityInput.value = Number(quantityInput.value) + 1;
};

document.getElementById('minus').onclick = () => {
  if (Number(quantityInput.value) > 1) {
    quantityInput.value = Number(quantityInput.value) - 1;
  }
};

document.getElementById('addToCart').onclick = () => {
  currentProduct.qty = Number(quantityInput.value);
  cartData.push(currentProduct);
  modal.classList.add('hidden');
  cartBtn.classList.remove('hidden');
};

cartBtn.onclick = () => {
  cartItems.innerHTML = '';
  cartData.forEach(item => {
    cartItems.innerHTML += `
      <div>
        <img src="${item.img}" width="50"><br>
        <b>${item.name}</b><br>
        Кількість: ${item.qty}<br>
        Ціна: 0 грн
        <hr>
      </div>
    `;
  });
  cart.classList.remove('hidden');
};

document.getElementById('closeCart').onclick = () => {
  cart.classList.add('hidden');
};
