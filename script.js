/* =====================================================
   SMART LAMP PRESENTATION
   SCRIPT.JS
===================================================== */


/* ================= DATA SLIDE ================= */

const titles = [

    "Judul Penelitian",

    "Alur Presentasi",

    "Latar Belakang",

    "Rumusan Masalah",

    "Tujuan Penelitian",

    "Batasan & Hipotesis",

    "Manfaat Penelitian",

    "Landasan Teori",

    "Penelitian Terdahulu",

    "Desain Penelitian",

    "Alat & Bahan",

    "Prosedur Penelitian",

    "Teknik Pengumpulan Data",

    "Pengolahan & Analisis Data",

    "Data Hasil Penelitian",

    "Grafik & Dokumentasi",

    "Pembahasan",

    "Kesimpulan & Saran",

    "Referensi",

    "Penutupan"

];


/* =====================================================
   ISI SLIDE
===================================================== */

const content = [

/* ================= 01 ================= */

`
<div class="slide-inner hero">

    <div>

        <div class="kicker">
            Prototype Smart Lamp
        </div>

        <h1>
            Prototype Lampu Pintar Berbasis
            <em>Embedded System</em>
        </h1>

        <p style="font-size:20px;max-width:850px">

            Menggunakan ESP-32 sebagai alat
            intensitas cahaya pada ruangan yang
            mengatur pencahayaan saat belajar
            di SMA Gunung Madu.

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


/* ================= 02 ================= */

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
                Latar belakang,
                rumusan masalah,
                tujuan.
            </p>
        </div>


        <div class="card">
            <div class="number">02</div>
            <h3>Tinjauan Pustaka</h3>
            <p>
                Landasan teori
                dan penelitian terdahulu.
            </p>
        </div>


        <div class="card">
            <div class="number">03</div>
            <h3>Metode Penelitian</h3>
            <p>
                Desain, alat,
                bahan dan prosedur.
            </p>
        </div>


        <div class="card">
            <div class="number">04</div>
            <h3>Hasil & Pembahasan</h3>
            <p>
                Data penelitian
                dan analisis.
            </p>
        </div>


        <div class="card">
            <div class="number">05</div>
            <h3>Kesimpulan & Saran</h3>
            <p>
                Kesimpulan penelitian
                dan pengembangan.
            </p>
        </div>


        <div class="card">
            <div class="number">06</div>
            <h3>Daftar Pustaka</h3>
            <p>
                Referensi penelitian.
            </p>
        </div>

    </div>

</div>
`,


/* ================= 03 ================= */

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
                Masukkan kondisi pencahayaan
                ruang belajar yang menjadi
                dasar penelitian.
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
                Masukkan masalah yang
                ditemukan pada pengaturan
                pencahayaan.
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
                Prototype lampu pintar
                berbasis ESP-32.
            </p>

        </div>

    </div>

</div>
`,


/* ================= 04 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        04 / Pertanyaan
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
                Bagaimana merancang?
            </h3>

            <p>
                Masukkan rumusan masalah
                pertama sesuai naskah
                penelitian.
            </p>

        </div>


        <div class="card">

            <div class="number">
                02
            </div>

            <h3>
                Bagaimana cara kerja?
            </h3>

            <p>
                Masukkan rumusan masalah
                kedua sesuai naskah
                penelitian.
            </p>

        </div>

    </div>

</div>
`,


/* ================= 05 ================= */

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
                Merancang dan membangun
            </h3>

            <p>
                Sistem lampu pintar
                berbasis embedded system.
            </p>

        </div>


        <div class="card">

            <div class="number">
                02
            </div>

            <h3>
                Mengetahui cara kerja
            </h3>

            <p>
                Sensor dan ESP-32 dalam
                menyesuaikan pencahayaan.
            </p>

        </div>

    </div>

</div>
`,


/* ================= 06 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        06 / Scope
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
                01 — Masukkan batasan pertama.
            </p>

            <p>
                02 — Masukkan batasan kedua.
            </p>

            <p>
                03 — Masukkan batasan ketiga.
            </p>

            <p>
                04 — Masukkan batasan keempat.
            </p>

        </div>


        <div class="card">

            <h3>
                Hipotesis
            </h3>

            <p>
                Smart Lamp ini diduga dapat
                mengatur pencahayaan ruangan
                berdasarkan intensitas cahaya
                yang diterima sensor.
            </p>

        </div>

    </div>

</div>
`,


/* ================= 07 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        07 / Impact
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
                Masukkan manfaat
                bagi sekolah.
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
                Masukkan manfaat
                bagi peneliti.
            </p>

        </div>


        <div class="card">

            <div class="number">
                03
            </div>

            <h3>
                Bagi Masyarakat
            </h3>

            <p>
                Masukkan manfaat
                bagi masyarakat.
            </p>

        </div>

    </div>

</div>
`,


/* ================= 08 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        08 / Theory
    </div>

    <h2>
        Landasan Teori
    </h2>


    <div class="grid-3">

        <div class="card">

            <h3>
                ESP-32
            </h3>

            <p>
                Penjelasan teori ESP-32
                sesuai sumber penelitian.
            </p>

        </div>


        <div class="card">

            <h3>
                Cahaya
            </h3>

            <p>
                Penjelasan teori cahaya
                sesuai sumber penelitian.
            </p>

        </div>


        <div class="card">

            <h3>
                Lampu Pintar
            </h3>

            <p>
                Penjelasan konsep lampu
                pintar sesuai sumber penelitian.
            </p>

        </div>

    </div>

</div>
`,


/* ================= 09 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        09 / Literature
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
                Penelitian Terdahulu 01
            </h3>

            <p>
                Domingos Soares Martins
                (2023)
            </p>

            <p>
                Hasil: masukkan ringkasan
                hasil penelitian.
            </p>

        </div>


        <div class="card">

            <div class="number">
                02
            </div>

            <h3>
                Penelitian Terdahulu 02
            </h3>

            <p>
                Demi Adidrana dkk.
                (2023)
            </p>

            <p>
                Hasil: masukkan ringkasan
                hasil penelitian.
            </p>

        </div>

    </div>

</div>
`,


/* ================= 10 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        10 / Method
    </div>

    <h2>
        Desain Penelitian
    </h2>


    <div class="card">

        <div class="section-head">

            <h3>
                Periode Penelitian
            </h3>

            <span class="tag">
                14 JUL — 27 AGU
            </span>

        </div>

        <p>
            Periode penelitian.
        </p>

    </div>


    <div class="flow">

        <div class="card">

            <h3>
                Jenis
            </h3>

            <p>
                Masukkan jenis penelitian.
            </p>

        </div>


        <div class="card">

            <h3>
                Tempat
            </h3>

            <p>
                Masukkan tempat penelitian.
            </p>

        </div>


        <div class="card">

            <h3>
                Objek
            </h3>

            <p>
                Masukkan objek penelitian.
            </p>

        </div>

    </div>


    <div
        class="grid-3"
        style="margin-top:18px">

        <div class="card">
            <h3>
                Variabel Bebas
            </h3>
        </div>

        <div class="card">
            <h3>
                Variabel Terikat
            </h3>
        </div>

        <div class="card">
            <h3>
                Variabel Terkontrol
            </h3>
        </div>

    </div>

</div>
`,


/* ================= 11 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        11 / Components
    </div>

    <h2>
        Alat & Bahan
    </h2>


    <h3>
        Alat
    </h3>


    <div class="grid-4">

        <div class="card">
            <h3>Laptop</h3>
        </div>

        <div class="card">
            <h3>ESP-32</h3>
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
            Bahan / Software
        </h3>

        <p>
            Arduino IDE · Library ESP-32 · Wi-Fi
        </p>

    </div>

</div>
`,


/* ================= 12 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        12 / Procedure
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
                <h3>Perancangan</h3>
            </div>
        </div>

        <div class="step">
            <div class="number">03</div>
            <div class="card">
                <h3>Pemasangan</h3>
            </div>
        </div>

        <div class="step">
            <div class="number">04</div>
            <div class="card">
                <h3>Coding</h3>
            </div>
        </div>

        <div class="step">
            <div class="number">05</div>
            <div class="card">
                <h3>Pengujian Sensor</h3>
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
                <h3>Perbaikan Coding</h3>
            </div>
        </div>

        <div class="step">
            <div class="number">08</div>
            <div class="card">
                <h3>Pengambilan Data</h3>
            </div>
        </div>

        <div class="step">
            <div class="number">09</div>
            <div class="card">
                <h3>Analisis Hasil</h3>
            </div>
        </div>

    </div>

</div>
`,


/* ================= 13 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        13 / Data Collection
    </div>

    <h2>
        Teknik Pengumpulan Data
    </h2>


    <div class="grid-3">

        <div class="card">

            <h3>
                Jenis Data
            </h3>

            <p>
                Data primer
            </p>

        </div>


        <div class="card">

            <h3>
                Instrumen
            </h3>

            <p>
                LDR · ESP-32 ·
                Serial Monitor
            </p>

        </div>


        <div class="card">

            <h3>
                Pengambilan Data
            </h3>

            <p>
                Masukkan lokasi dan
                durasi pengambilan data.
            </p>

        </div>

    </div>

</div>
`,


/* ================= 14 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        14 / Analysis
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
                            Nilai
                        </th>

                        <th>
                            Keterangan
                        </th>

                    </tr>

                </thead>


                <tbody>

                    <tr>

                        <td>
                            Data 01
                        </td>

                        <td>
                            —
                        </td>

                        <td>
                            Masukkan data penelitian
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Data 02
                        </td>

                        <td>
                            —
                        </td>

                        <td>
                            Masukkan data penelitian
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Data 03
                        </td>

                        <td>
                            —
                        </td>

                        <td>
                            Masukkan data penelitian
                        </td>

                    </tr>

                </tbody>

            </table>

        </div>


        <p>

            Analisis dilakukan dengan
            membandingkan data intensitas
            cahaya dan respons output lampu.

        </p>

    </div>

</div>
`,


/* ================= 15 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        15 / Results
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

                        <th>
                            Intensitas Cahaya
                        </th>

                        <th>
                            Nilai Sensor
                        </th>

                        <th>
                            Output Lampu
                        </th>

                    </tr>

                </thead>


                <tbody>

                    <tr>
                        <td>01</td>
                        <td>—</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>

                    <tr>
                        <td>02</td>
                        <td>—</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>

                    <tr>
                        <td>03</td>
                        <td>—</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>

                    <tr>
                        <td>04</td>
                        <td>—</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>

                </tbody>

            </table>

        </div>


        <p>
            ⚠ Data asli penelitian belum dimasukkan.
        </p>

    </div>

</div>
`,


/* ================= 16 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        16 / Visual Results
    </div>

    <h2>
        Grafik & Dokumentasi
    </h2>


    <div class="grid-2">

        <div class="card">

            <h3>
                Grafik Intensitas Cahaya ↔ PWM
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

                <div
                    class="bar"
                    style="height:63%">
                    <span>—</span>
                </div>

            </div>

        </div>


        <div class="card">

            <h3>
                Dokumentasi
            </h3>


            <div class="gallery">

                <div
                    class="photo"
                    data-photo="1">

                    FOTO 1

                    <br>

                    <small>
                        klik untuk fullscreen
                    </small>

                </div>


                <div
                    class="photo"
                    data-photo="2">

                    FOTO 2

                    <br>

                    <small>
                        klik untuk fullscreen
                    </small>

                </div>


                <div
                    class="photo"
                    data-photo="3">

                    FOTO 3

                    <br>

                    <small>
                        klik untuk fullscreen
                    </small>

                </div>


                <div
                    class="photo"
                    data-photo="4">

                    FOTO 4

                    <br>

                    <small>
                        klik untuk fullscreen
                    </small>

                </div>

            </div>

        </div>

    </div>

</div>
`,


/* ================= 17 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        17 / Discussion
    </div>

    <h2>
        Pembahasan
    </h2>


    <div class="flow">

        <div class="card">

            <div class="number">
                01
            </div>

            <h3>
                Hasil
            </h3>

            <p>
                Data cahaya diterima sensor.
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
                Proses
            </h3>

            <p>
                LDR memberikan input
                kepada ESP-32.
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
                Output
            </h3>

            <p>
                ESP-32 mengatur
                keluaran lampu.
            </p>

        </div>

    </div>


    <div
        class="card"
        style="margin-top:18px">

        <h3>
            Perbandingan
        </h3>

        <p>
            Hubungkan hasil penelitian
            dengan penelitian terdahulu
            berdasarkan data yang sebenarnya.
        </p>

    </div>

</div>
`,


/* ================= 18 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        18 / Conclusion
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
                01 — Masukkan kesimpulan pertama.
            </p>

            <p>
                02 — Masukkan kesimpulan kedua.
            </p>

        </div>


        <div class="grid-3">

            <div class="card">

                <h3>
                    Saran 01
                </h3>

                <p>
                    Li-Fi
                </p>

            </div>


            <div class="card">

                <h3>
                    Saran 02
                </h3>

                <p>
                    AI & Kontekstual Mandiri
                </p>

            </div>


            <div class="card">

                <h3>
                    Saran 03
                </h3>

                <p>
                    Lampu + Panel Surya Mini
                </p>

            </div>

        </div>

    </div>

</div>
`,


/* ================= 19 ================= */

`
<div class="slide-inner">

    <div class="kicker">
        19 / References
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
                <h3>
                    Aulia (2021) — ESP-32
                </h3>
            </div>

        </div>


        <div class="step">

            <div class="number">
                02
            </div>

            <div class="card">
                <h3>
                    Sunardi (2012) — Cahaya
                </h3>
            </div>

        </div>


        <div class="step">

            <div class="number">
                03
            </div>

            <div class="card">
                <h3>
                    Djaeng dan Dwi (2017) — Lampu Pintar
                </h3>
            </div>

        </div>


        <div class="step">

            <div class="number">
                04
            </div>

            <div class="card">
                <h3>
                    Domingos Soares Martins (2023)
                </h3>
            </div>

        </div>


        <div class="step">

            <div class="number">
                05
            </div>

            <div class="card">
                <h3>
                    Demi Adidrana dkk. (2023)
                </h3>
            </div>

        </div>

    </div>

</div>
`,


/* ================= 20 ================= */

`
<div class="slide-inner closing">

    <div class="kicker">
        20 / Closing
    </div>


    <div class="big-thanks">
        TERIMA KASIH
    </div>


    <p style="font-size:20px">
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


/* =====================================================
   ELEMENT
===================================================== */

const slidesContainer =
    document.getElementById("slides");

const slideNav =
    document.getElementById("slideNav");

const previousButton =
    document.getElementById("prevBtn");

const nextButton =
    document.getElementById("nextBtn");

const progress =
    document.getElementById("progress");

const pageNumber =
    document.getElementById("pageNumber");


/* =====================================================
   CURRENT SLIDE
===================================================== */

let currentSlide = 0;


/* =====================================================
   CREATE SLIDES
===================================================== */

content.forEach((html, index) => {

    const slide =
        document.createElement("section");

    slide.className = "slide";

    slide.innerHTML = html;

    slide.dataset.index = index;

    slidesContainer.appendChild(slide);


    /* ================= SIDEBAR BUTTON ================= */

    const navigationButton =
        document.createElement("button");

    navigationButton.className =
        "nav-item";


    navigationButton.innerHTML = `

        <span class="nav-num">

            ${String(index + 1).padStart(2, "0")}

        </span>

        <span class="nav-label">

            ${titles[index]}

        </span>

    `;


    navigationButton.addEventListener(
        "click",
        () => {

            goToSlide(index);

        }
    );


    slideNav.appendChild(
        navigationButton
    );

});


/* =====================================================
   GET SLIDES
===================================================== */

const allSlides =
    [...document.querySelectorAll(".slide")];

const navItems =
    [...document.querySelectorAll(".nav-item")];


/* =====================================================
   GO TO SLIDE
===================================================== */

function goToSlide(index) {

    currentSlide =
        Math.max(
            0,
            Math.min(
                content.length - 1,
                index
            )
        );


    /* ================= ACTIVE SLIDE ================= */

    allSlides.forEach(
        (slide, index) => {

            slide.classList.toggle(
                "active",
                index === currentSlide
            );

        }
    );


    /* ================= ACTIVE NAV ================= */

    navItems.forEach(
        (item, index) => {

            item.classList.toggle(
                "active",
                index === currentSlide
            );

        }
    );


    /* ================= PAGE NUMBER ================= */

    pageNumber.textContent =
        `${String(currentSlide + 1).padStart(2, "0")} / 20`;


    /* ================= PROGRESS ================= */

    const percentage =
        ((currentSlide + 1) / content.length) * 100;


    progress.style.width =
        `${percentage}%`;


    /* ================= BUTTON ================= */

    previousButton.disabled =
        currentSlide === 0;


    nextButton.disabled =
        currentSlide === content.length - 1;

}


/* =====================================================
   NEXT
===================================================== */

nextButton.addEventListener(
    "click",
    () => {

        goToSlide(
            currentSlide + 1
        );

    }
);


/* =====================================================
   PREVIOUS
===================================================== */

previousButton.addEventListener(
    "click",
    () => {

        goToSlide(
            currentSlide - 1
        );

    }
);


/* =====================================================
   KEYBOARD NAVIGATION
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "ArrowRight" ||
            event.key === "PageDown"
        ) {

            goToSlide(
                currentSlide + 1
            );

        }


        if (
            event.key === "ArrowLeft" ||
            event.key === "PageUp"
        ) {

            goToSlide(
                currentSlide - 1
            );

        }


        if (
            event.key.toLowerCase() === "f"
        ) {

            document.documentElement
                .requestFullscreen?.();

        }

    }
);


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeButton =
    document.getElementById("themeBtn");


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

    }
);


/* =====================================================
   FULLSCREEN
===================================================== */

const fullscreenButton =
    document.getElementById(
        "fullscreenBtn"
    );


fullscreenButton.addEventListener(
    "click",
    () => {

        if (!document.fullscreenElement) {

            document.documentElement
                .requestFullscreen?.();

        } else {

            document.exitFullscreen?.();

        }

    }
);


/* =====================================================
   SIDEBAR COLLAPSE
===================================================== */

const collapseButton =
    document.getElementById(
        "collapseBtn"
    );


collapseButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "sidebar-collapsed"
        );


        if (
            document.body.classList.contains(
                "sidebar-collapsed"
            )
        ) {

            collapseButton.textContent = "›";

        } else {

            collapseButton.textContent = "‹";

        }

    }
);


/* =====================================================
   LIGHTBOX
===================================================== */

const lightbox =
    document.getElementById(
        "lightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImg"
    );

const closeLightbox =
    document.getElementById(
        "closeLightbox"
    );


/* ================= PHOTO ================= */

document.querySelectorAll(".photo")
    .forEach(
        (photo) => {

            photo.addEventListener(
                "click",
                () => {

                    const number =
                        photo.dataset.photo;


                    /*
                        Sementara menggunakan
                        placeholder.

                        Nanti bisa diganti
                        dengan foto penelitian asli.
                    */

                    lightboxImage.src =
                        `https://placehold.co/1200x800/141e27/f5b84b?text=Dokumentasi+${number}`;


                    lightbox.classList.add(
                        "open"
                    );

                }
            );

        }
    );


/* ================= CLOSE ================= */

closeLightbox.addEventListener(
    "click",
    () => {

        lightbox.classList.remove(
            "open"
        );

    }
);


lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === lightbox
        ) {

            lightbox.classList.remove(
                "open"
            );

        }

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

goToSlide(0);