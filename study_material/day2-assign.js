
// var는 호이스팅(Hoisting)으로 선언이 끌어올려진다, 하지만 let, const는 x
//console.log(a); -->undifined
//console.log(c); -->오류


// << var >> ==> 재할당과 선언 가능

var a = 3;
console.log(a);

//재선언
var a = 33;
console.log(a);


// << let >> ==> 재할당 가능, 재선언 불가능

let b = "안녕하세요";

//재할당
if(a){
  b = "잘먹었습니다"
} else {
  b = "배고파요"
}


// << const >> ==> 조건에 따라 값이 달라져야하는 경우를 제외하고 const사용
const c = 55;

//** var와 let의 차이점에 대해서 명확히 알자 */