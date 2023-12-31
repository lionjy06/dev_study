//예시 배열 선언
let test = [ 1 , 2, 3, 4, 5, 6, 7, 8, 9];
let practice = ["진영", "소연", "다빈", "철수", "영희"]
const aaa = []

//배열의 인덱스 값으로 추출
console.log( test[1]);



// << for문 >>
// let으로 선언, 예시 => for(let i = 0; i < test.length; i++)
for(let i =0; i < test.length; i++){
  if(test[i]%2==1){
    console.log(test[i]);
  }
}

// << map >>
// map => map은 반복문, return값을 배열로 준다.

const mm = test.map(v => {
  const abc = v * 2
  return abc
})


const abc = practice.map( v => {
  const d = v +"입니다.";
  return d
})
//console.loge(d); --> d는 지역변수이므로 x
console.log(abc);



//++ map과 조건문을 이용해서 글자의 길이가 6 이상인 값만 배열에 담아주세요
const tt = ["korea","russia","japan","france","america","china","hongkong","england","brazil"]

//[내가 쓴 답]
//const ttr = tt.map( v=>{
//   const ttt=[]        
//   if(v.length>=6){
//    return v
//   }
// })

//[좋은 답]
//const ttr = tt.map( v=>{
//   if(v.length>=6){
//    return v
//   }
// })




// << filter >>
// filter는 반복문으로 원하는 조건에 맞는 값만 리턴해준다.


//[더 좋은 답] =>. filter사용!
const ttr = tt.filter( v=>{
  return v.length >= 6
})
console.log(ttr)
//-------------------->>map은 배열로 결과 값을 return해준다 중요!!



// << forEach >>
// forEach => 반복문으로 return값을 배열로 주지 않는다. 각 값을 출력해줄 뿐

//비어있는 배열 aaa에 반복문으로 element 추가해주기
test.forEach(element => {
  aaa.push(element)
});



//***혼자 공부해보기 */
// << indexOf >>
// 배열안에 원하는 값이 있다면 해당 값의 index를 리턴하고 값이 없다면 -1을 리턴한다



//배열 생성
array = ['min', 'hope', 'jin', 'kok', 'hope'];

array.indexOf('hope')// 같은 값이 있어도 가장 첫번 째 값 반환
array.indexOf('hope',2); //==>결과 4, index값 3인 'jin'이후로 위치한 'hope'을 반환
array.indexOf('suga')//존재하지 않는 값 -1 반환

array.indexOf('kok',-1)// 시작점이 음수인 경우, 배열의 가장 끝 값을 -1로 잡고 왼쪽으로 갈수록 시작점값도 작아진다. 
array.indexOf('kok',-2)// 하지만 이때 검색 방향은 왼쪽에서 오른쪽으로 동일하며 인덱스 값도 동일하다.**



//함수로 예시
function myfunction(){
  if(array.indexOf('bts')!=-1){
    console.log('bts있음');
  }
  console.log('bts없음');
  
}
myfunction();




// << concat >>
// 두개의 배열을 하나의 배열로 합친다.

let arrayOne = [1,2,3]
let arrayTwo = [4,5,6]

//concat 사용법, 두 배열을 합쳐서 arrayResult에 넣어줌
let arrayResult = arrayOne.concat(arrayTwo);
console.log(arrayResult)





// << inclues >>
// 배열안에 원하는 값이 있는지 없는지 boolean값으로 리턴한다.

// includes 사용법 => 위에서 선언된 tt 베열에 'canada'가 있는지 확인하고 출력
console.log(tt.includes('canada'));

console.log(array.includes('bts'));
console.log(array.includes('kok'));
console.log(array.includes('hope'));