// =====================
// Login / Register
// =====================
function showRegisterForm() {
  document.getElementById('loginFormContainer').classList.add('hidden');
  document.getElementById('registerFormContainer').classList.remove('hidden');
}

function showLoginForm() {
  document.getElementById('registerFormContainer').classList.add('hidden');
  document.getElementById('loginFormContainer').classList.remove('hidden');
}

function logout() {
  document.getElementById('mainApp').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
  clearForms();
}

function clearForms() {
  document.getElementById('loginForm').reset();
  document.getElementById('registerForm').reset();
}

// =====================
// Navigasi Menu
// =====================
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    navButtons.forEach(b => b.classList.remove('bg-blue-700'));
    this.classList.add('bg-blue-700');
    showSection(this.textContent.toLowerCase());
  });
});

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.add('hidden'));

  const section = document.getElementById(sectionId);
  if(section) section.classList.remove('hidden');
}

// =====================
// Modal Controls
// =====================
function closeBarangModal() { document.getElementById('barangModal').classList.add('hidden'); }
function showBarangForm() {
  document.getElementById('barangModal').classList.remove('hidden');
  document.getElementById('barangModalTitle').innerText = "Tambah Barang";
}

function closeGedungModal() { document.getElementById('gedungModal').classList.add('hidden'); }
function showGedungForm() {
  document.getElementById('gedungModal').classList.remove('hidden');
  document.getElementById('gedungModalTitle').innerText = "Tambah Gedung";
}

function closeRuanganModal() { document.getElementById('ruanganModal').classList.add('hidden'); }
function showRuanganForm() {
  document.getElementById('ruanganModal').classList.remove('hidden');
  document.getElementById('ruanganModalTitle').innerText = "Tambah Ruangan";
}

function closePenanggungJawabModal() { document.getElementById('penanggungJawabModal').classList.add('hidden'); }
function showPenanggungJawabForm() {
  document.getElementById('penanggungJawabModal').classList.remove('hidden');
  document.getElementById('penanggungJawabModalTitle').innerText = "Tambah Penanggung Jawab";
}

// =====================
// Dummy login (sementara)
// =====================
document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
});

// =====================
// Register dummy
// =====================
document.getElementById('registerForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Akun berhasil didaftarkan!');
  showLoginForm();
});

// =====================
// Search Barang
// =====================
document.getElementById('searchBarang').addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll('#barangTableBody tr');
  rows.forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(filter) ? '' : 'none';
  });
});

// =====================
// Dummy Data Counters
// =====================
function updateCounters() {
  document.getElementById('totalBarang').innerText = 12;
  document.getElementById('totalGedung').innerText = 3;
  document.getElementById('totalRuangan').innerText = 8;
  document.getElementById('totalPenanggungJawab').innerText = 5;

  document.getElementById('kondisiB').innerText = 10;
  document.getElementById('kondisiRR').innerText = 1;
  document.getElementById('kondisiRB').innerText = 1;
}

// Jalankan saat load
updateCounters();

// =====================
// Tambahan: Toggle Admin Menu (contoh)
// =====================
function showAdminMenu(show) {
  document.getElementById('adminMenu').style.display = show ? 'inline-block' : 'none';
}

// Contoh: menampilkan admin menu
showAdminMenu(true);

// =====================
// Placeholder fungsi cetak / export
// =====================
function printLaporan() { alert('Fungsi cetak laporan belum dihubungkan ke backend.'); }
function exportExcel() { alert('Fungsi ekspor Excel belum dihubungkan ke backend.'); }
function generateLaporan() { alert('Fungsi generate laporan belum dihubungkan ke backend.'); }
