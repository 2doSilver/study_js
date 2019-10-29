// to do : learning javaScript

/*
    hello!
    this is Hailey's test code!
    have a happy day~
*/

/*
    let : 변수 / const : 상수
    변수를 사용할 때 되도록 const를 쓰도록 > 필요할 때만 let을 쓰자
    "" : String으로 안에 숫자를 넣어도 숫자가 아님 "123" != 123
*/

/*
//String
const what = "Hailey";
console.log(what);

//Boolean
const what2 = true;
console.log(what2);

//Number
const what3 = 12312;
console.log(what3);

//Float
const what4 = 465.23;
console.log(what4);
*/

// array 선언하려면 [] 사용
const a = 12121;
const daysOfWeek = [
    "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN", 
    a /* 변수도 넣을 수 있음 */
];

console.log(daysOfWeek);
console.log(daysOfWeek[2]);
console.log(daysOfWeek[121]); // undefined

// Object 선언하려며 {} 사용
const ldeInfo = {
    name : "DOEUNLEE",
    age : 28,
    gender : "Female",
    favoritColor : ["purple", "red", "yellow", "thistle"],
    favoritMovie : [
        {
            name : "StarWars",
            star : 5
        }, {
            name : "lalaLand",
            star : 4.5
        }, {
            name : "HarryPotter",
            star : 4
        }
    ]
};

console.log(ldeInfo);
console.log("name : " + ldeInfo.name);
ldeInfo.name = "Hailey";
console.log("name : " + ldeInfo.name);
console.log("favoritMovieName : " + ldeInfo.favoritMovie[0].name);