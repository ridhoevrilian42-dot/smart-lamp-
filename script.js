"use strict";

/* =========================================================
   SMART LAMP PRESENTATION
   SMA GUNUNG MADU
   script.js
========================================================= */


/* =========================================================
   01. DATA / ISI SLIDE
========================================================= */

const content = [

    /* =====================================================
       SLIDE 01 — JUDUL
    ===================================================== */

    `
    <div class="slide-inner hero">

        <div>

            <div class="kicker">
                Prototype Smart Lamp
            </div>

            <h1>
                Prototype Smart Lamp Berbasis
                Embedded System dengan ESP32
            </h1>

            <p>
                Sistem pencahayaan otomatis berdasarkan
                intensitas cahaya ruangan menggunakan
                sensor LDR.
            </p>

            <div class="hero-meta">

                <span class="pill">
                    Ridho Evrilian
                </span>

                <span class="pill">
                    XIIB
                </span>

                <span class="pill">
                    SMA Gunung Madu
                </span>

                <span class="pill">
                    Miss Adel
                </span>

                <span class="pill">
                    14 Juli 2026
                </span>

            </div>

        </div>

        <div class="lamp-visual">

            <div class="lamp"></div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 02 — ALUR PRESENTASI
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            02 / Navigation
        </div>

        <h2>
            Alur Presentasi
        </h2>

        <div class="grid-3">

            <div class="card">
                <div class="number">01</div>
                <h3>Pendahuluan</h3>
                <p>
                    Latar belakang, rumusan masalah,
                    tujuan, batasan, hipotesis,
                    dan manfaat penelitian.
                </p>
            </div>

            <div class="card">
                <div class="number">02</div>
                <h3>Landasan Teori</h3>
                <p>
                    ESP32, cahaya, lampu pintar,
                    dan penelitian terdahulu.
                </p>
            </div>

            <div class="card">
                <div class="number">03</div>
                <h3>Metode Penelitian</h3>
                <p>
                    Desain penelitian, alat dan bahan,
                    prosedur, serta teknik pengumpulan data.
                </p>
            </div>

            <div class="card">
                <div class="number">04</div>
                <h3>Hasil & Pembahasan</h3>
                <p>
                    Data penelitian, grafik,
                    dokumentasi, dan pembahasan.
                </p>
            </div>

            <div class="card">
                <div class="number">05</div>
                <h3>Kesimpulan & Saran</h3>
                <p>
                    Kesimpulan hasil penelitian
                    dan pengembangan selanjutnya.
                </p>
            </div>

            <div class="card">
                <div class="number">06</div>
                <h3>Referensi</h3>
                <p>
                    Sumber-sumber yang digunakan
                    dalam penelitian.
                </p>
            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 03 — LATAR BELAKANG
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            03 / Pendahuluan
        </div>

        <h2>
            Latar Belakang
        </h2>

        <div class="flow">

            <div class="card">

                <div class="number">
                    01
                </div>

                <h3>
                    Kondisi Nyata
                </h3>

                <p>
                    Cahaya di ruangan SMA Gunung Madu
                    terkadang tidak kondusif. Kadang
                    terlalu terang dan kadang terlalu
                    redup sehingga menciptakan suasana
                    belajar yang tidak nyaman.
                </p>

            </div>

            <div class="arrow">
                →
            </div>

            <div class="card">

                <div class="number">
                    02
                </div>

                <h3>
                    Permasalahan
                </h3>

                <p>
                    Masalah yang muncul adalah saat lampu
                    dinyalakan ruangan terlalu terang,
                    sedangkan jika lampu dimatikan ruangan
                    menjadi terlalu gelap sehingga
                    mengganggu penglihatan para siswa.
                </p>

            </div>

            <div class="arrow">
                →
            </div>

            <div class="card">

                <div class="number">
                    03
                </div>

                <h3>
                    Gagasan Solusi
                </h3>

                <p>
                    Saya menawarkan produk Smart Lamp
                    untuk mengatasi masalah pencahayaan
                    tersebut.
                </p>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 04 — RUMUSAN MASALAH
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            04 / Rumusan Masalah
        </div>

        <h2>
            Rumusan Masalah
        </h2>

        <div class="grid-2">

            <div class="card">

                <div class="number">
                    01
                </div>

                <h3>
                    Perancangan Sistem
                </h3>

                <p>
                    Bagaimana cara merancang dan membangun
                    sistem prototype smart lamp berbasis
                    embedded dengan ESP32?
                </p>

            </div>

            <div class="card">

                <div class="number">
                    02
                </div>

                <h3>
                    Cara Kerja Sensor
                </h3>

                <p>
                    Bagaimana cara kerja sensor LDR dalam
                    mendeteksi kondisi pencahayaan agar
                    lampu dapat menyala dengan tingkat
                    terang yang sesuai secara otomatis?
                </p>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 05 — TUJUAN PENELITIAN
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            05 / Tujuan
        </div>

        <h2>
            Tujuan Penelitian
        </h2>

        <div class="grid-2">

            <div class="card">

                <div class="number">
                    01
                </div>

                <h3>
                    Merancang dan Membangun
                </h3>

                <p>
                    Merancang dan membangun sistem
                    prototype smart lamp berbasis
                    embedded dengan ESP32.
                </p>

            </div>

            <div class="card">

                <div class="number">
                    02
                </div>

                <h3>
                    Mengetahui Cara Kerja LDR
                </h3>

                <p>
                    Mengetahui cara kerja sensor LDR
                    dalam membaca cahaya yang mengatur
                    pencahayaan lampu.
                </p>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 06 — BATASAN & HIPOTESIS
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            06 / Scope & Hypothesis
        </div>

        <h2>
            Batasan Masalah & Hipotesis
        </h2>

        <div class="grid-2">

            <div class="card">

                <h3>
                    Batasan Masalah
                </h3>

                <p>
                    <strong>1.</strong>
                    Sistem yang dibuat hanya difokuskan
                    pada pengaturan intensitas cahaya lampu
                    di dalam ruang belajar SMA Gunung Madu.
                </p>

                <p>
                    <strong>2.</strong>
                    Sensor yang digunakan hanya untuk
                    mendeteksi intensitas cahaya ruangan.
                </p>

                <p>
                    <strong>3.</strong>
                    Sistem bekerja secara otomatis
                    berdasarkan kondisi cahaya
                    di dalam ruangan.
                </p>

                <p>
                    <strong>4.</strong>
                    Pengujian sistem dilakukan dalam skala
                    prototype dan belum diterapkan secara
                    menyeluruh di seluruh ruangan sekolah.
                </p>

            </div>

            <div class="card">

                <div class="number">
                    H
                </div>

                <h3>
                    Hipotesis
                </h3>

                <p>
                    Smart Lamp diduga dapat membantu
                    mengurangi masalah pencahayaan
                    pada ruangan SMA Gunung Madu.
                </p>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 07 — MANFAAT
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            07 / Manfaat
        </div>

        <h2>
            Manfaat Penelitian
        </h2>

        <div class="grid-3">

            <div class="card">

                <div class="number">
                    01
                </div>

                <h3>
                    Bagi Sekolah
                </h3>

                <p>
                    Menciptakan ruang belajar yang lebih
                    nyaman serta menghemat penggunaan
                    listrik melalui sistem pencahayaan
                    otomatis.
                </p>

            </div>

            <div class="card">

                <div class="number">
                    02
                </div>

                <h3>
                    Bagi Peneliti
                </h3>

                <p>
                    Memberikan pengalaman dalam mempelajari
                    embedded system, penggunaan sensor,
                    dan melakukan pemrograman.
                </p>

            </div>

            <div class="card">

                <div class="number">
                    03
                </div>

                <h3>
                    Bagi Siswa
                </h3>

                <p>
                    Memberikan kenyamanan dalam
                    pembelajaran.
                </p>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 08 — LANDASAN TEORI
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            08 / Landasan Teori
        </div>

        <h2>
            Landasan Teori
        </h2>

        <div class="grid-3">

            <div class="card">

                <div class="number">
                    01
                </div>

                <h3>
                    ESP32
                </h3>

                <p>
                    ESP32 adalah sebuah mikrokontroler
                    yang merupakan penerus ESP8266.
                    Pada ESP32 tersedia Wi-Fi untuk
                    mendukung alat IoT dan embedded system.
                </p>

                <p>
                    <strong>(Aulia, 2021)</strong>
                </p>

            </div>

            <div class="card">

                <div class="number">
                    02
                </div>

                <h3>
                    Cahaya
                </h3>

                <p>
                    Cahaya merupakan sumber kehidupan.
                    Tanpa adanya cahaya kemungkinan tidak
                    akan ada sebuah kehidupan. Jika tidak
                    ada cahaya, bumi akan menjadi dingin
                    dan gelap gulita.
                </p>

                <p>
                    <strong>(Sunardi, 2012)</strong>
                </p>

            </div>

            <div class="card">

                <div class="number">
                    03
                </div>

                <h3>
                    Lampu Pintar
                </h3>

                <p>
                    Lampu pintar adalah lampu yang bisa
                    dikendalikan secara otomatis melalui
                    IoT ataupun embedded system.
                </p>

                <p>
                    <strong>(Djaeng dan Dwi, 2017)</strong>
                </p>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 09 — PENELITIAN TERDAHULU
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            09 / Penelitian Terdahulu
        </div>

        <h2>
            Penelitian Terdahulu
        </h2>

        <div class="grid-2">

            <div class="card">

                <div class="number">
                    01
                </div>

                <h3>
                    Domingos Soares Martins
                </h3>

                <p>
                    Sistem berhasil mengontrol lampu
                    secara otomatis berdasarkan intensitas
                    cahaya sekitar maupun secara manual
                    melalui tombol.
                </p>

            </div>

            <div class="card">

                <div class="number">
                    02
                </div>

                <h3>
                    Demi Adidrana, Arif Rahman Hakim,
                    Hertanto Suryoprayogo, dan Ilham Roni Yansyah
                </h3>

                <p>
                    Sistem lampu pintar berbasis ESP32
                    DevKit dan Ubidots berhasil mengontrol
                    indikator LED berdasarkan cahaya maupun
                    melalui perintah web Ubidots.
                </p>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 10 — DESAIN PENELITIAN
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            10 / Desain Penelitian
        </div>

        <h2>
            Desain Penelitian
        </h2>

        <div class="grid-3">

            <div class="card">
                <h3>Periode Penelitian</h3>
                <p>
                    14-07-2026 sampai 27-08-2026
                </p>
            </div>

            <div class="card">
                <h3>Jenis Penelitian</h3>
                <p>
                    Eksperimen dan penelitian.
                </p>
            </div>

            <div class="card">
                <h3>Tempat</h3>
                <p>
                    Lab Fisika SMA Gunung Madu
                    dan di rumah.
                </p>
            </div>

            <div class="card">
                <h3>Objek Penelitian</h3>
                <p>
                    Prototype Smart Lamp.
                </p>
            </div>

            <div class="card">
                <h3>Variabel Bebas</h3>
                <p>
                    Hanya mengubah sistem menjadi otomatis
                    dengan membaca intensitas cahaya dan
                    mengeluarkan cahaya sesuai dengan
                    intensitas cahaya yang diterima.
                </p>
            </div>

            <div class="card">
                <h3>Variabel Terikat</h3>
                <p>
                    Hasil yang diukur berdasarkan
                    intensitas cahaya, lux meter,
                    dan PWM.
                </p>
            </div>

        </div>

        <div class="card" style="margin-top:18px">

            <h3>
                Variabel Terkontrol
            </h3>

            <p>
                Yang sama hanya sakelarnya on/off,
                sama seperti lampu pada umumnya.
            </p>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 11 — ALAT & BAHAN
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            11 / Alat & Bahan
        </div>

        <h2>
            Alat & Bahan
        </h2>

        <div class="grid-4">

            <div class="card">
                <h3>Laptop</h3>
            </div>

            <div class="card">
                <h3>ESP32</h3>
            </div>

            <div class="card">
                <h3>LDR</h3>
            </div>

            <div class="card">
                <h3>Lampu</h3>
            </div>

            <div class="card">
                <h3>Jumper</h3>
            </div>

            <div class="card">
                <h3>Adaptor</h3>
            </div>

            <div class="card">
                <h3>Breadboard</h3>
            </div>

            <div class="card">
                <h3>USB</h3>
            </div>

        </div>

        <div
            class="card"
            style="margin-top:20px">

            <h3>
                Software
            </h3>

            <p>
                Arduino IDE dan Serial Monitor.
            </p>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 12 — PROSEDUR
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            12 / Prosedur
        </div>

        <h2>
            Prosedur Penelitian
        </h2>

        <div class="timeline">

            <div class="step">
                <div class="number">01</div>
                <div class="card">
                    <h3>Persiapan</h3>
                </div>
            </div>

            <div class="step">
                <div class="number">02</div>
                <div class="card">
                    <h3>Perancangan Sistem</h3>
                </div>
            </div>

            <div class="step">
                <div class="number">03</div>
                <div class="card">
                    <h3>Pemasangan Komponen</h3>
                </div>
            </div>

            <div class="step">
                <div class="number">04</div>
                <div class="card">
                    <h3>Pemrograman ESP32</h3>
                </div>
            </div>

            <div class="step">
                <div class="number">05</div>
                <div class="card">
                    <h3>Pengujian Sensor LDR</h3>
                </div>
            </div>

            <div class="step">
                <div class="number">06</div>
                <div class="card">
                    <h3>Pengujian Lampu</h3>
                </div>
            </div>

            <div class="step">
                <div class="number">07</div>
                <div class="card">
                    <h3>Pengambilan Data</h3>
                </div>
            </div>

            <div class="step">
                <div class="number">08</div>
                <div class="card">
                    <h3>Analisis Data</h3>
                </div>
            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 13 — TEKNIK PENGUMPULAN DATA
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            13 / Pengumpulan Data
        </div>

        <h2>
            Teknik Pengumpulan Data
        </h2>

        <div class="grid-3">

            <div class="card">

                <div class="number">
                    01
                </div>

                <h3>
                    Jenis Data
                </h3>

                <p>
                    Data primer.
                </p>

                <p>
                    Mengukur intensitas cahaya,
                    melihat nilai PWM, dan menguji
                    lampu di kondisi yang berbeda.
                </p>

            </div>

            <div class="card">

                <div class="number">
                    02
                </div>

                <h3>
                    Instrumen
                </h3>

                <p>
                    LDR sensor, ESP32,
                    dan Serial Monitor Arduino IDE.
                </p>

            </div>

            <div class="card">

                <div class="number">
                    03
                </div>

                <h3>
                    Cara Pengambilan Data
                </h3>

                <p>
                    Mengambil data di lab dan
                    dilakukan pengujian alat
                    selama 2 jam.
                </p>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 14 — PENGOLAHAN DATA
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            14 / Analisis Data
        </div>

        <h2>
            Teknik Pengolahan & Analisis Data
        </h2>

        <div class="card">

            <div class="table-wrap">

                <table class="data-table">

                    <thead>

                        <tr>

                            <th>
                                Parameter
                            </th>

                            <th>
                                Data yang Diamati
                            </th>

                            <th>
                                Instrumen
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>
                                Intensitas Cahaya
                            </td>

                            <td>
                                Nilai cahaya yang diterima
                            </td>

                            <td>
                                LDR / Lux Meter
                            </td>

                        </tr>

                        <tr>

                            <td>
                                PWM
                            </td>

                            <td>
                                Nilai pengaturan output lampu
                            </td>

                            <td>
                                Serial Monitor
                            </td>

                        </tr>

                        <tr>

                            <td>
                                Kondisi Lampu
                            </td>

                            <td>
                                Tingkat terang lampu
                            </td>

                            <td>
                                Pengamatan
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

            <p>
                Data dianalisis dengan melihat hubungan
                antara intensitas cahaya yang diterima
                sensor dengan nilai PWM yang diberikan
                oleh ESP32 kepada lampu.
            </p>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 15 — DATA HASIL PENELITIAN
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            15 / Hasil Penelitian
        </div>

        <h2>
            Data Hasil Penelitian
        </h2>

        <div class="card">

            <div class="table-wrap">

                <table class="data-table">

                    <thead>

                        <tr>

                            <th>No.</th>
                            <th>Intensitas Cahaya</th>
                            <th>Lux Meter</th>
                            <th>Nilai PWM</th>
                            <th>Kondisi Lampu</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>01</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                        </tr>

                        <tr>
                            <td>02</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                        </tr>

                        <tr>
                            <td>03</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                        </tr>

                        <tr>
                            <td>04</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                        </tr>

                    </tbody>

                </table>

            </div>

            <p>
                Data pengukuran aktual dapat dimasukkan
                pada tabel ini setelah hasil pengujian
                tersedia.
            </p>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 16 — GRAFIK & DOKUMENTASI
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            16 / Grafik & Dokumentasi
        </div>

        <h2>
            Grafik & Dokumentasi
        </h2>

        <div class="grid-2">

            <div class="card">

                <h3>
                    Hubungan Lux dan PWM
                </h3>

                <div class="bar-chart">

                    <div
                        class="bar"
                        style="height:35%">
                        <span>—</span>
                    </div>

                    <div
                        class="bar"
                        style="height:55%">
                        <span>—</span>
                    </div>

                    <div
                        class="bar"
                        style="height:72%">
                        <span>—</span>
                    </div>

                    <div
                        class="bar"
                        style="height:48%">
                        <span>—</span>
                    </div>

                    <div
                        class="bar"
                        style="height:84%">
                        <span>—</span>
                    </div>

                </div>

                <p>
                    Grafik aktual disesuaikan dengan
                    data hasil pengujian.
                </p>

            </div>

            <div class="card">

                <h3>
                    Dokumentasi Penelitian
                </h3>

                <div class="gallery">

                    <div class="photo"
                        data-photo="1">
                        FOTO 1
                    </div>

                    <div class="photo"
                        data-photo="2">
                        FOTO 2
                    </div>

                    <div class="photo"
                        data-photo="3">
                        FOTO 3
                    </div>

                    <div class="photo"
                        data-photo="4">
                        FOTO 4
                    </div>

                </div>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 17 — PEMBAHASAN
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            17 / Pembahasan
        </div>

        <h2>
            Pembahasan
        </h2>

        <div class="grid-3">

            <div class="card">

                <div class="number">
                    01
                </div>

                <h3>
                    Apa Hasil Utamanya?
                </h3>

                <p>
                    Terdapat hubungan antara PWM dan
                    lux yang sesuai. PWM berkurang jika
                    menerima cahaya yang terang, dan PWM
                    akan bertambah jika menerima cahaya
                    yang kurang.
                </p>

            </div>

            <div class="card">

                <div class="number">
                    02
                </div>

                <h3>
                    Mengapa Bisa Terjadi?
                </h3>

                <p>
                    Karena sensor LDR akan menerima cahaya
                    sebagai input yang akan dikirim ke ESP32
                    sebagai proses, kemudian dikeluarkan
                    melalui lampu sebagai cahaya atau output.
                </p>

            </div>

            <div class="card">

                <div class="number">
                    03
                </div>

                <h3>
                    Perbandingan dengan Peneliti Sebelumnya
                </h3>

                <p>
                    Domingos Soares Martins membuat smart
                    lamp berbasis NodeMCU dengan sensor LDR
                    berbasis IoT yang dapat dikendalikan dari
                    jarak jauh dan efisien dalam penggunaan
                    energi.
                </p>

                <p>
                    Penelitian saya menggunakan embedded
                    system yang juga mengontrol lampu secara
                    otomatis dan efisien dalam penggunaan
                    energi, tetapi tidak dapat dikendalikan
                    dari jarak jauh.
                </p>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 18 — KESIMPULAN & SARAN
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            18 / Kesimpulan & Saran
        </div>

        <h2>
            Kesimpulan & Saran
        </h2>

        <div class="grid-2">

            <div class="card">

                <h3>
                    Kesimpulan
                </h3>

                <p>
                    <strong>01.</strong>
                    Dapat menciptakan lingkungan belajar
                    yang nyaman pada ruang kelas.
                </p>

                <p>
                    <strong>02.</strong>
                    Mengetahui cara kerja sensor LDR
                    dalam mendeteksi intensitas cahaya
                    pada ruangan.
                </p>

            </div>

            <div class="card">

                <h3>
                    Saran
                </h3>

                <p>
                    <strong>01.</strong>
                    Pemanfaatan teknologi Li-Fi.
                </p>

                <p>
                    <strong>02.</strong>
                    Integrasi Artificial Intelligence.
                </p>

                <p>
                    <strong>03.</strong>
                    Penggunaan lampu hemat energi
                    dengan panel surya mini.
                </p>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 19 — REFERENSI
    ===================================================== */

    `
    <div class="slide-inner">

        <div class="kicker">
            19 / Referensi
        </div>

        <h2>
            Referensi
        </h2>

        <div class="timeline">

            <div class="step">

                <div class="number">
                    01
                </div>

                <div class="card">

                    <p>
                        Martins, D. (2023).
                        Pengendalian lampu berbasis IoT
                        menggunakan NodeMCU dan sensor cahaya.
                    </p>

                </div>

            </div>

            <div class="step">

                <div class="number">
                    02
                </div>

                <div class="card">

                    <p>
                        Panjaitan, S. D. M. (2022).
                        Prototype pengendalian lampu jarak jauh
                        dengan jaringan internet berbasis
                        Internet of Things (IoT) menggunakan
                        Raspberry Pi3.
                    </p>

                </div>

            </div>

            <div class="step">

                <div class="number">
                    03
                </div>

                <div class="card">

                    <p>
                        Lestari, L., Syahwi, dan Haramaini, T.
                        (2023). Pemanfaatan teknologi Internet
                        of Things untuk kendali lampu menggunakan
                        Android.
                    </p>

                </div>

            </div>

            <div class="step">

                <div class="number">
                    04
                </div>

                <div class="card">

                    <p>
                        Hidayat, F., Martanto, Rinaldi, A.,
                        dan Rifai, A. (2025). Penerapan IoT pada
                        kendali lampu menggunakan ESP8266 dan
                        sensor cahaya untuk efisiensi energi.
                    </p>

                </div>

            </div>

            <div class="step">

                <div class="number">
                    05
                </div>

                <div class="card">

                    <p>
                        Alama, N., Rahmani, H., dan Yeni.
                        (2022). Lampu otomatis menggunakan
                        sensor cahaya berbasis Arduino Uno
                        dengan alat sensor LDR.
                    </p>

                </div>

            </div>

        </div>

    </div>
    `,


    /* =====================================================
       SLIDE 20 — PENUTUP
    ===================================================== */

    `
    <div class="slide-inner closing">

        <div class="kicker">
            20 / Closing
        </div>

        <div class="big-thanks">
            TERIMA KASIH
        </div>

        <p>
            SESI TANYA JAWAB
        </p>

        <div
            class="hero-meta"
            style="justify-content:center">

            <span class="pill">
                Ridho Evrilian · XIIB
            </span>

            <span class="pill">
                Pembimbing: Miss Adel
            </span>

            <span class="pill">
                SMA Gunung Madu
            </span>

        </div>

    </div>
    `

];


/* =========================================================
   02. VARIABEL PRESENTASI
========================================================= */

let currentSlide = 0;

let slides = [];

let isAnimating = false;


/* =========================================================
   03. DOM ELEMENT
========================================================= */

const app =
    document.getElementById("app");


/* =========================================================
   04. CREATE SLIDES
========================================================= */

function createSlides() {

    if (!app) {

        console.error(
            "Element #app tidak ditemukan."
        );

        return;

    }

    app.innerHTML = "";

    content.forEach(
        (slideContent, index) => {

            const slide =
                document.createElement("section");

            slide.className = "slide";

            slide.dataset.index = index;

            slide.innerHTML =
                slideContent;

            app.appendChild(slide);

        }
    );

    slides =
        document.querySelectorAll(".slide");

}


/* =========================================================
   05. CREATE CONTROLS
========================================================= */

function createControls() {

    const oldControls =
        document.querySelector(".controls");

    if (oldControls) {
        oldControls.remove();
    }


    const controls =
        document.createElement("div");

    controls.className =
        "controls";


    controls.innerHTML = `

        <button
            id="prevBtn"
            aria-label="Slide sebelumnya"
            title="Sebelumnya">

            ←

        </button>


        <div
            class="slide-counter"
            id="slideCounter">

            01 / ${content.length}

        </div>


        <button
            id="nextBtn"
            aria-label="Slide berikutnya"
            title="Berikutnya">

            →

        </button>

    `;


    document.body.appendChild(
        controls
    );


    document
        .getElementById("prevBtn")
        .addEventListener(
            "click",
            previousSlide
        );


    document
        .getElementById("nextBtn")
        .addEventListener(
            "click",
            nextSlide
        );

}


/* =========================================================
   06. CREATE PROGRESS BAR
========================================================= */

function createProgressBar() {

    const oldProgress =
        document.querySelector(
            ".progress-container"
        );

    if (oldProgress) {
        oldProgress.remove();
    }


    const container =
        document.createElement("div");

    container.className =
        "progress-container";


    container.innerHTML = `

        <div
            class="progress-bar"
            id="progressBar">
        </div>

    `;


    document.body.appendChild(
        container
    );

}


/* =========================================================
   07. CREATE SLIDE NUMBER
========================================================= */

function createSlideNumber() {

    const oldNumber =
        document.querySelector(
            ".slide-number"
        );

    if (oldNumber) {
        oldNumber.remove();
    }


    const number =
        document.createElement("div");

    number.className =
        "slide-number";

    number.id =
        "slideNumber";


    document.body.appendChild(
        number
    );

}


/* =========================================================
   08. CREATE FULLSCREEN BUTTON
========================================================= */

function createFullscreenButton() {

    const oldButton =
        document.querySelector(
            ".fullscreen-btn"
        );

    if (oldButton) {
        oldButton.remove();
    }


    const button =
        document.createElement("button");

    button.className =
        "fullscreen-btn";

    button.id =
        "fullscreenBtn";

    button.title =
        "Fullscreen";

    button.setAttribute(
        "aria-label",
        "Fullscreen"
    );

    button.textContent =
        "⛶";


    document.body.appendChild(
        button
    );


    button.addEventListener(
        "click",
        toggleFullscreen
    );

}


/* =========================================================
   09. UPDATE SLIDE
========================================================= */

function updateSlide(
    newIndex,
    direction = "next"
) {

    if (
        isAnimating ||
        !slides.length
    ) {
        return;
    }


    if (
        newIndex < 0 ||
        newIndex >= slides.length
    ) {
        return;
    }


    if (
        newIndex === currentSlide
    ) {
        return;
    }


    isAnimating = true;


    const oldSlide =
        slides[currentSlide];

    const newSlide =
        slides[newIndex];


    oldSlide.classList.remove(
        "active"
    );


    newSlide.classList.add(
        "active"
    );


    currentSlide =
        newIndex;


    updateUI();


    setTimeout(
        () => {

            isAnimating = false;

        },
        450
    );

}


/* =========================================================
   10. GO TO SLIDE
========================================================= */

function goToSlide(index) {

    if (!slides.length) {
        return;
    }


    index =
        Number(index);


    if (
        Number.isNaN(index)
    ) {
        return;
    }


    if (
        index < 0
    ) {
        index = 0;
    }


    if (
        index >= slides.length
    ) {
        index =
            slides.length - 1;
    }


    if (
        index === currentSlide
    ) {
        return;
    }


    updateSlide(
        index,
        index > currentSlide
            ? "next"
            : "prev"
    );

}


/* =========================================================
   11. NEXT SLIDE
========================================================= */

function nextSlide() {

    if (
        currentSlide <
        slides.length - 1
    ) {

        updateSlide(
            currentSlide + 1,
            "next"
        );

    }

}


/* =========================================================
   12. PREVIOUS SLIDE
========================================================= */

function previousSlide() {

    if (
        currentSlide > 0
    ) {

        updateSlide(
            currentSlide - 1,
            "prev"
        );

    }

}


/* =========================================================
   13. UPDATE UI
========================================================= */

function updateUI() {

    const counter =
        document.getElementById(
            "slideCounter"
        );


    const progress =
        document.getElementById(
            "progressBar"
        );


    const slideNumber =
        document.getElementById(
            "slideNumber"
        );


    const prevButton =
        document.getElementById(
            "prevBtn"
        );


    const nextButton =
        document.getElementById(
            "nextBtn"
        );


    const slidePosition =
        currentSlide + 1;


    if (counter) {

        counter.textContent =
            `${String(slidePosition).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;

    }


    if (slideNumber) {

        slideNumber.textContent =
            `${String(slidePosition).padStart(2, "0")}`;

    }


    if (progress) {

        const percentage =
            (
                slidePosition /
                slides.length
            ) * 100;

        progress.style.width =
            `${percentage}%`;

    }


    if (prevButton) {

        prevButton.disabled =
            currentSlide === 0;

        prevButton.style.opacity =
            currentSlide === 0
                ? "0.35"
                : "1";

    }


    if (nextButton) {

        nextButton.disabled =
            currentSlide ===
            slides.length - 1;

        nextButton.style.opacity =
            currentSlide ===
            slides.length - 1
                ? "0.35"
                : "1";

    }

}


