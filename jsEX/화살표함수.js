function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => x + y;

//1,2,3,4 같은 기능

function not1(x) {
  return !x;
}

const not2 = (x) => !x;

//not1 no2 같은 기능

//화살표 함수 내부에 return문밖에 없는 경우 return문을 줄일 수 있다.
