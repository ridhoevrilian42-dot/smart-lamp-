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
function seededRandom(seed){
  let a = seed * 2654435761 >>> 0;
  return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
// latar papan sirkuit: chip yang menyala dengan jalur sirkuit menyebar ke empat arah (berbeda di tiap halaman)
function circuitSvg(i){
  const rnd = seededRandom(i * 17 + 3);
  const R = (lo, hi) => lo + rnd() * (hi - lo);
  const W = 1200, H = 700;
  const cx = W * R(0.56, 0.82), cy = H * R(0.34, 0.62);
  const half = 30;
  let lines = "", nodes = "";
  [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dx, dy]) => {
    const px = -dy, py = dx;
    const pins = dx ? 9 : 7;                                         // lebih banyak jalur ke samping
    for (let k = 0; k < pins; k++){
      const mid = (pins - 1) / 2;
      const off = (k - mid) * 7;
      let x = cx + dx * half + px * off, y = cy + dy * half + py * off;
      let d = "M" + x.toFixed(0) + " " + y.toFixed(0);
      const sgn = off === 0 ? (rnd() < 0.5 ? 1 : -1) : (off > 0 ? 1 : -1) * (rnd() < 0.85 ? 1 : -1);
      const steps = 2 + Math.floor(rnd() * 2);
      for (let s = 0; s < steps; s++){
        const len = R(26, 130) * (s ? 1.5 : 1);
        x += dx * len; y += dy * len; d += "L" + x.toFixed(0) + " " + y.toFixed(0);
        const jog = R(12, 38) * (1 + Math.abs(k - mid) / Math.max(1, mid));        // belokan 45 derajat, jalur luar menyebar lebih jauh
        x += dx * jog + px * sgn * jog; y += dy * jog + py * sgn * jog;
        d += "L" + x.toFixed(0) + " " + y.toFixed(0);
      }
      const last = R(50, 280);
      x += dx * last; y += dy * last; d += "L" + x.toFixed(0) + " " + y.toFixed(0);
      lines += d;
      if (rnd() < 0.55){                                              // simpul menyala di ujung jalur
        nodes += "M" + (x - 3.5).toFixed(0) + " " + y.toFixed(0) + " a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0 M" + (x - 8).toFixed(0) + " " + y.toFixed(0) + " a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0 ";
      }
    }
  });
  const bokeh = n => { let s = ""; for (let t = 0; t < n; t++) s += "M" + R(10, W - 10).toFixed(0) + " " + R(10, H - 10).toFixed(0) + "h.1"; return s; };
  return '<svg class="net-bg" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<circle class="cg" cx="' + cx.toFixed(0) + '" cy="' + cy.toFixed(0) + '" r="210" fill="url(#chipGlow)"/>'
    + '<path class="tg" d="' + lines + '"/><path class="tl" d="' + lines + '"/><path class="nd" d="' + nodes + '"/>'
    + '<path class="b1" d="' + bokeh(12) + '"/><path class="b2" d="' + bokeh(6) + '"/><path class="b3" d="' + bokeh(3) + '"/>'
    + '<rect class="ch" x="' + (cx - half).toFixed(0) + '" y="' + (cy - half).toFixed(0) + '" width="' + (half * 2) + '" height="' + (half * 2) + '" rx="5"/>'
    + '<rect class="ci" x="' + (cx - half + 11).toFixed(0) + '" y="' + (cy - half + 11).toFixed(0) + '" width="' + (half * 2 - 22) + '" height="' + (half * 2 - 22) + '" rx="3"/>'
    + '</svg>';
}

