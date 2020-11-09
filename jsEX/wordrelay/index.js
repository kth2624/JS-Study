const btn = document.querySelector("#button");
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
  const w = word[lastIndex];
  const i = input[0];
  if (w === i) {
    console.log("if수행");
    //제시어칸 선택 / 제시어칸에 인풋값
    wordTag.textContent = input;
    errorTag.textContent = "";
    inputTag.value = "";
    inputTag.focus();
    //커서 깜빡임
  } else {
    //에러칸 선택 / 에러칸에 땡
    errorTag.textContent = "땡";
    inputTag.value = "";
    inputTag.focus();
  }
});