/* =========================================================
   14. KEYBOARD NAVIGATION
========================================================= */

function handleKeyboard(event) {

    switch (event.key) {

        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":

            event.preventDefault();

            nextSlide();

            break;


        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":

            event.preventDefault();

            previousSlide();

            break;


        case "Home":

            event.preventDefault();

            goToSlide(0);

            break;


        case "End":

            event.preventDefault();

            goToSlide(
                slides.length - 1
            );

            break;


        case "f":
        case "F":

            toggleFullscreen();

            break;


        case "Escape":

            if (
                document.fullscreenElement
            ) {

                document.exitFullscreen();

            }

            break;

    }

}


/* =========================================================
   15. FULLSCREEN
========================================================= */

function toggleFullscreen() {

    if (
        !document.fullscreenElement
    ) {

        const element =
            document.documentElement;


        if (
            element.requestFullscreen
        ) {

            element.requestFullscreen()
                .catch(
                    error => {

                        console.error(
                            "Fullscreen gagal:",
                            error
                        );

                    }
                );

        }

    } else {

        if (
            document.exitFullscreen
        ) {

            document
                .exitFullscreen()
                .catch(
                    error => {

                        console.error(
                            "Keluar fullscreen gagal:",
                            error
                        );

                    }
                );

        }

    }

}


