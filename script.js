// 1. TUNGGU DOKUMEN SIAP
document.addEventListener('DOMContentLoaded', function() {
    
    // Inisialisasi AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

    // Efek Navbar pas scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'py-2');
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
            navbar.classList.remove('shadow-lg', 'py-2');
            navbar.style.background = "rgba(255, 255, 255, 0.8)";
        }
    });

    // --- FIX KETUMPUK: Jalankan filter Open Trip otomatis saat pertama buka ---
    filterTrip('open'); 
});


//POP-UP HALAMAN
const tripData = {
    'pulau-pari': {
        title: "Open Trip Pulau Pari",
        price: "Rp 389.000",
        image: "image/pari2.png",
        facilities: ["Tiket kapal PP penyeberangan", "Asuransi Jasaraharja", "Life Jacket (Pelampung)", "Minera", "Homestay Full AC", "Makan 3x", "Alat snorkeling", "Dokumentasi Underwater", "Tour Guide Lokal", "Barbeque Segar (BBQ Night)"],
        itineraryDay1: [
            { time: "06:30 - 07:30", activity: "Meeting Point di Pelabuhan Muara Angke" },
            { time: "08:00 - 11:30", activity: "Perjalanan Kapal menuju Pulau Harapan" },
            { time: "11:30 - 12:30", activity: "Tiba di Pulau, Check-in, & Makan Siang" },
            { time: "13:30 - 15:00", activity: "Snorkeling di P. Macan/Putri/Bira" },
            { time: "15:00 - 17:00", activity: "Jelajah Pulau Dolphin & Hunting Foto" },
            { time: "17:00 - 17:30", activity: "Menikmati Sunset (Golden Hour)" },
            { time: "19:00 - 21:30", activity: "Makan Malam & BBQ di Tepi Pantai" }
        ],
        itineraryDay2: [
            { time: "05:00 - 07:00", activity: "Hunting Sunrise & Sarapan Pagi" },
            { time: "08:00 - 09:30", activity: "Hopping Island ke Pulau Bulat" },
            { time: "09:30 - 10:30", activity: "Kunjungan Penangkaran Penyu & Mangrove" },
            { time: "11:30 - 12:00", activity: "Standby di Dermaga & Naik Kapal" },
            { time: "12:00 - 15:00", activity: "Perjalanan Kembali ke Muara Angke" },
            { time: "15:00 - 15:30", activity: "Tiba di Pelabuhan & Sayonara!" }
        ]
    },
    'private-harapan-angke': {
        title: "Private Harapan (Muara Angke)",
        transport: "Kapal Ferry Muara Angke",
        image: "image/angke2.png", 
        facilities: [
            "Tiket Kapal PP & Asuransi",
            "Private Homestay Full AC",
            "Alat Snorkeling Lengkap",
            "Kapal Jelajah & Snorkeling Private",
            "Dokumentasi Camera Underwater",
            "Barbeque Segar (BBQ Night)"
        ],
        extraInfo: {
            excluded: ["HTM Penyu 15k", "Tip Guide", "Water Sports"]
        },
        durasi: {
            '2d1n': {
                price: "Rp 1.000.000",
                itinerary: {
                    1: [
                        { time: "06.30 - 07.30", activity: "Meeting Point & Penjemputan di Muara Angke" },
                        { time: "08.00 - 11.30", activity: "Perjalanan Kapal menuju Pulau Harapan" },
                        { time: "11.30 - 13.00", activity: "Tiba di Pulau, Check-in, & Makan Siang" },
                        { time: "13.30 - 15.00", activity: "Snorkeling di P. Macan/Putri/Genteng/Bira" },
                        { time: "15.00 - 17.00", activity: "Jelajah P. Dolphin (Watersports/Hunting Foto)" },
                        { time: "17.00 - 17.30", activity: "Menikmati Sunset (Golden Hour Spot)" },
                        { time: "19.00 - 21.30", activity: "Makan Malam & Barbeque Ikan di Pantai" }
                    ],
                    2: [
                        { time: "05.00 - 06.00", activity: "Hunting Sunrise (Opsional Peserta)" },
                        { time: "06.00 - 08.00", activity: "Sarapan Pagi & Persiapan Check-out" },
                        { time: "08.00 - 09.30", activity: "Hopping Island ke Pulau Bulat" },
                        { time: "09.30 - 10.30", activity: "Kunjungan Penangkaran Penyu & Mangrove" },
                        { time: "12.00 - 15.00", activity: "Perjalanan Kapal Kembali ke Jakarta" },
                        { time: "15.00 - 15.30", activity: "Tiba di Muara Angke (Trip Selesai)" }
                    ]
                }               
            },
            '3d2n': {
                price: "Rp 1.200.000",
                itinerary: {
                    1: [
                        { time: "06.30 - 07.30", activity: "Meeting Point & Penjemputan di Muara Angke" },
                        { time: "08.00 - 11.30", activity: "Perjalanan Kapal menuju Pulau Harapan" },
                        { time: "11.30 - 13.00", activity: "Check-in Homestay & Makan Siang" },
                        { time: "13.30 - 15.00", activity: "Hopping Island ke Pulau Papatheo" },
                        { time: "15.00 - 17.00", activity: "Jelajah P. Dolphin (Watersports & Foto)" },
                        { time: "17.00 - 17.30", activity: "Sunset di Pulau Bulat (Kondisional)" },
                        { time: "19.00 - Selesai", activity: "Makan Malam & Istirahat" }
                    ],
                    2: [
                        { time: "05.30 - 08.30", activity: "Hunting Sunrise & Sarapan Pagi" },
                        { time: "09.00 - 10.00", activity: "Kunjungan Penangkaran Penyu & Mangrove" },
                        { time: "10.30 - 12.30", activity: "Full Snorkeling P. Bira / P. Macan" },
                        { time: "12.30 - 14.00", activity: "Makan Siang di Pulau Sekitar" },
                        { time: "14.00 - 16.00", activity: "Explore P. Pamagaran / Pasir Timbul" },
                        { time: "18.30 - 20.00", activity: "Makan Malam & Istirahat" },
                        { time: "20.30 - Selesai", activity: "Barbeque Ikan Bakar di Tepi Pantai" }
                    ],
                    3: [
                        { time: "05.30 - 09.30", activity: "Sunrise & Free Time di Pulau Harapan" },
                        { time: "10.00 - 11.00", activity: "Check-out Homestay & Packing" },
                        { time: "11.30 - 12.00", activity: "Standby di Dermaga & Naik Kapal" },
                        { time: "12.00 - 15.00", activity: "Perjalanan Kapal Kembali ke Jakarta" },
                        { time: "15.00 - 16.00", activity: "Tiba di Muara Angke (Sayonara!)" }
                    ]
                }
            }
        }
    },
    'private-harapan-speedboat': {
        title: "Private Harapan (Speedboat Marina)",
        transport: "Speedboat Marina Ancol",
        image: "image/boot2.png",
        // Fasilitas sesuai gambar (tanpa makan, karena jumlah makan dihandle fungsi updateModalContent)
        facilities: [
            "Tiket Speedboat PP (Penyeberangan)",
            "Asuransi Jasaraharja",
            "Life Jacket (Pelampung)",
            "Mineral Water",
            "Jelajah Pulau",
            "Homestay Private Full AC",
            "Alat Snorkeling (Mask & Snorkel)",
            "Kapal Jelajah & Snorkeling (Private)",
            "Dokumentasi Camera Underwater",
            "Tour Guide Lokal",
            "Barbeque Segar (BBQ Night)"
        ],
        extraInfo: {
            excluded: ["HTM Penangkaran Penyu 15k", "Tip Tour Guide (Sukarela)", "Keperluan Pribadi", "Water Sports (Opsional)"]
        },
        durasi: {
            '2d1n': {
                price: "Rp 1.000.000",
                itinerary: {
                    1: [
                        { time: "07.45 - 08.30", activity: "Standby di Marina Ancol & Absensi Peserta" },
                        { time: "09.00 - 11.00", activity: "Perjalanan Speedboat menuju Pulau Harapan" },
                        { time: "11.00 - 12.30", activity: "Tiba di Pulau, Check-in, & Makan Siang" },
                        { time: "12.30 - 14.30", activity: "Snorkeling di P. Macan/Putri/Genteng/Bira" },
                        { time: "15.00 - 17.00", activity: "Jelajah P. Dolphin (Watersports/Foto)" },
                        { time: "17.00 - 17.30", activity: "Menikmati Sunset (Golden Hour)" },
                        { time: "19.00 - 21.30", activity: "Makan Malam & Barbeque di Tepi Pantai" }
                    ],
                    2: [
                        { time: "05.00 - 07.30", activity: "Hunting Sunrise & Sarapan Pagi" },
                        { time: "08.00 - 09.00", activity: "Kunjungan Penangkaran Penyu & Mangrove" },
                        { time: "09.00 - 10.00", activity: "Hopping Island ke Pulau Bulat" },
                        { time: "11.00 - 12.30", activity: "Check-out Homestay & Persiapan Dermaga" },
                        { time: "13.00 - 15.00", activity: "Perjalanan Speedboat Kembali ke Jakarta" },
                        { time: "16.00", activity: "Tiba di Marina Ancol (Trip Selesai)" }
                    ]
                }
            },
            '3d2n': {
                price: "Rp 1.200.000",
                itinerary: {
                    1: [
                        { time: "07.45 - 08.30", activity: "Standby di Marina Ancol & Absensi Peserta" },
                        { time: "09.00 - 11.00", activity: "Perjalanan Speedboat menuju Pulau Harapan" },
                        { time: "11.00 - 12.30", activity: "Tiba di Pulau, Check-in, & Makan Siang" },
                        { time: "13.00 - 15.00", activity: "Hopping Island ke Pulau Papatheo" },
                        { time: "15.00 - 16.30", activity: "Jelajah P. Dolphin (Watersports/Foto)" },
                        { time: "17.00 - 17.30", activity: "Sunset di Pulau Bulat (Golden Hour)" },
                        { time: "18.30 - Selesai", activity: "Makan Malam & Acara Bebas" }
                    ],
                    2: [
                        { time: "05.30 - 08.30", activity: "Hunting Sunrise & Sarapan Pagi" },
                        { time: "09.00 - 10.00", activity: "Kunjungan Penangkaran Penyu & Mangrove" },
                        { time: "10.30 - 12.30", activity: "Full Snorkeling P. Bira / P. Macan / P. Putri" },
                        { time: "12.30 - 14.00", activity: "Makan Siang di Pulau Sekitar" },
                        { time: "14.00 - 16.00", activity: "Explore P. Pamagaran & Pasir Timbul" },
                        { time: "18.30 - 20.00", activity: "Makan Malam & Istirahat" },
                        { time: "20.30 - Selesai", activity: "Barbeque Ikan Bakar di Tepi Pantai" }
                    ],
                    3: [
                        { time: "05.30 - 10.30", activity: "Sunrise & Free Time di Pulau Harapan" },
                        { time: "11.00 - 12.00", activity: "Packing & Check-out Homestay" },
                        { time: "12.30 - 14.00", activity: "Standby di Dermaga & Naik Speedboat" },
                        { time: "14.00 - 16.00", activity: "Perjalanan Kembali ke Marina Ancol" },
                        { time: "16.00", activity: "Tiba di Jakarta (Trip Selesai/Sayonara)" }
                    ]
                }
            }
        }
    },
    'premium-private': {
        title: "Private Villa Premium",
        price: "Rp 3.150.000",
        image: "image/spa2.png", // Ganti pake foto kolam renang
        facilities: [
            "Return Boat (Speedboat PP)",
            "6 Pax Private Villa",
            "Private Swimming Pool",
            "Living & Dining Room",
            "Bathtub Master Room",
            "Breakfast, Lunch, Dinner, Afternoon Tea"
        ],
        durasi: {
            '2d1n': {
                price: "Rp 3.150.000",
                itinerary: {
                    1: [
                        { time: "07.30 - 08.00", activity: "Meeting Point Dermaga Marina Ancol" },
                        { time: "08.00 - 10.00", activity: "Penyeberangan Exclusive via Speedboat" },
                        { time: "10.00 - 12.00", activity: "Check-in Private Villa & Welcome Drink" },
                        { time: "12.00 - 14.00", activity: "Makan Siang (Ocean View Dining)" },
                        { time: "14.00 - 18.00", activity: "Free Program & Relaxing at Private Pool" },
                        { time: "19.00 - 21.00", activity: "Premium Dinner & Rest" }
                    ],
                    2: [
                        { time: "07.00 - 09.00", activity: "Breakfast & Morning Coffee" },
                        { time: "09.00 - 11.00", activity: "Enjoying Resort Facilities (Canoe/Gym)" },
                        { time: "11.00 - 13.00", activity: "Lunch & Persiapan Check-out" },
                        { time: "13.00 - 15.00", activity: "Speedboat Transfer Kembali ke Jakarta" },
                        { time: "15.00 - Selesai", activity: "Tiba di Marina Ancol (Trip Selesai)" }
                    ]
                }
            },
            '3d2n': {
                price: "Rp 5.900.000",
                itinerary: {
                    1: [
                        { time: "07.30 - 08.00", activity: "Meeting Point Dermaga Marina Ancol" },
                        { time: "08.00 - 10.00", activity: "Penyeberangan Exclusive via Speedboat" },
                        { time: "10.00 - 12.00", activity: "Check-in Private Villa & Welcome Drink" },
                        { time: "12.00 - 14.00", activity: "Makan Siang (Ocean View Dining)" },
                        { time: "14.00 - Selesai", activity: "Free Program & Relaxing at Private Pool" }
                    ],
                    2: [
                        { time: "08.00 - 10.00", activity: "Breakfast & Afternoon Tea" },
                        { time: "10.00 - 13.00", activity: "Private Island Hopping & Snorkeling" },
                        { time: "13.00 - 15.00", activity: "Lunch at Resort Restaurant" },
                        { time: "15.00 - 18.00", activity: "Leisure Time & Photo Session" },
                        { time: "19.00 - 21.00", activity: "Premium BBQ Dinner" }
                    ],
                    3: [
                        { time: "08.00 - 10.00", activity: "Breakfast & Relaxing Morning" },
                        { time: "10.00 - 12.00", activity: "Free Program & Packing" },
                        { time: "13.00 - 15.00", activity: "Check-out & Back to Jakarta via Speedboat" },
                        { time: "15.00 - Selesai", activity: "Tiba di Marina Ancol (Sayonara!)" }
                    ]
                }
            }
        }
    },

    'premium-deluxe': {
        title: "Napo & Penyu Deluxe",
        price: "Rp 2.680.000",
        image: "image/delux.png", // Ganti pake foto kamar depan pantai
        facilities: [
            "Return Boat (Speedboat PP)",
            "Beachfront Room",
            "Free Access to Infinity Pool",
            "Luxury Amenities",
            "Breakfast, Lunch, Dinner, Afternoon Tea",
            "Hot & Cold Water Rain Shower"
        ],
        durasi: {
            '2d1n': {
                price: "Rp 3.150.000",
                itinerary: {
                    1: [
                        { time: "07.30 - 08.00", activity: "Meeting Point Dermaga Marina Ancol" },
                        { time: "08.00 - 10.00", activity: "Penyeberangan Exclusive via Speedboat" },
                        { time: "10.00 - 12.00", activity: "Check-in Private Villa & Welcome Drink" },
                        { time: "12.00 - 14.00", activity: "Makan Siang (Ocean View Dining)" },
                        { time: "14.00 - 18.00", activity: "Free Program & Relaxing at Private Pool" },
                        { time: "19.00 - 21.00", activity: "Premium Dinner & Rest" }
                    ],
                    2: [
                        { time: "07.00 - 09.00", activity: "Breakfast & Morning Coffee" },
                        { time: "09.00 - 11.00", activity: "Enjoying Resort Facilities (Canoe/Gym)" },
                        { time: "11.00 - 13.00", activity: "Lunch & Persiapan Check-out" },
                        { time: "13.00 - 15.00", activity: "Speedboat Transfer Kembali ke Jakarta" },
                        { time: "15.00 - Selesai", activity: "Tiba di Marina Ancol (Trip Selesai)" }
                    ]
                }
            },
            '3d2n': {
                price: "Rp 5.900.000",
                itinerary: {
                    1: [
                        { time: "07.30 - 08.00", activity: "Meeting Point Dermaga Marina Ancol" },
                        { time: "08.00 - 10.00", activity: "Penyeberangan Exclusive via Speedboat" },
                        { time: "10.00 - 12.00", activity: "Check-in Private Villa & Welcome Drink" },
                        { time: "12.00 - 14.00", activity: "Makan Siang (Ocean View Dining)" },
                        { time: "14.00 - Selesai", activity: "Free Program & Relaxing at Private Pool" }
                    ],
                    2: [
                        { time: "08.00 - 10.00", activity: "Breakfast & Afternoon Tea" },
                        { time: "10.00 - 13.00", activity: "Private Island Hopping & Snorkeling" },
                        { time: "13.00 - 15.00", activity: "Lunch at Resort Restaurant" },
                        { time: "15.00 - 18.00", activity: "Leisure Time & Photo Session" },
                        { time: "19.00 - 21.00", activity: "Premium BBQ Dinner" }
                    ],
                    3: [
                        { time: "08.00 - 10.00", activity: "Breakfast & Relaxing Morning" },
                        { time: "10.00 - 12.00", activity: "Free Program & Packing" },
                        { time: "13.00 - 15.00", activity: "Check-out & Back to Jakarta via Speedboat" },
                        { time: "15.00 - Selesai", activity: "Tiba di Marina Ancol (Sayonara!)" }
                    ]
                }
            }
        }
    }
};

