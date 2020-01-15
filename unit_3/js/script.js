// Task 1
// Работаем в нативном JS. Создайте класс Man описывающий человека. Класс должен содержать свойства height, weight, age, sex, name, passport, eye.
// Типы данных определите самостоятельно. Создайте объект на основе класса и заполните данными. Выведите в консоль. Все классы подключать
//отдельным файлом.

const passport = {
    'series': 'MM012345',
    'issue_date': '12.12.2012',
    'marital status': 'married',
    'children': 1
};

const man = new Man(173, 73, 33, 'man', 'Iurii', passport, 'gray');

console.log(man);

// Task 2
// Работаем в нативном JS. Создайте класс Car описывающий машину. Класс должен содержать свойства brand, name, weight, fuel_type, color, img.
//Типы данных определите самостоятельно. Создайте объект на основе класса и заполните данными. Выведите в консоль.
//Все классы подключать отдельным файлом.

const car = new Car(
    'Subaru',
    'Forester',
    { min: '1300', max: '1702' },
    'gasoline',
    'white',
    'https://subaru-vidi.com.ua/uploads/media/dc_car_gallery/0001/21/thumb_20118_dc_car_gallery_big.jpeg'
);

console.log(car);

// Task 3
// Добавьте в предыдущий класс Car метод render - который отрисовывает данные об объекте в указанный блок на странице.
// Для оформления выберите CSS https://mustard-ui.com/ и стиль оформления pricing table.

// car.redner('cars');

// Task 4
// Создайте класс Header. Класс должен содержать следующие свойства - заголовок 1, подзаголовок, девиз, изображение и массив контактов.
// Добавьте метод рендер, для отрисовки данного заголовка. Создайте объект на основе класса Header и отрисуйте заголовок.

const header = new Header(
    'Я изучаю React',
    'И мне это нравится',
    'React в массы!',
    'https://freelance.today/uploads/images/00/07/44/2018/11/15/49b750.png',
    {
        tel: '+38(050)-504-50-50',
        viber: '+38(097)-050-50-50',
        skype: 'my_skype333',
        mail: 'mail@gmail.com'
    }
);

console.log(header);

header.redner('site-header');


// Task 5
// Используя класс Car создайте несколько объектов на основе класса Car. Выведите созданные объекты на страницу.

let cars = [];

const car1 = new Car(
    'Volvo',
    'XC90 Leverne',
    { min: '1936', max: '2415' },
    'hybrid',
    'Osmium Grey',
    'https://viking-motors.ua/wp-content/uploads/2019/04/Light-version-TIM00568%D0%B8%D0%B2%D1%81.jpg'
);

const car2 = new Car(
    'Porsche',
    'Macan',
    { min: '1795', max: '1925' },
    'gasoline',
    'Miami Blue',
    'https://nahodim.com.ua/uploads/cars/new/porsche/713/7AdMbBkIo5v8VNJBAuz8_5Lc/porsche_macan.jpg'
);

cars.push(car, car1, car2);

for (elem of cars) {
    elem.redner('cars');
}