/* =========================================================
   16. UPDATE FULLSCREEN ICON
========================================================= */

function updateFullscreenButton() {

    const button =
        document.getElementById(
            "fullscreenBtn"
        );


    if (!button) {
        return;
    }


    if (
        document.fullscreenElement
    ) {

        button.textContent =
            "⛶";

        button.title =
            "Keluar Fullscreen";

    } else {

        button.textContent =
            "⛶";

        button.title =
            "Fullscreen";

    }

}


/* =========================================================
   17. TOUCH / SWIPE
========================================================= */

let touchStartX = 0;

let touchStartY = 0;

let touchEndX = 0;

let touchEndY = 0;


function handleTouchStart(event) {

    if (
        !event.touches ||
        !event.touches.length
    ) {
        return;
    }


    touchStartX =
        event.touches[0].clientX;

    touchStartY =
        event.touches[0].clientY;

}


function handleTouchEnd(event) {

    if (
        !event.changedTouches ||
        !event.changedTouches.length
    ) {
        return;
    }


    touchEndX =
        event.changedTouches[0].clientX;

    touchEndY =
        event.changedTouches[0].clientY;


    handleSwipe();

}


function handleSwipe() {

    const differenceX =
        touchEndX -
        touchStartX;

    const differenceY =
        touchEndY -
        touchStartY;


    const minimumDistance =
        60;


    if (
        Math.abs(differenceX) <
        minimumDistance
    ) {

        return;

    }


    if (
        Math.abs(differenceX) <
        Math.abs(differenceY)
    ) {

        return;

    }


    if (
        differenceX < 0
    ) {

        nextSlide();

    } else {

        previousSlide();

    }

}


