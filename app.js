// Input Values
const Bill_input = document.querySelector('.bill-input');
const People_count = document.querySelector('.people-count');
const Tips = document.querySelectorAll('.tips');
const Custom_tip = document.querySelector('.custom');
const Tip_value_person = document.querySelector('.tip-value-person');
const Total_tip_value = document.querySelector('.tip-value-total');
const Reset = document.querySelector('.reset-btn');

//Intial value
Bill_input.value = 0.0;
People_count.value = 1;
Tip_value_person.innerHTML = '$' + (0.0).toFixed(2);
Total_tip_value.innerHTML = '$' + (0.0).toFixed(2);

let bill = 0.0;
let people = 1;
let tip_value = 5;

//Event Listerners
Bill_input.addEventListener('input', setBillValue);
People_count.addEventListener('input', setPeopleNos);
Custom_tip.addEventListener('input', setCustomTip);
Tips.forEach((tip) => {
	tip.addEventListener('click', clickHandeler);
});
Reset.addEventListener('click', resetAll);

//Functions
function setBillValue() {
	bill = Bill_input.value;
	calculate();
}

function setPeopleNos() {
	people = People_count.value;
	calculate();
}

function setCustomTip() {
	tip_value = Custom_tip.value;
	calculate();
}

function clickHandeler(e) {
	Tips.forEach((tip) => {
		tip.classList.remove('btn-active');
		if (e.target.innerHTML == tip.innerHTML) {
			tip.classList.add('btn-active');
			tip_value = parseFloat(tip.innerHTML);
		}
	});
	calculate();
}

function resetAll() {
	Bill_input.value = 0.0;
	People_count.value = 1;
	Tip_value_person.innerHTML = '$' + (0.0).toFixed(2);
	Total_tip_value.innerHTML = '$' + (0.0).toFixed(2);
	Custom_tip.value = '';
}
function calculate() {
	const tip = (bill * tip_value) / 100 / people;
	const total = (bill * tip_value) / 100;
	Tip_value_person.innerHTML = tip.toFixed(2);
	Total_tip_value.innerHTML = total.toFixed(2);
}
