"use strict";
const titles = ["Judul","Alur Presentasi","Latar Belakang","Rumusan Masalah","Tujuan Penelitian",
"Batasan & Hipotesis","Manfaat Penelitian","Landasan Teori","Penelitian Terdahulu","Desain Penelitian",
"Alat & Bahan","Prosedur Penelitian","Pengumpulan Data","Pengolahan Data","Hasil Penelitian",
"Grafik & Dokumentasi","Pembahasan","Kesimpulan & Saran","Referensi","Penutup"];

const content = [
`<div class="slide-inner hero"><div><div class="kicker">Prototype Smart Lamp</div>
<h1>Prototype Smart Lamp Berbasis Embedded System dengan ESP32</h1>
<p>Sistem pencahayaan otomatis berdasarkan intensitas cahaya ruangan menggunakan sensor LDR.</p>
<div class="hero-meta"><span class="pill">Ridho Evrilian</span><span class="pill">XIIB</span>
<span class="pill">SMA Gunung Madu</span><span class="pill">Miss Adel</span><span class="pill">14 Juli 2026</span></div>
</div><div class="lamp-visual"><div class="lamp"></div></div></div>`,

`<div class="slide-inner"><div class="kicker">02 / Navigation</div><h2>Alur Presentasi</h2>
<div class="grid-3">
<div class="card"><div class="number">01</div><h3>Pendahuluan</h3><p>Latar belakang, rumusan masalah, tujuan, batasan, hipotesis, dan manfaat penelitian.</p></div>
<div class="card"><div class="number">02</div><h3>Landasan Teori</h3><p>ESP32, cahaya, lampu pintar, dan penelitian terdahulu.</p></div>
<div class="card"><div class="number">03</div><h3>Metode Penelitian</h3><p>Desain penelitian, alat dan bahan, prosedur, serta teknik pengumpulan data.</p></div>
<div class="card"><div class="number">04</div><h3>Hasil & Pembahasan</h3><p>Data penelitian, grafik, dokumentasi, dan pembahasan.</p></div>
<div class="card"><div class="number">05</div><h3>Kesimpulan & Saran</h3><p>Kesimpulan hasil penelitian dan pengembangan selanjutnya.</p></div>
<div class="card"><div class="number">06</div><h3>Referensi</h3><p>Sumber-sumber yang digunakan dalam penelitian.</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">03 / Pendahuluan</div><h2>Latar Belakang</h2>
<div class="flow">
<div class="card"><div class="number">01</div><h3>Kondisi Nyata</h3><p>Cahaya di ruangan SMA Gunung Madu terkadang tidak kondusif. Kadang terlalu terang dan kadang terlalu redup sehingga menciptakan suasana belajar yang tidak nyaman.</p></div>
<div class="arrow">→</div>
<div class="card"><div class="number">02</div><h3>Permasalahan</h3><p>Masalah yang muncul adalah saat lampu dinyalakan ruangan terlalu terang, sedangkan jika lampu dimatikan ruangan menjadi terlalu gelap sehingga mengganggu penglihatan para siswa.</p></div>
<div class="arrow">→</div>
<div class="card"><div class="number">03</div><h3>Gagasan Solusi</h3><p>Saya menawarkan produk Smart Lamp untuk mengatasi masalah pencahayaan tersebut.</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">04 / Rumusan Masalah</div><h2>Rumusan Masalah</h2>
<div class="grid-2">
<div class="card"><div class="number">01</div><h3>Perancangan Sistem</h3><p>Bagaimana cara merancang dan membangun sistem prototype smart lamp berbasis embedded dengan ESP32?</p></div>
<div class="card"><div class="number">02</div><h3>Cara Kerja Sensor</h3><p>Bagaimana cara kerja sensor LDR dalam mendeteksi kondisi pencahayaan agar lampu dapat menyala dengan tingkat terang yang sesuai secara otomatis?</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">05 / Tujuan</div><h2>Tujuan Penelitian</h2>
<div class="grid-2">
<div class="card"><div class="number">01</div><h3>Merancang dan Membangun</h3><p>Merancang dan membangun sistem prototype smart lamp berbasis embedded dengan ESP32.</p></div>
<div class="card"><div class="number">02</div><h3>Mengetahui Cara Kerja LDR</h3><p>Mengetahui cara kerja sensor LDR dalam membaca cahaya yang mengatur pencahayaan lampu.</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">06 / Scope & Hypothesis</div><h2>Batasan Masalah & Hipotesis</h2>
<div class="grid-2">
<div class="card"><h3>Batasan Masalah</h3>
<p><strong>1.</strong> Sistem yang dibuat hanya difokuskan pada pengaturan intensitas cahaya lampu di dalam ruang belajar SMA Gunung Madu.</p>
<p><strong>2.</strong> Sensor yang digunakan hanya untuk mendeteksi intensitas cahaya ruangan.</p>
<p><strong>3.</strong> Sistem bekerja secara otomatis berdasarkan kondisi cahaya di dalam ruangan.</p>
<p><strong>4.</strong> Pengujian sistem dilakukan dalam skala prototype dan belum diterapkan secara menyeluruh di seluruh ruangan sekolah.</p></div>
<div class="card"><div class="number">H</div><h3>Hipotesis</h3><p>Smart Lamp diduga dapat membantu mengurangi masalah pencahayaan pada ruangan SMA Gunung Madu.</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">07 / Manfaat</div><h2>Manfaat Penelitian</h2>
<div class="grid-3">
<div class="card"><div class="number">01</div><h3>Bagi Sekolah</h3><p>Menciptakan ruang belajar yang lebih nyaman serta menghemat penggunaan listrik melalui sistem pencahayaan otomatis.</p></div>
<div class="card"><div class="number">02</div><h3>Bagi Peneliti</h3><p>Memberikan pengalaman dalam mempelajari embedded system, penggunaan sensor, dan melakukan pemrograman.</p></div>
<div class="card"><div class="number">03</div><h3>Bagi Siswa</h3><p>Memberikan kenyamanan dalam pembelajaran.</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">08 / Landasan Teori</div><h2>Landasan Teori</h2>
<div class="grid-3">
<div class="card"><div class="number">01</div><h3>ESP32</h3><p>ESP32 adalah sebuah mikrokontroler yang merupakan penerus ESP8266. Pada ESP32 tersedia Wi-Fi untuk mendukung alat IoT dan embedded system.</p><p><strong>(Aulia, 2021)</strong></p></div>
<div class="card"><div class="number">02</div><h3>Cahaya</h3><p>Cahaya merupakan sumber kehidupan. Tanpa adanya cahaya kemungkinan tidak akan ada sebuah kehidupan. Jika tidak ada cahaya, bumi akan menjadi dingin dan gelap gulita.</p><p><strong>(Sunardi, 2012)</strong></p></div>
<div class="card"><div class="number">03</div><h3>Lampu Pintar</h3><p>Lampu pintar adalah lampu yang bisa dikendalikan secara otomatis melalui IoT ataupun embedded system.</p><p><strong>(Djaeng dan Dwi, 2017)</strong></p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">09 / Penelitian Terdahulu</div><h2>Penelitian Terdahulu</h2>
<div class="grid-2">
<div class="card"><div class="number">01</div><h3>Domingos Soares Martins</h3><p>Sistem berhasil mengontrol lampu secara otomatis berdasarkan intensitas cahaya sekitar maupun secara manual melalui tombol.</p></div>
<div class="card"><div class="number">02</div><h3>Demi Adidrana, Arif Rahman Hakim, Hertanto Suryoprayogo, dan Ilham Roni Yansyah</h3><p>Sistem lampu pintar berbasis ESP32 DevKit dan Ubidots berhasil mengontrol indikator LED berdasarkan cahaya maupun melalui perintah web Ubidots.</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">10 / Desain Penelitian</div><h2>Desain Penelitian</h2>
<div class="grid-3">
<div class="card"><h3>Periode Penelitian</h3><p>14-07-2026 sampai 27-08-2026</p></div>
<div class="card"><h3>Jenis Penelitian</h3><p>Eksperimen dan penelitian.</p></div>
<div class="card"><h3>Tempat</h3><p>Lab Fisika SMA Gunung Madu dan di rumah.</p></div>
<div class="card"><h3>Objek Penelitian</h3><p>Prototype Smart Lamp.</p></div>
<div class="card"><h3>Variabel Bebas</h3><p>Hanya mengubah sistem menjadi otomatis dengan membaca intensitas cahaya dan mengeluarkan cahaya sesuai dengan intensitas cahaya yang diterima.</p></div>
<div class="card"><h3>Variabel Terikat</h3><p>Hasil yang diukur berdasarkan intensitas cahaya, lux meter, dan PWM.</p></div>
</div>
<div class="card" style="margin-top:16px"><h3>Variabel Terkontrol</h3><p>Yang sama hanya sakelarnya on/off, sama seperti lampu pada umumnya.</p></div>
</div>`,

`<div class="slide-inner"><div class="kicker">11 / Alat & Bahan</div><h2>Alat & Bahan</h2>
<div class="grid-4">
<div class="card"><h3>Laptop</h3></div><div class="card"><h3>ESP32</h3></div><div class="card"><h3>LDR</h3></div><div class="card"><h3>Lampu</h3></div>
<div class="card"><h3>Jumper</h3></div><div class="card"><h3>Adaptor</h3></div><div class="card"><h3>Breadboard</h3></div><div class="card"><h3>USB</h3></div>
</div>
<div class="card" style="margin-top:18px"><h3>Software</h3><p>Arduino IDE dan Serial Monitor.</p></div>
</div>`,

`<div class="slide-inner"><div class="kicker">12 / Prosedur</div><h2>Prosedur Penelitian</h2>
<div class="timeline">
<div class="step"><div class="number">01</div><div class="card"><h3>Persiapan</h3></div></div>
<div class="step"><div class="number">02</div><div class="card"><h3>Perancangan Sistem</h3></div></div>
<div class="step"><div class="number">03</div><div class="card"><h3>Pemasangan Komponen</h3></div></div>
<div class="step"><div class="number">04</div><div class="card"><h3>Pemrograman ESP32</h3></div></div>
<div class="step"><div class="number">05</div><div class="card"><h3>Pengujian Sensor LDR</h3></div></div>
<div class="step"><div class="number">06</div><div class="card"><h3>Pengujian Lampu</h3></div></div>
<div class="step"><div class="number">07</div><div class="card"><h3>Pengambilan Data</h3></div></div>
<div class="step"><div class="number">08</div><div class="card"><h3>Analisis Data</h3></div></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">13 / Pengumpulan Data</div><h2>Teknik Pengumpulan Data</h2>
<div class="grid-3">
<div class="card"><div class="number">01</div><h3>Jenis Data</h3><p>Data primer.</p><p>Mengukur intensitas cahaya, melihat nilai PWM, dan menguji lampu di kondisi yang berbeda.</p></div>
<div class="card"><div class="number">02</div><h3>Instrumen</h3><p>LDR sensor, ESP32, dan Serial Monitor Arduino IDE.</p></div>
<div class="card"><div class="number">03</div><h3>Cara Pengambilan Data</h3><p>Mengambil data di lab dan dilakukan pengujian alat selama 2 jam.</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">14 / Analisis Data</div><h2>Teknik Pengolahan & Analisis Data</h2>
<div class="card"><div class="table-wrap"><table class="data-table">
<thead><tr><th>Parameter</th><th>Data yang Diamati</th><th>Instrumen</th></tr></thead>
<tbody>
<tr><td>Intensitas Cahaya</td><td>Nilai cahaya yang diterima</td><td>LDR / Lux Meter</td></tr>
<tr><td>PWM</td><td>Nilai pengaturan output lampu</td><td>Serial Monitor</td></tr>
<tr><td>Kondisi Lampu</td><td>Tingkat terang lampu</td><td>Pengamatan</td></tr>
</tbody></table></div>
<p>Data dianalisis dengan melihat hubungan antara intensitas cahaya yang diterima sensor dengan nilai PWM yang diberikan oleh ESP32 kepada lampu.</p>
</div></div>`,

`<div class="slide-inner"><div class="kicker">15 / Hasil Penelitian</div><h2>Data Hasil Penelitian</h2>
<div class="card"><div class="table-wrap"><table class="data-table">
<thead><tr><th>No.</th><th>Intensitas Cahaya</th><th>Lux Meter</th><th>Nilai PWM</th><th>Kondisi Lampu</th></tr></thead>
<tbody>
<tr><td>01</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>02</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>03</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>04</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
</tbody></table></div>
<p>Data pengukuran aktual dapat dimasukkan pada tabel ini setelah hasil pengujian tersedia.</p>
</div></div>`,

`<div class="slide-inner"><div class="kicker">16 / Grafik & Dokumentasi</div><h2>Grafik & Dokumentasi</h2>
<div class="grid-2">
<div class="card"><h3>Hubungan Lux dan PWM</h3>
<div class="bar-chart">
<div class="bar" style="height:35%"><span>—</span></div>
<div class="bar" style="height:55%"><span>—</span></div>
<div class="bar" style="height:72%"><span>—</span></div>
<div class="bar" style="height:48%"><span>—</span></div>
<div class="bar" style="height:84%"><span>—</span></div>
</div>
<p>Grafik aktual disesuaikan dengan data hasil pengujian.</p></div>
<div class="card"><h3>Dokumentasi Penelitian</h3>
<div class="gallery">
<div class="photo" data-photo="1">FOTO 1</div>
<div class="photo" data-photo="2">FOTO 2</div>
<div class="photo" data-photo="3">FOTO 3</div>
<div class="photo" data-photo="4">FOTO 4</div>
</div></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">17 / Pembahasan</div><h2>Pembahasan</h2>
<div class="grid-3">
<div class="card"><div class="number">01</div><h3>Apa Hasil Utamanya?</h3><p>Terdapat hubungan antara PWM dan lux yang sesuai. PWM berkurang jika menerima cahaya yang terang, dan PWM akan bertambah jika menerima cahaya yang kurang.</p></div>
<div class="card"><div class="number">02</div><h3>Mengapa Bisa Terjadi?</h3><p>Karena sensor LDR akan menerima cahaya sebagai input yang akan dikirim ke ESP32 sebagai proses, kemudian dikeluarkan melalui lampu sebagai cahaya atau output.</p></div>
<div class="card"><div class="number">03</div><h3>Perbandingan dengan Peneliti Sebelumnya</h3><p>Domingos Soares Martins membuat smart lamp berbasis NodeMCU dengan sensor LDR berbasis IoT yang dapat dikendalikan dari jarak jauh dan efisien dalam penggunaan energi.</p><p>Penelitian saya menggunakan embedded system yang juga mengontrol lampu secara otomatis dan efisien dalam penggunaan energi, tetapi tidak dapat dikendalikan dari jarak jauh.</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">18 / Kesimpulan & Saran</div><h2>Kesimpulan & Saran</h2>
<div class="grid-2">
<div class="card"><h3>Kesimpulan</h3><p><strong>01.</strong> Dapat menciptakan lingkungan belajar yang nyaman pada ruang kelas.</p><p><strong>02.</strong> Mengetahui cara kerja sensor LDR dalam mendeteksi intensitas cahaya pada ruangan.</p></div>
<div class="card"><h3>Saran</h3><p><strong>01.</strong> Pemanfaatan teknologi Li-Fi.</p><p><strong>02.</strong> Integrasi Artificial Intelligence.</p><p><strong>03.</strong> Penggunaan lampu hemat energi dengan panel surya mini.</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">19 / Referensi</div><h2>Referensi</h2>
<div class="timeline">
<div class="step"><div class="number">01</div><div class="card"><p>Martins, D. (2023). Pengendalian lampu berbasis IoT menggunakan NodeMCU dan sensor cahaya.</p></div></div>
<div class="step"><div class="number">02</div><div class="card"><p>Panjaitan, S. D. M. (2022). Prototype pengendalian lampu jarak jauh dengan jaringan internet berbasis Internet of Things (IoT) menggunakan Raspberry Pi3.</p></div></div>
<div class="step"><div class="number">03</div><div class="card"><p>Lestari, L., Syahwi, dan Haramaini, T. (2023). Pemanfaatan teknologi Internet of Things untuk kendali lampu menggunakan Android.</p></div></div>
<div class="step"><div class="number">04</div><div class="card"><p>Hidayat, F., Martanto, Rinaldi, A., dan Rifai, A. (2025). Penerapan IoT pada kendali lampu menggunakan ESP8266 dan sensor cahaya untuk efisiensi energi.</p></div></div>
<div class="step"><div class="number">05</div><div class="card"><p>Alama, N., Rahmani, H., dan Yeni. (2022). Lampu otomatis menggunakan sensor cahaya berbasis Arduino Uno dengan alat sensor LDR.</p></div></div>
</div></div>`,

`<div class="slide-inner closing"><div class="kicker">20 / Closing</div>
<div class="big-thanks">TERIMA KASIH</div>
<p>SESI TANYA JAWAB</p>
<div class="hero-meta" style="justify-content:center">
<span class="pill">Ridho Evrilian · XIIB</span><span class="pill">Pembimbing: Miss Adel</span><span class="pill">SMA Gunung Madu</span>
</div></div>`
];