/* =========================================================
   18. MOUSE WHEEL
========================================================= */

let wheelLock = false;


function handleWheel(event) {

    if (wheelLock) {
        return;
    }


    if (
        Math.abs(event.deltaY) <
        20
    ) {
        return;
    }


    wheelLock = true;


    if (
        event.deltaY > 0
    ) {

        nextSlide();

    } else {

        previousSlide();

    }


    setTimeout(
        () => {

            wheelLock = false;

        },
        500
    );

}


/* =========================================================
   19. CLICK AREA NAVIGATION
========================================================= */

function handleSlideClick(event) {

    const target =
        event.target;


    if (
        target.closest(
            "button, a, input, textarea, select"
        )
    ) {

        return;

    }


    const width =
        window.innerWidth;


    const clickX =
        event.clientX;


    if (
        clickX >
        width * 0.65
    ) {

        nextSlide();

    } else if (
        clickX <
        width * 0.35
    ) {

        previousSlide();

    }

}


/* =========================================================
   20. URL HASH
========================================================= */

function loadSlideFromHash() {

    const hash =
        window.location.hash;


    if (
        !hash
    ) {
        return;
    }


    const match =
        hash.match(
            /slide-(\d+)/
        );


    if (!match) {
        return;
    }


    const slideNumber =
        Number(match[1]);


    if (
        slideNumber >= 1 &&
        slideNumber <= slides.length
    ) {

        currentSlide =
            slideNumber - 1;

    }

}


