/* Возьмите выполненное предыдущее задание.

Сделайте так, чтобы функция создания выпадающего списка могла обрабатывать не только
массив объектов, но и другие виды входящих значений, а именно:

Массив примитивных значений типа string или number.
В таком случае value и label будут равны. Например: [1, 2, 'три', 'четыре', ...]

Объект с произвольными свойствами и значениями типа string или number.
В таком случае каждый элемент должен формироваться из ключа (value)
и значения (label) каждого свойства переданного объекта.
Например: { value1: 'Значение 1', value2: 'Значение 2', ... } */

console.log('JS файл c getStandartListItem() - подключен');

function item_list(value, label) {
  this.value=value;
  this.label=label;
}

function getStandartListItem(listItem) {
  let rightListItem = [];

  console.log('listItem.length', listItem.length);
  // Проверяем наличие длинны у обьекта
  if (listItem.length == undefined) {
    // это Объект с произвольными свойствами и значениями типа string или number
    console.log('Объект с произвольными свойствами и значениями типа string или number');
    console.log('listItem = ', listItem);
    // генерируем массив обьектов с правильными свойствами
    for( let curItem in listItem) {
      console.log('curItem = ', curItem);
      let newItem = new item_list(curItem.toString(), listItem[curItem].toString());
      rightListItem.push(newItem);
    }
    console.log(rightListItem);
    return rightListItem;
  } else {
    console.log('Object.keys(listItem[0]).length', Object.keys(listItem[0]).length);
    if (Object.keys(listItem[0]).length > 0) {
      // это Массив из обьектов с ключами
      console.log('Массив из обьектов с ключами')
      return listItem;
    } else {
      // это Массив примитивных значений типа string или number
      console.log('Массив примитивных значений типа string или number');
      console.log('listItem = ', listItem);
      // генерируем массив обьектов с правильными свойствами
      for( let curItem of listItem) {
        console.log('curItem = ', curItem);
        let newItem = new item_list(curItem.toString(), curItem.toString());
        rightListItem.push(newItem);
      }
      console.log(rightListItem);
      return rightListItem;
    }
  }
}

