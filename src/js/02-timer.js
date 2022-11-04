// const date1 = new Date();
// const date1 = Date.now();

// console.log('date1 :>> ', date1);
// // console.dir(date);
// setTimeout(() => {
//   const date2 = Date.now();
//   console.log('date2 :>> ', date2);
//   console.log('date1 :>> ', date1);

//   console.log(date2 - date1);
// }, 3000);

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  // создаем идентификатор интервала
  intervalId: null,
  // состояние идентификатора
  isActive: false,
  start() {
    //   и проверяем если идентификатор активный
    // выходим из функции и ничего не добавляем
    if (this.isActive) {
      return;
    }
    //   если не активный то делаем активным
    const startTime = Date.now();
    //   делаем активным
    this.isActive = true;
    // обращение через this так как это уже свойство объекта
    this.intervalId = setInterval(() => {
      const curentTime = Date.now();
      const deltaTime = curentTime - startTime;
      // const timeComponents = getTimeComponents(deltaTime);
      // переменная в которую как в объект записываются часы минуты и секунды в перерасчете от дельтатайт
      const timeComponents = getTimeComponents(deltaTime);
      // вызываем функцию и рисуем интерфейс
      updateClockface(timeComponents);
      //   console.log(`${hours}:${mins}:${secs}`);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    //   когда останавливаем состояние идентификатора меняем на фолс
    this.isActive = false;
  },
};

// timer.start();
refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

/**принимает время в милисекундах
 * высчитывает сколько в них вмещается часов/минут/секунд
 * рисует интерфейс
 */
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

/**принимает число, приводит к строке и добавляет в начало 0
 * если число меньше 2х символов
 */

function pad(value) {
  return String(value).padStart(2, '0');
}

/**
 *
 * @param {*} time принимает время в милисекундах
 * высчитывает сколько в них помещается часов/минут/секунд
 * @returns Возвращает объект со свойствами hours, mins, secs
 */
function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { hours, mins, secs };
}
