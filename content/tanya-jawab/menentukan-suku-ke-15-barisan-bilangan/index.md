---
title: "Barisan 2, 5, 8, 11, ... — berapa suku ke-15?"
date: 2026-11-10
kelas: ["7"]
bab: ["pola-bilangan"]
kesulitan: "Sedang"
tags: ["barisan-aritmetika", "pola-bilangan", "suku-ke-n"]
penanya: "Redaksi (arsip awal)"
ringkasan: "Barisan ini berurutan naik 3, jadi barisan aritmetika dengan rumus suku ke-n Un = 3n - 1. Suku ke-15 adalah 3(15) - 1 = 44."
populer: false
contoh: false
draft: false
---

## Hasil Akhir

<div class="kotak-hasil">

**Suku ke-$15$ adalah $44$.**

</div>

## Diketahui & Ditanya

- Barisan bilangan: $2, 5, 8, 11, \ldots$
- Suku pertama $a = 2$.
- Ditanya: suku ke-$15$, yaitu $U_{15}$.

## Konsep Kunci

Perhatikan lompatan antar suku: $5 - 2 = 3$, $8 - 5 = 3$, $11 - 8 = 3$. Selisihnya selalu sama, yaitu $3$ — barisan seperti ini disebut **barisan aritmetika**, dan selisih tetapnya disebut beda, $b$. Untuk barisan aritmetika, suku ke-$n$ dicari dengan rumus:

$$U_n = a + (n-1)b$$

Rumus ini jauh lebih cepat daripada menuliskan barisannya satu per satu sampai suku ke-$15$, dan tidak rawan terlewat hitung.

## Langkah Penyelesaian

1. Tentukan nilai yang diketahui: suku pertama $a = 2$ dan beda $b = 3$.

2. Masukkan ke rumus suku ke-$n$:

$$U_n = 2 + (n-1) \times 3$$

3. Sederhanakan agar rumusnya ringkas:

$$U_n = 2 + 3n - 3 = 3n - 1$$

4. Ganti $n$ dengan $15$:

$$U_{15} = 3(15) - 1 = 45 - 1 = 44$$

Jadi suku ke-$15$ barisan itu adalah $44$.

## Cek Kembali

Uji rumus $U_n = 3n - 1$ pada suku-suku yang sudah diketahui: $U_1 = 3(1) - 1 = 2$ ✓, $U_2 = 3(2) - 1 = 5$ ✓, $U_4 = 3(4) - 1 = 11$ ✓. Rumusnya cocok untuk semua suku awal, jadi hasilnya untuk suku ke-$15$ dapat dipercaya. Cara kasar juga mendukung: suku-sukunya naik $3$ setiap langkah, jadi suku ke-$15$ harus berada di sekitar $2 + 14 \times 3 = 44$.

## Kesalahan yang Sering Terjadi

- **Memakai $nb$ tanpa mengurangi satu**, misalnya menulis $U_n = 2 + 15 \times 3$. Dari suku pertama ke suku ke-$15$ hanya ada $14$ lompatan, bukan $15$ — itulah asal-usul faktor $(n-1)$ pada rumus.
- **Menebak pola dari dua suku saja.** Selisih harus diperiksa pada beberapa pasangan suku berurutan untuk memastikan barisannya benar-benar aritmetika.
- **Menghitung manual sampai suku ke-$15$ lalu terlewat satu suku.** Cara manual boleh untuk memeriksa suku-suku awal, tetapi rumus adalah cara utama untuk suku yang jauh.

## Coba Sendiri

Diketahui barisan $4, 7, 10, 13, \ldots$ Tentukan rumus suku ke-$n$ dan suku ke-$12$.

{{< pembahasan >}}
Selisihnya tetap: $b = 3$, dan suku pertama $a = 4$.

$$U_n = 4 + (n-1) \times 3 = 3n + 1$$

Untuk suku ke-$12$:

$$U_{12} = 3(12) + 1 = 37$$

Jadi rumus suku ke-$n$-nya adalah $U_n = 3n + 1$ dan suku ke-$12$ adalah **$37$**. Periksa cepat: $U_1 = 3(1) + 1 = 4$, cocok dengan suku pertamanya.
{{< /pembahasan >}}
