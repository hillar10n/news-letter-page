const card = document.querySelector(".container");
const feedBack = document.querySelector(".thanks");
const form = document.querySelector("#subBtn");
const dismiss = document.querySelector("#dismiss");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	card.style.display = "none";
	feedBack.style.display = "block";
});

dismiss.addEventListener("click", function () {
	card.style.display = "";
	feedBack.style.display = "none";
});
