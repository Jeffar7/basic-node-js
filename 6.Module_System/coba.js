// Local Modules

function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'Doddy',
    umur : 20,
    cetakMhs(){
        return `halo, saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
    }
}

class Orang {
    constructor(){
        console.log('Object orang dibuat');
    }
}


// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang : Orang
// };

module.exports = {cetakNama, PI, mahasiswa, Orang};