const getStartBtn = document.getElementById("getStart");
const packageSection = document.querySelector("#package-section");
const categoryBox = document.querySelector('.category_box');
const inputSearchCategory = document.querySelector('.search_category');

// fake database
const datas = [
    "Personal Blog",
    "Company Blog",
    "Travel Blog",
    "Organizing Blog",
    "Personal Portofolio",
    "Company Portofolio",
    "Online Store",
    "E-Comeerce",
    "Restaurant",
    "Hotel Booking",
    "Car Booking"
]

// ketika keyboard ditekan
inputSearchCategory.onkeyup = function(){
    let result = []
    let input = inputSearchCategory.value
    if(input.length){
        result = datas.filter((keyword) => {
            return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        })
    }
    display(result)
}

// fungsi tampil ke layar
function display(result){
    const content = result.map((list) => {
        return `<li>
                  <button class="btn btn-outline-dark">${list}</button>
                </li>`
    })
    categoryBox.innerHTML = `<ul>${content.join('')}</ul>`
}

// tombol order
const startupBtn = document.getElementById("startupBtn");
const businessBtn = document.getElementById("businessBtn");

// fungsi popup menu
getStartBtn.addEventListener("click", function () {
  packageSection.style.display = "flex";
  packageSection.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  packageSection.style.margin = "auto";
  packageSection.style.position = "fixed";
  packageSection.style.top = "0";
});
packageSection.addEventListener("click", function (event) {
  if (event.target === packageSection) {
    packageSection.style.display = "none";
  }
});

// fungsi order save ke local storage
startupBtn.addEventListener("click", function () {
  // Ambil data dari localStorage jika sudah ada, atau set nilai awal jika belum ada
  let startupQuantity = parseInt(localStorage.getItem("startupQuantity")) || 0;
  let startupTotal = parseInt(localStorage.getItem("startupTotal")) || 0;
  // Tambah jumlah dan total
  startupQuantity += 1;
  startupTotal += 250000;
  // Simpan data ke localStorage
  localStorage.setItem("startupQuantity", startupQuantity);
  localStorage.setItem("startupTotal", startupTotal);

  // berhasil simpan data
  alert("berhasil simpan data");
});

// Tambahkan event listener untuk saat tombol "highOrder" ditekan
businessBtn.addEventListener("click", function () {
  // Ambil data dari localStorage jika sudah ada, atau set nilai awal jika belum ada
  let businessQuantity = parseInt(localStorage.getItem("businessQuantity")) || 0;
  let businessTotal = parseInt(localStorage.getItem("businessTotal")) || 0;

  // tambah pada data paket business
  businessQuantity += 1;
  businessTotal += 500000;

  // Simpan data ke localStorage
  localStorage.setItem("businessQuantity", businessQuantity);
  localStorage.setItem("businessTotal", businessTotal);

  // berhasil simpan data
  alert("berhasil simpan data");
});
