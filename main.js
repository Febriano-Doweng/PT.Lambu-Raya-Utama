tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#003c8f",
        accent: "#00d4ff",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        gradient: "gradientShift 18s ease infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        scaleIn: "scaleIn 0.3s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-25px)",
          },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 20px rgba(0,212,255,0.5)",
          },
          "100%": {
            boxShadow: "0 0 50px rgba(0,212,255,0.9)",
          },
        },
        gradientShift: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        scaleIn: {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
};

document.getElementById("year").textContent = new Date().getFullYear();
const darkToggle = document.getElementById("darkToggle");
const darkToggleMobile = document.getElementById("darkToggleMobile");
const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeText = document.getElementById("darkModeText");
const html = document.documentElement;

function toggleDarkMode() {
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
  if (darkModeToggle) {
    if (isDark) {
      darkModeToggle.style.transform = "translateX(28px)";
      darkModeText.textContent = "Mode Terang";
    } else {
      darkModeToggle.style.transform = "translateX(0)";
      darkModeText.textContent = "Mode Gelap";
    }
  }
}
if (localStorage.getItem("darkMode") === "true") {
  html.classList.add("dark");
  if (darkModeToggle) {
    darkModeToggle.style.transform = "translateX(28px)";
    darkModeText.textContent = "Mode Terang";
  }
}
darkToggle?.addEventListener("click", toggleDarkMode);
darkToggleMobile?.addEventListener("click", toggleDarkMode);
const burger = document.getElementById("burger");
const mobileSidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("overlay");
const mobileLinks = mobileSidebar.querySelectorAll("a");

function openMenu() {
  mobileSidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
  burger.classList.add("active");
  setTimeout(() => overlay.classList.remove("opacity-0"), 10);
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileSidebar.classList.add("-translate-x-full");
  overlay.classList.add("opacity-0");
  burger.classList.remove("active");
  setTimeout(() => {
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
  }, 300);
}
burger?.addEventListener("click", () => {
  if (mobileSidebar.classList.contains("-translate-x-full")) {
    openMenu();
  } else {
    closeMenu();
  }
});
overlay?.addEventListener("click", closeMenu);
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    !mobileSidebar.classList.contains("-translate-x-full")
  ) {
    closeMenu();
  }
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");
const projectCards = document.querySelectorAll(".project-card");
let currentImageIndex = 0;
const images = [];
projectCards.forEach((card, index) => {
  const img = card.querySelector("img");
  const title = card.querySelector("h3").textContent;
  const desc = card.querySelector("p").textContent;
  images.push({
    src: img.src,
    title,
    desc,
  });
  card.addEventListener("click", () => {
    currentImageIndex = index;
    showModal();
  });
});

function showModal() {
  const img = images[currentImageIndex];
  modalImage.src = img.src;
  modalTitle.textContent = img.title;
  modalDesc.textContent = img.desc;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showModal();
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showModal();
}
modalClose?.addEventListener("click", closeModal);
modalPrev?.addEventListener("click", showPrevImage);
modalNext?.addEventListener("click", showNextImage);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("active")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") showPrevImage();
  if (e.key === "ArrowRight") showNextImage();
});
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src;
        imageObserver.unobserve(img);
      }
    });
  });
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    imageObserver.observe(img);
  });
}
// Hero Slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const dotsContainer = document.getElementById("heroDots");
  if (!slides.length || !dotsContainer) return;
  let currentIndex = 0;
  let sliderInterval;
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "hero-dot";
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(index);
      restartAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = document.querySelectorAll(".hero-dot");

  function goToSlide(index) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = index;
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function nextSlide() {
    goToSlide((currentIndex + 1) % slides.length);
  }

  function restartAutoSlide() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 5000);
  }
  sliderInterval = setInterval(nextSlide, 5000);
});

