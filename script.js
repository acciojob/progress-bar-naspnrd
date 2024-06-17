//your JS code here. If required.

const circles = document.querySelectorAll(".circle"); // nodeList of size 5
const lines = document.querySelectorAll(".line"); // nodeList of size 4

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let currentActive = 1;

function handleNextButton () {
	currentActive++; // 2
	if(currentActive > circles.length){
		currentActive = circles.length;
	}
	
	updateUI();
}

function handlePrevButton () {
	currentActive--;
	if(currentActive < 1){
		currentActive = 1;
	}
	updateUI();
}

function updateUI(){
	circles.forEach((circle, idx) => {
		// 0 < 2 // 1 < 2 // 2 < 2 // 3 < 2 // 4 < 2
		idx < currentActive ? 
			circle.classList.add("active") : 
			circle.classList.remove("active")
	})

	lines.forEach((line, idx) => {
		// 0 < 1 // 1 < 1
		idx < currentActive - 1 ? 
			line.classList.add("active") : 
			line.classList.remove("active")
	})
	prevButton.disabled = currentActive === 1;
	nextButton.disabled = currentActive === circles.length;
}