// Задание
// Напишите генератор массивов длиной count со случайными числами от n до m.
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Выведите результат с помощью console.log.

// Проверка результата
// Для проверки подставляйте различные значения count, m, n и смотрите на корректность результата.
// Примеры значений для проверки:
// n = 0, m = 100, count = 100;
// n = 2, m = 5, count = 50;
// n = 100, m = -5, count = 70;
// n = -3, m = -10, count = 42.

let checkout_values = [[0, 100, 100], [2, 5, 50], [100, -5, 70], [-3, -10, 42]];

function get_rnd_from_diap (n, m) {
  let diap = Math.abs(m - n);
  let min  = Math.min(n, m);
  let rnd = Math.round(Math.random()* diap + min);
  return(rnd);
}

for (let ch_vl of checkout_values) {
  let n = ch_vl[0];
  let m = ch_vl[1];
  let count = ch_vl[2];
  let rnd_arr = [];
  for (let i=0; i < count; i++) {
    rnd_arr.push(get_rnd_from_diap (n, m));
  }
  console.log('n =', n, 'm =', m, 'count =', count);
  console.log('array.length = ', rnd_arr.length);
  console.log('array = ', rnd_arr);
  console.log('--------------------------------------------');
}
