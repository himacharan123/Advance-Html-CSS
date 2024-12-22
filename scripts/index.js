let menuDialogList = document.querySelectorAll(".menu-dialog ul li");
let scrollToPage = document.querySelectorAll(".scroll-to ul li");
let desktopMenus = document.querySelectorAll(".desktop-menus li");
let mainSections = document.querySelectorAll(".about, .projects, .contact");
let toggleMode = document.querySelector(".toggle-mode");
let body = document.querySelector("body");
let preferedColor;


if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  preferedColor = "dark";
} else {
  preferedColor = "light";
}


function toSystemColor() {
  body.classList.remove("dark", "light");
  body.classList.add(preferedColor);
}
toSystemColor();


function activateBtn(item, myItem) {
  item.addEventListener("click", (button) => {
    myItem.forEach((event) => {
      event.classList.remove("active-button");
    });
    button.target.classList.add("active-button");
    scrollToTarget(button);
  });
}

function scrollToTarget(button) {
  let buttonText = button.target.textContent.trim();
  if (buttonText === "About") {
    mainSections[0].scrollIntoView({ behavior: "smooth" });
  } else if (buttonText === "Projects") {
    mainSections[1].scrollIntoView({ behavior: "smooth" });
  } else if (buttonText === "Contact") {
    mainSections[2].scrollIntoView({ behavior: "smooth" });
  }
}


menuDialogList.forEach((item) => activateBtn(item, menuDialogList));
scrollToPage.forEach((item) => activateBtn(item, scrollToPage));
desktopMenus.forEach((item) => activateBtn(item, desktopMenus));


toggleMode.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    darkMode(toggleMode);
  } else {
    lightMode(toggleMode);
  }
});

function darkMode(item) {
  item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1.5em" width="1.5em"><title>white-balance-sunny</title><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>`;
  body.classList.remove("light");
  body.classList.add("dark");
}

function lightMode(item) {
  item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1.5em" width="1.5em"><title>moon-waning-crescent</title><path d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" /></svg>`;
  body.classList.remove("dark");
  body.classList.add("light");
}


const msg = document.getElementById("message");
msg.addEventListener("input", (event) => {
  let msgLabel = document.getElementById("r-msg");
  msgLabel.style.display = event.target.value.trim() === "" ? "inline" : "none";
});
