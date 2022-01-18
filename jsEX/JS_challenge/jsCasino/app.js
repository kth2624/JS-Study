const maxNum = document.querySelector("#maxnum");
const myNum = document.querySelector("#mynum");
const game = document.querySelector("#game");
const choice = document.querySelector("#choice");
const result = document.querySelector("#result");

function onPlayClick(event){
	event.preventDefault();
	const max = parseInt(maxNum.value);
	const n = parseInt(myNum.value);
	if(n < 0 || n > max || max < 0){
		if(n < 0 || max < 0){
			alert("0 이상 숫자로 입력해주세요");
		}
		if(n > max){
			alert(`${max} 이하의 숫자를 입력해주세요`);
		}
		choice.innerText = "";
		result.innerText = "";
	}
	else{
		const random = Math.floor(Math.random() * (max + 1));
		choice.innerText = `You chose: ${n}, the machince chose: ${random}.`;
		if(n === random){
			result.innerText = "You Won!";
		}else{
			result.innerText = "You lost!";
		}
	}
}

game.addEventListener("submit",onPlayClick);