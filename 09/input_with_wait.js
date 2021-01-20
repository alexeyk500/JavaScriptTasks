(() => {
  const WAIT_TIME_MS = 300;

  const textInput  = document.createElement('input');
  const textOutput = document.createElement('div');

  let timeOut;

  textInput.addEventListener('input', () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      textOutput.textContent = textInput.value;
    },WAIT_TIME_MS);
  });

  document.addEventListener('DOMContentLoaded',() => {
    document.body.append(textInput);
    document.body.append(textOutput);
  });

})();
