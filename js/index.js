import { init } from "@vercel/analytics";

// Initialize analytics when the page is loaded
init();

const home = document.getElementById("header__home");
home.addEventListener("click", (event) => {
  event.preventDefault();
});

const secondary1 = document.getElementById("secondary1");
secondary1.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href =
    "https://github.com/CodeWithCoby/portfolio-website/tree/main/Build-and-Deploy-Ecommerce-Website-main";
});

const secondary2 = document.getElementById("secondary2");
secondary2.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href =
    "https://github.com/CodeWithCoby/portfolio-website/tree/main/task-tracker";
});

const contact__link3 = document.getElementById("contact__link3");
contact__link3.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "https://github.com/CodeWithCoby";
});

const contact__link2 = document.getElementById("contact__link2");
contact__link2.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "https://x.com/cobycode1";
});

const sendEmail = () => {
  const email = "oseicoll123@gmail.com";
  const subject = "";
  const body = "";
  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.open(gmailLink, "_blank");
};
