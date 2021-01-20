// Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список.
// В качестве аргументов функция должна принимать: массив строк с исходными email адресами,
// массив строк с email адресами в чёрном списке.

function array_difference(testedArray, subtractedArray) {
  differenceArray = [];
  for (let cur_element of testedArray) {
    if (subtractedArray.includes(cur_element) === false ) {
      differenceArray.push(cur_element)
    }
  }
  return differenceArray;
}

console.log(array_difference([1,2,3,4,5], [1,3,5]));
console.log(array_difference([1,2,3,4,5], [2,4]));

emailArr  = ['ivan@mail.ru','peter@yandex.ru','marya@icloud.com','grisha@mail.ru','kiwi_noreplay@kiwi.ru']
blackList = ['kiwi_noreplay@kiwi.ru', 'ivan@mail.ru']
console.log(array_difference(emailArr, blackList));


// НЕ ВЫПОЛНЯЛОСЬ - т.к. нет в лекциях
// В конце файла с кодом домашнего задания напишите конструкцию export default {название функции},
// чтобы была возможность автоматической проверки получившейся функции.
// export default {array_difference};
