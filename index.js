const SHAKE_TIME 			= 2000;		//in milliseconds
const DISPLAY_ANSWER_TIME 	= 2250;

const answersArr = [
	"Definitely",
	"Yes",
	"Maybe",
	"No",
	"Hell No!"
];

const $ 			= (elem) => document.querySelector(elem); // returning first element in document that matches slector , const = declaring a variable //
const displayAnswer = (elem, arr) => elem.innerText = arr[Math.floor(Math.random()*arr.length)];
const resetElemVal 	= (elem) => {
	elem.value = "";
	elem.innerText = "";
};

const shakeElem = (elem) => {
	elem.classList.add("shake"); // returns some css properties //
	setTimeout(() => elem.classList.remove("shake"), SHAKE_TIME);
};

window.onload = () => {   // load the page //
	let askBtn 		= $("#btn");			//ask button //
	let question 	= $("#questionArea");	//question textarea //
	let eightBall 	= $("#eightBall");		//8 ball //
	let answer 		= $("#answer");			//answer display //

	askBtn.addEventListener("click", () => {
		if (question.value.length < 1) {
			alert('Enter a question');
		} else {
			resetElemVal(answer);			//remove previous value, if any //
			shakeElem(eightBall);			
			setTimeout(() => displayAnswer(answer, answersArr), DISPLAY_ANSWER_TIME);
			resetElemVal(question);			//remove previous value, if any//
		}
	});
};


