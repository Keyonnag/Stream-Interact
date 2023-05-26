// Truth or Dare Application

const storageObj = {
	apiURL: 'https://streaminteract.onrender.com',
	dareBTN: document.getElementById('dareBTN'),
	truthBTN: document.getElementById('truthBTN'),
	wyrBTN: document.getElementById('wyrBTN'),
	nhieBTN: document.getElementById('nhieBTN'),
	paranoiaBTN: document.getElementById('paranoiaBTN'),
};

function setUpBTNs(storageObj) {
	storageObj.dareBTN.addEventListener('click', async () => {
		const dareData = await fetchDare(storageObj);
		const randomDare = getRandomQuestion(dareData);
		updateQuestion(randomDare.type, randomDare.question);
	});

	storageObj.truthBTN.addEventListener('click', async () => {
		const truthData = await fetchTruth(storageObj);
		const randomTruth = getRandomQuestion(truthData);
		updateQuestion(randomTruth.type, randomTruth.question);
	});

	storageObj.wyrBTN.addEventListener('click', async () => {
		const WYRData = await fetchWYR(storageObj);
		const randomWYR = getRandomQuestion(WYRData);
		updateQuestion(randomWYR.type, randomWYR.question);
	});

	storageObj.nhieBTN.addEventListener('click', async () => {
		const nhieData = await fetchNHIE(storageObj);
		const randomNHIE = getRandomQuestion(nhieData);
		updateQuestion(randomNHIE.type, randomNHIE.question);
	});

	storageObj.paranoiaBTN.addEventListener('click', async () => {
		const paranoiaData = await fetchPARANOIA(storageObj);
		const randomParanoia = getRandomQuestion(paranoiaData);
		updateQuestion(randomParanoia.type, randomParanoia.question);
	});
}
setUpBTNs(storageObj);

// Fetch Truth

async function fetchTruth(obj) {
	const response = await fetch(`${obj.apiURL}/truth`);
	const data = await response.json();
	return data;
}

// Fetch Dare
async function fetchDare(obj) {
	const response = await fetch(`${obj.apiURL}/dare`);
	const data = await response.json();
	return data;
}

// Fetch Would You rather
async function fetchWYR(obj) {
	const response = await fetch(`${obj.apiURL}/wyr`);
	const data = await response.json();
	return data;
}

// Fetch Never Have I Ever
async function fetchNHIE(obj) {
	const response = await fetch(`${obj.apiURL}/nhie`);
	const data = await response.json();
	return data;
}

// Paranoia Question
async function fetchPARANOIA(obj) {
	const response = await fetch(`${obj.apiURL}/paranoia`);
	const data = await response.json();
	return data;
}

// button event listeners

// Create Result box function

// get random
function getRandomQuestion(questionList) {
	const randomIndex = Math.floor(Math.random() * questionList.length);
	return questionList[randomIndex];
}

function updateQuestion(type, question) {
	const questionType = document.getElementById('questionType');
	const questionText = document.getElementById('questionText');
	questionType.textContent = type;
	questionText.textContent = question;
}
