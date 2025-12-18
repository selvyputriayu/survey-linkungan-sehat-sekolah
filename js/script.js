function login() {
    let nama = document.getElementById("nama").value;
    let password = document.getElementById("password").value;

    if (nama && password) {
        localStorage.setItem("nama", nama);
        window.location.href = "dashboard.html";
    } else {
        alert("Isi nama dan password");
    }
}

if (document.getElementById("tanggal")) {
    document.getElementById("nama").value = localStorage.getItem("nama");
    document.getElementById("tanggal").valueAsDate = new Date();
}

function simpan() {
    alert("Data lingkungan berhasil disimpan 🌱");
}

document.getElementById("foto")?.addEventListener("change", function(){
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = () => document.getElementById("preview").src = reader.result;
    reader.readAsDataURL(file);
});
function login() {
    let nama = document.getElementById("nama").value;
    let password = document.getElementById("password").value;

    if (nama && password) {
        localStorage.setItem("nama", nama);
        window.location.href = "dashboard.html";
    } else {
        alert("Isi nama dan password");
    }
}

if (document.getElementById("tanggal")) {
    document.getElementById("nama").value = localStorage.getItem("nama");
    document.getElementById("tanggal").valueAsDate = new Date();
}

function simpan() {
    alert("Data lingkungan berhasil disimpan 🌱");
}

document.getElementById("foto")?.addEventListener("change", function(){
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = () => document.getElementById("preview").src = reader.result;
    reader.readAsDataURL(file);
});