const content = [
`<div class="slide-inner hero"><div><div class="kicker">Prototype Smart Lamp</div>
<h1 class="title-long">Prototype Lampu Pintar Berbasis Embedded System dan IoT Menggunakan ESP-32 Sebagai Alat Intensitas Cahaya Pada Ruangan yang Mengatur Pencahayaan Saat Belajar di SMA Gunung Madu</h1>
<p>Sistem pencahayaan otomatis berdasarkan intensitas cahaya ruangan menggunakan sensor LDR.</p>
<div class="hero-meta"><span class="pill">Ridho Evrilian</span><span class="pill">XIIB</span>
<span class="pill">SMA Gunung Madu</span><span class="pill">Miss Adel</span><span class="pill">14 Juli 2026</span></div>
</div><div class="lamp-visual"><div class="lamp"></div></div></div>`,

`<div class="slide-inner"><div class="kicker">02 / Navigation</div><h2>Alur Presentasi</h2>
<div class="grid-3">
<div class="card"><div class="number">01</div><h3>Pendahuluan</h3><p>Latar belakang, rumusan masalah, tujuan, batasan, hipotesis, dan manfaat penelitian.</p></div>
<div class="card"><div class="number">02</div><h3>Landasan Teori</h3><p>ESP32, IoT, cahaya, lampu pintar, dan penelitian terdahulu.</p></div>
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
<div class="card"><div class="number">01</div><h3>Perancangan Sistem</h3><p>Bagaimana cara merancang dan membangun sistem prototype smart lamp berbasis embedded dan IoT dengan ESP32?</p></div>
<div class="card"><div class="number">02</div><h3>Cara Kerja Sensor</h3><p>Bagaimana cara kerja sensor LDR dalam mendeteksi kondisi pencahayaan agar lampu dapat menyala dengan tingkat terang yang sesuai secara otomatis?</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">05 / Tujuan</div><h2>Tujuan Penelitian</h2>
<div class="grid-2">
<div class="card"><div class="number">01</div><h3>Merancang dan Membangun</h3><p>Merancang dan membangun sistem prototype smart lamp berbasis embedded dan IoT dengan ESP32.</p></div>
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
<div class="card"><div class="number">02</div><h3>Bagi Peneliti</h3><p>Memberikan pengalaman dalam mempelajari embedded system, IoT, penggunaan sensor, dan melakukan pemrograman.</p></div>
<div class="card"><div class="number">03</div><h3>Bagi Siswa</h3><p>Memberikan kenyamanan dalam pembelajaran.</p></div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">08 / Landasan Teori</div><h2>Landasan Teori</h2>
<div class="grid-2">
<div class="card"><div class="number">01</div><h3>ESP32</h3><p>ESP32 adalah sebuah mikrokontroler yang merupakan penerus ESP8266. Pada ESP32 tersedia Wi-Fi untuk mendukung alat IoT dan embedded system.</p><p><strong>(Aulia, 2021)</strong></p></div>
<div class="card"><div class="number">02</div><h3>Cahaya</h3><p>Cahaya merupakan sumber kehidupan. Tanpa adanya cahaya kemungkinan tidak akan ada sebuah kehidupan. Jika tidak ada cahaya, bumi akan menjadi dingin dan gelap gulita.</p><p><strong>(Sunardi, 2012)</strong></p></div>
<div class="card"><div class="number">03</div><h3>Lampu Pintar</h3><p>Lampu pintar adalah lampu yang bisa dikendalikan secara otomatis melalui IoT ataupun embedded system.</p><p><strong>(Djaeng dan Dwi, 2017)</strong></p></div>
<div class="card"><div class="number">04</div><h3>IoT</h3><p>Kemampuan berbagai device yang bisa saling terhubung dan saling bertukar data melalui jaringan internet.</p><p><strong>(Hardyanto, 2017)</strong></p></div>
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
<div class="grid-2 equal">
<div class="card"><h3>Parameter yang Diamati</h3>
<div class="table-wrap"><table class="data-table compact">
<thead><tr><th>Parameter</th><th>Data yang Diamati</th><th>Instrumen</th></tr></thead>
<tbody>
<tr><td>Intensitas Cahaya</td><td>Nilai cahaya yang diterima (%)</td><td>Sensor LDR / Dashboard</td></tr>
<tr><td>PWM / Daya Lampu</td><td>Nilai pengaturan output lampu (%)</td><td>Serial Monitor / Dashboard</td></tr>
<tr><td>Daya (Watt)</td><td>Estimasi daya yang terpakai</td><td>Dashboard</td></tr>
<tr><td>Status Lampu</td><td>ON atau OFF</td><td>Dashboard</td></tr>
<tr><td>Waktu</td><td>Dicatat tiap 3 detik</td><td>Dashboard</td></tr>
<tr><td>Kontrol Jarak Jauh</td><td>Pilihan daya: Mati, 1.5 W, 4 W, 8 W</td><td>Dashboard IoT</td></tr>
</tbody></table></div>
<p class="note">Data dianalisis dengan melihat hubungan antara intensitas cahaya yang diterima sensor dengan daya lampu yang diberikan oleh ESP32, lalu energi dihitung dari daya dan lama lampu menyala.</p>
</div>
<div class="card"><h3>Layar Perhitungan Daya</h3>
<pre class="calc"><b>PERHITUNGAN DAYA</b>
E (Wh)  = jumlah (W x detik) / 3600
P rata2 = E (Wh) / lama nyala (jam)

Tiap data : 1.5 W x 3 s / 3600
          = 0.0013 Wh

<b>[SESI AKTIF] lampu menyala</b>
Lama      : 00:01:15 (0.0209 jam)
Energi    : 0.0368 Wh
Rata-rata : 0.0368 / 0.0209 = 1.77 W

<b>SESI TERAKHIR (saat dimatikan)</b>
10.31.16 - 10.32.14  lama 00:00:54
P = 0.0507 Wh / 0.0151 jam
  = 3.35 W (puncak 8.0 W)

<b>TOTAL ENERGI    : 3.790 Wh</b>
<b>RATA2 SEMUA SESI: 2.81 W</b></pre>
</div>
</div></div>`,

`<div class="slide-inner"><div class="kicker">15 / Hasil Penelitian</div><h2>Data Hasil Penelitian</h2>
<div class="grid-2 equal">
<div class="card"><h3>Data Uji Coba</h3>
<div class="table-wrap"><table class="data-table compact">
<thead><tr><th>No.</th><th>Kondisi Lampu</th><th class="num">Intensitas Cahaya</th><th class="num">Nilai PWM</th><th class="num">Daya</th></tr></thead>
<tbody>
<tr><td>01</td><td>Terang</td><td class="num">100</td><td class="num">250</td><td class="num">8</td></tr>
<tr><td>02</td><td>Redup</td><td class="num">60</td><td class="num">140</td><td class="num">4</td></tr>
<tr><td>03</td><td>Gelap</td><td class="num">0</td><td class="num">0</td><td class="num">0</td></tr>
</tbody></table></div>
<h3 class="sub">Energi Harian (Wh)*</h3>
<div class="chips"><span class="chip"><i>2026-10-09</i>2.8</span><span class="chip"><i>2026-10-10</i>0.12</span><span class="chip"><i>2026-10-11</i>0.75</span><span class="chip"><i>2026-10-13</i>0.11</span></div>
<p class="fine">*Dibaca dari grafik dashboard (perkiraan), kecuali 2026-10-13.</p>
</div>
<div class="card"><h3>Riwayat Tersimpan</h3>
<div class="table-scroll tall"><table class="data-table compact">
<thead><tr><th>Waktu</th><th class="num">Cahaya</th><th class="num">Daya</th><th class="num">Watt</th><th class="num">Status</th></tr></thead>
<tbody>
<tr><td>10.36.16</td><td class="num">83%</td><td class="num">11%</td><td class="num">0.8</td><td class="num">ON</td></tr>
<tr><td>10.36.13</td><td class="num">1%</td><td class="num">99%</td><td class="num">7.9</td><td class="num">ON</td></tr>
<tr><td>10.36.10</td><td class="num">0%</td><td class="num">100%</td><td class="num">8.0</td><td class="num">ON</td></tr>
<tr><td>10.36.07</td><td class="num">81%</td><td class="num">12%</td><td class="num">0.9</td><td class="num">ON</td></tr>
<tr><td>10.36.03</td><td class="num">100%</td><td class="num">0%</td><td class="num">0.0</td><td class="num">OFF</td></tr>
<tr><td>10.36.00</td><td class="num">97%</td><td class="num">2%</td><td class="num">0.1</td><td class="num">ON</td></tr>
<tr><td>10.35.57</td><td class="num">82%</td><td class="num">11%</td><td class="num">0.9</td><td class="num">ON</td></tr>
<tr><td>10.35.54</td><td class="num">100%</td><td class="num">0%</td><td class="num">0.0</td><td class="num">OFF</td></tr>
<tr><td>10.35.52</td><td class="num">83%</td><td class="num">11%</td><td class="num">0.8</td><td class="num">ON</td></tr>
<tr><td>10.35.49</td><td class="num">86%</td><td class="num">9%</td><td class="num">0.7</td><td class="num">ON</td></tr>
<tr><td>10.35.45</td><td class="num">86%</td><td class="num">9%</td><td class="num">0.7</td><td class="num">ON</td></tr>
<tr><td>10.35.42</td><td class="num">67%</td><td class="num">33%</td><td class="num">2.6</td><td class="num">ON</td></tr>
<tr><td>10.35.40</td><td class="num">84%</td><td class="num">10%</td><td class="num">0.8</td><td class="num">ON</td></tr>
<tr><td>10.35.36</td><td class="num">86%</td><td class="num">9%</td><td class="num">0.7</td><td class="num">ON</td></tr>
<tr><td>10.35.33</td><td class="num">85%</td><td class="num">9%</td><td class="num">0.8</td><td class="num">ON</td></tr>
</tbody></table></div>
</div>
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
<div class="card"><div class="number">03</div><h3>Perbandingan dengan Peneliti Sebelumnya</h3><p>Domingos Soares Martins membuat smart lamp berbasis NodeMCU dengan sensor LDR berbasis IoT yang dapat dikendalikan dari jarak jauh dan efisien dalam penggunaan energi.</p><p>Penelitian saya menggunakan embedded system dan IoT yang juga mengontrol lampu secara otomatis, dapat dikendalikan dari jarak jauh dan dapat menghemat energi, tetapi terdapat 2 sistem pada penelitian tersebut.</p></div>
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
    section.insertAdjacentHTML("afterbegin", circuitSvg(i));   // latar papan sirkuit di belakang isi halaman
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


/* =====================================================================
   KARAKTER 3D - WebGL murni (tanpa library). Model dirakit dari bola, kerucut,
   silinder, dan kotak, dengan bayangan cel (toon) dan garis tepi ala anime.
   ===================================================================== */
const Sam3D = (() => {
  const canvas = document.getElementById("samCanvas");
  const host = document.getElementById("samurai");
  const USE_3D = false;   // false = pakai karakter 2D (SVG) berambut putih; ubah ke true untuk versi 3D
  if (!USE_3D || !canvas || !host) return null;
  let gl = null;
  try { gl = canvas.getContext("webgl", {alpha: true, antialias: true, premultipliedAlpha: true}); } catch (e) { gl = null; }
  if (!gl) return null;

  // ---------- matematika matriks (kolom-mayor) ----------
  const M = {
    id: () => new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]),
    mul(a, b){
      const o = new Float32Array(16);
      for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++){
        let s = 0; for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k];
        o[c * 4 + r] = s;
      }
      return o;
    },
    T(x, y, z){ const m = M.id(); m[12] = x; m[13] = y; m[14] = z; return m; },
    S(x, y, z){ const m = M.id(); m[0] = x; m[5] = y; m[10] = z; return m; },
    RX(a){ const m = M.id(), c = Math.cos(a), s = Math.sin(a); m[5] = c; m[6] = s; m[9] = -s; m[10] = c; return m; },
    RY(a){ const m = M.id(), c = Math.cos(a), s = Math.sin(a); m[0] = c; m[2] = -s; m[8] = s; m[10] = c; return m; },
    RZ(a){ const m = M.id(), c = Math.cos(a), s = Math.sin(a); m[0] = c; m[1] = s; m[4] = -s; m[5] = c; return m; },
    persp(fovy, asp, n, f){
      const t = 1 / Math.tan(fovy / 2), m = new Float32Array(16);
      m[0] = t / asp; m[5] = t; m[10] = (f + n) / (n - f); m[11] = -1; m[14] = 2 * f * n / (n - f);
      return m;
    },
    look(e, t, u){
      let z = [e[0]-t[0], e[1]-t[1], e[2]-t[2]]; let l = Math.hypot(...z); z = z.map(v => v / l);
      let x = [u[1]*z[2]-u[2]*z[1], u[2]*z[0]-u[0]*z[2], u[0]*z[1]-u[1]*z[0]]; l = Math.hypot(...x); x = x.map(v => v / l);
      const y = [z[1]*x[2]-z[2]*x[1], z[2]*x[0]-z[0]*x[2], z[0]*x[1]-z[1]*x[0]];
      const d = (a, b) => a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
      return new Float32Array([x[0],y[0],z[0],0, x[1],y[1],z[1],0, x[2],y[2],z[2],0, -d(x,e),-d(y,e),-d(z,e),1]);
    },
    // matriks yang sumbu +Y-nya mengarah ke "dir", dengan skala (sx, sy, sz) dan posisi pos
    basis(pos, dir, sx, sy, sz){
      let y = dir; let l = Math.hypot(...y) || 1; y = y.map(v => v / l);
      const hv = Math.abs(y[1]) < 0.98 ? [0, 1, 0] : [1, 0, 0];
      let x = [hv[1]*y[2]-hv[2]*y[1], hv[2]*y[0]-hv[0]*y[2], hv[0]*y[1]-hv[1]*y[0]]; l = Math.hypot(...x); x = x.map(v => v / l);
      const z = [y[1]*x[2]-y[2]*x[1], y[2]*x[0]-y[0]*x[2], y[0]*x[1]-y[1]*x[0]];
      return new Float32Array([x[0]*sx,x[1]*sx,x[2]*sx,0, y[0]*sy,y[1]*sy,y[2]*sy,0, z[0]*sz,z[1]*sz,z[2]*sz,0, pos[0],pos[1],pos[2],1]);
    },
    nrm(m){      // invers-transpose dari 3x3 kiri-atas (untuk normal)
      const a = m[0], d = m[1], g = m[2], b = m[4], e = m[5], h = m[6], c = m[8], f = m[9], i = m[10];   // baris: [a b c][d e f][g h i]
      const c00 = e*i - f*h, c01 = -(d*i - f*g), c02 = d*h - e*g;
      const c10 = -(b*i - c*h), c11 = a*i - c*g, c12 = -(a*h - b*g);
      const c20 = b*f - c*e, c21 = -(a*f - c*d), c22 = a*e - b*d;
      let det = a*c00 + b*c01 + c*c02; if (Math.abs(det) < 1e-8) det = 1;
      const k = 1 / det;
      return new Float32Array([c00*k, c10*k, c20*k, c01*k, c11*k, c21*k, c02*k, c12*k, c22*k]);
    }
  };

  // ---------- shader ----------
  const VS = "attribute vec3 aPos;attribute vec3 aNor;uniform mat4 uVP;uniform mat4 uModel;uniform mat3 uNrm;uniform float uOutline;varying vec3 vN;varying vec3 vW;"
    + "void main(){vec3 n=normalize(uNrm*aNor);vec4 w=uModel*vec4(aPos,1.0);w.xyz+=n*uOutline;vW=w.xyz;vN=n;gl_Position=uVP*w;}";
  const FS = "precision mediump float;varying vec3 vN;varying vec3 vW;uniform vec3 uColor;uniform vec3 uCam;uniform vec3 uLight;uniform float uMode;uniform float uAlpha;uniform float uRim;uniform float uSpec;uniform float uDark;"
    + "void main(){vec3 N=normalize(vN);vec3 V=normalize(uCam-vW);"
    + "if(uMode>3.5){float f=pow(1.0-abs(dot(N,V)),1.6);vec3 core=mix(vec3(0.12,0.62,0.5),vec3(0.35,1.0,0.7),uDark);vec3 c=mix(vec3(0.75,1.0,0.9),core,f);float a=(0.06+0.5*f)*uAlpha;gl_FragColor=vec4(c*a,a);return;}"
    + "if(uMode>2.5){float a=uAlpha;gl_FragColor=vec4(uColor*a,a);return;}"
    + "if(uMode>1.5){gl_FragColor=vec4(uColor,1.0);return;}"
    + "if(uMode>0.5){gl_FragColor=vec4(uColor,1.0);return;}"
    + "float nl=dot(N,normalize(uLight));float band=nl>0.45?1.0:(nl>-0.08?0.78:0.58);vec3 c=uColor*band;"
    + "float rim=pow(1.0-max(dot(N,V),0.0),3.0)*uRim;c+=rim*vec3(0.55,1.0,0.9);"
    + "float sp=pow(max(dot(reflect(-normalize(uLight),N),V),0.0),22.0);c+=step(0.55,sp)*uSpec*vec3(0.85);"
    + "gl_FragColor=vec4(c,1.0);}";
  function sh(type, src){ const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; }
  let prog;
  try {
    prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error("link");
  } catch (e) { return null; }
  gl.useProgram(prog);
  const L = {}; ["uVP","uModel","uNrm","uOutline","uColor","uCam","uLight","uMode","uAlpha","uRim","uSpec","uDark"].forEach(n => L[n] = gl.getUniformLocation(prog, n));
  const aPos = gl.getAttribLocation(prog, "aPos"), aNor = gl.getAttribLocation(prog, "aNor");
  gl.enableVertexAttribArray(aPos); gl.enableVertexAttribArray(aNor);

  // ---------- mesh dasar ----------
  function mk(pos, nor, idx){
    const vb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, vb);
    const data = new Float32Array(pos.length * 2);
    for (let i = 0; i < pos.length / 3; i++){ data.set(pos.slice(i*3, i*3+3), i*6); data.set(nor.slice(i*3, i*3+3), i*6+3); }
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    const ib = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(idx), gl.STATIC_DRAW);
    return {vb, ib, n: idx.length};
  }
  function sphere(lat, lon, thMax){
    const p = [], n = [], ix = [];
    for (let i = 0; i <= lat; i++){ const th = i / lat * thMax;
      for (let j = 0; j <= lon; j++){ const ph = j / lon * Math.PI * 2;
        const x = Math.sin(th) * Math.cos(ph), y = Math.cos(th), z = Math.sin(th) * Math.sin(ph);
        p.push(x, y, z); n.push(x, y, z);
      } }
    for (let i = 0; i < lat; i++) for (let j = 0; j < lon; j++){ const a = i * (lon + 1) + j, b = a + lon + 1; ix.push(a, a + 1, b, a + 1, b + 1, b); }
    return mk(p, n, ix);
  }
  function cone(seg){      // alas jari-jari 1 di y=0, puncak di y=1
    const p = [], n = [], ix = [];
    for (let j = 0; j <= seg; j++){ const ph = j / seg * Math.PI * 2, c = Math.cos(ph), s = Math.sin(ph);
      p.push(c, 0, s); n.push(c, 1, s); p.push(0, 1, 0); n.push(c, 1, s); }
    for (let j = 0; j < seg; j++){ const a = j * 2; ix.push(a, a + 2, a + 1); }
    return mk(p, n, ix);
  }
  function cyl(rb, rt, h, seg){
    const p = [], n = [], ix = [], sl = (rb - rt) / h;
    for (let j = 0; j <= seg; j++){ const ph = j / seg * Math.PI * 2, c = Math.cos(ph), s = Math.sin(ph);
      p.push(c * rb, 0, s * rb); n.push(c, sl, s); p.push(c * rt, h, s * rt); n.push(c, sl, s); }
    for (let j = 0; j < seg; j++){ const a = j * 2; ix.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    let base = p.length / 3;                     // tutup atas & bawah
    p.push(0, h, 0); n.push(0, 1, 0); p.push(0, 0, 0); n.push(0, -1, 0);
    for (let j = 0; j <= seg; j++){ const ph = j / seg * Math.PI * 2, c = Math.cos(ph), s = Math.sin(ph);
      p.push(c * rt, h, s * rt); n.push(0, 1, 0); p.push(c * rb, 0, s * rb); n.push(0, -1, 0); }
    for (let j = 0; j < seg; j++){ const a = base + 2 + j * 2; ix.push(base, a, a + 2); ix.push(base + 1, a + 3, a + 1); }
    return mk(p, n, ix);
  }
  function box(){
    const f = [[[1,0,0],[0,0,1],[0,1,0]],[[-1,0,0],[0,1,0],[0,0,1]],[[0,1,0],[1,0,0],[0,0,1]],[[0,-1,0],[0,0,1],[1,0,0]],[[0,0,1],[0,1,0],[1,0,0]],[[0,0,-1],[1,0,0],[0,1,0]]];
    const p = [], n = [], ix = [];
    f.forEach(([nn, u, v], k) => {
      [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a, b]) => { p.push((nn[0] + u[0]*a + v[0]*b) * .5, (nn[1] + u[1]*a + v[1]*b) * .5, (nn[2] + u[2]*a + v[2]*b) * .5); n.push(...nn); });
      const o = k * 4; ix.push(o, o + 1, o + 2, o, o + 2, o + 3);
    });
    return mk(p, n, ix);
  }
  const G = {sphere: sphere(22, 28, Math.PI), cap: sphere(18, 28, 1.75), cone: cone(14), cone4: cone(4), box: box(),
    hakama: cyl(0.66, 0.48, 1.0, 26), torso: cyl(0.46, 0.38, 0.82, 24), obi: cyl(0.49, 0.49, 0.17, 24), disc: cyl(1, 1, 1, 24), tube: cyl(1, 1, 1, 14)};

  // ---------- keadaan ----------
  const IDLE_ARM = 8;
  const st = {arm: IDLE_ARM, lean: 0};
  let hair = 0, hairV = 0, eyes = 0, aura = 0, yaw = 215, yawT = 215, lastT = performance.now(), frame = 0, tAcc = 0;
  const HS = 0.56, HR = 0.68;      // skala panjang & tebal helai rambut terhadap kepala
  const hairDefs = [];
  (function buildHair(){
    const nm = v => { const l = Math.hypot(...v) || 1; return v.map(x => x / l); };
    const ring = (th, phis, len, r) => phis.forEach(ph => {
      const p = ph * Math.PI / 180, sx = Math.sin(th) * Math.cos(p), sz = Math.sin(th) * Math.sin(p), cy = Math.cos(th), n = hairDefs.length;
      hairDefs.push({
        base: [sx * 0.985, cy * 0.985, sz * 0.985],
        d0: nm([sx * 0.55 - 0.75, cy * 0.4 + 0.3, sz * 0.7]),       // diam: menyapu ke belakang
        d1: nm([sx * 0.3 - 0.22, 1, sz * 0.4]),                      // aktif: menyala ke atas
        len0: len * 0.8, len1: len * 1.5, r, ph: ph * 0.07, per: 1.0 + (n % 3) * 0.28, amp: 0.10 + (n % 3) * 0.05
      });
    });
    ring(0.28, [30, 120, 210, 300], 0.8, 0.14);
    ring(0.72, [10, 75, 140, 205, 270, 335], 0.85, 0.13);
    ring(1.16, [90, 130, 180, 230, 270], 0.85, 0.13);
    // jambul panjang di belakang kepala (ciri rambut di gambar referensi)
    [[-0.35, 0.9, 0, 1.25, 0.16], [-0.5, 0.8, 0.3, 1.1, 0.14], [-0.5, 0.8, -0.3, 1.1, 0.14], [-0.7, 0.6, 0.5, 0.95, 0.13], [-0.7, 0.6, -0.5, 0.95, 0.13]].forEach(([bx, by, bz, len, r], n) => {
      hairDefs.push({
        base: nm([bx, by, bz]).map(v => v * 0.985),
        d0: nm([-1, 0.25, bz * 0.8]), d1: nm([-0.35, 1, bz * 0.5]),
        len0: len * 0.9, len1: len * 1.35, r, ph: n * 0.9, per: 1.3 + n * 0.17, amp: 0.12
      });
    });
  })();
  const bangDefs = [-48, -32, -16, 0, 16, 32, 48].map(a => ({a: a * Math.PI / 180}));

  const light = [0.45, 0.85, 0.75];
  const eye = [0, 2.5, 11.4], target = [0, 1.95, 0];
  const view = M.look(eye, target, [0, 1, 0]);
  let vp = null, cw = 0, ch = 0, rimBoost = 0.1;

  function fitCanvas(){
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr)), hh = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (w !== cw || hh !== ch){
      cw = w; ch = hh; canvas.width = w; canvas.height = hh; gl.viewport(0, 0, w, hh);
      vp = M.mul(M.persp(30 * Math.PI / 180, w / hh, 1, 40), view);
    }
  }

  function draw(mesh, model, color, o){
    o = o || {};
    gl.uniformMatrix4fv(L.uModel, false, model);
    gl.uniformMatrix3fv(L.uNrm, false, M.nrm(model));
    gl.uniform3fv(L.uColor, color);
    gl.uniform1f(L.uMode, o.mode || 0);
    gl.uniform1f(L.uAlpha, o.alpha === undefined ? 1 : o.alpha);
    gl.uniform1f(L.uRim, (o.rim || 0) + ((o.mode || 0) === 0 ? rimBoost : 0));
    gl.uniform1f(L.uSpec, o.spec || 0);
    gl.uniform1f(L.uOutline, o.outline || 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vb);
    gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 24, 0);
    gl.vertexAttribPointer(aNor, 3, gl.FLOAT, false, 24, 12);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.ib);
    gl.drawElements(gl.TRIANGLES, mesh.n, gl.UNSIGNED_SHORT, 0);
  }

  // palet mengikuti gambar referensi: kulit biru-teal, jubah navy gelap, rambut mint, tanduk gading, aksen hijau menyala
  const C = {skin: [0.30, 0.64, 0.69], robe: [0.10, 0.17, 0.25], robe2: [0.17, 0.27, 0.35], skirt: [0.07, 0.12, 0.19], boot: [0.05, 0.07, 0.10],
    wrap: [0.55, 0.63, 0.63], sash: [0.78, 0.80, 0.78], horn: [0.95, 0.92, 0.82], hair: [0.74, 0.94, 0.89], steel: [0.15, 0.23, 0.22],
    green: [0.45, 1.0, 0.55], eyeIdle: [0.5, 0.95, 0.4], eyeAct: [0.9, 1.0, 0.85], ink: [0.03, 0.05, 0.07], gray: [0.6, 0.66, 0.66]};
  const hx = (y, z) => 0.36 * Math.sqrt(Math.max(0, 1 - Math.pow(z / 0.34, 2) - Math.pow((y - 2.82) / 0.42, 2)));   // permukaan depan kepala

  function scene(time){
    const dark = document.documentElement.getAttribute("data-theme") === "dark" ? 1 : 0;
    rimBoost = dark ? 0.5 : 0.12;
    const bob = Math.sin(time * 1.8) * 0.025, breath = Math.sin(time * 1.8) * 0.012;
    const yr = yaw * Math.PI / 180;
    const root = M.mul(M.T(0, bob, 0), M.RY(yr));
    const items = [], glows = [];       // items: [mesh, model, color, opts, outline]; glows: [mesh, model, color, alpha, mode]
    const OL = 0.017;
    const add = (mesh, model, color, o, ol) => items.push([mesh, M.mul(root, model), color, o || {}, ol === undefined ? OL : ol]);
    const glow = (mesh, model, color, alpha, mode) => glows.push([mesh, M.mul(root, model), color, alpha, mode || 3]);

    // kaki, sepatu bot, dan rok jubah compang-camping
    [0.2, -0.2].forEach(z => {
      add(G.tube, M.mul(M.T(0.02, 0.22, z), M.S(0.13, 0.6, 0.13)), C.skirt);
      add(G.tube, M.mul(M.T(0.02, 0.1, z), M.S(0.16, 0.34, 0.16)), C.boot);
      add(G.box, M.mul(M.T(0.14, 0.09, z), M.S(0.6, 0.18, 0.27)), C.boot);
    });
    add(G.hakama, M.mul(M.T(0, 0.42, 0), M.S(0.82, 1.1, 0.95)), C.skirt);
    for (let i = 0; i < 14; i++){
      const a = i / 14 * Math.PI * 2 + 0.2, len = 0.45 + ((i * 37) % 5) * 0.075;
      const sway = Math.sin(time * 1.6 + i * 0.9) * 0.06 + hair * 0.12;
      add(G.cone, M.basis([Math.cos(a) * 0.5, 0.6, Math.sin(a) * 0.58], [Math.cos(a) * 0.18 + sway, -1, Math.sin(a) * 0.18], 0.12, len, 0.12), C.skirt, {}, 0.012);
    }

    // badan, sabuk abu-abu dengan lambang hijau menyala, dan ujung sabuk
    add(G.torso, M.mul(M.T(0, 1.45, 0), M.S(0.78 + breath, 1.08, 1.0 + breath)), C.robe);
    add(G.obi, M.mul(M.T(0, 1.4, 0), M.S(0.84, 1.4, 1.03)), C.sash, {spec: 0.25});
    add(G.box, M.mul(M.T(0.415, 1.52, 0), M.S(0.05, 0.1, 0.16)), C.green, {mode: 1}, 0);
    glow(G.sphere, M.mul(M.T(0.44, 1.52, 0), M.S(0.12, 0.12, 0.2)), C.green, 0.3 + 0.2 * aura);
    add(G.box, M.mul(M.mul(M.T(0.4, 1.2, 0.14), M.RZ(-0.08 + Math.sin(time * 1.7) * 0.05)), M.S(0.05, 0.55, 0.13)), C.sash);
    add(G.box, M.mul(M.mul(M.T(0.41, 1.1, -0.05), M.RZ(-0.05 + Math.sin(time * 1.5 + 1) * 0.05)), M.S(0.05, 0.7, 0.13)), C.sash);
    add(G.sphere, M.mul(M.T(0.36, 2.1, 0), M.S(0.06, 0.34, 0.16)), C.skin, {}, 0);              // dada terbuka
    [1, -1].forEach(sg => add(G.box, M.mul(M.mul(M.T(0.33, 2.1, sg * 0.17), M.RX(sg * 0.28)), M.S(0.07, 0.7, 0.09)), C.robe2));   // kerah V
    add(G.tube, M.mul(M.T(0, 2.3, 0), M.S(0.12, 0.24, 0.12)), C.skin);                           // leher

    // kepala (dikecilkan 20% supaya proporsi mendekati gambar referensi)
    const HM = M.mul(M.T(0, 2.5, 0), M.mul(M.S(0.8, 0.8, 0.8), M.T(0, -2.5, 0)));
    const addH = (mesh, model, color, o, ol) => add(mesh, M.mul(HM, model), color, o, ol);
    const glowH = (mesh, model, color, alpha, mode) => glow(mesh, M.mul(HM, model), color, alpha, mode);
    addH(G.sphere, M.mul(M.T(0, 2.82, 0), M.S(0.36, 0.42, 0.34)), C.skin);
    addH(G.sphere, M.mul(M.T(0.05, 2.63, 0), M.S(0.3, 0.2, 0.27)), C.skin);
    [1, -1].forEach(sg => addH(G.cone, M.basis([0, 2.82, sg * 0.31], [-0.25, 0.3, sg], 0.07, 0.26, 0.07), C.skin, {}, 0.012));

    // tanduk oni gading (dua ruas supaya melengkung)
    [1, -1].forEach(sg => {
      const d1 = [0.12, 1, sg * 0.22], l1 = Math.hypot(...d1), b1 = [0.13, 3.08, sg * 0.16];
      addH(G.cone, M.basis(b1, d1, 0.09, 0.4, 0.09), C.horn, {spec: 0.3}, 0.014);
      addH(G.cone, M.basis([b1[0] + d1[0] / l1 * 0.2, b1[1] + d1[1] / l1 * 0.2, b1[2] + d1[2] / l1 * 0.2], [-0.2, 1, sg * 0.6], 0.055, 0.34, 0.055), C.horn, {spec: 0.3}, 0.012);
    });

    // wajah: alis marah, mata hijau menyala, hidung, mulut bertaring
    [1, -1].forEach(sg => {
      addH(G.box, M.mul(M.mul(M.T(hx(2.97, sg * 0.14) - 0.02, 2.97, sg * 0.14), M.RX(sg * 0.42)), M.S(0.04, 0.045, 0.17)), C.ink, {mode: 1}, 0);
      const ey = 2.86, ez = sg * 0.14, ex = hx(ey, ez) - 0.005;
      const ec = C.eyeIdle.map((v, i) => v + (C.eyeAct[i] - v) * eyes);
      addH(G.sphere, M.mul(M.mul(M.T(ex, ey, ez), M.RX(-sg * 0.35)), M.S(0.04, 0.03 + 0.05 * eyes, 0.085)), ec, {mode: 1}, 0.008);
      glowH(G.sphere, M.mul(M.T(ex + 0.01, ey, ez), M.S(0.08, 0.09, 0.13)), C.green, 0.25 + 0.45 * eyes);
      addH(G.cone, M.basis([0.33, 2.595, sg * 0.075], [0.05, 1, sg * 0.1], 0.022, 0.085, 0.022), C.horn, {}, 0.006);   // taring
    });
    addH(G.sphere, M.mul(M.T(hx(2.74, 0) - 0.005, 2.74, 0), M.S(0.06, 0.09, 0.05)), C.skin, {}, 0.01);
    addH(G.box, M.mul(M.T(0.335, 2.6, 0), M.S(0.02, 0.02, 0.15)), C.ink, {mode: 1}, 0);

    // rambut mint: tempurung + poni + helai runcing + jambul panjang
    const hairBase = M.mul(HM, M.mul(M.T(-0.02, 2.84, 0), M.RZ(0.6)));
    add(G.cap, M.mul(hairBase, M.S(0.41, 0.47, 0.39)), C.hair);
    [-36, -18, 0, 18, 36].forEach(pd => {     // poni runcing mengarah ke atas-depan, tidak menutupi mata
      const p = pd * Math.PI / 180, th = 1.2;
      add(G.cone, M.mul(hairBase, M.basis([Math.sin(th) * Math.cos(p) * 0.4, Math.cos(th) * 0.4, Math.sin(th) * Math.sin(p) * 0.4], [0.55, 0.6, Math.sin(p) * 0.7], 0.075, 0.2, 0.075)), C.hair, {}, 0.012);
    });
    const leanR = st.lean * Math.PI / 180 * hair;
    hairDefs.forEach(hd => {
      const k = Math.max(-0.15, Math.min(1.2, hair));
      const w = Math.sin(time * (6.28 / hd.per) + hd.ph) * hd.amp * (0.15 + Math.max(0, hair));
      let d = [hd.d0[0] + (hd.d1[0] - hd.d0[0]) * k + w, hd.d0[1] + (hd.d1[1] - hd.d0[1]) * k, hd.d0[2] + (hd.d1[2] - hd.d0[2]) * k + w * 0.6];
      const ca = Math.cos(leanR), sa = Math.sin(leanR);
      d = [d[0] * ca - d[1] * sa, d[0] * sa + d[1] * ca, d[2]];
      const len = (hd.len0 + (hd.len1 - hd.len0) * Math.max(0, k)) * HS;
      add(G.cone, M.mul(hairBase, M.basis([hd.base[0] * 0.72 * HS, hd.base[1] * 0.72 * HS, hd.base[2] * 0.72 * HS], d, hd.r * HR, len, hd.r * HR)), C.hair, {}, 0.012);
    });

    // bahu & lengan sisi jauh
    [1, -1].forEach(sg => add(G.sphere, M.mul(M.T(0, 2.25, sg * 0.48), M.S(0.17, 0.14, 0.17)), C.robe2));
    add(G.tube, M.basis([0, 2.22, -0.47], [0.12, -0.62, -0.04], 0.115, 0.78, 0.115), C.robe);
    add(G.tube, M.basis([0.074, 1.84, -0.495], [0.12, -0.62, -0.04], 0.13, 0.3, 0.13), C.wrap);
    add(G.sphere, M.mul(M.T(0.148, 1.456, -0.52), M.S(0.095, 0.095, 0.095)), C.skin);

    // lengan pedang: sudut bahu dan sudut bilah mengikuti st.arm (diam: bilah turun ke depan; menebas: terangkat lalu lurus ke depan)
    const aA = st.arm; let Td, ph;
    if (aA < 8){ const u = Math.max(0, (aA + 78) / 86); Td = 45 + (-118 - 45) * u; ph = 2.4 + (0.1 - 2.4) * u; }
    else { const u = Math.min(1, (aA - 8) / 92); Td = -118 + 23 * u; ph = 0.1 + 1.05 * u; }
    const sh = M.mul(M.T(0, 2.22, 0.47), M.RZ(ph));
    add(G.tube, M.mul(sh, M.basis([0, 0, 0], [0.32, -0.75, 0], 0.125, 0.82, 0.125)), C.robe);
    add(G.tube, M.mul(sh, M.basis([0.176, -0.41, 0], [0.32, -0.75, 0], 0.135, 0.32, 0.135)), C.wrap);
    add(G.sphere, M.mul(sh, M.mul(M.T(0.32, -0.75, 0), M.S(0.1, 0.1, 0.1))), C.skin);
    const sw = M.mul(sh, M.mul(M.T(0.32, -0.75, 0), M.RZ(Td * Math.PI / 180 - ph)));
    add(G.tube, M.mul(sw, M.mul(M.T(0, -0.5, 0), M.S(0.055, 0.64, 0.055))), C.ink);                       // gagang
    add(G.sphere, M.mul(sw, M.mul(M.T(0, -0.5, 0), M.S(0.07, 0.07, 0.07))), C.gray, {spec: 0.5});          // ujung gagang
    add(G.disc, M.mul(sw, M.mul(M.T(0, 0.12, 0), M.S(0.17, 0.035, 0.17))), C.gray, {spec: 0.6});           // tsuba
    add(G.box, M.mul(sw, M.mul(M.T(0, 1.13, 0), M.S(0.12, 1.95, 0.04))), C.steel, {spec: 1, rim: 0.1}, 0.012);   // bilah gelap
    add(G.box, M.mul(sw, M.mul(M.T(0.05, 1.14, 0), M.S(0.03, 1.9, 0.046))), C.green, {mode: 1}, 0);           // mata bilah hijau menyala
    add(G.cone4, M.mul(sw, M.mul(M.mul(M.T(0, 2.1, 0), M.RY(0.785)), M.S(0.085, 0.22, 0.03))), C.steel, {spec: 1}, 0.01);
    glow(G.sphere, M.mul(sw, M.mul(M.T(0.02, 1.15, 0), M.S(0.2, 1.1, 0.2))), C.green, 0.55 + 0.45 * aura, 4);   // cahaya hijau di sekitar bilah

    // --- gambar: garis tepi (muka belakang diperbesar) lalu warna ---
    gl.enable(gl.DEPTH_TEST); gl.depthMask(true); gl.disable(gl.BLEND);
    gl.uniformMatrix4fv(L.uVP, false, vp); gl.uniform3fv(L.uCam, eye); gl.uniform3fv(L.uLight, light); gl.uniform1f(L.uDark, dark);
    gl.enable(gl.CULL_FACE); gl.cullFace(gl.FRONT);
    items.forEach(([m, mat, col, o, ol]) => { if (ol > 0) draw(m, mat, dark ? [0.0, 0.0, 0.0] : C.ink, {mode: 2, outline: ol}); });
    gl.cullFace(gl.BACK);
    items.forEach(([m, mat, col, o]) => draw(m, mat, col, o));

    // --- cahaya hijau (mata, lambang sabuk, bilah) dan aura (tembus pandang) ---
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.depthMask(false); gl.disable(gl.CULL_FACE);
    glows.forEach(([m, mat, col, al, md]) => draw(m, mat, col, {mode: md, alpha: al}));
    if (aura > 0.02){
      const pulse = 1 + Math.sin(time * 5) * 0.03;
      draw(G.sphere, M.mul(root, M.mul(M.T(0, 1.9, 0), M.S(1.5 * pulse * (0.7 + 0.3 * aura), 2.4 * pulse * (0.7 + 0.3 * aura), 1.5 * pulse))), C.green, {mode: 4, alpha: aura * 0.7});
      for (let i = 0; i < 7; i++){
        const p = (time * 0.9 + i * 0.37) % 1, ang = i / 7 * Math.PI * 2 + time * 0.4;
        const rad = 0.75 + 0.35 * Math.sin(i * 1.7), hgt = 1.0 + 1.4 * ((i % 3) / 3 + 0.4);
        const model = M.mul(root, M.basis([Math.cos(ang) * rad, 0.1 + p * 1.4, Math.sin(ang) * rad], [Math.cos(ang) * 0.1, 1, Math.sin(ang) * 0.1], 0.22, hgt * (1 - p * 0.45), 0.22));
        draw(G.cone, model, C.green, {mode: 3, alpha: aura * 0.5 * (1 - p)});
      }
    }
    gl.depthMask(true); gl.disable(gl.BLEND);
  }

  function step(now){
    const dt = Math.min(0.05, (now - lastT) / 1000); lastT = now; tAcc += dt;
    const act = host.classList.contains("act");
    // rambut: pegas teredam supaya ada sedikit pantulan; mata & aura: peredam eksponensial
    const target = act ? 1 : 0;
    hairV += ((target - hair) * 62 - hairV * 8.5) * dt; hair += hairV * dt;
    eyes += (target - eyes) * (1 - Math.exp(-dt * 12));
    aura += (target - aura) * (1 - Math.exp(-dt * 5));
    yawT = host.classList.contains("face-r") ? 325 : 215;
    yaw += (yawT - yaw) * (1 - Math.exp(-dt * 7));
    return act;
  }

  function loop(){
    requestAnimationFrame(loop);
    if (document.hidden) return;
    const now = performance.now();
    const settled = !host.classList.contains("act") && Math.abs(hair) < 0.01 && Math.abs(hairV) < 0.02 && eyes < 0.01 && aura < 0.02 && Math.abs(yaw - 215) < 0.4;
    frame++;
    if (settled && frame % 3 !== 0){ lastT = now; return; }       // saat diam cukup ~20 fps
    step(now);
    fitCanvas();
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    scene(tAcc);
  }
  host.classList.add("is3d");
  requestAnimationFrame(loop);
  return {state: st, idleArm: IDLE_ARM};
})();

const samurai = document.getElementById("samurai");
const samuraiArm = samurai ? samurai.querySelector(".arm") : null;
const samuraiHair = samurai ? samurai.querySelector(".spikes") : null;
let samuraiRaf = null;
const lerp = (a, b, t) => a + (b - a) * t;
const smoother = u => { u = clamp01(u); return u * u * u * (u * (u * 6 - 15) + 10); };   // sangat halus di awal & akhir
const easeOutCubic = u => 1 - Math.pow(1 - u, 3);
/* =====================================================================
   RAMBUT 2D - digerakkan per frame dengan pegas teredam (bukan keyframe CSS), jadi tidak ada
   patahan saat berpindah antara diam dan aktif. Tiap helai punya pegas sendiri, jeda sendiri,
   goyangan sendiri, dan melengkung (skew) mengikuti kecepatan seperti ujung rambut yang lentur.
   ===================================================================== */
(function hair2D(){
  const root = document.getElementById("samurai");
  if (!root) return;
  const strands = Array.from(root.querySelectorAll(".spikes .sp")).map((el, i) => {
    const g = n => parseFloat(el.style.getPropertyValue(n)) || 0;
    return {el, a0: g("--a0"), a1: g("--a1"), d: g("--d") * 1.6, amp: g("--amp") || 5, per: g("--per") || 1.3,
      rot: g("--a0"), rv: 0, sc: 0.7, sv: 0, bl: 0, skew: 0, ph: i * 0.9, since: 0, goal: 0};
  });
  if (!strands.length) return;
  let last = performance.now(), t = 0, wasAct = false, actAt = 0;
  function frame(now){
    requestAnimationFrame(frame);
    if (document.hidden){ last = now; return; }
    const dt = Math.min(0.04, (now - last) / 1000); last = now; t += dt;
    const act = root.classList.contains("act");
    if (act !== wasAct){ wasAct = act; actAt = now; }
    strands.forEach((h, i) => {
      const go = act && (now - actAt) >= h.d ? 1 : (!act && (now - actAt) >= h.d * 0.5 ? 0 : h.goal);   // jeda tiap helai
      h.goal = go;
      h.bl += (go - h.bl) * (1 - Math.exp(-dt * 3.2));                                                  // selubung goyangan halus
      const sway = Math.sin(t * 6.283 / h.per + h.ph) * h.amp * h.bl + Math.sin(t * 6.283 / 4.4 + h.ph) * 1.8 * (1 - h.bl * 0.6);
      const tr = (go ? h.a1 : h.a0) + sway, ts = go ? 1.55 : 0.7;
      // pegas teredam: sedikit membal saat naik, melayu saat turun
      const k = go ? 78 : 46, c = go ? 9.5 : 11;
      h.rv += ((tr - h.rot) * k - h.rv * c) * dt; h.rot += h.rv * dt;
      h.sv += ((ts - h.sc) * 60 - h.sv * 10.5) * dt; h.sc += h.sv * dt;
      h.skew += ((-h.rv * 0.07 - h.skew) * (1 - Math.exp(-dt * 10)));                                  // ujung lentur
      h.el.style.rotate = h.rot.toFixed(2) + "deg";
      h.el.style.scale = h.sc.toFixed(3);
      h.el.style.transform = "skewX(" + Math.max(-14, Math.min(14, h.skew)).toFixed(2) + "deg)";
    });
  }
  requestAnimationFrame(frame);
})();

// karakter berambut putih terbang menyusuri garis potongan mengikuti ujung sobekan, lalu kembali ke pojoknya.
// Semua nilai dihaluskan (peredam eksponensial) supaya gerakannya mengalir, tanpa patahan.
function samuraiAct(ms, key, forward){
  if (!samurai) return;
  cancelAnimationFrame(samuraiRaf);
  samurai.style.transform = "";
  samurai.classList.remove("act", "face-r");
  void samurai.offsetWidth;
  samurai.classList.add("act");

  const stageEl = document.querySelector(".stage");
  const sr = stageEl.getBoundingClientRect(), hr = samurai.getBoundingClientRect();
  const W = sr.width, H = sr.height;
  const home = {x: hr.left + hr.width / 2 - sr.left, y: hr.top + hr.height / 2 - sr.top};
  const pr = SLASH_PRESETS[key % SLASH_PRESETS.length];
  const A = {x: pr.a[0] / 100 * W, y: pr.a[1] / 100 * H}, B = {x: pr.b[0] / 100 * W, y: pr.b[1] / 100 * H};

  const tauAt = el => forward ? easeInOutCubic(clamp01((el - 120) / 900)) : 1 - easeInOutCubic(clamp01((el - 350) / 800));
  const posAt = el => clamp01(tauAt(el) * 1.3);
  let tEnd = ms;
  for (let t = 0; t < ms; t += 8){
    const p = posAt(t);
    if (forward ? p >= 0.999 : (t > 360 && p <= 0.001)){ tEnd = t; break; }
  }
  const IN0 = 40, IN1 = 340, OUT = 850;

  const dx = (forward ? 1 : -1) * (B.x - A.x), dy = (forward ? 1 : -1) * (B.y - A.y);
  const theta = Math.atan2(dy, dx) * 180 / Math.PI;
  const facingRight = dx >= 0;
  let rot = facingRight ? theta : ((theta - 180 + 540) % 360) - 180;
  rot = Math.max(-75, Math.min(75, rot));

  const IDLE = (Sam3D && Sam3D.idleArm !== undefined) ? Sam3D.idleArm : 8;
  let sx = 0, sy = 0, srot = 0, sarm = IDLE, slean = 0, last = performance.now();
  const t0 = last;

  function loop(){
    const now = performance.now();
    const el = now - t0;
    if (el >= ms){
      samurai.style.transform = "";
      if (samuraiArm) samuraiArm.style.transform = "";
      if (samuraiHair) samuraiHair.style.transform = "";
      if (Sam3D){ Sam3D.state.arm = 8; Sam3D.state.lean = 0; }
      samurai.classList.remove("act", "face-r");
      return;
    }
    samuraiRaf = requestAnimationFrame(loop);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const k = (rate) => 1 - Math.exp(-dt * rate);

    // s: 0 = di pojok, 1 = terbang di garis potongan
    const s = smoother((el - IN0) / (IN1 - IN0)) * (1 - smoother((el - tEnd) / OUT));
    const t = -0.06 + posAt(el) * 1.12;
    const px = A.x + (B.x - A.x) * t, py = A.y + (B.y - A.y) * t;
    // lintasan menyeberang berbentuk busur lembut (bukan garis lurus) saat berangkat dan pulang
    const vx = px - home.x, vy = py - home.y, vl = Math.hypot(vx, vy) || 1;
    const arc = 70 * Math.sin(Math.PI * clamp01(s));
    const tx = lerp(0, vx, s) + (-vy / vl) * arc, ty = lerp(0, vy, s) + (vx / vl) * arc;
    sx += (tx - sx) * k(13);
    sy += (ty - sy) * k(13);
    srot += (rot * s - srot) * k(9);
    slean += (28 * s - slean) * k(7);
    samurai.style.transform = "translate(" + sx.toFixed(2) + "px," + sy.toFixed(2) + "px) rotate(" + srot.toFixed(2) + "deg)";
    samurai.classList.toggle("face-r", facingRight && s > 0.12);
    if (samuraiHair) samuraiHair.style.transform = "rotate(" + (-slean).toFixed(2) + "deg)";   // rambut tertiup ke belakang saat melaju
    if (samuraiArm){
      let a;
      if (el < 150) a = lerp(8, -78, easeOutCubic(el / 150));                                  // angkat pedang
      else if (el < 300) a = lerp(-78, 100, smoother((el - 150) / 150));                      // tebas ke depan
      else if (el < tEnd + 250) a = 100;                                                      // pedang lurus ke depan saat terbang
      else a = lerp(100, 8, smoother((el - tEnd - 250) / Math.max(200, ms - tEnd - 600)));    // kembali santai
      sarm += (a - sarm) * k(20);
      samuraiArm.style.transform = "rotate(" + sarm.toFixed(2) + "deg)";
      if (Sam3D){ Sam3D.state.arm = sarm; Sam3D.state.lean = slean; }
    }
  }
  samuraiRaf = requestAnimationFrame(loop);
}



// karakter wanita: berdiri di pojok kiri bawah, dan terbang menyusuri garis potongan hanya saat mundur ke slide
// sebelumnya (samurai diam). Ekor rambut kembarnya tertiup ke belakang saat melaju.
const heroine = document.getElementById("heroine");
const heroineArm = heroine ? heroine.querySelector(".arm") : null;
const heroineTails = heroine ? Array.from(heroine.querySelectorAll(".tail")) : [];
let heroineRaf = null;
function heroineAct(ms, key){
  if (!heroine) return;
  cancelAnimationFrame(heroineRaf);
  heroine.style.transform = "";
  heroine.classList.remove("act", "face-l");
  void heroine.offsetWidth;
  heroine.classList.add("act");

  const stageEl = document.querySelector(".stage");
  const sr = stageEl.getBoundingClientRect(), hr = heroine.getBoundingClientRect();
  const W = sr.width, H = sr.height;
  const home = {x: hr.left + hr.width / 2 - sr.left, y: hr.top + hr.height / 2 - sr.top};
  const pr = SLASH_PRESETS[key % SLASH_PRESETS.length];
  const A = {x: pr.a[0] / 100 * W, y: pr.a[1] / 100 * H}, B = {x: pr.b[0] / 100 * W, y: pr.b[1] / 100 * H};

  const DELAY = 0;
  const tauAt = el => 1 - easeInOutCubic(clamp01((el - 350 - DELAY) / 800));
  const posAt = el => clamp01(tauAt(el) * 1.3);
  let tEnd = ms;
  for (let t = 0; t < ms; t += 8){ if (t > 360 + DELAY && posAt(t) <= 0.001){ tEnd = t; break; } }
  const IN0 = 40 + DELAY, IN1 = 340 + DELAY, OUT = 850;

  const dx = A.x - B.x, dy = A.y - B.y;                // arah mundur: dari B ke A
  const theta = Math.atan2(dy, dx) * 180 / Math.PI;
  const facingRight = dx >= 0;
  let rot = facingRight ? theta : ((theta - 180 + 540) % 360) - 180;
  rot = Math.max(-75, Math.min(75, rot));

  let sx = 0, sy = 0, srot = 0, sarm = 8, slean = 0, last = performance.now();
  const t0 = last;
  function loop(){
    const now = performance.now(), el = now - t0;
    if (el >= ms){
      heroine.style.transform = "";
      if (heroineArm) heroineArm.style.transform = "";
      heroineTails.forEach(g => g.style.transform = "");
      heroine.classList.remove("act", "face-l");
      return;
    }
    heroineRaf = requestAnimationFrame(loop);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const k = rate => 1 - Math.exp(-dt * rate);

    const s = smoother((el - IN0) / (IN1 - IN0)) * (1 - smoother((el - tEnd) / OUT));
    const t = -0.06 + posAt(el) * 1.12;                     // menunggangi ujung sobekan yang menutup kembali
    const px = A.x + (B.x - A.x) * t, py = A.y + (B.y - A.y) * t;
    const vx = px - home.x, vy = py - home.y, vl = Math.hypot(vx, vy) || 1;
    const arc = 70 * Math.sin(Math.PI * clamp01(s));          // lintasan menyeberang berbentuk busur lembut
    const tx = lerp(0, vx, s) + (-vy / vl) * arc, ty = lerp(0, vy, s) + (vx / vl) * arc;
    sx += (tx - sx) * k(13); sy += (ty - sy) * k(13);
    srot += (rot * s - srot) * k(9);
    slean += (34 * s - slean) * k(7);
    heroine.style.transform = "translate(" + sx.toFixed(2) + "px," + sy.toFixed(2) + "px) rotate(" + srot.toFixed(2) + "deg)";
    heroine.classList.toggle("face-l", !facingRight && s > 0.12);

    const tt = el / 1000;
    heroineTails.forEach((g, i) => {
      const sway = Math.sin(tt * 7 + i * 1.7) * 9 * s + Math.sin(tt * 2.2 + i) * 3 * (1 - s);
      g.style.transform = "rotate(" + (slean + sway).toFixed(2) + "deg)";
    });
    if (heroineArm){
      const e = el - DELAY;
      let a;
      if (e < 0) a = 8;
      else if (e < 150) a = lerp(8, -78, easeOutCubic(e / 150));
      else if (e < 300) a = lerp(-78, 100, smoother((e - 150) / 150));
      else if (e < tEnd + 250 - DELAY) a = 100;
      else a = lerp(100, 8, smoother((e - tEnd - 250 + DELAY) / Math.max(200, ms - tEnd - 600)));
      sarm += (a - sarm) * k(20);
      heroineArm.style.transform = "rotate(" + sarm.toFixed(2) + "deg)";
    }
  }
  heroineRaf = requestAnimationFrame(loop);
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
    if (forward) samuraiAct(SLASH_MS, newIndex, true);       // samurai hanya bergerak saat lanjut ke slide berikutnya
    else heroineAct(SLASH_REV_MS, oldIndex);                 // karakter wanita yang bergerak saat kembali ke slide sebelumnya
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
/* klik di area slide tidak lagi memindahkan slide (pindah lewat tombol, sidebar, atau keyboard) */
/* stage.addEventListener("click", e => {
  if (e.target.closest("button, a, input, textarea, select, .photo")) return;
  const w = window.innerWidth, x = e.clientX;
  if (x > w*0.65) nextSlide(); else if (x < w*0.35) prevSlide();
}); */

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

/* =====================================================================
   LATAR BERGERAK MENUJU CHIP (ringan)
   Satu canvas kecil hanya di slide yang aktif: denyut cahaya berjalan di sepanjang jalur sirkuit menuju chip,
   cincin berdenyut dari chip, dan titik cahaya melayang masuk. Tanpa filter/blur, maksimal ~30 fps,
   berhenti saat tab tersembunyi atau saat efek sobekan slide berjalan.
   ===================================================================== */
(function netFlowFx(){
  if (typeof reduceMotion !== "undefined" && reduceMotion) return;
  const cv = document.createElement("canvas");
  cv.className = "net-fx"; cv.setAttribute("aria-hidden", "true");
  const ctx = cv.getContext("2d");
  if (!ctx) return;
  const VBW = 1200, VBH = 700;
  let host = null, geo = null, color = "#22d3ee", cw = 0, chh = 0, lastDraw = 0, paused = false;
  const readColor = () => { const v = getComputedStyle(document.documentElement).getPropertyValue("--sk-cyan").trim(); if (v) color = v; };
  readColor();
  new MutationObserver(readColor).observe(document.documentElement, {attributes: true, attributeFilter: ["data-theme"]});

  function parse(slide){
    const svg = slide.querySelector(".net-bg"); if (!svg) return null;
    const tl = svg.querySelector(".tl"), chip = svg.querySelector(".ch"); if (!tl || !chip) return null;
    const re = /([ML])\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)/g;
    const paths = tl.getAttribute("d").split("M").filter(Boolean).map((seg, k) => {
      const pts = []; let m; re.lastIndex = 0;
      const txt = "M" + seg;
      while ((m = re.exec(txt))) pts.push([+m[2], +m[3]]);
      const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
      const len = cum[cum.length - 1];
      return {pts, cum, len, speed: 110 + (k * 37) % 70, phase: ((k * 0.381) % 1)};
    }).filter(p => p.pts.length > 1 && p.len > 30);
    const cx = +chip.getAttribute("x") + +chip.getAttribute("width") / 2, cy = +chip.getAttribute("y") + +chip.getAttribute("height") / 2;
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const dots = Array.from({length: 10}, (_, i) => {
      const a = rnd() * Math.PI * 2, r = 260 + rnd() * 380;
      return {x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r * 0.7, per: 6 + (i % 3) * 2.5, off: rnd()};
    });
    return {paths, cx, cy, dots};
  }

  function attach(slide){
    host = slide; geo = parse(slide);
    const svg = slide.querySelector(".net-bg");
    if (svg) svg.insertAdjacentElement("afterend", cv); else slide.prepend(cv);
    cw = 0;
  }

  function fit(){
    const w = host.clientWidth, h = host.clientHeight;
    if (w === cw && h === chh) return;
    cw = w; chh = h;
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    const sc = Math.max(w / VBW, h / VBH), ox = (w - VBW * sc) / 2, oy = (h - VBH * sc) / 2;
    ctx.setTransform(dpr * sc, 0, 0, dpr * sc, dpr * ox, dpr * oy);
    cv._k = {dpr, sc, ox, oy};
  }

  function pointAt(p, s){
    const c = p.cum; let i = 1; while (i < c.length - 1 && c[i] < s) i++;
    const u = (s - c[i - 1]) / ((c[i] - c[i - 1]) || 1);
    return [p.pts[i - 1][0] + (p.pts[i][0] - p.pts[i - 1][0]) * u, p.pts[i - 1][1] + (p.pts[i][1] - p.pts[i - 1][1]) * u];
  }

  function draw(t){
    const k = cv._k;
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height); ctx.restore();
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineCap = "round";
    // denyut cahaya di jalur, bergerak menuju chip (titik awal jalur = pin chip)
    geo.paths.forEach(p => {
      const cycle = p.len + 90;
      const u = (t * p.speed + p.phase * cycle) % cycle;
      if (u > p.len) return;
      const s = p.len - u;                                  // makin kecil = makin dekat chip
      const head = pointAt(p, s), tail = pointAt(p, Math.min(p.len, s + 22));
      const fade = Math.min(1, s / 40);
      ctx.globalAlpha = 0.55 * fade; ctx.lineWidth = 2.6;
      ctx.beginPath(); ctx.moveTo(tail[0], tail[1]); ctx.lineTo(head[0], head[1]); ctx.stroke();
      ctx.globalAlpha = 0.18 * fade; ctx.beginPath(); ctx.arc(head[0], head[1], 6, 0, 6.283); ctx.fill();
      ctx.globalAlpha = 0.95 * fade; ctx.beginPath(); ctx.arc(head[0], head[1], 2.4, 0, 6.283); ctx.fill();
    });
    // titik cahaya melayang masuk ke chip
    geo.dots.forEach(d => {
      const u = (t / d.per + d.off) % 1, e = 1 - u * u * 0.92;
      const x = geo.cx + (d.x - geo.cx) * e, y = geo.cy + (d.y - geo.cy) * e;
      ctx.globalAlpha = Math.sin(Math.PI * u) * 0.55;
      ctx.beginPath(); ctx.arc(x, y, 2.2 + 2 * (1 - u), 0, 6.283); ctx.fill();
    });
    // cincin berdenyut dari chip
    const ph = (t / 1.7) % 1;
    ctx.globalAlpha = 0.5 * (1 - ph); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(geo.cx, geo.cy, 32 + 52 * ph, 0, 6.283); ctx.stroke();
    ctx.globalAlpha = 1;
  }

  function frame(now){
    requestAnimationFrame(frame);
    const stop = document.hidden || (typeof slidesEl !== "undefined" && slidesEl.classList.contains("slash-mode"));
    if (stop){ if (!paused && host){ ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height); ctx.restore(); } paused = true; return; }
    paused = false;
    if (now - lastDraw < 33) return;                       // batasi ~30 fps
    lastDraw = now;
    const active = document.querySelector(".slide.active");
    if (!active) return;
    if (active !== host) attach(active);
    if (!geo || !geo.paths.length) return;
    fit();
    draw(now / 1000);
  }
  requestAnimationFrame(frame);
})();