// 1. STATE MANAGEMENT
let currentTripType = '';
let currentDuration = '2d1n'; 

// 2. FUNGSI BUKA MODAL
function openModal(type) {
    const data = tripData[type];
    if (!data) return;
    currentTripType = type;
    
    // Reset durasi default setiap kali buka modal
    currentDuration = '2d1n';

    // Munculkan/Sembunyikan Tab Durasi (Hanya untuk paket yang punya data durasi)
    const durationTab = document.getElementById('duration-container');
    if (data.durasi) {
        durationTab?.classList.remove('hidden');
        durationTab?.classList.add('flex');
    } else {
        durationTab?.classList.add('hidden');
        durationTab?.classList.remove('flex');
    }

    // Reset input tanggal tiap buka modal baru
    document.getElementById('booking-date').value = '';

    updateModalContent();

    const modal = document.getElementById('modal-detail');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; 
}

// 3. FUNGSI UPDATE KONTEN MODAL (HARGA, JUDUL, WA)
function updateModalContent() {
    const data = tripData[currentTripType];
    
    const isPrivate = !!data.durasi;
    const title = isPrivate ? `${data.title} - ${currentDuration.toUpperCase()}` : data.title;
    const price = isPrivate ? data.durasi[currentDuration].price : data.price;

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-img').src = data.image;
    
    document.getElementById('modal-facilities').innerHTML = data.facilities.map(f => `
        <li class="flex items-start gap-2">✅ ${f}</li>
    `).join('');

    // Update Link WA otomatis
    updateWALink();

    switchDay(1); 
}

