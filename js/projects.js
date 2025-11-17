const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // remover classe ativa dos outros botões
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});