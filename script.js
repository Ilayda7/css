document.getElementById("contactBtn").onclick = function() {
    alert("Hi! This is Ilayda. I can't wait to meet! 🚀");
}

let messages = [
    "Hi! I'm Ilayda.",
    "I'm open to web development projects ✨",
    "Electronics and software together!"
];

document.getElementById("contactBtn").onclick = function() {
    let secilen = messages[Math.floor(Math.random()* messages.length)];
    alert(secilen);
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Thanks! You want to get in touch with me 🤗");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("contactBtn");
  const modal = document.getElementById("contactModal");
  const closeBtn = document.querySelector(".closeBtn");
  const form = document.getElementById("contactForm");

  // Butona tıklayınca modal açılır
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // X işaretine basınca kapanır
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Modal dışında tıklayınca kapanır
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Form gönderilince
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent 🤗");
    modal.style.display = "none";
    form.reset();
  });
});