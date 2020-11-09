const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");
//Math.floor(Math.random() * 10) 0~9까지 랜덤한 수
let count = 1;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer = [];

for (i = 0; i < 4; i++) {
  const index = Math.floor(Math.random() * numbers.length); //0~9 정수
  answer.push(numbers[index]);
  numbers.splice(index, 1);
  console.log(answer[i]);
} // 숫자 4개 중복없이 뽑기
console.log(answer);

check.addEventListener("click", () => {
  console.log(count);
  console.log(answer);

  const value = input.value; //문자열 ex)'3026'
  input.value.textContent = "";
  input.focus();
  //조건문 안에 false인경우 '', 0, NaN, false, undefined
  if (value && value.length === 4) {
    console.log("4가지일경우");
    // 값이 존재하고 4자리일경우 참
    if (value === answer.join("")) {
      logs.appendChild(document.createTextNode("HR"));
      logs.appendChild(document.createElement("br"));
    } else {
      console.log("다름");
      let strike = 0;
      let ball = 0;
      for (const [aIndex, aNumber] of answer.entries()) {
        for (const [iIndex, iString] of input.value.split("").entries()) {
          if (aNumber === Number(iString)) {
            if (aIndex === iIndex) {
              strike += 1;
            } else {
              ball += 1;
            }
          }
        }
      }
      logs.append(
        `${input.value}: ${strike} strike ${ball} ball`,
        document.createElement("br")
      );
      if (count > 10) {
        alert("횟수초과입니다.");
        logs.appendChild(
          document.createTextNode(`Game Over: ${answer.join("")}`)
        );
      } else {
        count += 1;
      }
    }
  }
});
