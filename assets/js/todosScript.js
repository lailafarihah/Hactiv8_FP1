// TODOS
//ambil element
const startQuantityEl = document.querySelector(".startQuantity");
const startTotalEl = document.querySelector(".startTotal");
const addStartBtn = document.querySelector(".addStartBtn");
const subStartBtn = document.querySelector(".subStartBtn");

const businessQuantityEl = document.querySelector(".businessQuantity");
const businessTotalEl = document.querySelector(".businessTotal");
const addBusinessBtn = document.querySelector(".addBusinessBtn");
const subBusinessBtn = document.querySelector(".subBusinessBtn");

const totalQuantityEl = document.querySelector(".totalQuantity");
const totalPriceEl = document.querySelector(".totalPrice");

const checkoutBtn = document.getElementById("checkout");

// mengambil data local storage
const startupOrder = {
  startupQuantity: parseInt(localStorage.getItem("startupQuantity")) || 0,
  startupTotal: parseInt(localStorage.getItem("startupTotal")) || 0,
};
const businessOrder = {
  businessQuantity: parseInt(localStorage.getItem("businessQuantity")) || 0,
  businessTotal: parseInt(localStorage.getItem("businessTotal")) || 0,
};

// menjumlahkan total data
function updateTotal() {
  const totalQuantityData = startupOrder.startupQuantity + businessOrder.businessQuantity;
  const totalPriceData = startupOrder.startupTotal + businessOrder.businessTotal;
  totalQuantityEl.innerHTML = totalQuantityData;
  totalPriceEl.innerHTML = totalPriceData;
  startQuantityEl.innerHTML = startupOrder.startupQuantity;
  startTotalEl.innerHTML = startupOrder.startupTotal;
  businessQuantityEl.innerHTML = businessOrder.businessQuantity;
  businessTotalEl.innerHTML = businessOrder.businessTotal;
}
updateTotal();

// update data local storage
function updateData(key, increment) {
  if (key === "startupQuantity") {
    startupOrder.startupQuantity += increment;
    startupOrder.startupTotal = startupOrder.startupQuantity * 250000;
    localStorage.setItem(key, startupOrder.startupQuantity);
    localStorage.setItem("startupTotal", startupOrder.startupTotal);
    updateTotal();
  }
  if (key === "businessQuantity") {
    businessOrder.businessQuantity += increment;
    businessOrder.businessTotal = businessOrder.businessQuantity * 500000;
    localStorage.setItem(key, businessOrder.businessQuantity);
    localStorage.setItem("businessTotal", businessOrder.businessTotal);
    updateTotal();
  }
}

// ketika tombol add dan subtract diklik
addStartBtn.addEventListener("click", function () {
  updateData("startupQuantity", 1);
});
subStartBtn.addEventListener("click", function () {
  if (startupOrder.startupQuantity > 0) {
    updateData("startupQuantity", -1);
  }
});
addBusinessBtn.addEventListener("click", function () {
  updateData("businessQuantity", 1);
});
subBusinessBtn.addEventListener("click", function () {
  if (businessOrder.businessQuantity > 0) {
    updateData("businessQuantity", -1);
  }
});

// hapus semua data local storage dan reload halaman
checkoutBtn.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
