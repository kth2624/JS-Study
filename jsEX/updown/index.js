const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

let count = 6;
let answer = [];

answer = Math.floor(Math.random() * 100 + 1); //1~100 정수

console.log(answer);

check.addEventListener("click", () => {
  console.log(count);
  console.log(answer);
  input.value.textContent = "";

  const value = Number(input.value);
  input.focus();
  console.log(value);

  console.log(typeof value);
  console.log(typeof answer);

  if (value === answer) {
    logs.appendChild(document.createTextNode("정답입니다."));
    logs.appendChild(document.createElement("br"));
  } else {
    console.log("다름");
    if (value < answer) {
      logs.append(
        `${input.value} 보다 up!   남은 횟수 : ${count}`,
        document.createElement("br")
      );
    } else {
      logs.append(
        `${input.value} 보다 down!  남은 횟수 : ${count}`,
        document.createElement("br")
      );
    }
    if (count <= 0) {
      alert("Game Over!");
      logs.appendChild(document.createTextNode(`Game Over: ${answer}`));
    } else {
      count -= 1;
    }
  }
});