function updateHash() {

    const slideNumber =
        currentSlide + 1;


    const newHash =
        `#slide-${slideNumber}`;


    if (
        window.location.hash !==
        newHash
    ) {

        history.replaceState(
            null,
            "",
            newHash
        );

    }

}


/* =========================================================
   21. UPDATE SLIDE + HASH
========================================================= */

const originalUpdateSlide =
    updateSlide;


/*
    Wrapper agar URL hash ikut berubah.
*/

function updateSlideWithHash(
    newIndex,
    direction
) {

    originalUpdateSlide(
        newIndex,
        direction
    );


    setTimeout(
        updateHash,
        50
    );

}


/* =========================================================
   22. OVERRIDE NAVIGATION
========================================================= */

function nextSlideWithHash() {

    if (
        currentSlide <
        slides.length - 1
    ) {

        updateSlideWithHash(
            currentSlide + 1,
            "next"
        );

    }

}


function previousSlideWithHash() {

    if (
        currentSlide > 0
    ) {

        updateSlideWithHash(
            currentSlide - 1,
            "prev"
        );

    }

}


function goToSlideWithHash(
    index
) {

    if (!slides.length) {
        return;
    }


    index =
        Number(index);


    if (
        Number.isNaN(index)
    ) {
        return;
    }


    index =
        Math.max(
            0,
            Math.min(
                index,
                slides.length - 1
            )
        );


    if (
        index === currentSlide
    ) {

        return;

    }


    updateSlideWithHash(
        index,
        index > currentSlide
            ? "next"
            : "prev"
    );

}


