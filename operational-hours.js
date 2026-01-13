(function () {
  const textEl = document.getElementById("operationalText");
  const badgeEl = document.getElementById("operationalBadge");

  if (!textEl || !badgeEl) return;

  // ===== ZONA WAKTU PAPUA (WIT = UTC +9) =====
  const nowUTC = new Date(
    new Date().toLocaleString("en-US", { timeZone: "UTC" })
  );
  const witTime = new Date(nowUTC.getTime() + 9 * 60 * 60 * 1000);

  const day = witTime.getDay(); // 0 = Minggu
  const hour = witTime.getHours();

  let isOpen = false;
  let statusText = "";

  // Senin - Jumat, 07:00 - 16:00 WIT
  if (day >= 1 && day <= 5) {
    if (hour >= 7 && hour < 16) {
      isOpen = true;
      statusText = "Buka hari ini 07.00 – 16.00 WIT";
    } else {
      statusText = "Tutup • Buka 07.00 WIT";
    }
  } else {
    statusText = "Tutup • Senin – Jumat";
  }

  // Update text
  textEl.textContent = statusText;

  // Update badge
  if (isOpen) {
    badgeEl.textContent = "OPEN";
    badgeEl.className = "px-3 py-1 rounded-full text-xs font-bold badge-open";
  } else {
    badgeEl.textContent = "CLOSED";
    badgeEl.className = "px-3 py-1 rounded-full text-xs font-bold badge-closed";
  }
})();
