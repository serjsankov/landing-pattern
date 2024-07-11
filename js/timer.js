// Получаем нужную дату
const newYear = new Date('April 29 2024 21:00:00');

// Находим value и текст
const daysVal = document.querySelector('.time-count__days .time-count__val');
const hoursVal = document.querySelector('.time-count__hours .time-count__val');
const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

const daysText = document.querySelector('.time-count__days .time-count__text');
const hoursText = document.querySelector('.time-count__hours .time-count__text');
const minutesText = document.querySelector('.time-count__minutes .time-count__text');
const secondsText = document.querySelector('.time-count__seconds .time-count__text');

// Функция которая склоняет числительные
function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function resetTimer(now) {
    while (now > newYear) {
        newYear.setDate(newYear.getDate() + 7);
    }
}

if (daysVal) {
    // Получаем сегодняшнюю дату
const timeCount = () => {
    let now = new Date();

    if (now > newYear) {
        resetTimer(now);
    }

    // Получаем разницу между нужной датой и датой реального времени 
    let leftUntil = newYear - now;

    // Переводим в дни, часы, секунды и округляем(Math.floor)| секунд, минут, дни
    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    // console.log(days)
    // В конце деление по модулю
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    // console.log(hours);
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    // console.log(minutes);
    let seconds = Math.floor(leftUntil / 1000) % 60;
    // console.log(seconds);

    // Выводим рассчитанное время
    daysVal.textContent = days;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secondsVal.textContent = seconds;

    // Склоняем слова
    daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
    hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
    minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
    secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);


    const daysV = days;
    const hoursV = hours;
    const minutesV = minutes;
    const secondsV = seconds;

    // Получаем svg круги прогресса
    let progressDaysDesk = document.querySelector('.chart-days'),
        progressHoursDesk = document.querySelector('.chart-hours'),
        progressMinutesDesk = document.querySelector('.chart-minutes'),
        progressSecondsDesk = document.querySelector('.chart-seconds');
    // Рассчитываем длину круга прогресса с помощью атрибута и выводим 
    progressDaysDesk.setAttribute('stroke-dasharray', `${0 + daysV * 6.6}  200`);
    progressHoursDesk.setAttribute('stroke-dasharray', `${0 + hoursV * 8.3}  200`);
    progressMinutesDesk.setAttribute('stroke-dasharray', `${0 + minutesV * 3.3}  200`);
    progressSecondsDesk.setAttribute('stroke-dasharray', `${0 + secondsV * 3.3}  200`);
}
timeCount();
setInterval(timeCount, 1000);
}