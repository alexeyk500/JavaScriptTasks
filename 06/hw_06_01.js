/*
Напишите функцию, фильтрующую массив объектов по значению свойства.
Массив, название свойства и нужное значение должны передаваться в качестве аргументов.

Пример использования:
let objects = [
{ name: 'Василий', surname: 'Васильев' },
{ name: 'Иван', surname: 'Иванов' },
{ name: 'Пётр', surname: 'Петров' }
]

fn - функция, которую нужно написать (хорошее название тоже нужно придумать)
let result = fn(objects, 'name', 'Иван');

Результат выполнения должен быть:
[
{ name: 'Иван', surname: 'Иванов' }
]
*/

let objects = [
  { name: 'Василий', surname: 'Васильев', age: 25 },
  { name: 'Иван', surname: 'Иванов', age: 45 },
  { name: 'Пётр', surname: 'Петров', age: 35 },
  { name: 'Маша', surname: 'Петрова', age: 19 },
  { name: 'Оля', surname: 'Иванова', age: 45 },
  ]

function findObject(objectsArr, key, value) {
  foundArr = [];
  for (let curObject of objectsArr) {
    let objEntries = Object.entries(curObject)
    for (let [objKey, objValue] of objEntries) {
      if ((objKey===key)&&(objValue === value)) {
        foundArr.push(curObject);
      }
    }
  }
  return foundArr;
}

console.log(findObject(objects, 'name', 'Пётр'));
console.log();
console.log(findObject(objects, 'age', 45));
