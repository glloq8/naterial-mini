/**
 * Menu Mobile
 */
var menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

// add a span in the nav
var nav = document.querySelector("nav");
var span = document.createElement("span");
span.classList.add("menu-close");
nav.appendChild(span);

var menuClose = document.querySelector(".menu-close");
menuClose.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
/**
 * // Menu Mobile
 */

/**
 * Menu fixed
 */
var scrollY = function () {
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
  return supportPageOffset
    ? window.pageYOffset
    : isCSS1Compat
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
};

var element = document.querySelector(".header"); //On recupere l'element

var onScroll = function () {
  var hasScrollClass = element.classList.contains("menu-fixed"); // On detecte si le menu a deja la class menu-fixed

  if (scrollY() > 1 && !hasScrollClass) {
    element.classList.add("menu-fixed");
  } else if (scrollY() < 1 && hasScrollClass) {
    element.classList.remove("menu-fixed");
  }
};
window.addEventListener("scroll", onScroll);
/**
 * // Menu fixed
 */

/**
 * Animations
 */
// on each nav a click, stop link propagation et fadeout body
var navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("animate");

    // after 500ms go to link href
    setTimeout(() => {
      window.location.href = link.href;
    }, 350);
  });
});
