// Memilih tombol menu dan menu navigasi
var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

// Menambahkan event listener untuk toggle menu saat tombol menu ditekan
tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

// Menambahkan event listener untuk menyembunyikan menu saat menu item diklik (untuk tampilan mobile)
menu.onclick = function() {
    menu.classList.toggle('active');
}

// Event listener untuk submit quiz saat halaman HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Memilih tombol "Submit" pada quiz
    var submitButton = document.getElementById("submit");

    // Menambahkan event listener untuk tombol "Submit"
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Menghentikan default behavior dari form submit

        // Memanggil fungsi submitQuiz untuk menghitung skor dan menampilkan hasil
        submitQuiz();
    });
});

// Fungsi untuk menghitung skor quiz dan menampilkan hasil menggunakan SweetAlert2
function submitQuiz() {
    var total = 5; // Jumlah total pertanyaan
    var score = 0;

    // Mengambil nilai dari setiap pertanyaan yang dipilih oleh pengguna
    var q1 = document.querySelector('input[name="question1"]:checked');
    var q2 = document.querySelector('input[name="question2"]:checked');
    var q3 = document.querySelector('input[name="question3"]:checked');
    var q4 = document.querySelector('input[name="question4"]:checked');
    var q5 = document.querySelector('input[name="question5"]:checked');

    // Memeriksa jawaban yang benar dan menghitung skor
    if (q1 && q1.value === "B") { score++; }
    if (q2 && q2.value === "D") { score++; }
    if (q3 && q3.value === "B") { score++; }
    if (q4 && q4.value === "A") { score++; }
    if (q5 && q5.value === "B") { score++; }

    // Menampilkan hasil quiz menggunakan SweetAlert2
    Swal.fire({
        title: "Hasil Quiz",
        html: `
            <p>Skor Anda: ${score} dari ${total}</p>
            <p>Selamat! Anda telah menyelesaikan quiz.</p>
        `,
        icon: 'info',
        confirmButtonText: 'Tutup'
    });
}
