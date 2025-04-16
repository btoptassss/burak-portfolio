// Tema butonunu bul
const toggleButton = document.getElementById("theme-toggle");

// Tıklanma olayı
toggleButton.addEventListener("click", function () {
  // body etiketine dark-theme sınıfını ekle/kaldır
  document.body.classList.toggle("dark-theme");

  // Tema moduna göre buton yazısını güncelle
  if (document.body.classList.contains("dark-theme")) {
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }
});
