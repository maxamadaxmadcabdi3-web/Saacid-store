const menu = document.querySelector(".menu");
const nav = document.querySelector(".top nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const search = document.querySelector("#search");
const cards = document.querySelectorAll(".card");

if (search) {
  search.addEventListener("input", () => {
    const text = search.value.toLowerCase();

    cards.forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(text)
        ? ""
        : "none";
    });
  });
}
