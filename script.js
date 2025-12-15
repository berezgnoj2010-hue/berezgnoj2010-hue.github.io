const buttons = document.querySelectorAll('.product-card button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Товар додано до кошика!');
  });
});
