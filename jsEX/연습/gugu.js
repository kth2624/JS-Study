// document.querySelector("#button").addEventListener("click", () => {
//   const a = document.querySelector("#first").value;
//   const b = document.querySelector("#second").value;
//   const r = document.querySelector("#result");

//   if (a) {
//     if (b) {
//       const c = a * b;
//       r.textContent = c;
//     } else {
//       r.textContent = "두 번째 값을 입력하시오";
//     }
//   } else {
//     r.textContent = "첫 번째 값을 입력하시오.";
//   }
// });

document.querySelector("#button").addEventListener("click", () => {
  const num1 = document.querySelector("#first").value;
  const num2 = document.querySelector("#second").value;
  const re = document.querySelector("#result");

  if (num1) {
    if (num2) {
      const c = num1 * num2;
      re.textContent = c;
    } else {
      re.textContent = "두 번째 값을 입력해주시오";
    }
  } else {
    re.textContent = "두 번째 값을 입력해주시오";
  }
});
