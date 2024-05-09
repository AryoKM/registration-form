document.getElementById("FormRegistrasi").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {};

    var inputs = document.querySelectorAll("#FormRegistrasi input, #FormRegistrasi select");

    inputs.forEach((input) => {
        formData[input.id] = input.type === "file" ? input.files[0].name : input.value;
    });
    let file = document.getElementById("photoInput").files[0];
    let image = document.createElement("img");
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        localStorage.setItem("image", reader.result);
        image.setAttribute("src", localStorage.getItem("image"));
        image.setAttribute("class", "image-output");
    };

    var output = `
        Nama: ${formData.nama}<br>
        Jenis Kelamin: ${formData.jeniskelamin}<br>
        Tanggal Lahir: ${formData.tanggallahir}<br>
        Email: ${formData.email}<br>
        Alamat: ${formData.alamat}<br>
        Nomor Telpon: ${formData.notelp}<br>
        Program of Interest: ${formData.poi}<br>
        Nama Ayah: ${formData.namaibu}<br>
        Nama Ibu: ${formData.namaayah}<br>
        Photo:`;

    document.getElementById("outputDiv").innerHTML = output;
    document.getElementById("outputDiv").appendChild(image);
});

document.getElementById('btnSwitch').addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.getElementById('kontener').id = 'kontenerlight';
        document.getElementById('tomboldm').id = 'tombollm';
        document.getElementById('btnSwitch').textContent = '☀️ Light Theme';
        document.getElementById('pembatas').id = 'pembatas1';
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.getElementById('kontenerlight').id = 'kontener';
        document.getElementById('tombollm').id = 'tomboldm';
        document.getElementById('btnSwitch').textContent = '🌙 Dark Theme';
        document.getElementById('pembatas1').id = 'pembatas';
    }
});
