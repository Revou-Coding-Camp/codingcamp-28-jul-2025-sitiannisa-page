document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  const resNama = document.getElementById("resNama");
  const resTgl = document.getElementById("resTgl");
  const resGender = document.getElementById("resGender");
  const resPesan = document.getElementById("resPesan");
  const timeSpan = document.getElementById("time");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const nama = formData.get("nama");
    const tgl = formData.get("tgl");
    const gender = formData.get("gender");
    const pesan = formData.get("pesan");

    const now = new Date();
    const waktu = now.toLocaleString();

    timeSpan.textContent = waktu;
    resNama.textContent = nama;
    resTgl.textContent = tgl;
    resGender.textContent = gender;
    resPesan.textContent = pesan;
  });
});
