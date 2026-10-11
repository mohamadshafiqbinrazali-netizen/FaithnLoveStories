# Faithnlove Stories — GitHub Pages

Website portfolio **documentary wedding photography** untuk Faithnlove Stories.

## 1. Tetapkan nombor WhatsApp

Buka fail `config.js` dan masukkan nombor WhatsApp dalam format antarabangsa tanpa simbol `+`, ruang atau sengkang.

```javascript
window.SITE_CONFIG = {
  whatsappNumber: "60123456789"
};
```

## 2. Upload ke GitHub

1. Cipta repository baharu di GitHub, contohnya `faithnlove-stories`.
2. Upload **semua kandungan dalam folder ini** ke bahagian utama repository.
3. Pastikan `index.html` berada pada root repository, bukan di dalam folder tambahan.
4. Buka **Settings → Pages**.
5. Di bawah **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch **main** dan folder **/(root)**, kemudian tekan **Save**.
7. Tunggu beberapa minit sehingga pautan GitHub Pages dipaparkan.

## 3. Struktur fail

- `index.html` — kandungan utama website
- `styles.css` — gaya asas dan luxury campaign
- `tagline.css` — susunan tagline hero
- `photography.css` — galeri dan koleksi photography
- `experience.css` — bahagian pengalaman pelanggan
- `script.js` — galeri, menu dan borang WhatsApp
- `config.js` — nombor WhatsApp bisnes
- `assets/` — gambar website yang telah dioptimumkan

## Nota

Website ini ialah website statik dan tidak memerlukan Google Apps Script atau database. Selepas nombor dimasukkan dalam `config.js`, borang pertanyaan akan membuka mesej lengkap terus ke WhatsApp bisnes.
