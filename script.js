const moveBtns = document.querySelectorAll(".moveBtn");
const errorDiv = document.querySelector(".error");
const stepCountDiv = document.querySelector(".step-count span");
const normalMessage = document.querySelector(".normal-message");
let firstClickBtnId = null;
const btnDetailes = [];
const positionDiff = 25;
let timeOut;

const generateRandNo = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const handleFirstClick = (e) => {
  if (!e.target.previousElementSibling) {
    normalMessage.innerText = "The pole has no ring, Select another one !!!";
    normalMessage.classList.add("redish");
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      normalMessage.classList.remove("redish");
    }, 1500);
    return;
  }
  if (firstClickBtnId === e.target.getAttribute("id")) {
    e.target.parentElement.style.opacity = "";
    firstClickBtnId = null;
    btnDetailes.pop();
    normalMessage.innerText = `Selection Cancelled !!!!, Select a new source.`;
    normalMessage.style.borderColor = "gray"
  } else {
    e.target.parentElement.style.opacity = ".3";
    firstClickBtnId = e.target.getAttribute("id");
    btnDetailes.push(e.target);
    normalMessage.innerText = `Pole ${e.target.getAttribute("id")[3]} is selected as source, Now select a target.`;
    normalMessage.style.borderColor = "gray"
  }
};

const handleSecondClick = (e) => {
  const posiBotttomOfLastRing = parseInt(
    e.target.previousElementSibling?.style.bottom ?? -18
  );
  if (
    parseInt(e.target.previousElementSibling?.style.width ?? 500) <
    parseInt(btnDetailes[0].previousElementSibling.style.width)
  ) {
    normalMessage.innerText = "Invalid move !!!, You can not put a large ring over a small ring.";
    normalMessage.style.opacity = "1";
    normalMessage.classList.add("redish");
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      normalMessage.classList.remove("redish");
    }, 1250);

    return;
  }
  if (btnDetailes.length) {
    btnDetailes[0].previousElementSibling.style.bottom = `${
      posiBotttomOfLastRing + positionDiff
    }px`;
    e.target.insertAdjacentElement(
      "beforebegin",
      btnDetailes[0].previousElementSibling
    );
    btnDetailes[0].parentElement.style.opacity = "";
  }

  btnDetailes.pop();
  firstClickBtnId = null;
  normalMessage.innerText = `Select a new source !!!`;
  stepCountDiv.innerText = parseInt(stepCountDiv.innerText) + 1;
};

const handleBtnClick = (e) => {
  (firstClickBtnId === e.target.getAttribute("id") ||
    firstClickBtnId === null) &&
  btnDetailes.length <= 1
    ? handleFirstClick(e)
    : handleSecondClick(e);
};

const randPole = document.getElementById(
  `pole${generateRandNo(1, 3)}`
).lastElementChild;
const noOfRings = generateRandNo(3, 10);
let bigRingWidth = 20 * noOfRings;
let previousRingPos = -18;

for (let i = 0; i < noOfRings; i++) {
  const ring = document.createElement("div");
  ring.className = "ring";
  const nextRingPos = previousRingPos + positionDiff;
  ring.style.cssText = `bottom: ${nextRingPos}px; width: ${bigRingWidth}px`;
  randPole.insertAdjacentElement("beforebegin", ring);
  bigRingWidth -= 15;
  previousRingPos = nextRingPos;
}

Array.from(moveBtns).forEach((btn) => {
  btn.addEventListener("click", handleBtnClick);
});
