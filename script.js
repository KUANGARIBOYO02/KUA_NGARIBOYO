// ===============================
// MENU NAVIGASI
// ===============================

const nav = document.getElementById("nav");

function toggleMenu() {
  if (nav) {
    nav.classList.toggle("open");
  }
}

if (nav) {
  document.querySelectorAll("#nav a").forEach(function(a) {
    a.addEventListener("click", function() {
      nav.classList.remove("open");
    });
  });
}


// ===============================
// TAHUN OTOMATIS
// ===============================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// ===============================
// GALERI SLIDESHOW
// ===============================

const galleryPhotos = [
  "KUA.png",
  "kegiatan1.jpeg",
  "kegiatan2.jpeg",
  "kegiatan3.jpeg",
  "kegiatan4.jpeg"
];

let galleryIndex = 0;

function showGalleryPhoto(index) {

  const image = document.getElementById("galleryImage");

  if (!image) {
    return;
  }

  galleryIndex =
    (index + galleryPhotos.length) % galleryPhotos.length;

  image.style.opacity = "0";

  setTimeout(function() {

    image.src = galleryPhotos[galleryIndex];

    image.style.opacity = "1";

  }, 250);
}


function galleryNext() {
  showGalleryPhoto(galleryIndex + 1);
}


function galleryPrev() {
  showGalleryPhoto(galleryIndex - 1);
}


// ===============================
// OTOMATIS SETIAP 4 DETIK
// ===============================

setInterval(function() {

  galleryNext();

}, 4000);
