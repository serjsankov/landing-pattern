const timer = {
    timerEl: document.querySelector(".timer"),
    newYear: new Date("April 4 2023 00:00:00"),
    // Получаем нужную дату
    daysVal: document.querySelector(".time-count__days .time-count__val"),
    // Находим value и текст
    hoursVal: document.querySelector(".time-count__hours .time-count__val"),

    minutesVal: document.querySelector(".time-count__minutes .time-count__val"),
    secondsVal: document.querySelector(".time-count__seconds .time-count__val"),
    daysText: document.querySelector(".time-count__days .time-count__text"),
    hoursText: document.querySelector(".time-count__hours .time-count__text"),
    minutesText: document.querySelector(
        ".time-count__minutes .time-count__text"
    ),
    secondsText: document.querySelector(
        ".time-count__seconds .time-count__text"
    ),

    // Функция которая склоняет числительные
    declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[
            number % 100 > 4 && number % 100 < 20
                ? 2
                : cases[number % 10 < 5 ? number % 10 : 5]
        ];
    },

    // Переводим дату на неделю вперед
    resetDate() {
        const x = new Date();

        while (x > this.newYear) {
            this.newYear.setDate(this.newYear.getDate() + 7);
        }
    },
    // Получаем сегодняшнюю дату
    timeCount() {
        let now = new Date();

        // Получаем разницу между нужной датой и датой реального времени
        let leftUntil = this.newYear - now;

        if (leftUntil < 0) {
            this.resetDate();
            return;
        }

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
        this.daysVal.textContent = String(days).padStart(2, "0");
        this.hoursVal.textContent = String(hours).padStart(2, "0");
        this.minutesVal.textContent = String(minutes).padStart(2, "0");
        this.secondsVal.textContent = String(seconds).padStart(2, "0");

        // Склоняем слова
        this.daysText.textContent = this.declOfNum(days, [
            "день",
            "дня",
            "дней",
        ]);
        this.hoursText.textContent = this.declOfNum(hours, [
            "час",
            "часа",
            "часов",
        ]);
        this.minutesText.textContent = this.declOfNum(minutes, [
            "минута",
            "минуты",
            "минут",
        ]);
        this.secondsText.textContent = this.declOfNum(seconds, [
            "секунда",
            "секунды",
            "секунд",
        ]);
    },
    init() {
        if (!this.timerEl) return;
        this.timeCount = this.timeCount.bind(this);
        this.timeCount();
        setInterval(this.timeCount, 1000);
    },
};

timer.init();