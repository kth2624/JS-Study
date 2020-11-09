const btn = document.querySelector("#button");
const dictionary = [];

//console.log(input);
//document.querySelector(아이디)는 그 아이디의 태그를 가져온다.
btn.addEventListener("click", () => {
  console.log("클릭수행");
  const wordTag = document.querySelector("#word");
  const word = wordTag.textContent;
  //.은 ~의를 의미하는 것 같다.
  const inputTag = document.querySelector("#input");
  const input = inputTag.value;
  const errorTag = document.querySelector("#error");

  const lastIndex = word.length - 1;
  //   //함수 스코프
  //   if (1 > 0) {
  //     const input = "함수안 input입니다.";
  //     console.log(input);
  //   }
  if (dictionary.includes(input)) {
    console.log("중복실행");
    errorTag.textContent = "중복입니다.";
  } else {
    if (input.length == 2) {
      if (word[lastIndex] === input[0]) {
        //   console.log("if수행");
        //제시어칸 선택 / 제시어칸에 인풋값
        wordTag.textContent = input;
        errorTag.textContent = "";
        inputTag.value = "";
        inputTag.focus();
        dictionary.push(input);
        //커서 깜빡임
      } else {
        //에러칸 선택 / 에러칸에 땡
        errorTag.textContent = "땡";
        inputTag.value = "";
        inputTag.focus();
      }
    } else {
      errorTag.textContent = "2글자만 입력하시오";
      inputTag.value = "";
      inputTag.focus();
    }
  }
  //   console.log(dictionary);
  //   console.log("아까 입력받은 input입니다.");
  //   console.log(input);
});
