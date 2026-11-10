---
title: "SPLDV: kapan memakai eliminasi dan kapan substitusi?"
date: 2026-11-10
kelas: ["8"]
bab: ["spldv"]
kesulitan: "Sedang"
tags: ["spldv", "eliminasi", "substitusi"]
penanya: "Redaksi (arsip awal)"
ringkasan: "Eliminasi dipilih bila koefisien satu variabel sudah sama atau berlawanan; substitusi dipilih bila satu variabel sudah berdiri sendiri atau berkoefisien 1. Contoh: x + y = 10 dan 2x − y = 8 menghasilkan x = 6 dan y = 4."
description: "Eliminasi dipilih bila koefisien satu variabel sudah sama atau berlawanan; substitusi dipilih bila satu variabel sudah berdiri sendiri atau berkoefisien 1. Contoh: x + y = 10 dan 2x − y = 8 menghasilkan x = 6 dan y = 4."
populer: false
contoh: false
draft: false
---

## Hasil Akhir

<div class="kotak-hasil">

**Pakai eliminasi bila koefisien satu variabel sudah sama atau berlawanan tanda. Pakai substitusi bila satu variabel sudah berdiri sendiri (atau berkoefisien 1) pada salah satu persamaan.**

</div>

## Diketahui & Ditanya

- SPLDV berisi dua persamaan linear dengan dua variabel, dan yang dicari adalah pasangan nilai $(x, y)$ yang memenuhi **kedua** persamaan sekaligus.
- Ditanya: bagaimana memilih antara metode eliminasi dan substitusi? Sebagai contoh, selesaikan $x + y = 10$ dan $2x - y = 8$.

## Konsep Kunci

Kedua metode itu sebenarnya mempunyai tujuan yang sama: **menghilangkan satu variabel** agar tersisa satu persamaan dengan satu variabel yang bisa diselesaikan. Bedanya hanya pada caranya. **Eliminasi** menghilangkan variabel dengan menjumlahkan atau mengurangkan kedua persamaan (sesudah disamakan koefisiennya bila perlu). **Substitusi** menghilangkan variabel dengan menyatakan satu variabel dalam variabel lain, lalu memasukkannya ke persamaan kedua. Karena tujuannya sama, metodenya boleh dipilih yang paling ringan untuk soal itu — bahkan sering digabung: eliminasi untuk variabel pertama, substitusi untuk mencari variabel kedua.

## Langkah Penyelesaian

**Patokan memilih metode:**

1. **Pilih eliminasi** bila ada variabel yang koefisiennya sudah sama (kurangkan kedua persamaan) atau berlawanan tanda (jumlahkan kedua persamaan). Bila belum sama, kalikan dulu salah satu atau kedua persamaan agar koefisiennya sama.
2. **Pilih substitusi** bila pada salah satu persamaan ada variabel yang sudah berdiri sendiri, misalnya $y = 3x + 2$, atau berkoefisien $1$, misalnya $x + 2y = 7$ yang mudah diubah menjadi $x = 7 - 2y$.
3. Bila ragu: kedua metode selalu benar; yang berbeda hanya panjang hitungannya.

**Contoh penuh.** Selesaikan:

$$x + y = 10 \qquad \text{dan} \qquad 2x - y = 8$$

4. Perhatikan koefisien $y$: pada persamaan pertama $+1$, pada persamaan kedua $-1$ — sudah berlawanan tanda. Ini tanda eliminasi dengan penjumlahan akan langsung berhasil. Jumlahkan kedua persamaan ruas demi ruas:

$$(x + y) + (2x - y) = 10 + 8$$

$$3x = 18$$

5. Selesaikan: $x = 18 : 3 = 6$.

6. Cari $y$ dengan substitusi balik (ini gabungan yang wajar) ke persamaan pertama: $6 + y = 10$, sehingga $y = 4$.

Jadi penyelesaiannya adalah $x = 6$ dan $y = 4$.

## Cek Kembali

Periksa pasangan $(6, 4)$ pada **kedua** persamaan asal. Persamaan pertama: $6 + 4 = 10$ ✓. Persamaan kedua: $2(6) - 4 = 12 - 4 = 8$ ✓. Keduanya terpenuhi, jadi penyelesaiannya benar.

## Kesalahan yang Sering Terjadi

- **Menjumlahkan padahal koefisiennya sama tanda.** Bila kedua koefisien variabel yang dituju sama-sama positif atau sama-sama negatif, yang dilakukan adalah **pengurangan**, bukan penjumlahan — kalau dijumlahkan variabelnya tidak hilang.
- **Berhenti sesudah menemukan satu variabel.** Mendapat $x = 6$ belum selesai; SPLDV menuntut pasangan $(x, y)$, jadi variabel kedua wajib dicari dan keduanya wajib diuji.
- **Tanda negatif hilang saat mengalikan atau mengganti.** Saat menyamakan koefisien dengan pengali, **seluruh** ruas persamaan harus dikalikan, termasuk konstanta di ruas kanan — melewatkan satu suku saja membuat hasilnya meleset.

## Coba Sendiri

Tentukan penyelesaian dari $x + y = 7$ dan $x - y = 3$.

{{< pembahasan >}}
Koefisien $y$ sudah berlawanan tanda ($+1$ dan $-1$), jadi jumlahkan kedua persamaan:

$$2x = 10 \quad \Longrightarrow \quad x = 5$$

Substitusikan ke persamaan pertama: $5 + y = 7$, sehingga $y = 2$. Penyelesaiannya adalah **$x = 5$ dan $y = 2$**. Periksa persamaan kedua: $5 - 2 = 3$ ✓.
{{< /pembahasan >}}