let currentSlide = 0;
let slides = [];
let isAnimating = false;

const slidesEl = document.getElementById("slides");
const navEl = document.getElementById("slideNav");
const progressEl = document.getElementById("progress");
const pageNumberEl = document.getElementById("pageNumber");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const themeBtn = document.getElementById("themeBtn");
const collapseBtn = document.getElementById("collapseBtn");
const appShell = document.getElementById("appShell");
const sidebar = document.getElementById("sidebar");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const stage = document.querySelector(".stage");

function createSlides(){
  slidesEl.innerHTML = "";
  content.forEach((html, i) => {
    const section = document.createElement("section");
    section.className = "slide";
    section.dataset.index = i;
    section.innerHTML = html;
    slidesEl.appendChild(section);
  });
  slides = document.querySelectorAll(".slide");
}

function createNav(){
  navEl.innerHTML = "";
  titles.forEach((label, i) => {
    const btn = document.createElement("button");
    btn.className = "nav-item";
    btn.dataset.index = i;
    btn.innerHTML = `<span class="nav-index">${String(i+1).padStart(2,"0")}</span><span class="nav-label">${label}</span>`;
    btn.addEventListener("click", () => goToSlide(i));
    navEl.appendChild(btn);
  });
}

function updateUI(){
  const pos = currentSlide + 1;
  pageNumberEl.textContent = `${String(pos).padStart(2,"0")} / ${String(slides.length).padStart(2,"0")}`;
  progressEl.style.width = `${(pos/slides.length)*100}%`;
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", Number(item.dataset.index) === currentSlide);
  });
}

