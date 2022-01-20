const clock = document.querySelector("#clock");

function getClock(){
	const date = new Date();
	const xmas = new Date(2022,11,25).getTime();
	const milliSecond = xmas - date;
	// console.log(milliSecond);
	const days = String(Math.floor(milliSecond / 1000 / 60 / 60 / 24)).padStart(3,"0");
	const hours = String(Math.floor(milliSecond / 1000 / 60 / 60) % 24).padStart(2,"0");
	const minutes = String(Math.floor(milliSecond / 1000 / 60) % 60).padStart(2,"0");
	const seconds = String(Math.floor(milliSecond / 1000) % 60).padStart(2,"0");
	clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock,1000);