document.getElementById('formTransaksi').addEventListener('submit', function(event) {
    event.preventDefault();

    var namaBarang = document.getElementById('namaBarang').value;
    var jumlah = document.getElementById('jumlah').value;
    var kategori = document.getElementById('kategori').value;

    if (namaBarang && jumlah && kategori) {
        var listItem = document.createElement('li');
        listItem.textContent = `Nama Barang: ${namaBarang}, Jumlah: ${jumlah}, Kategori: ${kategori}`;
        document.getElementById('listTransaksi').appendChild(listItem);

        document.getElementById('formTransaksi').reset();
    } else {
        alert('Semua bidang harus diisi.');
    }
});

document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert('Login berhasil');
    } else {
        alert('Username atau password salah');
    }
});
