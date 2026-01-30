tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#003c8f", // Deep Blue
          dark: "#002b55",
        },
        accent: {
          DEFAULT: "#00d4ff", // Cyan
          glow: "#0099ff",
        },
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
};

// ===== Next Script Block =====

// Data Dummy untuk Modal Proyek
const projectData = {
  konstruksi: {
    title: "Perbaikan Pagar Mess UT Jayapura",
    year: "2024",
    location: "Timika",
    client: "PT United Tractors",
    duration: "8 Bulan",
    description:
      "Pembangunan fasilitas camp karyawan standar internasional dengan kapasitas 500 orang, meliputi unit hunian, kantin, dan fasilitas rekreasi.",
    image: "United-Tractors-Pekanbaru.jpg",
    gallery: ["ut-01 jayapura.png", "ut-02 jayapura.png"],
  },
  infrastruktur: {
    title: "Jembatan Jila",
    year: "2025",
    location: "Jila",
    client: "Dinas PU",
    duration: "4 Bulan",
    description:
      "Jembatan penghubung vital di pegunungan Papua yang menghubungkan dua desa terpencil, meningkatkan akses logistik dan ekonomi.",
    image: "jembatan.jpg",
    gallery: ["jembatan jila.png", "jembatan jila.png", "jembatan jila.png"],
  },
  landscaping: {
    title: "Landscaping",
    year: "2021",
    location: "Timika",
    client: "PT Freeport",
    duration: "Ongoing",
    description:
      "Pemeliharaan area hijau kompleks olahraga GOR Mimika, termasuk penanaman rumput, perawatan tanaman hias, dan sistem irigasi.",
    image: "IMG-20240516-WA0063.jpg",
    gallery: [
      "IMG-20240409-WA0044.jpg",
      "IMG-20240805-WA0118.jpg",
      "IMG-20240823-WA0002.jpg",
    ],
  },
  manpower: {
    title: "MOPH1 Services",
    year: "2023",
    location: "Mimika",
    client: "PT Freeport",
    duration: "Ongoing",
    description:
      "Penyediaan tenaga kerja profesional untuk operasional Heavy Equipment dan Maintenance di area MOPH1.",
    image: "manpower 01.JPG",
    gallery: ["manpower 02.JPG", "MOPH1.JPG", "inspkesi with msd.jpg"],
  },
};

/* --- GLOBAL UI LOGIC --- */

// Dark Mode
const html = document.documentElement;
const darkButtons = [
  document.getElementById("darkToggleDesktop"),
  document.getElementById("darkToggleMobile"),
];

function updateDarkIcon() {
  const isDark = html.classList.contains("dark");
  darkButtons.forEach((btn) => {
    if (btn)
      btn.innerHTML = isDark
        ? '<i class="fa-solid fa-sun text-yellow-400"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  });
}

function toggleDarkMode() {
  html.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  );
  updateDarkIcon();
}

// Init Theme
if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
}
updateDarkIcon();
darkButtons.forEach((btn) => btn?.addEventListener("click", toggleDarkMode));

// OPTIMASI MOBILE MENU & SCROLL
const navbar = document.getElementById("navbar");
const burger = document.getElementById("burger");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarContent = mobileSidebar.querySelector("div.transform");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

function toggleMenu() {
  const isClosed = mobileSidebar.classList.contains("hidden");
  if (isClosed) {
    // Buka Menu
    mobileSidebar.classList.remove("hidden");

    // Prevent body scroll
    document.body.classList.add("sidebar-open");

    // OPTIMASI: Paksa navbar menjadi 'scrolled' agar warna konsisten dengan menu sidebar
    navbar.classList.add("scrolled");

    setTimeout(() => {
      sidebarBackdrop.classList.remove("opacity-0");
      sidebarContent.classList.remove("translate-x-full");
    }, 10);
    burger.classList.add("active");
  } else {
    // Tutup Menu
    sidebarBackdrop.classList.add("opacity-0");
    sidebarContent.classList.add("translate-x-full");
    burger.classList.remove("active");

    // Re-enable body scroll
    document.body.classList.remove("sidebar-open");

    setTimeout(() => {
      mobileSidebar.classList.add("hidden");

      // OPTIMASI: Saat menu ditutup, cek posisi scroll
      if (window.scrollY <= 50) {
        navbar.classList.remove("scrolled");
      }
    }, 300);
  }
}
burger.addEventListener("click", toggleMenu);
sidebarBackdrop.addEventListener("click", toggleMenu);

// Scroll Effects & Reveal
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 }
);
revealElements.forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  // Navbar State Logic
  if (mobileSidebar.classList.contains("hidden")) {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }

  const btt = document.getElementById("backToTop");
  if (window.scrollY > 500) {
    btt.classList.remove("translate-y-20", "opacity-0");
  } else {
    btt.classList.add("translate-y-20", "opacity-0");
  }
});

document
  .getElementById("backToTop")
  .addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

document.getElementById("year").textContent = new Date().getFullYear();

// Hero Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dot");

