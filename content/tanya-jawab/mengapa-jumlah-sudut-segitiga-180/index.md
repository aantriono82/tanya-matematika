---
title: "Mengapa jumlah sudut segitiga selalu 180°?"
date: 2026-11-10
kelas: ["7"]
bab: ["garis-dan-sudut"]
kesulitan: "Sedang"
tags: ["sudut", "segitiga", "garis-sejajar"]
penanya: "Redaksi (contoh tampilan)"
ringkasan: "Karena melalui satu titik sudut segitiga dapat ditarik garis yang sejajar sisi di hadapannya. Dua sudut segitiga yang lain berpindah — lewat sudut berseberangan dalam — menjadi sudut-sudut pada satu garis lurus di titik itu, dan sudut pada garis lurus berjumlah 180°."
populer: true
contoh: true
draft: false
---

## Hasil Akhir

<div class="kotak-hasil">

**Jumlah ketiga sudut pada segitiga apa pun selalu $180^\circ$** — segitiga lancip, tumpul, siku-siku, besar, maupun kecil.

</div>

## Diketahui & Ditanya

- Ada sebuah segitiga sembarang, sebut saja segitiga $ABC$, dengan sudut-sudut $\angle A$, $\angle B$, dan $\angle C$.
- Ditanya: mengapa $\angle A + \angle B + \angle C$ selalu $180^\circ$, padahal bentuk segitiganya bisa sangat berbeda-beda?

## Konsep Kunci

Ada dua fakta tentang garis dan sudut yang menjadi kuncinya. Pertama, **sudut pada satu garis lurus berjumlah $180^\circ$**. Kedua, bila dua garis sejajar dipotong oleh sebuah garis lain, pasangan **sudut berseberangan dalam sama besar**. Bukti di bawah ini pada dasarnya adalah "memindahkan" sudut $B$ dan sudut $C$ ke titik $A$, lalu menyusunnya pada satu garis lurus.

## Langkah Penyelesaian

Sebelum membaca buktinya, coba dulu applet berikut ini. Geser titik-titik sudut segitiganya ke posisi mana pun — bentuk segitiganya berubah bebas, tetapi jumlah ketiga sudutnya tidak pernah berubah.

{{< geogebra id="wzuzuqme" judul="Applet segitiga: jumlah ketiga sudut selalu 180 derajat" >}}

Sekarang buktinya, langkah demi langkah:

1. Melalui titik $A$, tarik sebuah garis yang **sejajar** dengan sisi $BC$ di hadapannya. Sebut garis ini garis $PQ$, dengan $A$ berada di antara $P$ dan $Q$.
2. Pada titik $A$ sekarang ada tiga sudut yang berjejer pada garis lurus $PQ$: satu sudut di sisi $P$, sudut segitiga $\angle A$ itu sendiri di tengah, dan satu sudut di sisi $Q$. Karena ketiganya membentuk garis lurus, jumlahnya $180^\circ$.
3. Garis $AB$ memotong dua garis sejajar (garis $PQ$ dan sisi $BC$), sehingga sudut di titik $A$ pada sisi $P$ sama besar dengan $\angle B$ — keduanya adalah pasangan sudut berseberangan dalam. Artinya, sudut $B$ "berpindah" ke titik $A$ tanpa berubah besarnya.
4. Dengan cara yang sama, garis $AC$ membuat sudut di titik $A$ pada sisi $Q$ sama besar dengan $\angle C$.
5. Susun ketiganya pada garis lurus di titik $A$:

$$\angle B + \angle A + \angle C = 180^\circ$$

Karena segitiga $ABC$ tadi adalah segitiga sembarang — tidak ada syarat khusus tentang bentuknya — kesimpulan ini berlaku untuk semua segitiga.

## Cek Kembali

Uji dengan segitiga yang sudutnya kamu kenal. Segitiga siku-siku dengan sudut $90^\circ$, $60^\circ$, dan $30^\circ$: jumlahnya $90^\circ + 60^\circ + 30^\circ = 180^\circ$. Segitiga sama sisi: ketiga sudutnya $60^\circ$, dan $3 \times 60^\circ = 180^\circ$. Keduanya cocok — dan pada applet di atas kamu bisa memeriksanya untuk bentuk segitiga mana pun.

## Kesalahan yang Sering Terjadi

- **Menganggapnya hanya berlaku untuk segitiga tertentu.** Aturan ini berlaku untuk semua segitiga datar, termasuk segitiga tumpul yang satu sudutnya lebih dari $90^\circ$.
- **"Membuktikan" hanya dengan mengukur.** Mengukur tiga sudut dengan busur derajat lalu menjumlahkannya adalah cara memeriksa, bukan membuktikan — hasil ukur bisa meleset satu-dua derajat karena ketelitian alat. Bukti dengan garis sejajar di atas berlaku pasti, tanpa mengukur.
- **Tertukar dengan sudut luar.** Yang berjumlah $180^\circ$ adalah ketiga sudut *dalam*. Sudut luar segitiga mempunyai aturan sendiri (satu sudut luar sama dengan jumlah dua sudut dalam yang tidak bersisian dengannya).

## Coba Sendiri

Dua sudut sebuah segitiga besarnya $55^\circ$ dan $75^\circ$. Berapa besar sudut ketiganya?

{{< pembahasan >}}
Jumlah ketiga sudut segitiga adalah $180^\circ$, jadi sudut ketiga $= 180^\circ - 55^\circ - 75^\circ = 50^\circ$.

Jadi besar sudut ketiganya adalah **$50^\circ$**.
{{< /pembahasan >}}
