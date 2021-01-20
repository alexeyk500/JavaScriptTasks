/* Напишите функцию,
создающую выпадающий список на веб-странице (HTML select) из массива объектов со значениями.
Массив должен содержать объекты со свойствами:
value — значение для атрибута value тэга option
label — значение для содержимого тэга option
(заголовок элемента при открытии списка или выбранного значения)
Вторым аргументом функция должна принимать выбранное значение
(value выбранного по умолчанию элемента).

По умолчанию выбирается 0-й элемент массива значений.
Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.

Возвращаемое значение — DOM-элемент select. */

console.log('JS файл c createSelect() - подключен')

function createSelect(listItem, selectedValue=listItem[0].value) {
  let found_selectedValue = false;
  // console.log('selectedValue =', selectedValue);
  // console.log(typeof(selectedValue));
  let my_select = document.createElement('select');
  for (let cur_item of listItem) {
    let new_option = document.createElement('option');
    new_option.value = cur_item.value;
    new_option.label = cur_item.label;
    my_select.append(new_option);
    if (cur_item.value == selectedValue) {
      // console.log('Нашел');
      found_selectedValue = true;
      my_select.value = cur_item.value;
    }
  }
  if (found_selectedValue != true) {
    my_select.value = listItem[0].value;
  }
  my_select.style.display = 'block';
  my_select.style.margin = '0 auto';
  return my_select;
}


