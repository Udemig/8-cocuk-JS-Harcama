const buton = document.getElementById('buton');
const fiyatInput = document.getElementById('fiyat-inp');
const harcamaInput = document.getElementById('harcama-inp');

buton.addEventListener('click', addExpense);

function addExpense() {
  alert(fiyatInput.value);
}
