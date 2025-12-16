const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const quantityInput = document.getElementById('quantity');
const cartBtn = document.getElementById('cartBtn');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cartItems');

let currentProduct = {};
let cartData = [];

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.onclick = () => {
    const card = btn.closest('.card');
    currentProduct = {
      name: card.dataset.name,
      price: card.dataset.price,
      img: card.querySelector('img').src
    };
    modalTitle.textContent = currentProduct.name;
    quantityInput.value = 1;
    modal.classList.remove('hidden');
  };
});

document.getElementById('closeModal').onclick = () => {
  modal.classList.add('hidden');
};

document.getElementById('plus').onclick = () => {
  quantityInput.value++;
};

document.getElementById('minus').onclick = () => {
  if (quantityInput.value > 1) quantityInput.value--;
};

document.getElementById('addToCart').onclick = () => {
  cartData.push({
    ...currentProduct,
    qty: quantityInput.value
  });
  modal.classList.add('hidden');
  cartBtn.classList.remove('hidden');
};

cartBtn.onclick = () => {
  cartItems.innerHTML = '';
  cartData.forEach(item => {
    cartItems.innerHTML += `
      <div>
        <img src="${item.img}" width="50">
        <b>${item.name}</b><br>
        К-сть: ${item.qty} | Ціна: 0 грн
        <hr>
      </div>
    `;
  });
  cart.classList.remove('hidden');
};

document.getElementById('closeCart').onclick = () => {
  cart.classList.add('hidden');
};
