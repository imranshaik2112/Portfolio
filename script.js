let dropdown = document.querySelector(".dropdown");
let menu = document.querySelector("#menu");
let home = document.querySelector("#home");
let open = document.querySelector(".open");
let close = document.querySelector(".close");

menu.addEventListener("click", () => {
  dropdown.classList.toggle("dropdown1");
  dropdown.style.backdropFilter = `blur(10px)`;
});

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  dropdown.style.display = "flex";
  dropdown.style.transform = "translateX(0px)";
});
close.addEventListener("click", () => {
  open.style.display = "block";
  close.style.display = "none";
  dropdown.style.display = "none";
});

const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  const currentSection = document.querySelector("section.active");
  const currentLinkId = currentSection.getAttribute("id");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentLinkId}`) {
      link.classList.add("active");
    }
  });
}

function handleScroll() {
  const sections = document.querySelectorAll("section");
  let scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop - sectionHeight * 0.25 &&
      scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.25
    ) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  setActiveLink();
}
window.addEventListener("scroll", handleScroll);

// Form Validation

function validateForm() {
  var fnameInput = document.getElementById("fname");
  var lnameInput = document.getElementById("lname");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var fnameError = document.getElementById("fnameError");
  var lnameError = document.getElementById("lnameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");

  fnameError.textContent = "";
  lnameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  var isValid = true;

  if (fnameInput.value.trim() === "") {
    fnameError.textContent = "First name is required";
    isValid = false;
  }

  if (lnameInput.value.trim() === "") {
    lnameError.textContent = "Last name is required";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = "Invalid email address";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
