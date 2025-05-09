// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const icon = document.querySelector(".dark-mode-toggle i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// FAQ Toggle
function toggleFAQ(id) {
  const answer = document.getElementById(`faq-answer-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);

  answer.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}

// Show More Screenshots
function showMoreScreenshots() {
  const overlay = document.getElementById("modal-overlay");
  const title = document.getElementById("modal-title");
  const content = document.getElementById("modal-content");

  title.textContent = "Oops!";
  content.innerHTML = `
    <p class="text-gray-700 text-base leading-relaxed text-center">
      Fitur baru akan segera tayang! <br><strong>Stay tune yaa! Terima kasih.</strong>
    </p>
  `;
  overlay.classList.remove("hidden");
}

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Smooth scrolling for anchor home
document.querySelector('a[href="#"]').addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//  Footer Modal Form
function openModal(type, event) {
  if (event) event.preventDefault(); // ✅ cegah scroll ke atas

  const overlay = document.getElementById("modal-overlay");
  const title = document.getElementById("modal-title");
  const content = document.getElementById("modal-content");

  if (type === "terms") {
    title.textContent = "Ketentuan Layanan";
    content.innerHTML = `
      Dengan menggunakan aplikasi RAR Calculator, Anda setuju untuk tidak menyalahgunakan layanan dan mengikuti semua peraturan yang berlaku.
    `;
  } else if (type === "privacy") {
    title.textContent = "Kebijakan Privasi";
    content.innerHTML = `
      RAR Calculator tidak mengumpulkan data pribadi Anda. Semua riwayat perhitungan disimpan hanya di perangkat dan dapat dihapus kapan saja oleh pengguna.
    `;
  } else if (type === "contact") {
    title.textContent = "Kontak Kami";
    content.innerHTML = `
      <form class="space-y-3 mt-2">
        <input type="text" placeholder="Nama Anda" class="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none" />
        <input type="email" placeholder="Email Anda" class="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none" />
        <textarea placeholder="Pesan Anda" rows="3" class="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none"></textarea>
        <button type="submit" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full">Kirim</button>
      </form>
    `;
  } else if (type === "feedback") {
    title.textContent = "Beri Masukan";
    content.innerHTML = `
      <form class="space-y-3 mt-2">
        <textarea placeholder="Masukan atau saran Anda..." rows="4" class="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none"></textarea>
        <button type="submit" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full">Kirim</button>
      </form>
    `;
  }

  overlay.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("modal-overlay").addEventListener("click", function (e) {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  });
});