/* =========================================================
   23. KEYBOARD — VERSI HASH
========================================================= */

function handleKeyboardWithHash(
    event
) {

    switch (event.key) {

        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":

            event.preventDefault();

            nextSlideWithHash();

            break;


        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":

            event.preventDefault();

            previousSlideWithHash();

            break;


        case "Home":

            event.preventDefault();

            goToSlideWithHash(0);

            break;


        case "End":

            event.preventDefault();

            goToSlideWithHash(
                slides.length - 1
            );

            break;


        case "f":
        case "F":

            toggleFullscreen();

            break;


        case "Escape":

            if (
                document.fullscreenElement
            ) {

                document.exitFullscreen();

            }

            break;

    }

}


/* =========================================================
   24. TOUCH — VERSI HASH
========================================================= */

function handleSwipeWithHash() {

    const differenceX =
        touchEndX -
        touchStartX;

    const differenceY =
        touchEndY -
        touchStartY;


    const minimumDistance =
        60;


    if (
        Math.abs(differenceX) <
        minimumDistance
    ) {

        return;

    }


    if (
        Math.abs(differenceX) <
        Math.abs(differenceY)
    ) {

        return;

    }


    if (
        differenceX < 0
    ) {

        nextSlideWithHash();

    } else {

        previousSlideWithHash();

    }

}


