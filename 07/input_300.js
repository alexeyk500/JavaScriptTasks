// Из JavaScript создайте страницу с полем для ввода и пустым h2-элементом.
// Введённый в поле текст должен отображаться внутри h2-элемента, но с задержкой в 300 мс.
// При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и запускает новый.
// Таким образом программа должна ожидать завершения ввода пользователя и только после этого изменять текст в h2.

(function() {
  // создаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');

    appTitle.setAttribute("style", "display: block; text-align: center; margin-bottom: 30px; color: #B344C1;");
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаем элементы страницы
  function createSuperInputElement() {
    let input = document.createElement('input');
    let inputText = document.createElement('h2');

    input.classList.add('form-control');
    input.placeholder = 'Введите текст';
    input.setAttribute("style", "display: block; margin-bottom: 20px;")

    inputText.setAttribute("style", "display: inline-flex; justify-content: center; word-break: break-word; min-height: 45px; font-size: 32px; font-weight: 600; color:#F1F910;");
    inputText.textContent = '';

    return {input, inputText,};
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Создание и размещение элементов таймера на старинице
    let container = document.getElementById('superInputApp');
    container.setAttribute("style", " display: flex; flex-direction: column; width: 500px; margin-top: 50px; padding-top:20px; padding-bottom:20px; border-radius: 12px; background-color: #F1996B;");

    let superInputAppTitle = createAppTitle('Супер Input');
    let superInputAppElements = createSuperInputElement();

    container.append(superInputAppTitle);
    container.append(superInputAppElements.input);
    container.append(superInputAppElements.inputText);

    let timeoutId = null; // здесь будем хранить ID таймера

    // Обработчик ввода в input с задержкой 300 мс.
    superInputAppElements.input.addEventListener('input', function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        superInputAppElements.inputText.textContent = superInputAppElements.input.value;
        }, 300)
    });

  });

})();
