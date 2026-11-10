// Tanya Matematika SMP — interaksi sisi klien
(function () {
  "use strict";

  // --- Salin tautan ---
  document.querySelectorAll("[data-salin]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var url = btn.getAttribute("data-salin");
      var pesan = document.querySelector("[data-pesan-aksi]");
      function kabari(teks) { if (pesan) pesan.textContent = teks; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          kabari("Tautan sudah disalin. Silakan dibagikan.");
        }, function () { kabari("Gagal menyalin otomatis — salin alamat di bilah alamat peramban Anda."); });
      } else {
        kabari("Salin alamat di bilah alamat peramban Anda untuk membagikan.");
      }
    });
  });

  // --- Tombol "Jawaban ini membantu" ---
  // Mengirim sinyal evaluasi ke layanan formulir yang sama; angka tidak ditampilkan ke publik.
  var KUNCI_FORM = window.__KUNCI_FORM__ || "";
  document.querySelectorAll("[data-membantu]").forEach(function (btn) {
    var judul = btn.getAttribute("data-membantu");
    var sudah = false;
    try { sudah = localStorage.getItem("membantu:" + judul) === "1"; } catch (e) {}
    if (sudah) { btn.disabled = true; btn.textContent = "Terima kasih atas tanggapan Anda"; return; }
    btn.addEventListener("click", function () {
      var pesan = document.querySelector("[data-pesan-aksi]");
      btn.disabled = true;
      try { localStorage.setItem("membantu:" + judul, "1"); } catch (e) {}
      if (KUNCI_FORM) {
        var data = new FormData();
        data.append("access_key", KUNCI_FORM);
        data.append("subject", "Tanggapan 'membantu' — Tanya Matematika SMP");
        data.append("judul_jawaban", judul);
        data.append("dari_halaman", window.location.href);
        fetch("https://api.web3forms.com/submit", { method: "POST", body: data }).catch(function () {});
      }
      if (pesan) pesan.textContent = "Terima kasih — tanggapan Anda tercatat sebagai bahan evaluasi redaksi.";
      btn.textContent = "Terima kasih atas tanggapan Anda";
    });
  });

  // --- Formulir (bertanya & koreksi) via Web3Forms ---
  document.querySelectorAll("[data-formulir]").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var status = form.querySelector("[data-status-kirim]");
      if (!KUNCI_FORM) {
        if (status) status.textContent = "Formulir belum aktif — kunci akses layanan formulir belum dipasang.";
        return;
      }
      var data = new FormData(form);
      data.append("access_key", KUNCI_FORM);
      data.append("subject", form.getAttribute("data-subjek") || "Kiriman formulir — Tanya Matematika SMP");
      data.append("from_name", "Situs Tanya Matematika SMP");
      var tombol = form.querySelector("button[type=submit]");
      if (tombol) tombol.disabled = true;
      if (status) status.textContent = "Mengirim…";
      fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
        .then(function (r) { return r.json(); })
        .then(function (hasil) {
          if (hasil && hasil.success) {
            form.reset();
            if (status) status.textContent = "Terkirim. Terima kasih — pertanyaanmu sudah masuk ke redaksi dan akan diseleksi terlebih dahulu.";
          } else {
            if (status) status.textContent = "Pengiriman gagal di sisi layanan. Silakan coba lagi beberapa saat lagi.";
          }
        })
        .catch(function () {
          if (status) status.textContent = "Pengiriman gagal — periksa koneksi internet Anda lalu coba lagi.";
        })
        .finally(function () { if (tombol) tombol.disabled = false; });
    });
  });

  // --- Halaman koreksi: isi otomatis dari parameter tautan ---
  var param = new URLSearchParams(window.location.search);
  var kj = document.getElementById("k-judul");
  var kt = document.getElementById("k-tautan");
  if (kj && param.get("judul")) kj.value = param.get("judul");
  if (kt && param.get("tautan")) kt.value = param.get("tautan");

  // --- Saringan arsip /tanya-jawab/ (kelas / bab / kesulitan) ---
  var filterForm = document.getElementById("filter-arsip");
  if (filterForm) {
    var selKelas = filterForm.querySelector('[data-filter="kelas"]');
    var selBab = filterForm.querySelector('[data-filter="bab"]');
    var selSulit = filterForm.querySelector('[data-filter="kesulitan"]');
    var kartu = Array.prototype.slice.call(document.querySelectorAll("[data-kartu]"));
    var ringkasan = document.querySelector("[data-ringkasan-filter]");
    var kosong = document.getElementById("arsip-kosong");
    function terapkan() {
      var k = selKelas.value, b = selBab.value, s = selSulit.value;
      // Bab di luar kelas terpilih tidak berlaku: sembunyikan opsinya.
      Array.prototype.forEach.call(selBab.querySelectorAll("option[data-kelas]"), function (opt) {
        opt.hidden = !!k && opt.getAttribute("data-kelas") !== k;
      });
      if (b) {
        var optB = selBab.querySelector('option[value="' + b + '"]');
        if (optB && optB.hidden) { selBab.value = ""; b = ""; }
      }
      var n = 0;
      kartu.forEach(function (el) {
        var cocok = (!k || el.getAttribute("data-kelas") === k)
          && (!b || el.getAttribute("data-bab") === b)
          && (!s || el.getAttribute("data-kesulitan") === s);
        el.style.display = cocok ? "" : "none";
        if (cocok) n++;
      });
      if (ringkasan) ringkasan.textContent = (k || b || s) ? "Menampilkan " + n + " tanya jawab sesuai saringan." : "";
      if (kosong) kosong.hidden = n !== 0;
    }
    [selKelas, selBab, selSulit].forEach(function (sel) { sel.addEventListener("change", terapkan); });
  }

  // --- Pencarian statis ---
  var formCari = document.getElementById("form-cari");
  if (formCari) {
    var input = document.getElementById("kata-kunci");
    var wadah = document.getElementById("hasil-cari");
    var ringkasanCari = document.getElementById("ringkasan-cari");
    var indeks = null;

    function muatIndeks() {
      return fetch("/index.json").then(function (r) { return r.json(); }).then(function (d) { indeks = d; return d; });
    }
    function tampilkan(daftar, kata) {
      wadah.innerHTML = "";
      ringkasanCari.textContent = daftar.length
        ? "Ditemukan " + daftar.length + " tanya jawab untuk “" + kata + "”."
        : "Tidak ada tanya jawab yang cocok untuk “" + kata + "”. Coba kata lain, atau ajukan langsung lewat halaman Bertanya.";
      daftar.forEach(function (item) {
        var el = document.createElement("article");
        el.className = "kartu";
        var chip = "";
        if (item.kelas) chip += '<span class="chip chip-kelas">Kelas ' + item.kelas + "</span> ";
        if (item.bab) chip += '<span class="chip chip-bab"></span>';
        el.innerHTML = '<div class="chip-baris">' + chip + '</div><h3><a href="' + item.tautan + '"></a></h3><p></p>';
        var chipBab = el.querySelector(".chip-bab");
        if (chipBab) chipBab.textContent = item.bab;
        el.querySelector("a").textContent = item.judul;
        el.querySelector("p").textContent = item.ringkasan || "";
        wadah.appendChild(el);
      });
    }
    function cari(kata) {
      kata = (kata || "").trim().toLowerCase();
      if (!kata) { wadah.innerHTML = ""; ringkasanCari.textContent = ""; return; }
      muatIndeks().then(function (d) {
        var kataKunci = kata.split(/\s+/);
        var hasil = d.filter(function (item) {
          var teks = (item.judul + " kelas " + item.kelas + " " + item.bab + " " + item.kesulitan + " " + (item.tags || []).join(" ") + " " + item.ringkasan + " " + item.isi).toLowerCase();
          return kataKunci.every(function (k) { return teks.indexOf(k) >= 0; });
        });
        tampilkan(hasil, kata);
      }).catch(function () {
        ringkasanCari.textContent = "Indeks pencarian gagal dimuat. Silakan muat ulang halaman ini.";
      });
    }
    formCari.addEventListener("submit", function (ev) { ev.preventDefault(); cari(input.value); });
    input.addEventListener("input", function () { cari(input.value); });
    var awal = param.get("q");
    if (awal) { input.value = awal; cari(awal); }
  }
})();
