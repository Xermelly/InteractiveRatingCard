const ratingValor = document.querySelectorAll(".rating-valor li");
const rateCard = document.querySelectorAll(".rating-card");
const subButton = document.querySelector("#submit-btn");

function subRating(item) {
  function selectRating(event) {
    document.querySelector(".rate-selected").classList.remove("rate-selected");
    event.target.classList.add("rate-selected");
  }

  item.addEventListener("click", selectRating);
}

function btnClick(event) {
  document.querySelector(".rating-card.active").classList.remove("active");
  document.querySelector("#card-thanks").classList.add("active");
  const rateText = Number(document.querySelector(".rate-selected").innerText);
  document.querySelector("#rating-choice").innerText =
    "You selected " + rateText + " of 5";
}

subButton.addEventListener("click", btnClick);
ratingValor.forEach(subRating);
