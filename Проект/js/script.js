
const range = document.getElementById("areaRange");
const input = document.getElementById("areaInput");

// Обновлять поле при изменении ползунка
range.addEventListener("input", () => {
input.value = range.value;
});

// Обновлять ползунок при вводе вручную
input.addEventListener("input", () => {
let val = parseInt(input.value);
if (!isNaN(val)) {
// Ограничить диапазон вручную введённого значения
val = Math.max(range.min, Math.min(range.max, val));
input.value = val;
range.value = val;
}
});

document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.getElementById('map');
    if (!mapElement) return; // защита на случай отсутствия элемента

    const map = L.map('map').setView([59.9311, 30.3609], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const customIcon = L.icon({
        iconUrl: 'images/marker.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    const points = [
        [59.935, 30.320],
        [59.945, 30.360],
        [59.925, 30.390],
        [59.910, 30.310],
        [59.940, 30.300],
        [59.915, 30.340],
        [59.960, 30.370],
        [59.900, 30.350]
    ];

    points.forEach(coords => {
        L.marker(coords, { icon: customIcon }).addTo(map);
    });

    // Обновление размера карты, если она была внутри скрытого элемента
    setTimeout(() => map.invalidateSize(), 200);
});

// Показывать кнопку при прокрутке
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Прокрутка наверх
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const entryModalEl = document.getElementById('entryPromoModal');
    const entryModal = new bootstrap.Modal(entryModalEl);

    // Показываем окно через 2 секунды
    setTimeout(() => {
        entryModal.show();
    }, 2000);
});