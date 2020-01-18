
class Man {
    constructor(name, age, passport, sex) {
        this.name = name;
        this.age = age;
        this.passport = passport;
        this.sex = sex;
    }

    render(x) {
        document.querySelector(x).innerHTML = `
                <p>${this.name}<p>
                <p>${this.age}<p>
                <p>${this.passport}<p>
                <p>${this.sex}<p>
            `;
    }
}