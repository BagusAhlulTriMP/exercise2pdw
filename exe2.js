video.addEventListener("click", function video(){
    alert("ini video VALORANT");
});

audio.addEventListener("click", function audio(){
    alert("ini audio VALORANT");
});

gambar.addEventListener("click", function gambar(){
    alert("ini gambar VALORANT");
});

function kirimData() {
    var name = document.getElementById("nama").value
    var nim = document.getElementById("nim").value
    var Agent = document.querySelector('input[name="Agent"]:checked').value;
    var Alamat = document.getElementById("alamat").value
    var tahunMain = document.getElementById('tahunMain').value;
    var tanggalInput = document.getElementById("tanggalInput").value

    alert(
        "Nama : " + name +
        "\nNIM : " + nim +
        "\nAgent : " + Agent +
        "\nAlamat : " + Alamat +
        "\ntahunMain : " + tahunMain +
        "\ntanggal : " + tanggalInput
    )
}