// Data proyek
const projectData = {
  konstruksi: {
    title: "Konstruksi Camp Karyawan",
    year: "2024",
    location: "Timika, Papua",
    client: "PT Mining Company Indonesia",
    duration: "8 Bulan",
    description:
      "Proyek pembangunan fasilitas camp untuk menampung ±200 karyawan dengan standar fasilitas lengkap meliputi hunian, mess, kantin, area rekreasi, dan utilitas pendukung lainnya. Proyek ini dilaksanakan dengan memperhatikan aspek keselamatan kerja dan kenyamanan penghuni.",
    scope: [
      "Pembangunan bangunan hunian 40 unit",
      "Fasilitas mess dan kantin",
      "Area rekreasi dan olahraga",
      "Sistem utilitas lengkap (listrik, air, drainase)",
      "Infrastruktur jalan dan parkir",
      "Sistem keamanan dan pengawasan",
    ],
    specs: [
      "Total Luas Area: 5 hektar",
      "Kapasitas: 200 orang",
      "Tipe Bangunan: Semi Permanent",
      "Standar: K3 & ISO 9001",
    ],
    gallery: ["dok. sm.jpg", "exca.jpg", "inspkesi with msd.jpg"],
  },
  infrastruktur: {
    title: "Pembangunan Jembataan",
    year: "2025",
    location: "Jila, Papua Tengah",
    client: "Dinas Pekerjaan Umum",
    duration: "4 Bulan",
    description:
      "Proyek pembangunan jalan hauling sepanjang ±5 km yang menghubungkan area pit dengan ROM (Run of Mine) untuk mendukung kelancaran operasional pertambangan. Jalan didesain mampu menahan beban alat berat dengan standar keamanan tinggi.",
    scope: [
      "Land clearing dan earthwork",
      "Pembangunan sub-base dan base course",
      "Pemasangan geotextile",
      "Sistem drainase dan gorong-gorong",
      "Safety signage dan marka jalan",
      "Quality control dan testing material",
    ],
    specs: [
      "Panjang Jalan: 100 M",
      "Lebar Jalan: 15 M",
      "Kapasitas Beban: 100 ton",
      "Material: Batu, Pasir, dan Semen",
    ],
    gallery: ["exca.jpg", "dok. sm.jpg", "inspkesi with msd.jpg"],
  },
  landscaping: {
    title: "Landscaping Area Operasional",
    year: "2021",
    location: "Jl. Charitas SP. 2 Mimika",
    client: "PT Freeport Indonesia",
    duration: "Ongoing",
    description:
      "Pekerjaan meliputi penanaman dan pemotongan rumput secara berkala, pemeliharaan taman, dan jalan setapak, saluran drainase, serta perawatan kebersihan kawasan di Kompleks Gedung Olahraga Mimika guna menjaga fungsi, estetika, dan kenyamanan area olahraga.",
    scope: [
      "Pembersihan dan persiapan area landscaping",
      "Penanaman Rumput dan Pemotongan Rumput Berkala",
      "Pemeliharaan Taman",
      "Instalasi Saluran Drainase",
      "Pemeliharaan tanaman dan area hijau",
      "Perawatan Kebersihan di Kompleks Gedung Olahraga Mimika",
    ],
    specs: [
      "Total Luas: ±12,5 Ha",
      "Jenis Tanaman: Tanaman peneduh, tanaman hias lokal Papua, dan rumput lanskap",
      "Sistem Irigasi: Saluran drainase",
      "Maintenance: Ongoing",
    ],
    gallery: [
      "IMG-20240806-WA0097.jpg",
      "IMG-20240823-WA0002.jpg",
      "IMG-20240420-WA0047(1).jpg",
    ],
  },
  manpower: {
    title: "Penyediaan Tenaga Kerja Profesional",
    year: "2023",
    location: "Mimika, Papua Tengah",
    client: "PT Freeport Indonesia",
    duration: "Ongoing",
    description:
      "Layanan penyediaan dan pengelolaan tenaga kerja profesional untuk berbagai kebutuhan proyek konstruksi dan pertambangan. Tim kami terlatih dan bersertifikat sesuai standar industri dengan pengalaman di proyek-proyek skala besar.",
    scope: [
      "Tenaga konstruksi (tukang, helper, mandor)",
      "Operator alat berat bersertifikat",
      "Mekanik dan teknisi",
      "Driver dan security",
      "Tenaga administrasi dan support",
      "Training dan sertifikasi K3",
    ],
    specs: [
      "Jumlah Pekerja: 150+ personel",
      "Sertifikasi: K3, Operator, First Aid",
      "Pengalaman: 3-15 tahun",
      "Coverage: Papua & Maluku",
    ],
    gallery: ["MOPH1.JPG", "manpower 02.JPG"],
  },
};

