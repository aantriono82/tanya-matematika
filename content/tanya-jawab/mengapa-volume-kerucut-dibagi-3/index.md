---
title: "Mengapa volume kerucut dibagi 3?"
date: 2026-11-10
kelas: ["9"]
bab: ["bangun-ruang-sisi-lengkung"]
kesulitan: "Sulit"
tags: ["kerucut", "volume", "tabung"]
penanya: "Redaksi (arsip awal)"
ringkasan: "Kerucut dan tabung yang alas dan tingginya sama mempunyai perbandingan isi 1 : 3 — tabung menampung tepat tiga kali isi kerucut. Karena itu V kerucut = ⅓ πr²t; untuk r = 7 cm dan t = 12 cm hasilnya 616 cm³."
description: "Kerucut dan tabung yang alas dan tingginya sama mempunyai perbandingan isi 1 : 3 — tabung menampung tepat tiga kali isi kerucut. Karena itu V kerucut = ⅓ πr²t; untuk r = 7 cm dan t = 12 cm hasilnya 616 cm³."
populer: false
contoh: false
draft: false
---

## Hasil Akhir

<div class="kotak-hasil">

**Volume kerucut dibagi $3$ karena kerucut yang alas dan tingginya sama dengan sebuah tabung memuat tepat sepertiga isi tabung itu: $V_{\text{kerucut}} = \frac{1}{3}\pi r^2 t$.**

</div>

## Diketahui & Ditanya

- Rumus volume kerucut adalah $V = \frac{1}{3}\pi r^2 t$, sedangkan volume tabung adalah $V = \pi r^2 t$.
- Ditanya: mengapa pada rumus kerucut ada pembagi $3$, dan dari mana angka itu berasal?
- Contoh angka di bawah memakai $r = 7$ cm dan $t = 12$ cm, dengan $\pi = \frac{22}{7}$.

## Konsep Kunci

Angka $3$ pada rumus kerucut bukan tempelan hafalan, melainkan pernyataan tentang **perbandingan isi dua bangun**. Bila sebuah kerucut dan sebuah tabung mempunyai alas yang sama persis (jari-jari sama) dan tinggi yang sama, maka isi tabung selalu tepat tiga kali isi kerucut — tidak peduli berapa ukuran jari-jari dan tingginya, asal keduanya sama. Cara paling jujur untuk meyakini hal ini di tingkat SMP adalah percobaan menuang: isi kerucut sampai penuh dengan pasir atau air, lalu tuangkan ke tabung; tabung baru penuh sesudah tepat **tiga** tuangan kerucut. Pembuktian formalnya memerlukan matematika jenjang lebih tinggi (gagasan limit: kerucut dipotong menjadi lapisan-lapisan tipis yang jumlah volumenya tepat sepertiga tabung), tetapi hasilnya persis sama dengan yang ditunjukkan percobaan. Rumus kerucut pada dasarnya adalah rumus tabung yang dibagi tiga.

## Langkah Penyelesaian

1. **Tetapkan syarat perbandingannya.** Perbandingan $1 : 3$ berlaku untuk pasangan kerucut dan tabung dengan jari-jari alas sama dan tinggi sama, misalnya keduanya $r = 7$ cm dan $t = 12$ cm.

2. **Bayangkan (atau lakukan) percobaan menuangnya.** Kerucut diisi penuh pasir, lalu dituang ke tabung yang kosong. Sesudah tuangan pertama tabung terisi sepertiganya, sesudah tuangan kedua dua pertiganya, dan sesudah tuangan ketiga tabung tepat penuh. Jadi:

$$V_{\text{tabung}} = 3 \times V_{\text{kerucut}} \quad\Longleftrightarrow\quad V_{\text{kerucut}} = \frac{1}{3} V_{\text{tabung}}$$

Mengapa hasilnya tepat $3$, bukan $2$ atau $4$? Intuisi lapisan membantu membayangkannya. Irislah tabung dan kerucut itu menjadi lapisan-lapisan tipis mendatar yang sama tingginya. Pada tabung, setiap lapisan adalah lingkaran penuh berjari-jari $r$. Pada kerucut, hanya lapisan paling bawah yang seluas alas tabung; lapisan-lapisan di atasnya makin kecil karena kerucut meruncing lurus menuju puncak, sampai di puncak luasnya nol. Rata-rata luas lapisan kerucut ternyata tepat sepertiga luas alasnya, sehingga bila semua lapisan dijumlahkan, isi kerucut tepat sepertiga isi tabung. Penalaran lapisan inilah yang kelak dijenjang lebih tinggi diformalkan menjadi pembuktian limit — dan kesimpulannya tetap sama dengan kesimpulan tuangan pasir.

3. **Turunkan rumusnya.** Karena $V_{\text{tabung}} = \pi r^2 t$ untuk alas dan tinggi yang sama, maka:

$$V_{\text{kerucut}} = \frac{1}{3} \pi r^2 t$$

4. **Periksa dengan angka.** Luas alas kedua bangun adalah $\pi r^2 = \frac{22}{7} \times 7^2 = 154$ cm². Volume tabungnya:

$$V_{\text{tabung}} = 154 \times 12 = 1.848 \text{ cm}^3$$

Volume kerucutnya sepertiga dari itu:

$$V_{\text{kerucut}} = \frac{1}{3} \times 1.848 = 616 \text{ cm}^3$$

## Cek Kembali

Kalikan kembali hasil kerucut dengan $3$: $616 \times 3 = 1.848$ cm³, tepat sama dengan volume tabung pasangannya. Hitung juga langsung dari rumus kerucut: $\frac{1}{3} \times \frac{22}{7} \times 7^2 \times 12 = \frac{1}{3} \times 154 \times 12 = 616$ cm³. Kedua jalan sepakat.

## Kesalahan yang Sering Terjadi

- **Memakai perbandingan $1:3$ pada tabung yang tidak sebanding.** Angka tiga tuangan hanya berlaku bila alas dan tinggi kedua bangun sama. Rumus $V = \frac{1}{3}\pi r^2 t$ sendiri tetap berlaku untuk semua kerucut, tetapi volume pembandingnya harus selalu tabung dengan alas dan tinggi yang sama dengan kerucut itu.
- **Lupa membagi $3$**, menulis volume kerucut $= \pi r^2 t$ — hasilnya menjadi volume tabung, tiga kali terlalu besar.
- **Memakai diameter sebagai jari-jari.** Bila soal memberi diameter $14$ cm, jari-jarinya $7$ cm; kesalahan ini menggelembungkan hasil empat kali lipat sebelum pembagian apa pun dilakukan.

## Coba Sendiri

Hitung volume kerucut dengan jari-jari $7$ cm dan tinggi $9$ cm.

{{< pembahasan >}}
Gunakan $V = \frac{1}{3}\pi r^2 t$ dengan luas alas $\frac{22}{7} \times 7^2 = 154$ cm²:

$$V = \frac{1}{3} \times 154 \times 9 = 154 \times 3 = 462 \text{ cm}^3$$

Jadi volume kerucutnya adalah **$462$ cm³** — tepat sepertiga volume tabung beralas dan tinggi sama ($154 \times 9 = 1.386$ cm³).
{{< /pembahasan >}}
