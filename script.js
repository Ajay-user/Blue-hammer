const toggleIcon = document.getElementById("toggle-icon");
const navigation = document.getElementById("nav");
const navElement1 = document.getElementById("nav-element-1");
const navElement2 = document.getElementById("nav-element-2");
const navElement3 = document.getElementById("nav-element-3");
const navElement4 = document.getElementById("nav-element-4");
const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const image1 = document.getElementById("image_1");
const image2 = document.getElementById("image_2");
const image3 = document.getElementById("image_3");
const image4 = document.getElementById("image_4");

const imageMode = (theme) => {
  image1.src = `images/undraw_build_your__home_${theme}_mode.svg`;
  image2.src = `images/undraw_smart_home_${theme}_mode.svg`;
  image3.src = `images/undraw_interior_design_${theme}_mode.svg`;
  image4.src = `images/undraw_under_construction_${theme}_mode.svg`;
};

const toggleTheme = (theme) => {
  theme === "dark" ? imageMode("dark") : imageMode("light");
  toggleIcon.children[0].textContent = `${
    theme === "dark" ? "DARK MODE" : "LIGHT MODE"
  }`;
  toggleIcon.children[1].classList.replace(
    `${theme === "dark" ? "fa-sun" : "fa-moon"}`,
    `${theme === "dark" ? "fa-moon" : "fa-sun"}`
  );
  theme === "dark"
    ? (navigation.style.backgroundColor = "rgb(0 0 0 /50%)")
    : (navigation.style.backgroundColor = "rgb(255 255 255 /50%)");
};

const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    window.localStorage.setItem("theme", "dark");
    toggleTheme("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    window.localStorage.setItem("theme", "light");
    toggleTheme("light");
  }
};

const toggleSwitch = document.querySelector("input[type=checkbox]");
// attaching event listener
toggleSwitch.addEventListener("change", switchTheme);

const currentTheme = window.localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleTheme("dark");
    toggleSwitch.checked = true;
  } else {
    toggleTheme("light");
    toggleSwitch.checked = false;
  }
}

// toggle navigation - for small & medium  screens
const toggleNav = () => {
  menuBars.classList.toggle("change");

  overlay.classList.toggle("activate");
  if (overlay.classList.contains("activate")) {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  } else {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
  }
};

menuBars.addEventListener("click", toggleNav);
navElement1.addEventListener("click", toggleNav);
navElement2.addEventListener("click", toggleNav);
navElement3.addEventListener("click", toggleNav);
navElement4.addEventListener("click", toggleNav);
