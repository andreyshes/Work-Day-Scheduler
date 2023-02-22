//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?

//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?

let localTime = moment().format("MMMM Do YYYY, h:mm:ss a");

let time = document.getElementById("currentDay");
time.textContent = localTime;
// currentTime.textContent = localTime;
const currentHour = moment().hour();

const saveData = () => {
	const eventZero = document.querySelector(".description-0");
	const saveDataZero = document.querySelector("#save-1");
	saveDataZero.addEventListener("click", (event) => {
		event.preventDefault();
		const firstEvent = eventZero.value;
		localStorage.setItem("firstEvent", firstEvent);
		const hour9 = document.querySelector(".hour-9");
		if (hour9 < currentHour) {
			eventZero.classList.add("past");
		}
	});
};

const eventOne = document.querySelector(".description-1");
const saveDataOne = document.querySelector("#save-2");
saveDataOne.addEventListener("click", (event) => {
	event.preventDefault();
	const secondEvent = eventOne.value;
	localStorage.setItem("secondEvent", secondEvent);
});

const eventTwo = document.querySelector(".description-2");
const saveDataTwo = document.querySelector("#save-3");
saveDataTwo.addEventListener("click", (event) => {
	event.preventDefault();
	const thirdEvent = eventTwo.value;
	localStorage.setItem("thirdEvent", thirdEvent);
});
const eventThree = document.querySelector(".description-3");
const saveDataThree = document.querySelector("#save-4");
saveDataThree.addEventListener("click", (event) => {
	event.preventDefault();
	const fourthEvent = eventThree.value;
	localStorage.setItem("FourthEvent", fourthEvent);
});
const eventFour = document.querySelector(".description-4");
const saveDataFour = document.querySelector("#save-5");
saveDataFour.addEventListener("click", (event) => {
	event.preventDefault();
	const fifthEvent = eventFour.value;
	localStorage.setItem("fifthEvent", fifthEvent);
});
const eventFive = document.querySelector(".description-5");
const saveDataFive = document.querySelector("#save-6");
saveDataFive.addEventListener("click", (event) => {
	event.preventDefault();
	const sixthEvent = eventFive.value;
	localStorage.setItem("sixthEvent", sixthEvent);
});
const eventSix = document.querySelector(".description-6");
const saveDataSix = document.querySelector("#save-7");
saveDataSix.addEventListener("click", (event) => {
	event.preventDefault();
	const seventhEvent = eventSix.value;
	localStorage.setItem("seventhEvent", seventhEvent);
});

const eventSeven = document.querySelector(".description-7");
const saveDataSeven = document.querySelector("#save-8");
saveDataSeven.addEventListener("click", (event) => {
	event.preventDefault();
	const eighthEvent = eventSeven.value;
	localStorage.setItem("eightEvent", eighthEvent);
});

const eventEight = document.querySelector(".description-8");
const saveDataEight = document.querySelector("#save-9");
saveDataEight.addEventListener("click", (event) => {
	const nineEvent = eventEight.value;
	localStorage.setItem("ninthEvent", nineEvent);

	const changeColor = () => {
		const hour5 = document.querySelector(".hour-5");
		if (hour5 < currentHour) {
			eventZero.classList.add("past");
		} else if (hour5 == currentHour) {
			eventZero.classList.add("present");
		} else (hour5 == currentHour);
		{
			eventZero.classList.add("future");
		}
	};
	changeColor();
});

saveData();
