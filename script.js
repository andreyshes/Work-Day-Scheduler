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
const CALENDAR_TIMES = [9, 10, 11, 12, 1, 2, 3, 4, 5];
setInterval(() => {
	time.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
	updateCalender();
}, 1000);

const removeClasses = (element) =>
	element.classList.remove("past", "present", "future");

const updateCalender = () => {
	const currentHour = moment().hour("h");
	const calenderRow = document.getElementById(`hour-${currentHour}`);
	if (!calenderRow) {
		CALENDAR_TIMES.forEach((element) => {
			const calenderRow = document.getElementById(`hour-${element}`);
			calenderRow.classList.remove("future", "present");
			calenderRow.classList.add("past");
		});
	} else {
		const timeIndex = CALENDAR_TIMES.findIndex((time) => time === currentHour);
		const hoursBefore = CALENDAR_TIMES.slice(0, timeIndex);
		const hoursAfter = CALENDAR_TIMES.slice(timeIndex + 1);
		const currentHourElement = document.getElementById(`hour-${currentHour}`);
		removeClasses(currentHourElement);
		currentHourElement.classList.add("present");
		hoursBefore.forEach((hour) => {
			const calenderRow = document.getElementById(`hour-${hour}`);
			removeClasses(calenderRow);
			calenderRow.classList.add("past");
		});
		hoursAfter.forEach((hour) => {
			const calenderRow = document.getElementById(`hour-${hour}`);
			removeClasses(calenderRow);
			calenderRow.classList.add("future");
		});
	}
};
time.textContent = localTime;

//grab the element
const eventZero = document.querySelector(".description-0");
const saveDataZero = document.querySelector("#save-1");
saveDataZero.addEventListener("click", (event) => {
	event.preventDefault();
	const firstEvent = eventZero.value;
	//set it to local storage
	localStorage.setItem("firstEvent", firstEvent);
});
//grab item from local storage
const firstItem = localStorage.getItem("firstEvent");
//set it to the text areas value
eventZero.value = firstItem;

const eventOne = document.querySelector(".description-1");
const saveDataOne = document.querySelector("#save-2");
saveDataOne.addEventListener("click", (event) => {
	event.preventDefault();
	const secondEvent = eventOne.value;
	localStorage.setItem("secondEvent", secondEvent);
});
const secondItem = localStorage.getItem("secondEvent");
eventOne.value = secondItem;

const eventTwo = document.querySelector(".description-2");
const saveDataTwo = document.querySelector("#save-3");
saveDataTwo.addEventListener("click", (event) => {
	event.preventDefault();
	const thirdEvent = eventTwo.value;
	localStorage.setItem("thirdEvent", thirdEvent);
});
const thirdItem = localStorage.getItem("thirdEvent");
eventTwo.value = thirdItem;

const eventThree = document.querySelector(".description-3");
const saveDataThree = document.querySelector("#save-4");
saveDataThree.addEventListener("click", (event) => {
	event.preventDefault();
	const fourthEvent = eventThree.value;
	localStorage.setItem("FourthEvent", fourthEvent);
});
const fourthItem = localStorage.getItem("FourthEvent");
eventThree.value = fourthItem;

const eventFour = document.querySelector(".description-4");
const saveDataFour = document.querySelector("#save-5");
saveDataFour.addEventListener("click", (event) => {
	event.preventDefault();
	const fifthEvent = eventFour.value;
	localStorage.setItem("fifthEvent", fifthEvent);
});
const fifthItem = localStorage.getItem("fifthEvent");
eventFour.value = fifthItem;

const eventFive = document.querySelector(".description-5");
const saveDataFive = document.querySelector("#save-6");
saveDataFive.addEventListener("click", (event) => {
	event.preventDefault();
	const sixthEvent = eventFive.value;
	localStorage.setItem("sixthEvent", sixthEvent);
});
const sixthItem = localStorage.getItem("sixthEvent");
eventFive.value = sixthItem;
const eventSix = document.querySelector(".description-6");
const saveDataSix = document.querySelector("#save-7");
saveDataSix.addEventListener("click", (event) => {
	event.preventDefault();
	const seventhEvent = eventSix.value;
	localStorage.setItem("seventhEvent", seventhEvent);
});
const seventhItem = localStorage.getItem("seventhEvent");
eventSix.value = seventhItem;

const eventSeven = document.querySelector(".description-7");
const saveDataSeven = document.querySelector("#save-8");
saveDataSeven.addEventListener("click", (event) => {
	event.preventDefault();
	const eighthEvent = eventSeven.value;
	localStorage.setItem("eightEvent", eighthEvent);
});
const eightItem = localStorage.getItem("eightEvent");
eventSeven.value = eightItem;

const eventEight = document.querySelector(".description-8");
const saveDataEight = document.querySelector("#save-9");
saveDataEight.addEventListener("click", (event) => {
	event.preventDefault();
	const nineEvent = eventEight.value;
	localStorage.setItem("ninthEvent", nineEvent);
});
const ninthItem = localStorage.getItem("ninthEvent");
eventEight.value = ninthItem;