function goToSlide(n) {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active", "bg-accent");

  currentSlide = (n + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active", "bg-accent");
}

setInterval(() => goToSlide(currentSlide + 1), 6000);

// Particle System
const particlesContainer = document.getElementById("particles");
function createParticle() {
  const p = document.createElement("div");
  p.classList.add("particle");
  const size = Math.random() * 20 + 5;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${Math.random() * 100 + 100}%`; // Start below viewport
  const duration = Math.random() * 10 + 10;
  p.style.transition = `top ${duration}s linear, opacity ${duration}s ease-in`;
  particlesContainer.appendChild(p);
  setTimeout(() => {
    p.style.top = "-10%";
    p.style.opacity = "0";
  }, 100);
  setTimeout(() => p.remove(), duration * 1000);
}
setInterval(createParticle, 800);
// Initial batch
for (let i = 0; i < 10; i++) setTimeout(createParticle, i * 200);

/* --- PROJECT MODAL LOGIC --- */
const pModal = document.getElementById("projectModal");

window.openProjectModal = function (id) {
  const data = projectData[id];
  if (!data) return;

  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalImage").src = data.image;
  document.getElementById("modalYear").textContent = data.year;
  document.getElementById("modalLocation").textContent = data.location;
  document.getElementById("modalClient").textContent = data.client;
  document.getElementById("modalDuration").textContent = data.duration;
  document.getElementById("modalDesc").textContent = data.description;

  // UPDATE BAGIAN INI - Tambahkan onclick untuk setiap gambar
  document.getElementById("modalGallery").innerHTML = data.gallery
    .map(
      (src) =>
        `<img 
      src="${src}" 
      class="rounded-lg w-full h-80 object-cover border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform cursor-pointer" 
      onclick="openLightbox('${src}', ${JSON.stringify(data.gallery).replace(
          /"/g,
          "&quot;"
        )})"
    />`
    )
    .join("");

  pModal.classList.remove("modal-hidden");
  document.body.style.overflow = "hidden";
};

window.closeProjectModal = function () {
  pModal.classList.add("modal-hidden");
  document.body.style.overflow = "auto";
};

/* --- CONTACT FORM MODAL LOGIC --- */
const cModal = document.getElementById("contactFormModal");
const cContent = document.getElementById("contactFormContent");

window.openContactModal = function () {
  cModal.classList.remove("hidden");
  // Allow display:flex to apply before transition
  setTimeout(() => {
    cModal.classList.remove("opacity-0");
    cContent.classList.remove("opacity-0", "scale-95");
  }, 10);
  document.body.style.overflow = "hidden";
};

window.closeContactModal = function () {
  cModal.classList.add("opacity-0");
  cContent.classList.add("opacity-0", "scale-95");
  setTimeout(() => {
    cModal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 300);
};

// Form Handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const spinner = submitBtn.querySelector(".spinner");
  const btnText = submitBtn.querySelector(".btn-text");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const setError = (elementId, show) => {
    const input = document.getElementById(elementId);
    const errorDiv = document.getElementById(`error-${elementId}`);
    if (show) {
      input.classList.add("error");
      errorDiv.style.display = "flex";
    } else {
      input.classList.remove("error");
      errorDiv.style.display = "none";
    }
  };

  // Clear errors on input
  ["name", "email", "subject", "message"].forEach((id) => {
    document
      .getElementById(id)
      .addEventListener("input", () => setError(id, false));
  });

  const showToast = (title, message) => {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
            <div class="toast-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
            <div class="toast-content"><h4>${title}</h4><p>${message}</p></div>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => {
      toast.classList.remove("show");
      toast.addEventListener("transitionend", () => toast.remove());
    }, 4000);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) {
      setError("name", true);
      isValid = false;
    }
    if (!isValidEmail(email)) {
      setError("email", true);
      isValid = false;
    }
    if (subject === "") {
      setError("subject", true);
      isValid = false;
    }
    if (message.length < 10) {
      setError("message", true);
      isValid = false;
    }

    if (!isValid) return;

    // Simulate Network Request
    submitBtn.disabled = true;
    btnText.textContent = "Mengirim...";
    spinner.style.display = "block";

    setTimeout(() => {
      submitBtn.disabled = false;
      btnText.textContent = "Kirim Pesan";
      spinner.style.display = "none";
      showToast(
        "Berhasil!",
        "Pesan Anda telah terkirim. Kami akan segera menghubungi Anda."
      );
      form.reset();
      setTimeout(closeContactModal, 1500); // Auto close after success
    }, 2000);
  });
});

// Global Escape Key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
    closeContactModal();
  }
});
/* --- LIGHTBOX GALLERY LOGIC --- */
let currentGallery = [];
let currentImageIndex = 0;

window.openLightbox = function (imageSrc, gallery) {
  currentGallery = gallery;
  currentImageIndex = gallery.indexOf(imageSrc);

  const lightbox = document.getElementById("lightboxModal");
  const lightboxImage = document.getElementById("lightboxImage");

  lightboxImage.src = imageSrc;
  updateLightboxCounter();

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeLightbox = function () {
  const lightbox = document.getElementById("lightboxModal");
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
};

window.navigateLightbox = function (direction) {
  currentImageIndex += direction;

  // Loop ke awal/akhir
  if (currentImageIndex < 0) {
    currentImageIndex = currentGallery.length - 1;
  } else if (currentImageIndex >= currentGallery.length) {
    currentImageIndex = 0;
  }

  document.getElementById("lightboxImage").src =
    currentGallery[currentImageIndex];
  updateLightboxCounter();
};

function updateLightboxCounter() {
  document.getElementById("lightboxCounter").textContent = `${
    currentImageIndex + 1
  } / ${currentGallery.length}`;
}

// Keyboard Navigation untuk Lightbox
document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightboxModal");
  if (lightbox.classList.contains("active")) {
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
    if (e.key === "Escape") closeLightbox();
  }
});

// Close lightbox saat klik di luar gambar
document
  .getElementById("lightboxModal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeLightbox();
    }
  });
