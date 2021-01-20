// Создайте HTML-страницу с полем для ввода числа, кнопкой и div-элементом с числом 0.
// В поле для ввода должно вводиться число с количеством секунд, а кнопка должна запускать таймер.
// При запуске таймера число в div-элементе должно замениться на введённое в поле.
// Затем каждую секунду оно должно уменьшаться на единицу до тех пор, пока не дойдёт до 0.
// При этом таймер должен корректно работать, если во время его работы пользователь запускает его заново.

(function() {
  // создаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');

    appTitle.setAttribute("style", "display: block; text-align: center; margin-bottom: 30px; color: blue;");
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаем элементы таймера
  function createTimerElement() {
    let input = document.createElement('input');
    let button = document.createElement('button');
    let countDown = document.createElement('div');

    input.classList.add('form-control');

    input.placeholder = 'Введите кол-во секунд для таймера';
    input.setAttribute("style", "display: block; margin-bottom: 20px;")

    button.classList.add('btn', 'btn-primary');
    button.setAttribute("style", "display: block; margin-left: auto; margin-right: auto; margin-bottom: 20px;")
    button.textContent = 'Запуск'

    countDown.setAttribute("style", "text-align: center; word-break: break-word; font-size: 32px; font-style: bold; color:#61F910;");
    countDown.textContent = 'Осталось 0 сек.';

    return {input, button, countDown,};
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Создание и размещение элементов таймера на старинице
    let container = document.getElementById('timerApp');
    container.setAttribute("style", "width: 500px; margin-top: 50px; padding-top:20px; padding-bottom:20px; border-radius: 12px; background-color: #C1876B;");

    let timerAppTitle = createAppTitle('Супер Таймер');

    let timerAppElements = createTimerElement();

    container.append(timerAppTitle);
    container.append(timerAppElements.input);
    container.append(timerAppElements.button);
    container.append(timerAppElements.countDown);

    // Обратный отчет с задержкой
    function doCountDown(countTime) {
      let innerCountTime = countTime
      console.log('countTime', countTime);
      (function myLoop (i) {
        timeoutId = setTimeout(function () {
          console.log('innerCountTime', innerCountTime);
          timerAppElements.countDown.textContent = `Осталось ${innerCountTime.toString()} сек.`;
          if (--innerCountTime) {
            myLoop(innerCountTime);
          } else {
            timerAppElements.countDown.textContent = `${countTime.toString()} сек. уже прошло` ;
            timerAppElements.button.textContent = 'Запуск';
            timerAppElements.button.classList.remove('btn-danger');
            timerAppElements.button.classList.add('btn-primary');
          }
        }, 1000)
      })(countTime);
    }

    let timeoutId = null; // здесь будем хранить ID таймера

    // Обработчик события нажатия на кнопку - Запуск/Перезапуск
    timerAppElements.button.addEventListener('click', function() {
      clearTimeout(timeoutId);
      console.log('timeoutId = ', timeoutId);
      let setCountTime = parseInt(timerAppElements.input.value)
      if (timerAppElements.button.textContent == 'Запуск') {
        doCountDown(setCountTime);
        timerAppElements.button.textContent = 'Перезапуск';
        timerAppElements.button.classList.remove('btn-primary');
        timerAppElements.button.classList.add('btn-danger');
      } else {
        timerAppElements.countDown.textContent = 'Перезаводим таймер на ' + timerAppElements.input.value + ' сек.';
        doCountDown(setCountTime);
      }
    });

    // Обработчик ввода в input количества секунд
    timerAppElements.input.addEventListener('input', function() {
      timerAppElements.countDown.textContent = 'Заводим таймер на ' + timerAppElements.input.value + ' сек.';
    });
  });
})();
