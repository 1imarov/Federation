const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        burger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });