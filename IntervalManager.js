export default class IntervalManager {
  constructor() {
    this.intervals = [];  // Массив для хранения всех идентификаторов интервалов
  }

  // Метод для установки интервала
  setInterval(callback, delay) {
    const intervalId = window.setInterval(callback, delay);  // Создаем интервал
    this.intervals.push(intervalId);  // Добавляем его в массив
    return intervalId;  // Возвращаем идентификатор интервала
  }

  // Метод для очистки одного интервала
  clearSingleInterval(intervalId) {
    const index = this.intervals.indexOf(intervalId);  // Ищем идентификатор
    if (index !== -1) {
      window.clearInterval(intervalId);  // Очищаем интервал
      this.intervals.splice(index, 1);  // Удаляем идентификатор из списка
  }
    }

  // Метод для очистки всех интервалов
  clearIntervals() {
    while (this.intervals.length !== 0){
    for (let intervalId of this.intervals) {
      this.clearSingleInterval(intervalId);  // Очищаем каждый интервал
    }
  }
  }

  // Метод для получения всех текущих интервалов
  getAllIntervals() {
    return this.intervals;
  }
}