function updateSlide(newIndex){
  if (isAnimating || !slides.length) return;
  if (newIndex < 0 || newIndex >= slides.length || newIndex === currentSlide) return;
  isAnimating = true;
  slides[currentSlide].classList.remove("active");
  slides[newIndex].classList.add("active");
  currentSlide = newIndex;
  updateUI();
  updateHash();
  setTimeout(() => { isAnimating = false; }, 1400);
}

function goToSlide(i){ updateSlide(Math.max(0, Math.min(i, slides.length - 1))); }
function nextSlide(){ if (currentSlide < slides.length - 1) updateSlide(currentSlide + 1); }
function prevSlide(){ if (currentSlide > 0) updateSlide(currentSlide - 1); }

function updateHash(){
  const newHash = `#slide-${currentSlide + 1}`;
  if (window.location.hash !== newHash) history.replaceState(null, "", newHash);
}
function loadSlideFromHash(){
  const match = window.location.hash.match(/slide-(\d+)/);
  if (!match) return;
  const n = Number(match[1]);
  if (n >= 1 && n <= content.length) currentSlide = n - 1;
}

/* keyboard */
document.addEventListener("keydown", e => {
  if (lightbox.classList.contains("active")){
    switch(e.key){
      case "ArrowRight": e.preventDefault(); lightboxNextPhoto(); return;
      case "ArrowLeft": e.preventDefault(); lightboxPrevPhoto(); return;
      case "Escape": closeLightboxFn(); return;
      default: return;
    }
  }
  switch(e.key){
    case "ArrowRight": case "ArrowDown": case "PageDown": case " ":
      e.preventDefault(); nextSlide(); break;
    case "ArrowLeft": case "ArrowUp": case "PageUp":
      e.preventDefault(); prevSlide(); break;
    case "Home": e.preventDefault(); goToSlide(0); break;
    case "End": e.preventDefault(); goToSlide(slides.length - 1); break;
    case "f": case "F": toggleFullscreen(); break;
    case "Escape":
      if (document.fullscreenElement) document.exitFullscreen();
      break;
  }
});

