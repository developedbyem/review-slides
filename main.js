const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");
const slide = document.getElementById("slide");
const cardsLength = document.querySelectorAll(".card").length;

upArrow.addEventListener("click", () => {
  change("up");
});
downArrow.addEventListener("click", () => {
  change("down");
});

let activeCard = 0;
downArrow.style.visibility = "hidden";

function change(direction) {
  if (direction === "up") {
    activeCard++;
  } else if (direction === "down") {
    activeCard--;
    -activeCard;
  }
  // if (activeCard > cardsLength - 1) {
  //   activeCard = 0;
  // } else if (activeCard < 0) {
  //   activeCard = cardsLength - 1;
  // }

  if (activeCard < cardsLength - 1) {
    upArrow.style.visibility = "visible";
  } else {
    upArrow.style.visibility = "hidden";
  }
  if (activeCard > 0) {
    downArrow.style.visibility = "visible";
  } else {
    downArrow.style.visibility = "hidden";
  }

  slide.style.top = `-${300 * activeCard}px`;
}
