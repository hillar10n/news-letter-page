const card = document.querySelector(".container");
const feedBack = document.querySelector(".thanks");
const form = document.querySelector("#subBtn");
const dismiss = document.querySelector("#dismiss");
const subEmail = document.querySelector("#subEmail");
const input = document.querySelector("#email");
const errorReport = document.querySelector("#invalidEmail");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	validationCheck = input.value;
	if (validationCheck.indexOf("@") === -1) {
		errorReport.innerText = "Valid email required!";
	} else {
		card.classList.add("hidden");
		feedBack.classList.remove("hidden");
		subEmail.innerText = input.value;
		input.value = "";
	}
});

dismiss.addEventListener("click", function () {
	card.classList.remove("hidden");
	feedBack.classList.add("hidden");
});
