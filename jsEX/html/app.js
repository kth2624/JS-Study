const body = document.body;
console.log(body);
const title = document.getElementById("title");
console.log(title);
const text = document.getElementsByClassName("text");
console.log(text);
function handleResize(){
	const width = window.innerWidth;
	console.log(width);
	if(width < 700){
		body.style.backgroundColor = "skyblue";
	}else if(width < 1000){
		body.style.backgroundColor = "blueviolet";
	}else
		body.style.backgroundColor = "orange";

}

window.addEventListener("resize", handleResize);