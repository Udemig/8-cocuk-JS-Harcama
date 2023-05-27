const buton = document.getElementById('buton');
const fiyatInput = document.getElementById('fiyat-inp');
const harcamaInput = document.getElementById('harcama-inp');
const liste = document.getElementById('harcamalar');

buton.addEventListener('click', addExpense);

// listedeki tıklanma olyını izler
liste.addEventListener('click', handleDelete);

function addExpense() {
  // liste elemanı oluşturma
  const harcamaDiv = document.createElement('div');

  // oluşan dive class verme
  harcamaDiv.classList.add('harcama');

  // divin içerğini değiştirme
  harcamaDiv.innerHTML = `
          <h1>${harcamaInput.value}</h1>
          <h3>${fiyatInput.value} TL</h3>
          <button id="sil-btn">Sil</button>
  `;

  // divin son halini listeye ekleme
  liste.appendChild(harcamaDiv);
}

// backtick

function handleDelete(ev) {
  // tıklanan elemanı tespit etme
  var element = ev.target;

  // eğerki tıklanan elemanın id'si sil-btn ise
  // o elemanın bir üst elemanını kaldır
  if (element.id === 'sil-btn') {
    element.parentElement.remove();
  }
}
