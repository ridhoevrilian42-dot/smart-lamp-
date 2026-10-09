"use strict";
const titles = ["Judul","Alur Presentasi","Latar Belakang","Rumusan Masalah","Tujuan Penelitian",
"Batasan & Hipotesis","Manfaat Penelitian","Landasan Teori","Penelitian Terdahulu","Desain Penelitian",
"Alat & Bahan","Prosedur Penelitian","Pengumpulan Data","Pengolahan Data","Hasil Penelitian",
"Grafik & Dokumentasi","Pembahasan","Kesimpulan & Saran","Referensi","Penutup"];

/* data gambar "Alat" (base64) didefinisikan di index.html sebagai window.TOOL_IMAGES */
const TOOL_IMAGES = window.TOOL_IMAGES || {};
const CHART_IMAGE = window.CHART_IMAGE || "";
const STEP_IMAGES = window.STEP_IMAGES || {};
const DOC_IMAGES = window.DOC_IMAGES || [];
const SCHOOL_LOGO = window.SCHOOL_LOGO || "";

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
<h3 class="section-label">Alat</h3>
<div class="grid-4">
<div class="card tool-card"><div class="tool-photo"><img src="${TOOL_IMAGES.laptop}" alt="Laptop" loading="lazy"></div></div>
<div class="card tool-card"><div class="tool-photo"><img src="${TOOL_IMAGES.esp32}" alt="ESP32" loading="lazy"></div></div>
<div class="card tool-card"><div class="tool-photo"><img src="${TOOL_IMAGES.ldr}" alt="LDR" loading="lazy"></div></div>
<div class="card tool-card"><div class="tool-photo"><img src="${TOOL_IMAGES.led}" alt="Lampu" loading="lazy"></div></div>
<div class="card tool-card"><div class="tool-photo"><img src="${TOOL_IMAGES.jumper}" alt="Jumper" loading="lazy"></div></div>
<div class="card tool-card"><div class="tool-photo"><img src="${TOOL_IMAGES.adaptor}" alt="Adaptor" loading="lazy"></div></div>
<div class="card tool-card"><div class="tool-photo"><img src="${TOOL_IMAGES.breadboard}" alt="Breadboard" loading="lazy"></div></div>
<div class="card tool-card"><div class="tool-photo"><img src="${TOOL_IMAGES.usb}" alt="USB" loading="lazy"></div></div>
</div>
<h3 class="section-label" style="margin-top:20px">Bahan</h3>
<div class="card" style="margin-top:10px"><h3>Software</h3><p>Arduino IDE dan Serial Monitor.</p></div>
</div>`,

`<div class="slide-inner"><div class="kicker">12 / Prosedur</div><h2>Prosedur Penelitian</h2>
<div class="timeline">
<div class="step"><div class="number">01</div><div class="card"><h3>Persiapan</h3></div></div>
<div class="step"><div class="number">02</div><div class="card step-clickable" id="flowchartTrigger"><h3>Perancangan Sistem</h3></div></div>
<div class="step"><div class="number">03</div><div class="card step-clickable" data-step-img="komponen" data-caption="Pemasangan Komponen"><h3>Pemasangan Komponen</h3></div></div>
<div class="step"><div class="number">04</div><div class="card step-clickable" data-step-img="kode" data-caption="Pemrograman ESP32"><h3>Pemrograman ESP32</h3></div></div>
<div class="step"><div class="number">05</div><div class="card step-clickable" data-step-img="ldr" data-caption="Pengujian Sensor LDR"><h3>Pengujian Sensor LDR</h3></div></div>
<div class="step"><div class="number">06</div><div class="card step-clickable" data-step-img="lampu" data-caption="Pengujian Lampu"><h3>Pengujian Lampu</h3></div></div>
<div class="step"><div class="number">07</div><div class="card step-clickable" data-step-img="data" data-caption="Pengambilan Data"><h3>Pengambilan Data</h3></div></div>
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
<thead><tr><th>No.</th><th>Kondisi Lampu</th><th>Intensitas Cahaya</th><th>Nilai PWM</th><th>Daya</th></tr></thead>
<tbody>
<tr><td>01</td><td>Terang</td><td>100</td><td>250</td><td>8</td></tr>
<tr><td>02</td><td>Redup</td><td>60</td><td>140</td><td>4</td></tr>
<tr><td>03</td><td>Gelap</td><td>0</td><td>0</td><td>0</td></tr>
</tbody></table></div>
<p>Data uji coba pada tiga kondisi lampu: terang, redup, dan gelap.</p>
</div></div>`,

`<div class="slide-inner"><div class="kicker">16 / Grafik & Dokumentasi</div><h2>Grafik & Dokumentasi</h2>
<div class="grid-2">
<div class="card"><h3>Grafik Data Uji Coba</h3>
<img class="chart-img" id="chartImg" src="${CHART_IMAGE}" alt="Grafik Data Uji Coba: cahaya, PWM, dan daya"></div>
<div class="card"><h3>Dokumentasi Penelitian</h3>
<div class="gallery">
<div class="photo has-img" data-photo="1"><img src="${DOC_IMAGES[0]}" alt="Dokumentasi 1" loading="lazy"></div>
<div class="photo has-img" data-photo="2"><img src="${DOC_IMAGES[1]}" alt="Dokumentasi 2" loading="lazy"></div>
<div class="photo has-img" data-photo="3"><img src="${DOC_IMAGES[2]}" alt="Dokumentasi 3" loading="lazy"></div>
<div class="photo has-img" data-photo="4"><img src="${DOC_IMAGES[3]}" alt="Dokumentasi 4" loading="lazy"></div>
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