// --- FUNGSI WHATSAPP TERBARU ---
function updateWALink() {
    const data = tripData[currentTripType];
    const dateInput = document.getElementById('booking-date').value;
    const isPrivate = !!data.durasi;
    const title = isPrivate ? `${data.title} - ${currentDuration.toUpperCase()}` : data.title;
    
    const nomorWA = "6281225147256";
    let pesan = `Halo Gandamana, saya mau booking paket *${title}*`;
    
    if (dateInput) {
        pesan += ` untuk tanggal *${dateInput}*`;
    }
    
    pesan += `. Bisa info jadwal ketersediaannya?`;
    
    document.getElementById('modal-wa-link').href = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
}

// Pastikan link WA update kalau user ganti tanggal
document.getElementById('booking-date')?.addEventListener('change', updateWALink);

// 4. FUNGSI GANTI DURASI
function changeDuration(dur) {
    currentDuration = dur;
    
    const btn2 = document.getElementById('btn-2d1n');
    const btn3 = document.getElementById('btn-3d2n');
    
    if (dur === '2d1n') {
        btn2.className = "px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold shadow-md";
        btn3.className = "px-6 py-2 rounded-lg text-gray-500 text-sm font-bold hover:bg-white";
    } else {
        btn2.className = "px-6 py-2 rounded-lg text-gray-500 text-sm font-bold hover:bg-white";
        btn3.className = "px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold shadow-md";
    }

    updateModalContent();
}

