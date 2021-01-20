// Задание
// Танк едет по дороге, на которой могут быть противотанковые мины.
// Дорога должна быть представлена в виде массива roadMines из 10 boolean-элементов.
// Если элемент равен true, то это мина.
// Движение танка должно быть представлено как цикл,
// в котором одна итерация — продвижение танка на следующий участок дороги (следующий элемент массива).
// При передвижении выводить в консоль сообщение «танк переместился на ${position}»,
// где position — номер ячейки + 1.
// Если танк попал на мину, то нужно вывести сообщение «танк повреждён»,
// если это 1-й взрыв, и «танк уничтожен», если это 2-й взрыв.
// После 2-го взрыва танк считается уничтоженным и прекращает движение.

// Примеры для проверки:
// Проверьте работу кода на разных вариантах значений в массиве roadMines.

// Для roadMines = [true, true, true, true, true, true, true, true, true, true]
// вывод: танк переместился на 1, танк повреждён, танк переместился на 2, танк уничтожен.

// Для roadMines = [true, false, false, false, false, false, false, false, false, true]
// вывод: танк переместился на 1, танк повреждён, танк переместился на 2, 3, 4, 5, 6, 7, 8, 9, 10, танк уничтожен.

// Для roadMines = [false, false, false, true, false, false, false, false, false, false]
// вывод: танк переместился на 1, 2, 3, 4, танк повреждён, танк переместился на 5, 6, 7, 8, 9, 10.

// Для roadMines = [false, false, false, false, false, false, false, false, false, false]
// вывод: танк переместился на 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

let roadMines_0 = [[true, true, true, true, true, true, true, true, true, true], ['танк переместился на 1, танк повреждён, танк переместился на 2, танк уничтожен']];
let roadMines_1 = [[true, false, false, false, false, false, false, false, false, true],['танк переместился на 1, танк повреждён, танк переместился на 2, 3, 4, 5, 6, 7, 8, 9, 10, танк уничтожен']];
let roadMines_2 = [[false, false, false, true, false, false, false, false, false, false],['танк переместился на 1, 2, 3, 4, танк повреждён, танк переместился на 5, 6, 7, 8, 9, 10']];
let roadMines_3 = [[false, false, false, false, false, false, false, false, false, false],['танк переместился на 1, 2, 3, 4, 5, 6, 7, 8, 9, 10']];

let arr_roadMines = [roadMines_0, roadMines_1, roadMines_2, roadMines_3];

for (let cur_arr_roadMines of arr_roadMines) {
  roadMines   = cur_arr_roadMines[0];
  true_result = cur_arr_roadMines[1];
  let damage_level = 0;
  let str_roadMines = '';
  let long_str = true;
  let add_damage = false;

  //  Движение танка
   for(let position=0; position < roadMines.length; position++) {
    // console.log(position, roadMines[position]);
    if (roadMines[position]==true) {
      damage_level += 1;
      add_damage = true;
    }
    if (damage_level == 0) {
      if (long_str == true) {
        str_roadMines += `танк переместился на ${parseInt(position)+1}, `;
        long_str = false;
      } else {
        if (position < roadMines.length-1) {
          str_roadMines += `${parseInt(position)+1}, `;
        } else {
          str_roadMines += `${parseInt(position)+1}`;
        }
      }
    }
    if (damage_level == 1) {
      if (long_str == true ) {
        str_roadMines += `танк переместился на ${parseInt(position)+1}, `;
        long_str = false;
      } else {
        if (position < roadMines.length-1) {
          str_roadMines += `${parseInt(position)+1}, `;
        } else {
          str_roadMines += `${parseInt(position)+1}`;
        }
      }
      if (add_damage == true) {
        str_roadMines += 'танк повреждён, ';
        long_str = true;
        add_damage = false;
      }
      continue;
    }
    if (damage_level == 2) {
      if (long_str == true ) {
        str_roadMines += `танк переместился на ${parseInt(position)+1}, `;
        long_str = false;
      } else {
        str_roadMines += `${parseInt(position)+1}, `;
      }
      str_roadMines += 'танк уничтожен';
      break;
    }
   }
  console.log(str_roadMines);
  console.log('=');
  console.log(true_result[0]);
  console.log('--------------------------------------------');
}