function openModal(projectId) {
  const project = projectData[projectId];
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");
  modalTitle.textContent = project.title;
  modalContent.innerHTML = `
    <!-- Info Proyek -->
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div>
        <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">INFORMASI PROYEK<\/h4>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-600 dark:text-gray-400">Tahun<\/span>
            <span class="font-semibold text-gray-900 dark:text-white">${
              project.year
            }<\/span>
          <\/div>
          <div class="flex justify-between">
            <span class="text-gray-600 dark:text-gray-400">Lokasi<\/span>
            <span class="font-semibold text-gray-900 dark:text-white">${
              project.location
            }<\/span>
          <\/div>
          <div class="flex justify-between">
            <span class="text-gray-600 dark:text-gray-400">Klien<\/span>
            <span class="font-semibold text-gray-900 dark:text-white">${
              project.client
            }<\/span>
          <\/div>
          <div class="flex justify-between">
            <span class="text-gray-600 dark:text-gray-400">Durasi<\/span>
            <span class="font-semibold text-gray-900 dark:text-white">${
              project.duration
            }<\/span>
          <\/div>
        <\/div>
      <\/div>
      
      <div>
        <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">SPESIFIKASI<\/h4>
        <div class="space-y-2">
          ${project.specs
            .map(
              (spec) => `
            <div class="flex items-start">
              <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="url(#gradient)" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#0099ff;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#003c8f;stop-opacity:1" />
                  <\/linearGradient>
                <\/defs>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"><\/path>
              <\/svg>
              <span class="text-gray-700 dark:text-gray-300">${spec}<\/span>
            <\/div>
          `
            )
            .join("")}
        <\/div>
      <\/div>
    <\/div>
    
    <!-- Deskripsi -->
    <div class="mb-8">
      <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">DESKRIPSI PROYEK<\/h4>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${
        project.description
      }<\/p>
    <\/div>
    
    <!-- Lingkup Pekerjaan -->
    <div class="mb-8">
      <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">LINGKUP PEKERJAAN<\/h4>
      <div class="grid md:grid-cols-2 gap-3">
        ${project.scope
          .map(
            (item) => `
          <div class="flex items-start bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border-l-4 border-gradient">
            <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="url(#gradient2)" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
                  <stop offset="50%" style="stop-color:#0099ff;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#003c8f;stop-opacity:1" />
                <\/linearGradient>
              <\/defs>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"><\/path>
            <\/svg>
            <span class="text-gray-700 dark:text-gray-300 text-sm">${item}<\/span>
          <\/div>
        `
          )
          .join("")}
      <\/div>
    <\/div>
    
    <!-- Galeri Dokumentasi -->
    <div>
      <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">DOKUMENTASI PROYEK<\/h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${project.gallery
          .map(
            (img) => `
          <div class="gallery-img rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition" onclick="openLightbox('${img}')">
            <img src="${img}" alt="Dokumentasi proyek" class="w-full h-80 object-cover">
          <\/div>
        `
          )
          .join("")}
      <\/div>
    <\/div>
    `;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function openLightbox(imgSrc) {
  event.stopPropagation();
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  lightboxImg.src = imgSrc;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("hidden");
}
// Close modal on ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
    closeLightbox();
  }
});
// Prevent modal content click from closing modal
document
  .querySelector(".modal-content")
  ?.addEventListener("click", function (e) {
    e.stopPropagation();
  });

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
