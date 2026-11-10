# Tanya Matematika SMP — tanya-matematika.aantriono.com

Situs tanya jawab soal matematika jenjang SMP (model redaksi terkurasi) dibangun dengan **Hugo**, sesuai *Cetak Biru Tanya Matematika SMP* yang disetujui Mas Aan pada 10 November 2026 (berkas `../CETAK-BIRU-TANYA-MATEMATIKA-SMP.md`), termasuk revisi "Ikuti Atiga ketat": pembagian materi per Kelas → Bab persis mengikuti platform Atiga.

## Status Fase 1

Rangka situs selesai: beranda (pencarian besar, jelajah 3 kelas beserta 30 bab Atiga dari `data/bab.yaml`, Terbaru, Paling Membantu, Cara Bertanya), arsip `/tanya-jawab/` dengan saringan klien kelas/bab/tingkat kesulitan, halaman kelas & bab (taksonomi Hugo `kelas` dan `bab`), halaman jawaban (chip kelas/bab/kesulitan, template 7 bagian, tombol WhatsApp/salin tautan/"Jawaban ini membantu"/Laporkan Koreksi, Tanya Terkait sebidang bab, JSON-LD QAPage, KaTeX lokal), formulir Bertanya dan Laporkan Koreksi, halaman Tentang & Cara Bertanya, Kebijakan Privasi, dan pencarian statis (`/index.json`).

Dua tanya jawab di `content/tanya-jawab/` berflag `contoh: true` — **contoh uji tampilan Fase 1, bukan arsip awal** (keduanya memuat banner "Contoh tampilan — bukan arsip awal"):

1. `tangga-bersandar-pada-dinding/` — hitungan Kelas 8, Bab Teorema Pythagoras, dengan gambar TikZ yang dikompilasi ke SVG (sumber: `../gambar/gambar-tangga.tex`).
2. `mengapa-jumlah-sudut-segitiga-180/` — konsep Kelas 7, Bab Garis dan Sudut, dengan sematan GeoGebra `wzuzuqme`.

Konten awal resmi (30 topik) disiapkan pada Fase 2 dalam 3 gelombang, draft-first untuk persetujuan Mas Aan; kedua contoh ini diganti/dihapus saat itu.

## KaTeX (lokal)

Distribusi KaTeX **0.16.11** (CSS, JS, auto-render, dan 20 berkas font woff2) tersimpan di `static/katex/` — dimuat lokal tanpa CDN, dan hanya diaktifkan di halaman jawaban. Rumus ditulis `$...$` (sebaris) dan `$$...$$` (tampilan) berkat passthrough goldmark di `hugo.toml`.

## Yang masih dibutuhkan untuk mengaktifkan (3 langkah)

1. **Repo GitHub** `aantriono82/tanya-matematika` — buat repo kosong itu (oleh Mas Aan), lalu tambahkan ke pilihan repo Muse GitHub App, kemudian isi folder ini didorong (push) ke sana.
2. **Kunci Web3Forms baru** — buat access key baru di web3forms.com untuk situs ini, lalu ganti nilai `web3formsKey` di `hugo.toml` (saat ini masih placeholder `GANTI-DENGAN-KUNCI-WEB3FORMS-BARU`). **Selama placeholder, formulir menampilkan pemberitahuan "belum aktif", tombol kirim nonaktif, dan tidak ada kiriman yang terkirim.** Jangan memakai ulang kunci situs lain.
3. **Proyek Cloudflare Pages** — hubungkan repo pada langkah 1 dengan preset **Hugo**, perintah build `hugo` (atau `hugo --gc --minify`), direktori keluaran `public`, lalu tambahkan domain khusus `tanya-matematika.aantriono.com`. Sesudah live, kirim `https://tanya-matematika.aantriono.com/sitemap.xml` ke properti Domain `aantriono.com` di Google Search Console (sudah terverifikasi — tidak perlu verifikasi baru).

## Menjalankan secara lokal

```bash
~/workspace/tools/hugo/hugo server   # pratinjau lokal
~/workspace/tools/hugo/hugo --gc --minify   # build produksi ke public/
```

## Menambah tanya jawab baru

```bash
hugo new tanya-jawab/<slug-pertanyaan>
```

Isi mengikuti archetype: front matter (`kelas` 7/8/9, `bab` = slug bab dari `data/bab.yaml` milik kelas itu, `kesulitan` Mudah/Sedang/Sulit, nama samaran penanya, ringkasan 1–2 kalimat) dan isi dengan 7 heading tetap. Soal Coba Sendiri ditulis biasa, pembahasannya dibungkus shortcode `{{< pembahasan >}}…{{< /pembahasan >}}`; sematan GeoGebra memakai `{{< geogebra id="…" >}}`. Biarkan `draft: true` sampai Mas Aan menyetujui; terbitkan dengan mengubahnya menjadi `false` lalu push.
