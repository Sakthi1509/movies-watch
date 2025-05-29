
function search(event) {
  event.preventDefault();

  const query = document.getElementById("searchBox").value.trim();

  if (query) {
    // ✅ Pass the title as a URL parameter
    window.location.href = `movie.html?title=${encodeURIComponent(query)}`;
  } else {
    alert("Please enter a search term.");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchBox");

  if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        search(event); // call your existing search function
      }
    });
  }
});



function goToDetails(title) {
  window.location.href = `movie.html?title=${encodeURIComponent(title)}`;
}
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebarToggle');
const closeBtn = document.getElementById('closeSidebar');
toggleBtn.onclick = () => sidebar.classList.add('active');
closeBtn.onclick = () => sidebar.classList.remove('active');
function scrollLeft(button) {
  const container = button.closest(".position-relative").querySelector(".scrolling-wrapper");
  container.scrollBy({ left: -300, behavior: "smooth" });
}
function scrollRight(button) {
  const container = button.closest(".position-relative").querySelector(".scrolling-wrapper");
  container.scrollBy({ left: 300, behavior: "smooth" });
}
function scrollRightWithLoop(container) {
  const scrollAmount = 200;
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    container.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
function startAutoScroll(container) {
  let interval = setInterval(() => scrollRightWithLoop(container), 3000);
  container.addEventListener("mouseover", () => clearInterval(interval));
  container.addEventListener("mouseout", () => {
    interval = setInterval(() => scrollRightWithLoop(container), 3000);
  });
}
window.onload = function () {
  document.querySelectorAll(".scrolling-wrapper").forEach(startAutoScroll);
};
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('darkModeToggle');
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
  }
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      toggleBtn.textContent = '☀️';
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      toggleBtn.textContent = '🌙';
    }
  });
});

/*popup*/
