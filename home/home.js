var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
navItems.forEach(function (e, i) {
  e.addEventListener("click", function (e) {
    navItems.forEach(function (e2, i2) {
      e2.classList.remove("mobile-bottom-nav__item--active");
    });
    this.classList.add("mobile-bottom-nav__item--active");
  });
});

var searchBtnOnMenu = document.querySelector("#searchBtnOnMenu");
var searchinput = document.getElementById("searchinput");
searchBtnOnMenu.addEventListener("click", (e) => {
	e.preventDefault()
  searchinput.focus();
});
