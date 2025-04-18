// Tema butonunu bul
const toggleButton = document.getElementById("theme-toggle");

// Sayfa yüklendiğinde mevcut tema modunu kontrol et
window.addEventListener("load", function() {
  // LocalStorage'dan tema bilgisini al
  const savedTheme = localStorage.getItem("theme");

  // Eğer localStorage'da 'dark' teması kaydedildiyse, onu uygula
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark-theme");
    toggleButton.textContent = "🌙 Dark Mode";
  }
});

// Tıklanma olayı
toggleButton.addEventListener("click", function () {
  // body etiketine dark-theme sınıfını ekle/kaldır
  document.body.classList.toggle("dark-theme");

  // Tema moduna göre buton yazısını güncelle
  if (document.body.classList.contains("dark-theme")) {
    toggleButton.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark"); // Koyu temayı kaydet
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light"); // Açık temayı kaydet
  }
});
