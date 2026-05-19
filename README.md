# Website Landing Page - PT Golden IB

Selamat datang di repositori proyek website **Landing Page PT Golden IB**. Proyek ini dikembangkan menggunakan **React** dengan build tool **Vite**, serta memanfaatkan **Bootstrap** dan **React Bootstrap** untuk penyusunan antarmuka yang responsif dan profesional.

---

## 🚀 Fitur & Teknologi yang Digunakan

Proyek ini dibangun menggunakan ekosistem teknologi modern sebagai berikut:

- **React (v19)**: Library JavaScript populer untuk membangun antarmuka pengguna berbasis komponen.
- **Vite (v8)**: Build tool yang sangat cepat untuk pengalaman pengembangan (HMR) lokal yang optimal.
- **Bootstrap (v5) & React Bootstrap**: Framework CSS untuk memastikan tampilan yang responsif, rapi, dan mudah disesuaikan di berbagai perangkat.
- **Framer Motion**: Library animasi untuk memberikan efek transisi interaktif yang halus pada elemen landing page.
- **React Icons**: Kumpulan ribuan ikon populer siap pakai untuk melengkapi elemen visual UI.

---

## 🛠️ Prasyarat (Prerequisites)

Sebelum memulai proses instalasi dan menjalankan proyek, pastikan perangkat Anda telah terpasang:

1. **Node.js**: Direkomendasikan versi LTS terbaru (minimal Node.js v18 atau di atasnya). Anda dapat mengunduhnya melalui [nodejs.org](https://nodejs.org/).
2. **npm** (Node Package Manager): Biasanya otomatis terinstal bersamaan dengan Node.js.

Untuk memastikan Node.js sudah terinstal, jalankan perintah berikut di terminal Anda:

```Terminal (Bash / Terminal Code Editor *VSCode Recommended)
node -v
npm -v

```

---

## 📥 Panduan Instalasi

Ikuti langkah-langkah di bawah ini untuk menyalin proyek dan memasang seluruh _dependencies_ yang diperlukan:

### 1. Clone Repositori

Buka terminal atau command prompt Anda, lalu jalankan perintah berikut:

```Terminal (Bash / Terminal Code Editor *VSCode Recommended)
git clone <URL_REPOSITORI_ANDA>

```

_Catatan: Ganti `<URL_REPOSITORI_ANDA>` dengan tautan git dari repositori ini._

### 2. Masuk ke Direktori Proyek

```Terminal (Bash / Terminal Code Editor *VSCode Recommended)
cd ProjectBase-Magang-LandingPage-PTGoldenIB

```

### 3. Instalasi Dependencies

Proyek ini mengandalkan beberapa paket penting yang tercatat di dalam `package.json`. Untuk menginstalnya sekaligus, jalankan perintah berikut:

```Terminal (Bash / Terminal Code Editor *VSCode Recommended)
npm install

```

Perintah ini akan membaca berkas `package.json` dan secara otomatis mengunduh paket-paket berikut ke folder `node_modules`:

- `react` & `react-dom` (v19)
- `bootstrap` & `react-bootstrap`
- `framer-motion`
- `react-icons`
- _Serta devDependencies lainnya seperti Vite dan ESLint._

---

## 💻 Cara Menjalankan Proyek

Setelah proses instalasi selesai tanpa error, Anda dapat menjalankan proyek dalam mode pengembangan (_development mode_):

### 1. Menjalankan Server Lokal (Development)

Jalankan perintah berikut pada terminal:

```Terminal (Bash / Terminal Code Editor *VSCode Recommended)
npm run dev

```

### 2. Mengakses Website

Setelah perintah dijalankan, Vite akan menampilkan tautan lokal pada terminal, biasanya berupa:

```text
  ➜  Local:   http://localhost:5173/

```

Buka browser Anda lalu akses alamat `http://localhost:5173/` untuk melihat website landing page secara langsung. Fitur _Hot Module Replacement_ (HMR) bawaan Vite akan langsung memperbarui tampilan browser secara otomatis setiap kali Anda mengubah dan menyimpan kode.

---

## 📦 Perintah Script Lainnya

Di dalam proyek ini, terdapat beberapa perintah script tambahan yang dapat digunakan:

- **`npm run build`**: Digunakan untuk mengompilasi dan mengoptimasi kode aplikasi ke dalam folder `dist/` agar siap dideploy ke server produksi (_production-ready_).
- **`npm run lint`**: Digunakan untuk mengecek standarisasi, kualitas kode, serta potensi kesalahan penulisan menggunakan ESLint.
- **`npm run preview`**: Digunakan untuk menjalankan server lokal yang menampilkan hasil kompilasi _build_ (folder `dist/`) guna memastikan aplikasi berjalan dengan benar sebelum diunggah ke hosting produksi.

---

## 📂 Struktur Folder Utama (Ringkasan)

- `src/components/`: Berisi potongan komponen antarmuka yang modular (seperti Navbar, Hero, About, VisiMisi, Services, ProductList, Team, Activities, dan Footer).
- `src/assets/`: Menyimpan aset gambar digital pendukung (seperti logo mitra, dokumentasi kegiatan, dan visual produk).
- `src/App.jsx`: Komponen utama tempat merangkai dan menyatukan seluruh bagian landing page.
- `src/index.css`: Berkas konfigurasi styling global.

```

```
