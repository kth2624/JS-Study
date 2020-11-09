// const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//   const wordTag = document.querySelector("#word");
//   const word = wordTag.textContent;
//   const inputTag = document.querySelector("#input");
//   const input = inputTag.value;
//   const errorTag = document.querySelector("#error");
//   console.log(word);
//   if (word[word.length - 1] === input[0]) {
//     wordTag.textContent = input;
//     errorTag.textContent = "";
//     inputTag.value = "";
//     inputTag.focus();
//   } else {
//     errorTag.textContent = "땡";
//     inputTag.value = "";
//     inputTag.focus();
//   }
// });

button = document.querySelector("#button");
button.addEventListener("click", () => {
  console.log("클릭");
  wordTag = document.querySelector("#word");
  inputTag = document.querySelector("#input");
  errorTag = document.querySelector("#error");
  word = wordTag.textContent;
  input = inputTag.value;
  console.log(word);
  console.log(input);
  if (word[word.length - 1] === input[0]) {
    console.log("if");
    wordTag.textContent = input;
    errorTag.textContent = "";
    inputTag.value = "";
    inputTag.focus();
  } else {
    errorTag.textContent = "땡";
    inputTag.value = "";
    inputTag.focus();
  }
});