/* swipe */
let touchStartX=0, touchStartY=0;
stage.addEventListener("touchstart", e => {
  if (!e.touches.length) return;
  touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY;
}, {passive:true});
stage.addEventListener("touchend", e => {
  if (!e.changedTouches.length) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy)) return;
  dx < 0 ? nextSlide() : prevSlide();
}, {passive:true});

/* wheel */
let wheelLock=false;
stage.addEventListener("wheel", e => {
  if (wheelLock || Math.abs(e.deltaY) < 20) return;
  wheelLock = true;
  e.deltaY > 0 ? nextSlide() : prevSlide();
  setTimeout(() => wheelLock=false, 500);
}, {passive:true});

/* light parallax on decorative circles */
stage.addEventListener("mousemove", e => {
  const rect = stage.getBoundingClientRect();
  const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
  const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  document.documentElement.style.setProperty("--mx", (nx * 10).toFixed(2));
  document.documentElement.style.setProperty("--my", (ny * 10).toFixed(2));
});
stage.addEventListener("mouseleave", () => {
  document.documentElement.style.setProperty("--mx", 0);
  document.documentElement.style.setProperty("--my", 0);
});

/* click zones inside stage only */
stage.addEventListener("click", e => {
  if (e.target.closest("button, a, input, textarea, select, .photo")) return;
  const w = window.innerWidth, x = e.clientX;
  if (x > w*0.65) nextSlide(); else if (x < w*0.35) prevSlide();
});

