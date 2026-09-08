const nav=document.getElementById("nav");function toggleMenu(){nav.classList.toggle("open")}document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));document.getElementById("year").textContent=new Date().getFullYear();

let shown=new Date();let events={};function pad(n){return String(n).padStart(2,"0")}function renderCalendar(){const y=shown.getFullYear(),m=shown.getMonth();document.getElementById("monthTitle").textContent=new Intl.DateTimeFormat("id-ID",{month:"long",year:"numeric"}).format(shown);const first=new Date(y,m,1).getDay(),last=new Date(y,m+1,0).getDate(),days=document.getElementById("days");days.innerHTML="";for(let i=0;i<first;i++){const e=document.createElement("div");e.className="empty";days.appendChild(e)}for(let d=1;d<=last;d++){const e=document.createElement("div");e.innerHTML="<strong>"+d+"</strong>";const key=`${y}-${pad(m+1)}-${pad(d)}`;if(events[key]){e.className="event";e.innerHTML+=`<br><small>${events[key]}</small>`}days.appendChild(e)}}function changeMonth(n){shown.setMonth(shown.getMonth()+n);renderCalendar()}renderCalendar();

function demoSubmit(ev){ev.preventDefault();alert("Terima kasih. Ini adalah demo website. Untuk penggunaan resmi, hubungkan formulir ke Google Forms KUA Kecamatan Ngariboyo.");}
// SLIDESHOW GALERI
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

  if (!image) return;

  galleryIndex = (index + galleryPhotos.length) % galleryPhotos.length;

  image.style.opacity = "0";

  setTimeout(() => {
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

// Ganti foto otomatis setiap 4 detik
setInterval(() => {
  galleryNext();
}, 4000);
