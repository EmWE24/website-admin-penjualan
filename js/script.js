// box info username
const infoUser = document.querySelector(".box-info-user");
document.querySelector("#username-profil").onmouseenter = () => {
  infoUser.style.visibility = "visible";
  infoUser.style.opacity = "100%";
  infoUser.style.left = "104%";
};
document.querySelector("#username-profil").onmouseleave = () => {
  infoUser.style.opacity = "0%";
  infoUser.style.left = "100%";
  infoUser.style.visibility = "hidden";
};

// sidebar menu operation
const Btns = document.querySelectorAll(".btns");
const dropDowns = document.querySelectorAll(".drop-down");
const subMenus = document.querySelectorAll(".subMenu");

for (let i = 0; i < 5; i++) {
  Btns[i].addEventListener("click", function () {
    document.querySelector(".active")?.classList.remove("active");
    document.querySelector(".activeSub")?.classList.remove("activeSub");
    Btns[i].classList.add("active");
    dropDowns[i].classList.toggle("show");
    subMenus[i].classList.toggle("showMenu");
  });
}

// sidebar submenu active
const subMenuValues = document.querySelectorAll(".subMenu li a");
subMenuValues.forEach((subMenuValue) => {
  subMenuValue.addEventListener("click", () => {
    document.querySelector(".activeSub")?.classList.remove("activeSub");
    subMenuValue.classList.add("activeSub");
    document.querySelector(".active")?.classList.remove("active");
  });
});

function changeIFrame(Link) {
  document.querySelector("#iframe-content").src = Link;
}
