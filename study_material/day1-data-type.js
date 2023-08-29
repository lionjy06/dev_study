// 여기서 배워볼 내용은 javascript의 자료형이에요!!
// js는 크게 두가지 자료형으로 나뉘어요 첫번째는 primitive value(원시형 자료), object(객체)에요

// primitive value
// string(문자형), number(숫자형), boolean(참:true,거짓:false), 
// null(값이 없는것), undefined(값은 있는데 할당 받지 않은것), symbol(변하지 않는 고유값이라는데 한번도 저도 한번도 써본적 없을만큼 잘안써요)
// BigInt(number보다 커다란 숫자를 표현할때 사용하는데 왠만하면 number) 

//string
const stringData = "이게 문자형 데이터에요!!"

//number
const numberData = 12222

//undefined
const undefinedData = undefined

//null
const nullData = null

//boolean
const trueBoolean = true
const falseBoolean = false

// object(객체)
// 객체는 {} 이런식으로 선언이 가능해요. 객체 안은 key와 value로 표현이 되는데 아래의 예시를 참고 해보시면 될거같아요.
// 그리고 객체는 ,로 다른 값들과 분리가 되요
// 그리고 이거는 처음 js만들면서 제작자의 실수로 생긴건데 [] 배열은 원래 array타입인데 js에서는 object(객체)로 표현되요
const testObject = {
 name:"소연",
 age:31,
 address: "서울",
 isMarried: false,
 friends:["다빈","진영"]
}
// testObject라는 변수안에 객체를 할당했는데 name,age,address,isMarried 같이 앞에 있는 값을 key라고 하고 그 key에 상대되는 소연,31,서울,false등을 value라고 해요
// 객체는 각 키에 해당하는 value에 접근이 가능해요(중요)
// 접근하는 방식은 dot(점)방식과 ["키이름"]으로 접근이 가능해요
// 아래에 예시를 들어 볼게요
const testName = testObject.name
const testAge = testObject.age
const testAddress = testObject["address"]
// 이런식으로 할당된 변수(testObject)에 dot(점)방식으로 접근이 가능해서 객체안의 값을 꺼내와서 다른 변수에 넣을수도 있어요. 저는 testObject라는 객체에있는
// name에 접근하여 key에 해당하는 value인 소연을 가져와서 testName이라는 변수에 할당했어요
// 그리구 [""] 방식으로도 객체에 접근가능해서 주소 정보를 testAddress에 할당했어요


//문제
const a = "abcdef"

const b = 123

const c = true

const d = undefined

const e = null

const f = false

const obj = {
    name:"alex",
    age:33,
    gender:"male",
    hobby:["watching tv", "soccer", "swim"],
    hasGirlFriend:true,

}

//설명을 깜빡한거같아 추가해요. 기존에 만들어져있던 객체에 key value를 추가할수 있어요. 물론 삭제, 수정도 가능해요
obj.job = "doctor"

// 심화문제
// 각 변수에 이름, 나이, 성별, 취미, 여자친구 여부를 할당해주세요
let practiceName;

let practiceAge;

let practiceGender;

let practiceHobbies;

let practiceGirlFriend;

// obj라는 변수에 personality라는 키를 추가해주시고 value는 good으로 해주세요

// obj라는 변수에 있는 age를 삭제해주세요

// hasGirlFriend를 false로 수정해주세요

// 답지는 day1-answer.js에 써주세요!