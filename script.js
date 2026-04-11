// Dark Mode Toggle
document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Value Mode Toggle
const modeButtons = document.querySelectorAll(".value-toggle button");
modeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const mode = btn.dataset.mode;
    document.querySelectorAll(".swatch-card").forEach(card => {
      const value = card.dataset[mode];
      card.querySelector(".swatch-value").textContent = value;
    });
  });
});

// Click to Copy
document.querySelectorAll(".swatch-card").forEach(card => {
  card.addEventListener("click", () => {
    const hex = card.dataset.hex;
    navigator.clipboard.writeText(hex);

    card.classList.add("copied");
    setTimeout(() => card.classList.remove("copied"), 600);
  });
});