/* arah masuk/keluar tiap slide — ditentukan otomatis, berselang-seling
   right / left / up / down supaya terasa dinamis tapi tetap teratur */
const directions = [
  "right","left","up","down",
  "right","left","up","down",
  "right","left","up","down",
  "right","left","up","down",
  "right","left","up","down"
];

function createSlides(){
  slidesEl.innerHTML = "";
  content.forEach((html, i) => {
    const section = document.createElement("section");
    section.className = "slide";
    section.dataset.index = i;
    section.dataset.dir = directions[i] || "right";
    section.innerHTML = html;
    if (SCHOOL_LOGO){                       // logo sekolah di pojok kanan atas tiap halaman
      const logo = document.createElement("img");
      logo.className = "slide-logo";
      logo.src = SCHOOL_LOGO;
      logo.alt = "Logo SMA Gunung Madu";
      logo.draggable = false;
      section.appendChild(logo);
    }
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

/* ---- transisi sobekan kertas biru: maju = terbelah, mundur = menyatu kembali ---- */
const SLASH_MS = 2000;
const SLASH_REV_MS = 2100;
const BIG_PX = 6000;
// a -> b = garis sobekan dalam persen layar (x, y). Dipakai bergilir menurut nomor halaman.
const SLASH_PRESETS = [
  {a: [64, 0],   b: [36, 100]},   // diagonal /
  {a: [0, 50],   b: [100, 50]},   // horizontal di tengah
  {a: [50, 0],   b: [50, 100]},   // vertikal di tengah
  {a: [0, 0],    b: [100, 100]},  // kiri-atas ke kanan-bawah
  {a: [36, 0],   b: [64, 100]},   // diagonal \
  {a: [0, 24],   b: [100, 66]},   // kiri ke kanan, miring
  {a: [0, 100],  b: [100, 0]},    // kiri-bawah ke kanan-atas
  {a: [100, 0],  b: [0, 100]}     // kanan-atas ke kiri-bawah
];
const tearCache = {};   // sobekan yang sama dipakai lagi saat kembali, supaya menyatu pas

function buildCutPoints(){
  const n = 40;
  const ph1 = Math.random() * 6.28, ph2 = Math.random() * 6.28, ph3 = Math.random() * 6.28;
  const raw = [];
  for (let i = 0; i <= n; i++){
    const t = -0.06 + (1.12 * i) / n;
    raw.push(Math.sin(t * Math.PI * 3.0 + ph1) * 9 + Math.sin(t * Math.PI * 7.3 + ph2) * 5
           + Math.sin(t * Math.PI * 15 + ph3) * 2 + (Math.random() - 0.5) * 3);
  }
  for (let pass = 0; pass < 2; pass++){                       // haluskan supaya tidak lancip
    for (let i = 1; i < n; i++) raw[i] = (raw[i - 1] + 2 * raw[i] + raw[i + 1]) / 4;
  }
  return raw.map((j, i) => ({t: -0.06 + (1.12 * i) / n, j}));
}
function randWidths(n, min, max){
  return Array.from({length: n}, () => min + Math.random() * (max - min));
}
function cutPt(p, off, cut){
  const x = cut.x0 + (cut.x1 - cut.x0) * p.t;
  const y = cut.y0 + (cut.y1 - cut.y0) * p.t;
  const d = p.j + off;
  return `calc(${x.toFixed(2)}% + ${(cut.nx * d).toFixed(1)}px) calc(${y.toFixed(2)}% + ${(cut.ny * d).toFixed(1)}px)`;
}
function cutLine(pts, off, cut){ return pts.map(p => cutPt(p, off, cut)); }
function farLine(cut, side){
  const first = {t: -0.06, j: 0}, last = {t: 1.06, j: 0};
  return [cutPt(last, side * BIG_PX, cut), cutPt(first, side * BIG_PX, cut)];
}
function stripPoly(pts, widths, cut){
  const fwd = cutLine(pts, 0, cut);
  const back = pts.map((p, i) => cutPt(p, widths[i], cut)).reverse();
  return fwd.concat(back).join(",");
}
function makeCut(preset, W, H){
  const x0 = preset.a[0], y0 = preset.a[1], x1 = preset.b[0], y1 = preset.b[1];
  const dx = (x1 - x0) / 100 * W, dy = (y1 - y0) / 100 * H;
  const len = Math.hypot(dx, dy) || 1;
  return {x0, y0, x1, y1, dx, dy, nx: dy / len, ny: -dx / len};
}
function cloneSlide(slide){
  const clone = slide.cloneNode(true);
  clone.querySelectorAll("[id]").forEach(el => el.removeAttribute("id"));
  clone.removeAttribute("id");
  clone.className = "slide active slash-clone";
  return clone;
}
/* ---- efek tebasan petir: retakan menyala merambat dari ujung, halaman terbelah ---- */
// warna efek mengikuti tema: terang = tinta hitam, gelap = cahaya putih (lihat FX di playSlash)
const clamp01 = v => Math.max(0, Math.min(1, v));
const smoothstep = (u, a, b) => { const t = clamp01((u - a) / (b - a)); return t * t * (3 - 2 * t); };
const easeInOutCubic = u => u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;

function playSlash(oldSlide, newSlide, key, reverse){
  const stageEl = document.querySelector(".stage");
  const rect = stageEl.getBoundingClientRect();
  const W = rect.width, H = rect.height;
  const cut = makeCut(SLASH_PRESETS[key % SLASH_PRESETS.length], W, H);
  let pts = tearCache[key];
  if (!pts){ pts = buildCutPoints(); tearCache[key] = pts; }
  const len = Math.hypot(cut.dx, cut.dy) || 1;
  const tan = {x: cut.dx / len, y: cut.dy / len};
  const nrm = {x: cut.nx, y: cut.ny};
  const Ax = cut.x0 / 100 * W, Ay = cut.y0 / 100 * H, Bx = cut.x1 / 100 * W, By = cut.y1 / 100 * H;

  const dark = document.documentElement.getAttribute("data-theme") === "dark";
  const FX = dark ? {glow: "255,255,255", deep: "200,200,200", core: "255,255,255"} : {glow: "60,60,60", deep: "0,0,0", core: "0,0,0"};

  const overlay = document.createElement("div");
  overlay.className = "slash-overlay" + (reverse ? " rev" : "");
  if (reverse){
    const base = document.createElement("div");
    base.className = "slash-base";
    base.appendChild(cloneSlide(oldSlide));
    overlay.appendChild(base);
  }
  const source = reverse ? newSlide : oldSlide;
  const sides = [+1, -1];
  const phases = [Math.random() * 6.28, Math.random() * 6.28];
  const rnd = n => Array.from({length: n}, () => Math.random());
  // kanvas cahaya per belahan: setengah resolusi & ikut bergerak bersama belahan (transform di GPU)
  const pieces = sides.map(s => {
    const piece = document.createElement("div");
    piece.className = "fire-piece";
    piece.style.transformOrigin = Bx.toFixed(1) + "px " + By.toFixed(1) + "px";   // engsel di ujung sobekan
    const paper = document.createElement("div");
    paper.className = "fire-paper";
    paper.appendChild(cloneSlide(source));
    const cv = document.createElement("canvas");
    cv.className = "fire-canvas";
    cv.width = Math.round(W / 2);
    cv.height = Math.round(H / 2);
    piece.append(paper, cv);
    return {s, piece, paper, c: cv.getContext("2d"), irregular: rnd(pts.length), front: null, last: -1};
  });

  const flash = document.createElement("div");
  flash.className = "slash-flash";
  const lineWrap = document.createElement("div");
  const horizontal = Math.abs(cut.dx) >= Math.abs(cut.dy);
  lineWrap.className = "slash-line-wrap " + (horizontal ? (cut.dx >= 0 ? "rv-lr" : "rv-rl") : "rv-tb");
  const line = document.createElement("div");
  line.className = "slash-line";
  line.style.clipPath = "polygon(" + stripPoly(pts, pts.map(() => 4), cut) + ")";
  lineWrap.appendChild(line);

  overlay.append(...(reverse ? [overlay.firstChild] : []), pieces[0].piece, pieces[1].piece, flash, lineWrap);
  stageEl.appendChild(overlay);

  const GAP = 54, DIST = 88;
  const totalMs = (reverse ? SLASH_REV_MS : SLASH_MS) + 100;
  let stopped = false, frameNo = 0, lastTau = -1;
  const t0 = performance.now();

  const frontPt = (i, s, d) => {
    const p = pts[i];
    const off = p.j + s * d;
    return {x: Ax + (Bx - Ax) * p.t + nrm.x * off, y: Ay + (By - Ay) * p.t + nrm.y * off};
  };
  const farPt = (p, s) => ({x: Ax + (Bx - Ax) * p.t + nrm.x * s * BIG_PX, y: Ay + (By - Ay) * p.t + nrm.y * s * BIG_PX});
  const posOf = p => clamp01((p.t + 0.06) / 1.12);

  const timeline = el => {
    if (!reverse) return {
      tau: easeInOutCubic(clamp01((el - 120) / 900)),
      moveP: easeInOutCubic(clamp01((el - 750) / 1100))
    };
    return {
      moveP: 1 - easeInOutCubic(clamp01(el / 1000)),
      tau: 1 - easeInOutCubic(clamp01((el - 350) / 800))
    };
  };

  // bentuk tepi hanya dihitung ulang saat sobekan benar-benar berubah (jarang), bukan tiap frame
  function updateEdges(tau){
    const tearFront = tau * 1.3;
    pieces.forEach(pc => {
      const open = pts.map(p => clamp01((tearFront - posOf(p)) / 0.3));
      const front = pts.map((p, i) => frontPt(i, pc.s, GAP * open[i] * (0.7 + 0.3 * pc.irregular[i])));
      let last = -1;
      for (let i = 0; i < pts.length; i++){ if (open[i] > 0.02) last = i; }
      pc.front = front; pc.last = last;
      const e1 = farPt(pts[pts.length - 1], pc.s), e2 = farPt(pts[0], pc.s);
      const poly = front.map(q => q.x.toFixed(0) + "px " + q.y.toFixed(0) + "px")
        .concat([e1.x.toFixed(0) + "px " + e1.y.toFixed(0) + "px", e2.x.toFixed(0) + "px " + e2.y.toFixed(0) + "px"]);
      pc.paper.style.clipPath = "polygon(" + poly.join(",") + ")";
    });
  }

  // cahaya tepi: tanpa blur mahal, hanya 3 goresan + sedikit cabang, digambar ~20 fps
  function drawGlow(pc, k, time, tau){
    const c = pc.c;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.clearRect(0, 0, W, H);
    const last = pc.last, front = pc.front;
    if (last < 1) return;
    c.setTransform(0.5, 0, 0, 0.5, 0, 0);
    c.globalCompositeOperation = "lighter";
    c.lineJoin = "round"; c.lineCap = "round";
    const flick = 0.88 + 0.12 * Math.sin(time * 35 + phases[k] * 3);
    const path = () => {
      c.beginPath();
      c.moveTo(front[0].x, front[0].y);
      for (let i = 1; i < last; i++){
        const q = front[i], n2 = front[i + 1];
        c.quadraticCurveTo(q.x, q.y, (q.x + n2.x) / 2, (q.y + n2.y) / 2);
      }
      c.lineTo(front[last].x, front[last].y);
    };
    path(); c.strokeStyle = "rgba(" + FX.deep + "," + (0.22 * flick).toFixed(2) + ")"; c.lineWidth = 30; c.stroke();
    path(); c.strokeStyle = "rgba(" + FX.glow + "," + (0.50 * flick).toFixed(2) + ")"; c.lineWidth = 11; c.stroke();
    path(); c.strokeStyle = "rgba(" + FX.core + "," + flick.toFixed(2) + ")"; c.lineWidth = 3; c.stroke();
    const gx = -pc.s * nrm.x, gy = -pc.s * nrm.y;
    for (let m = 0; m < 3; m++){
      const q = front[1 + Math.floor(Math.random() * last)];
      const ang = Math.atan2(gy, gx) + (Math.random() - 0.5) * 1.4;
      const L = 14 + Math.random() * 26;
      c.beginPath(); c.moveTo(q.x, q.y);
      c.quadraticCurveTo(q.x + Math.cos(ang + 0.5) * L * 0.6, q.y + Math.sin(ang + 0.5) * L * 0.6, q.x + Math.cos(ang) * L, q.y + Math.sin(ang) * L);
      c.strokeStyle = "rgba(" + FX.glow + "," + (0.5 + 0.4 * Math.random()).toFixed(2) + ")";
      c.lineWidth = 2; c.stroke();
    }
    const tipAmt = clamp01(tau * 8) * (1 - smoothstep(tau, 0.9, 1));
    if (tipAmt > 0.02){
      const tq = front[last];
      const rg = c.createRadialGradient(tq.x, tq.y, 0, tq.x, tq.y, 80);
      rg.addColorStop(0, "rgba(" + FX.core + "," + ((dark ? 0.9 : 0.45) * tipAmt).toFixed(2) + ")");
      rg.addColorStop(0.3, "rgba(" + FX.glow + "," + ((dark ? 0.5 : 0.25) * tipAmt).toFixed(2) + ")");
      rg.addColorStop(1, "rgba(" + FX.deep + ",0)");
      c.fillStyle = rg;
      c.fillRect(tq.x - 80, tq.y - 80, 160, 160);
    }
  }

  updateEdges(timeline(0).tau);
  lastTau = timeline(0).tau;

  function frame(){
    if (stopped) return;
    requestAnimationFrame(frame);
    const el = performance.now() - t0;
    const time = el / 1000;
    frameNo++;
    const {tau, moveP} = timeline(el);
    const alpha = reverse ? clamp01((1 - moveP) * 8) : 1 - smoothstep(moveP, 0.8, 1);
    const life = Math.sin(Math.PI * Math.min(1, moveP));

    // gerak belahan: hanya transform + opacity (murah, ditangani GPU)
    pieces.forEach((pc, k) => {
      const s = pc.s, ph = phases[k];
      const sway = Math.sin(time * 4 + ph) * 14 * moveP;
      const tx = s * nrm.x * DIST / 100 * W * moveP + tan.x * sway;
      const ty = s * nrm.y * DIST / 100 * H * moveP + tan.y * sway - 0.05 * H * moveP;
      const rot = s * (6 * tau + 10 * moveP) + Math.sin(time * 5 + ph) * 0.9 * life;
      pc.piece.style.transform = "translate(" + tx.toFixed(1) + "px," + ty.toFixed(1) + "px) rotate(" + rot.toFixed(2) + "deg)";
      pc.piece.style.opacity = alpha.toFixed(2);
    });

    // bentuk sobekan: hanya diperbarui saat tau berubah, itu pun maksimal 30 kali per detik
    if (Math.abs(tau - lastTau) > 0.001 && frameNo % 2 === 0){ updateEdges(tau); lastTau = tau; }
    // cahaya: ~20 fps
    if (frameNo % 3 === 0) pieces.forEach((pc, k) => drawGlow(pc, k, time, tau));
  }
  requestAnimationFrame(frame);
  setTimeout(() => { stopped = true; overlay.remove(); }, totalMs);
}

function updateSlide(newIndex){
  if (isAnimating || !slides.length) return;
  if (newIndex < 0 || newIndex >= slides.length || newIndex === currentSlide) return;
  isAnimating = true;
  const oldIndex = currentSlide;
  const oldSlide = slides[oldIndex];
  const newSlide = slides[newIndex];
  const forward = newIndex > oldIndex;
  const useSlash = !reduceMotion;

  if (useSlash){
    slidesEl.classList.add("slash-mode");            // slide asli berganti langsung di bawah overlay
    if (!forward) newSlide.classList.add("no-enter"); // mundur: isi slide tujuan tidak animasi masuk lagi
    playSlash(oldSlide, newSlide, forward ? newIndex : oldIndex, !forward);
  }
  oldSlide.classList.remove("active", "no-enter");
  newSlide.classList.add("active");
  currentSlide = newIndex;
  updateUI();
  updateHash();
  setTimeout(() => {
    isAnimating = false;
    slidesEl.classList.remove("slash-mode");
  }, useSlash ? (forward ? SLASH_MS : SLASH_REV_MS) : 1400);
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

/* lightbox: carousel untuk foto dokumentasi + mode gambar tunggal (mis. flowchart) */
const photoLabels = ["FOTO 1","FOTO 2","FOTO 3","FOTO 4"];
let currentPhotoIndex = 0;
let carouselItems = [];
let lightboxMode = "carousel"; // "carousel" | "single"
const FLOW_IMAGE = window.FLOW_IMAGE || "";

function photoSvg(label){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='#e8e4da'/><text x='50%' y='50%' font-family='Times New Roman' font-size='40' fill='#555' text-anchor='middle' dy='.3em'>${label}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
function playLightboxEnter(){
  lightboxImg.style.animation = "none";
  void lightboxImg.offsetWidth;
  lightboxImg.style.animation = "";
}
function renderLightboxPhoto(){
  playLightboxEnter();
  const item = carouselItems[currentPhotoIndex];
  lightboxImg.src = item.src;
  lightboxCaption.textContent = `${currentPhotoIndex + 1} / ${carouselItems.length} — ${item.caption}`;
}
function openCarousel(items, index){
  carouselItems = items;
  lightboxMode = "carousel";
  lightbox.classList.remove("single");
  currentPhotoIndex = ((index % items.length) + items.length) % items.length;
  renderLightboxPhoto();
  lightbox.classList.add("active"); startGlitch();
}
function openLightbox(index){
  const items = DOC_IMAGES.length
    ? DOC_IMAGES.map((src, i) => ({src, caption: "Dokumentasi " + (i + 1)}))
    : photoLabels.map(l => ({src: photoSvg(l), caption: l}));
  openCarousel(items, index);
}
const toolItems = [
  {key:"laptop", caption:"Laptop"},
  {key:"esp32", caption:"ESP32"},
  {key:"ldr", caption:"Sensor LDR"},
  {key:"led", caption:"Lampu (LED)"},
  {key:"jumper", caption:"Kabel Jumper"},
  {key:"adaptor", caption:"Adaptor"},
  {key:"breadboard", caption:"Breadboard"},
  {key:"usb", caption:"Kabel USB"}
];
function openToolViewer(index){
  openCarousel(toolItems.map(t => ({src: TOOL_IMAGES[t.key], caption: t.caption})), index);
}
function openImageViewer(src, caption){
  lightboxMode = "single";
  lightbox.classList.add("single");
  playLightboxEnter();
  lightboxImg.src = src;
  lightboxCaption.textContent = caption || "";
  lightbox.classList.add("active"); startGlitch();
}
/* latar glitch cyan: bar horizontal bergaris yang muncul, bergeser, lalu memudar */
const glitchCanvas = document.getElementById("glitchCanvas");
const gctx = glitchCanvas.getContext("2d");
const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let glitchRaf = null, glitchLast = 0, glitchBars = [];

function sizeGlitch(){
  glitchCanvas.width = Math.ceil(window.innerWidth / 2);
  glitchCanvas.height = Math.ceil(window.innerHeight / 2);
}
function spawnBar(){
  const W = glitchCanvas.width, H = glitchCanvas.height;
  const h = Math.round(3 + Math.random() * Math.random() * 55);
  const w = Math.round(W * (0.15 + Math.random() * 0.85));
  glitchBars.push({
    x: Math.round(Math.random() * W - w * 0.3),
    y: Math.round(Math.random() * H),
    w, h, age: 0,
    life: 6 + Math.random() * 26,
    a: 0.55 + Math.random() * 0.45,
    warm: Math.random() < 0.25
  });
}
function drawBar(b){
  const t = b.age / b.life;
  const env = Math.sin(Math.PI * Math.min(t, 1));
  const alpha = b.a * env;
  if (alpha <= 0.01) return;
  const c1 = b.warm ? "225,225,225" : "255,255,255";
  // glow lembut di belakang bar
  const g0 = gctx.createLinearGradient(b.x, 0, b.x + b.w, 0);
  g0.addColorStop(0, "rgba(" + c1 + ",0)");
  g0.addColorStop(0.3, "rgba(" + c1 + ",1)");
  g0.addColorStop(1, "rgba(" + c1 + ",0)");
  gctx.globalAlpha = alpha * 0.26;
  gctx.fillStyle = g0;
  gctx.fillRect(b.x, b.y - b.h * 0.4, b.w, b.h * 1.8);
  // garis-garis horizontal (scanline)
  const g = gctx.createLinearGradient(b.x, 0, b.x + b.w, 0);
  g.addColorStop(0, "rgba(" + c1 + ",0)");
  g.addColorStop(0.2, "rgba(" + c1 + ",0.9)");
  g.addColorStop(0.55, "rgba(255,255,255,1)");
  g.addColorStop(1, "rgba(" + c1 + ",0.15)");
  gctx.fillStyle = g;
  gctx.globalAlpha = alpha;
  for (let yy = 0; yy < b.h; yy += 2){
    if (Math.random() < 0.12) continue;
    const off = Math.random() < 0.2 ? (Math.random() - 0.5) * 24 : 0;
    gctx.fillRect(b.x + off, b.y + yy, b.w * (0.72 + Math.random() * 0.28), 1);
  }
  // bintik noise di sekitar bar
  gctx.fillStyle = "rgba(" + c1 + ",1)";
  const specks = Math.round(b.h / 3);
  for (let i = 0; i < specks; i++){
    const sx = b.x + (Math.random() < 0.5 ? Math.random() * 18 : b.w - Math.random() * 18);
    gctx.fillRect(sx, b.y + Math.random() * b.h, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }
}
function glitchLoop(ts){
  if (!lightbox.classList.contains("active")) { glitchRaf = null; return; }
  glitchRaf = requestAnimationFrame(glitchLoop);
  if (ts - glitchLast < 33) return;           // ~30 fps, biar terasa "glitch"
  glitchLast = ts;
  gctx.globalCompositeOperation = "source-over";
  gctx.globalAlpha = 1;
  gctx.fillStyle = "rgba(0,0,0,0.30)";       // jejak yang memudar
  gctx.fillRect(0, 0, glitchCanvas.width, glitchCanvas.height);
  gctx.globalCompositeOperation = "lighter";
  if (glitchBars.length < 16 && Math.random() < 0.55) spawnBar();
  if (Math.random() < 0.05) { spawnBar(); spawnBar(); spawnBar(); }
  glitchBars = glitchBars.filter(b => b.age < b.life);
  glitchBars.forEach(b => {
    if (Math.random() < 0.2) b.x += (Math.random() - 0.5) * 30;   // geser acak
    drawBar(b);
    b.age++;
  });
}
function startGlitch(){
  if (reduceMotion) return;
  sizeGlitch();
  if (!glitchRaf){
    glitchBars = [];
    gctx.globalCompositeOperation = "source-over";
    gctx.globalAlpha = 1;
    gctx.fillStyle = "#000000";
    gctx.fillRect(0, 0, glitchCanvas.width, glitchCanvas.height);
    glitchRaf = requestAnimationFrame(glitchLoop);
  }
}
window.addEventListener("resize", () => { if (lightbox.classList.contains("active")) sizeGlitch(); });
function closeLightboxFn(){ lightbox.classList.remove("active"); }
function lightboxNextPhoto(){ if (lightboxMode !== "carousel") return; currentPhotoIndex = (currentPhotoIndex + 1) % carouselItems.length; renderLightboxPhoto(); }
function lightboxPrevPhoto(){ if (lightboxMode !== "carousel") return; currentPhotoIndex = (currentPhotoIndex - 1 + carouselItems.length) % carouselItems.length; renderLightboxPhoto(); }

closeLightbox.addEventListener("click", closeLightboxFn);
lightboxNext.addEventListener("click", lightboxNextPhoto);
lightboxPrev.addEventListener("click", lightboxPrevPhoto);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightboxFn(); });

function wirePhotos(){
  document.querySelectorAll(".photo").forEach((photo, i) => {
    photo.addEventListener("click", () => openLightbox(i));
  });
}

function wireToolCards(){
  document.querySelectorAll(".tool-card").forEach((card, i) => {
    card.addEventListener("click", () => openToolViewer(i));
  });
}

function wireChart(){
  const img = document.getElementById("chartImg");
  if (!img) return;
  img.addEventListener("click", () => openImageViewer(CHART_IMAGE, "Grafik Data Uji Coba"));
}

function wireStepImages(){
  document.querySelectorAll("[data-step-img]").forEach(el => {
    el.addEventListener("click", () => {
      const src = STEP_IMAGES[el.dataset.stepImg];
      if (src) openImageViewer(src, el.dataset.caption || "");
    });
  });
}

function wireFlowchartTrigger(){
  const trigger = document.getElementById("flowchartTrigger");
  if (!trigger || !FLOW_IMAGE) return;
  trigger.addEventListener("click", () => {
    openImageViewer(FLOW_IMAGE, "Flowchart Sistem Kerja Smart Lamp");
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
  wireToolCards();
  wireChart();
  wireStepImages();
  wireFlowchartTrigger();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();

window.addEventListener("hashchange", () => {
  loadSlideFromHash();
  slides.forEach(s => s.classList.remove("active"));
  slides[currentSlide].classList.add("active");
  updateUI();
});
