// Toggle menu untuk navbar
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".navbar-nav").classList.toggle("active");
  });

// Tutup menu ketika item di klik
document.querySelectorAll(".navbar-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".navbar-nav").classList.remove("active");
  });
});

// Fungsi untuk mengirim pesan WhatsApp
function sendwhatsup(event) {
  event.preventDefault(); // Mencegah form untuk submit secara default

  // Nomor WhatsApp Anda (gunakan format internasional, tanpa tanda "+")
  var whatsAppNumber = "6287857122888"; // Gantilah dengan nomor WhatsApp Anda yang benar

  // Ambil nilai input dari form
  var name = document.querySelector(".name").value.trim();
  var phone = document.querySelector(".phone").value.trim();
  var text = document.querySelector(".text").value.trim();

  // Validasi input
  if (!name || !phone || !text) {
    alert("Semua field wajib diisi.");
    return;
  }

  // Encode teks agar URL tetap valid
  var encodedName = encodeURIComponent(name);
  var encodedPhone = encodeURIComponent(phone);
  var encodedText = encodeURIComponent(text);

  // Membuat URL WhatsApp yang valid
  var url =
    "https://wa.me/" +
    whatsAppNumber +
    "?text=" +
    "Name:%20" +
    encodedName +
    "%0A" +
    "Phone:%20" +
    encodedPhone +
    "%0A" +
    "Message:%20" +
    encodedText +
    "%0A" +
    "Saya%20mau%20sewa%20proyektor.";

  // Buka WhatsApp di tab baru
  window.open(url, "_blank");
}
