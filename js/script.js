//коментарии
"use strict";

//===Фунуції в JAVASCRIPT===========================================================
//Задача1
/*
function showName() {
  console.log('Вася!');
}

setTimeout(showName, 0);
console.log('Коля!');

//Задача2
showMessage();
function showMessage() {
  console.log('Сообщение');
}

//Задача3
showMessage();
let showMessage = function() {
  console.log('Сообщение');
}

 //Задача4
if (2 > 1) {
  function showMessage() {
    console.log('Сообщение');
  }
  showMessage();
}
*/

//===Масиви в JAVASCRIPT. Методи масивів. Редагування, пошук, сортування.=================================
/*
//Задача1 Яке число(довжину) ми отримаємо
let arr = ['Ваня', 'Іштван', 'Оля'];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
*/

//Задача2 Створити масив Users з елементами 'Ваня' та 'Іштван'.
//Додати 'Оля' в кінець.
//Замінити значення 'Іштван' на 'Петя'.
//Код для пошуку значень має працювати для масивів будь-якої довжини.
//Видалити перший елемент масиву та показати його.
//Вставити 'Маша' та 'Паша' напочаток масиву.
/*
let Users = ['Ваня', 'Іштван',];
Users.push('Оля');
Users[1] = 'Петя';
console.log(Users);
console.log(Users.indexOf('Оля'));
let result = Users.shift();
console.log(result);
Users.unshift('Маша','Паша');
console.log(Users);
*/

//result.splice(1,2,'Коля');
//console.log(result);

/*
//Задача3 Видалити елемент Іштван та повернути його в перемінну
let arr3 = ['Ваня', 'Іштван', 'Оля'];
let removed = arr3.splice(1,1);
console.log(removed);

//Задача4 Зробити із рядка масив
let str = 'Ваня,Іштван,Оля';
let arr4 = str.split(',');
console.log(arr4)

/*======================================
//===JavaScript Document object model (DOM). Зміни HTML CSS. Атрибути та властивості.==========================
//Задача1 Отримати в змінну елемент з атрибутом data-say-hi
//і прочититати значення цього атрибуту
<div data-say-hi="yes">Привет!</div>
*/
//const varOne = document.querySelector('[data-say-hi]');
//const attr = varOne.getAttribute('data-say-hi');
//console.log(attr);

//const varOne = document.querySelector('.attrtibute');
//const attr = varOne.getAttribute('data-say-hi');
//console.log(attr);
/*
//Задача2 Отримати в змінну елемент з текстом Йончі
<ul>
   <li>Корчі</li>
   <li>Йончі</li>
</ul>
*/
//const elements = document.querySelectorAll('li');
//let text = elements[1].textContent;
//console.log(text);

/*
//Задача3 Отримати в змінну колекцію елементів з класом like
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>
*/
//const varThree = document.querySelectorAll('.like');
//console.log(varThree);
/*

//Задача4 Куди добавиться <li>Текст</li>
list.insert
/ JS
const list = document.querySelector('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);

// HTML
<ul>
	<li>Пункт №1</li>
	<li>Пункт №2</li>
</ul>



//===JavaScript розміри прокрутка и координати элементів на сторінці і вікні браузера.=========================

// Задача №1.
Узнать ширину полосы прокрутки

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
console.log(mainElementWidth);

const windowWidth = window.innerWidth;
console.log(windowWidth);

const scrollWidth = windowWidth - mainElementWidth;
console.log(scrollWidth);

// Задача №2.
Заставьте браузер прокрутиться на 100px сверху
спустя секунду после открытия страницы

function scrollPage() {
  window.scrollTo({
    top:100,
    left:0,
    behavior:'smooth'
  })
}

setTimeout(scrollPage, 1000);

// Задача №3.
Получите координаты любых трех элементов на странице
*/
const itemOne = document.querySelector('.big-title');
const itemTwo = document.querySelector('.attrtibute');
const itemThree = document.querySelector('.title');

const itemOneCoords = itemOne.getBoundingClientRect();
console.log(itemOneCoords);

const itemTwoCoords = itemTwo.getBoundingClientRect();
console.log(itemTwoCoords);

const itemThreeCoords = itemThree.getBoundingClientRect();
console.log(itemThreeCoords);