// 5. FUNGSI PINDAH HARI (VERSI FIX WARNA & SEMBUNYI DAY 3)
function switchDay(day) {
    const data = tripData[currentTripType];
    const itineraryContainer = document.getElementById('modal-itinerary');
    if (!data || !itineraryContainer) return;

    // 1. Ambil & Render Jadwal
    let schedule = [];
    if (data.durasi) {
        schedule = data.durasi[currentDuration].itinerary[day] || [];
    } else {
        schedule = day === 1 ? data.itineraryDay1 : (day === 2 ? data.itineraryDay2 : []);
    }

    itineraryContainer.innerHTML = schedule.map(item => `
        <div class="relative pb-6 border-l-2 border-blue-100 ml-4 pl-6">
            <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
            <p class="text-[10px] font-black text-blue-600 uppercase tracking-wider">${item.time}</p>
            <p class="text-sm text-gray-700 font-medium">${item.activity}</p>
        </div>
    `).join('');

    // 2. Logika Sembunyi/Muncul Tombol Day 3 (Berdasarkan Paket & Durasi)
    const btnDay3 = document.getElementById('btn-day3');
    if (btnDay3) {
        const is3D2NActive = data.durasi && currentDuration === '3d2n';
        if (is3D2NActive) {
            btnDay3.style.display = 'block';
        } else {
            btnDay3.style.display = 'none';
            // Kalau Day 3 lagi dipilih tapi paket diganti ke 2 hari, pindahin ke Day 1
            if (day === 3) day = 1; 
        }
    }

    // 3. Logika Pindah Warna Biru (Styling Tombol)
    [1, 2, 3].forEach(d => {
        const btn = document.getElementById(`btn-day${d}`);
        if (btn) {
            if (d === day) {
                // Tombol Aktif (Warna Biru)
                btn.className = "px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold shadow-md transition-all";
            } else {
                // Tombol Tidak Aktif (Warna Abu-abu)
                btn.className = "px-6 py-2 rounded-lg text-gray-500 text-sm font-bold hover:bg-white transition-all";
            }
        }
    });
}

