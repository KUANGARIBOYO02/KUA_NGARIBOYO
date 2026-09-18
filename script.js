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
// OTOMATIS GALERI SETIAP 4 DETIK
// ===============================

setInterval(function() {
  galleryNext();
}, 4000);


// ==========================================
// SLIDESHOW PAMFLET INFORMASI PENTING
// ==========================================

const pamfletPhotos = [
  "Persyaratan Nikah.png",
  "duplikat_buku_nikah.png",
  "wakaf.png",
  "WEB KUA.png",
  "pamflet.png"
];

let pamfletIndex = 0;

function showPamflet(index) {

  const image = document.getElementById("pamfletImage");
  const zoom = document.getElementById("pamfletZoom");
  const dots = document.getElementById("pamfletDots");

  if (!image || !zoom) {
    return;
  }

  pamfletIndex =
    (index + pamfletPhotos.length) % pamfletPhotos.length;

  image.style.opacity = "0";

  setTimeout(function() {

    image.src = pamfletPhotos[pamfletIndex];
    zoom.href = pamfletPhotos[pamfletIndex];

    image.style.opacity = "1";

  }, 200);

  if (dots) {

    dots.innerHTML = "";

    pamfletPhotos.forEach(function(photo, i) {

      const dot = document.createElement("span");

      dot.className =
        "pamflet-dot" +
        (i === pamfletIndex ? " active" : "");

      dot.onclick = function() {
        showPamflet(i);
      };

      dots.appendChild(dot);

    });
  }
}

function pamfletNext() {
  showPamflet(pamfletIndex + 1);
}

function pamfletPrev() {
  showPamflet(pamfletIndex - 1);
}


// ===============================
// PAMFLET PERTAMA
// ===============================

showPamflet(0);


// ===============================
// OTOMATIS SETIAP 5 DETIK
// ===============================

setInterval(function() {
  pamfletNext();
}, 5000);