/* nav buttons */
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

/* fullscreen */
function toggleFullscreen(){
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(()=>{});
  else document.exitFullscreen?.().catch(()=>{});
}
fullscreenBtn.addEventListener("click", toggleFullscreen);

/* theme toggle */
function applyTheme(t){
  document.documentElement.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "☾" : "☀";
  try{ localStorage.setItem("smartlamp-theme", t); }catch(e){}
}
themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(current);
});
(function initTheme(){
  let saved = "light";
  try{ saved = localStorage.getItem("smartlamp-theme") || "light"; }catch(e){}
  applyTheme(saved);
})();

/* sidebar collapse */
collapseBtn.addEventListener("click", () => {
  const collapsed = appShell.classList.toggle("collapsed");
  collapseBtn.textContent = collapsed ? "›" : "‹";
});

/* lightbox carousel for documentation photos */
const photoLabels = ["FOTO 1","FOTO 2","FOTO 3","FOTO 4"];
let currentPhotoIndex = 0;

function photoSvg(label){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='#e8e4da'/><text x='50%' y='50%' font-family='Times New Roman' font-size='40' fill='#555' text-anchor='middle' dy='.3em'>${label}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
function renderLightboxPhoto(){
  lightboxImg.style.animation = "none";
  void lightboxImg.offsetWidth;
  lightboxImg.style.animation = "";
  lightboxImg.src = photoSvg(photoLabels[currentPhotoIndex]);
  lightboxCaption.textContent = `${currentPhotoIndex + 1} / ${photoLabels.length} — ${photoLabels[currentPhotoIndex]}`;
}
function openLightbox(index){
  currentPhotoIndex = ((index % photoLabels.length) + photoLabels.length) % photoLabels.length;
  renderLightboxPhoto();
  lightbox.classList.add("active");
}
function closeLightboxFn(){ lightbox.classList.remove("active"); }
function lightboxNextPhoto(){ currentPhotoIndex = (currentPhotoIndex + 1) % photoLabels.length; renderLightboxPhoto(); }
function lightboxPrevPhoto(){ currentPhotoIndex = (currentPhotoIndex - 1 + photoLabels.length) % photoLabels.length; renderLightboxPhoto(); }

closeLightbox.addEventListener("click", closeLightboxFn);
lightboxNext.addEventListener("click", lightboxNextPhoto);
lightboxPrev.addEventListener("click", lightboxPrevPhoto);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightboxFn(); });

function wirePhotos(){
  document.querySelectorAll(".photo").forEach((photo, i) => {
    photo.addEventListener("click", () => openLightbox(i));
  });
}

/* init */
function init(){
  createSlides();
  createNav();
  loadSlideFromHash();
  slides.forEach(s => s.classList.remove("active"));
  slides[currentSlide].classList.add("active");
  updateUI();
  updateHash();
  wirePhotos();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();

window.addEventListener("hashchange", () => {
  loadSlideFromHash();
  slides.forEach(s => s.classList.remove("active"));
  slides[currentSlide].classList.add("active");
  updateUI();
});
