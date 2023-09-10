// 모든 문제는 구글링이 가능하며 필요시 구글링으로 해결방법을 찾아주세요!


// 문제 1 ["안녕","내이름은","양진영이야"]를 "안녕하세요 내이름은 양진영이야" 로 만들어주세요
const aa = ["안녕","내이름은","양진영이야"];
aa.fill('안녕하세요',0,1);

aa.join(' ');




// 문제 2 [1,2,3,4,5,6,7,8,9,10] 중 7에 해당하는 index 번호를 리턴해주세요

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const found = arr.findIndex((v) => {
//   return v === 7;
// });
// console.log(found);


// 문제 3 ["a","b","c","e"]배열을 ["a","b","c","d","e"]로 만들어주세요



// 문제 4 [1,2,3,4]를 [1,2,3,4,5]로 만들어주세요
const num = [1,2,3,4];

num.push(5);
console.log(num);


//문제 5 [1,2,3,4,5]를 [1,2,3,4]로 만들어주세요
num.pop();
console.log(num);


// 문제 6 [2,3,4,5]를 [1,2,3,4,5]로 만들어주세요
const num2 = [2,3,4,5];

num2.unshift(1);
console.log(num2)


// 문제 7 [1,2,3,4,5]를 [2,3,4,5]로 만들어주세요

num2.shift();
console.log(num2);


// 문제 8 [1,2,3,4,5,6,7,10]의 배열이 11보다 작은지 확인해보고 전부 맞으면 true를 리턴해주세요

// const array = [1,2,3,4,5,6,7,10];
// const array_test = v => v < 11 ;

// console.log(array.every(array_test));


// const testarr = [1,2,3,4,5,6,7,10];
// const result = testarr.every((v) => {
//   return v < 11
// })
// console.log(result);

// 문제 9 [1,2,3,4,5,6,7,9,12]의 배열중 하나라도 11보다 큰게 있다면 true를 리턴해주세요


// const testArr = [1,2,3,4,5,6,7,9,12];
// const resultArr = testArr.some((v) => {
//   return v >11
// })
// console.log(resultArr);



//<<flat>>
// const a = [1,2,[3,4,[5,6]]];

// const b = a.flat()//기본은 1,

// console.log(b)

//<<Array.from()>>

// const c = [ 1, 2, 3]

// Array.from(c,(x) => x -1 );


//<<slice>>
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const a = animals.slice(-1);
console.log(a);
console.log(animals);



// <<배열에서 5인 값을 고르고, 곱하기 2해서 새로운 배열 만들기>>
const arr = [1,2,3,4,5,6,7,8,9,10];

const result = arr.filter((v) => v >= 5 ).map(v => v * 2);
console.log(result);

// Array.from(result,(x) => x*2);

//과제 <<[1,2,3,4,5,6,7,8,9,10]배열에서 짝수인 값을 뽑아, 각 뽑아낸 값들의 index번호를 가져와 곱하기2를 해준 값으로 새로운 배열 만들기>>
//[2,6,10,14,18]
