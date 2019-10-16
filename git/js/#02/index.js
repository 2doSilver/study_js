/*function sayHello(name, age) {
    console.log('Hello~ ', name);
    console.log("You have ", age, "years of age.");
}

sayHello("Hailey", 28);*/

/*function sayHello(name, age) {
    console.log(`Hello~ ${name} you are ${age} years old.`);
}

sayHello("Hailey", 28);*/

/*function sayHello(name, age) {
    return `Hello~ ${name}! You are ${age} years old.`;
}

const greetHailey = sayHello("Hailey", 28);

console.log(greetHailey);

const calculator = {
    plus : function (num1, num2) {
        return num1 + num2;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);*/

/*const title = document.getElementById("title");
console.log(title);

console.error("WOW");

title.innerHTML = "Hi! From JS";

title.style.color = "teal";
document.title = "I own you now";*/

/*const title2 = document.querySelector(".title");
title2.innerHTML = "Hello~";*/

/*const title = document.querySelector("#title");

function handleResize(event) {
    console.log(event);
}

//window.addEventListener("resize", handleResize); // 윈도우가 resize할 때 handleResize함수 호출
window.addEventListener("resize", handleResize);

function handleClick() {
    title.style.color = "teal";
}

title.addEventListener("click", handleClick);*/

/*if ("10" == 10) {
    console.log("hi~");
} else {
    console.log("wow...");
}

const age = prompt("How old are you?");

if (age > 18) {
    console.log("You can drink!");
} else {
    console.log("You cant drink~");
}*/

/*
const title = document.querySelector("#title");
const BASE_COLOR = "teal";
const OTHER_COLOR = "purple";

function handleClick() {
    const currentColor = title.style.color;
    
    if (currentColor == BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }

    console.log(title.style.color);
}

function init() {
    title.style.color = "teal";
    title.addEventListener("click", handleClick);
    //title.addEventListener("mouseenter", handleClick);
}

init();
// 이벤트에 대해 알고 싶으면 javascript dom evnet mdn을 검색

function handleOffline() {
    console.log("Bye~ Offline!!!");
}
function handleOnline() {
    console.log("Hello~ Online!!!");
}

window.addEventListener("offline", handleOffline); //wifi 연결 끊어지면 실행
window.addEventListener("online", handleOnline); //wifi 연결 다시 하면 실행
*/

const title = document.querySelector("#title");
const CLICKED_CALSS = "clicked";

function handleClick() {
    /*const hasClass = title.classList.contains(CLICKED_CALSS);
    if (!hasClass) {
        title.classList.add(CLICKED_CALSS);
    } else {
        title.classList.remove(CLICKED_CALSS);
    }*/

    // 위에 내용이랑 똑같은 거 = toggle
    // 클래스 이름 안을 검색해서 있으면 remove 없으면 add함
    title.classList.toggle(CLICKED_CALSS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();