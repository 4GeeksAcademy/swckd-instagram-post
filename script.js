const faHeart = document.querySelector(".fa-heart");

faHeart.addEventListener("click", function () {
  faHeart.classList.toggle("liked");

  regToSolid(faHeart);
});

const faBookMark = document.querySelector(".fa-bookmark");

faBookMark.addEventListener("click", function () {
  regToSolid(faBookMark);
});

function regToSolid(element) {
  if (element.classList.contains("fa-regular")) {
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
  } else {
    element.classList.add("fa-regular");
    element.classList.remove("fa-solid");
  }
}