/* =========================================================
   25. SLIDE CLICK — VERSI HASH
========================================================= */

function handleSlideClickWithHash(
    event
) {

    const target =
        event.target;


    if (
        target.closest(
            "button, a, input, textarea, select"
        )
    ) {

        return;

    }


    const width =
        window.innerWidth;


    const clickX =
        event.clientX;


    if (
        clickX >
        width * 0.65
    ) {

        nextSlideWithHash();

    } else if (
        clickX <
        width * 0.35
    ) {

        previousSlideWithHash();

    }

}


/* =========================================================
   26. UPDATE PHOTO PLACEHOLDER
========================================================= */

function setupPhotoPlaceholders() {

    const photos =
        document.querySelectorAll(
            ".photo"
        );


    photos.forEach(
        photo => {

            photo.addEventListener(
                "click",
                () => {

                    const photoNumber =
                        photo.dataset.photo;

                    console.log(
                        `Dokumentasi foto ${photoNumber}`
                    );

                }
            );

        }
    );

}


/* =========================================================
   27. INITIALIZE
========================================================= */

function initializePresentation() {

    createSlides();

    createControls();

    createProgressBar();

    createSlideNumber();

    createFullscreenButton();


    loadSlideFromHash();


    if (
        slides.length
    ) {

        slides.forEach(
            slide => {

                slide.classList.remove(
                    "active"
                );

            }
        );


        slides[currentSlide]
            .classList.add(
                "active"
            );

    }


    updateUI();

    updateHash();

    setupPhotoPlaceholders();

}


/* =========================================================
   28. EVENT LISTENERS
========================================================= */

document.addEventListener(
    "keydown",
    handleKeyboardWithHash
);


document.addEventListener(
    "touchstart",
    handleTouchStart,
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        if (
            !event.changedTouches ||
            !event.changedTouches.length
        ) {

            return;

        }


        touchEndX =
            event.changedTouches[0].clientX;

        touchEndY =
            event.changedTouches[0].clientY;


        handleSwipeWithHash();

    },
    {
        passive: true
    }
);


document.addEventListener(
    "wheel",
    handleWheel,
    {
        passive: true
    }
);


document.addEventListener(
    "click",
    handleSlideClickWithHash
);


document.addEventListener(
    "fullscreenchange",
    updateFullscreenButton
);


window.addEventListener(
    "hashchange",
    () => {

        loadSlideFromHash();


        slides.forEach(
            slide => {

                slide.classList.remove(
                    "active"
                );

            }
        );


        if (
            slides[currentSlide]
        ) {

            slides[currentSlide]
                .classList.add(
                    "active"
                );

        }


        updateUI();

    }
);


/* =========================================================
   29. START
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializePresentation
    );

} else {

    initializePresentation();

}