// 6. FUNGSI TUTUP MODAL
function closeModal() {
    const modal = document.getElementById('modal-detail');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}


// Tutup jika klik di area hitam (luar modal)
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

function filterTrip(category) {
    // A. Filter Kartunya
    const cards = document.querySelectorAll('.trip-card');
    cards.forEach(card => {
        const isMatch = card.classList.contains(category + '-trip') || card.getAttribute('data-category') === category;
        if (isMatch) {
            card.classList.remove('hidden');
            card.classList.add('flex');
        } else {
            card.classList.add('hidden');
            card.classList.remove('flex');
        }
    });

    // B. Reset Warna Semua Tombol
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600', 'active');
        btn.classList.add('border-gray-200', 'text-gray-600');
    });

    // C. Kasih Warna Biru ke Tombol yang Sesuai (CARA ANTI-BENTROK)
    buttons.forEach(btn => {
        // Cek apakah tombol ini punya onclick yang isinya kategori yang dipanggil
        const clickAttr = btn.getAttribute('onclick');
        if (clickAttr && clickAttr.includes(`'${category}'`)) {
            btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600', 'active');
            btn.classList.remove('border-gray-200', 'text-gray-600');
        }
    });
}

// 1. FUNGSI BUKA POP-UP JADWAL (Nama diganti biar gak bentrok)
function openJadwal() {
    const modal = document.getElementById('modal-jadwal');
    const content = document.getElementById('modal-content');
    
    if(!modal || !content) return; // Keamanan biar gak error

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Animasi Zoom In halus
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);

    document.body.style.overflow = 'hidden'; // Biar gak bisa scroll pas buka jadwal
}

// 2. FUNGSI TUTUP POP-UP JADWAL
function closeJadwal() {
    const modal = document.getElementById('modal-jadwal');
    const content = document.getElementById('modal-content');
    
    if(!modal || !content) return;

    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Balikin scroll
    }, 200);
}

// 3. LOGIKA KLIK LUAR (Handle dua-duanya: Jadwal & Detail)
window.addEventListener('click', function(event) {
    const modalJadwal = document.getElementById('modal-jadwal');
    const modalDetail = document.getElementById('modal-detail');
    
    if (event.target == modalJadwal) {
        closeJadwal();
    }
    if (event.target == modalDetail) {
        // Ini manggil fungsi tutup modal detail lu (pastiin namanya closeModal)
        closeModal(); 
    }
});