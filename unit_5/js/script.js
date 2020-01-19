// Task 1
// Создайте объект car и добавьте в него свойства model, weight, color и метод go(), который в консоль выводит строку 'go и model'.

const car = {
    model: 'Nissan',
    weight: '1350',
    color: 'aqua',
    go: function () {
        console.log(`go ${this.model}`);
    }
}

console.log(car)

// Task 2
// Создайте объект ford, добавьте свойство year. Выведите объект в консоль.

const ford = {
    year: '2015'
}

console.log(ford);

// Task 3
// Задайте в качестве прототипа объекта ford, объект car. Выведите объект ford в консоль.

Object.setPrototypeOf(ford, car);

console.log(ford);

// Task 4
// Выведите свойства ford.model, ford.weight, ford.color. Запустите метод ford.go().

console.log(ford.model, ford.weight, ford.color);

ford.go();

// Task 5
// Добавьте в car новое свойство mileage. Проверьте, появилось ли подобное свойство у ford?

car.mileage = 153000;

console.log(car.mileage);
console.log(ford.mileage);

// Task 6
// Создайте у ford метод go(), который выводит информацию о годе производства и цвете в консоль.

ford.go = function () {
    console.log(`${this.year}, ${this.color}`);
}

// Task 7
// Вызовите у ford метод go принадлежащий прототипу.

// car.go.call(ford);

// Task 8
// Создайте объект chevrolet, укажите в качестве прототипа объект ford. Проверьте наличие у chevrolet свойств model, color, mileage и метода go().

const chevrolet = {};
Object.setPrototypeOf(chevrolet, ford);

console.log(chevrolet.model, chevrolet.color, chevrolet.mileage, chevrolet.go);

// Task 9
// Задайте свой метод go для chevrolet.

// Task 10
// Добавьте для chevrolet два свойства body_style, drive_type.

// Task 11
// Переберите и выведите с помощью цикла все свойства объекта chevrolet.
