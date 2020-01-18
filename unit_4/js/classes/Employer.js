
class Employer extends Man {
    constructor(name, age, passport, sex, create, salary) {
        super(name, age, passport, sex)
        this.create = create;
        this.salary = salary;
        this._name = name;

    }
    // render(x) {
    //     document.querySelector(x).innerHTML = `
    //             <p>${this.name}<p>
    //             <p>${this.age}<p>
    //             <p>${this.passport}<p>
    //             <p>${this.sex}<p>
    //             <p>${this.create}<p>
    //             <p>${this.salary}<p>
    //         `;
    // }
    render(x) {
        super.render(x);
        document.querySelector(x).innerHTML += `
                <p>${this.create}<p>
                <p>${this.salary}<p>
            `;
    }
    get name() {
        return this._name;
    }
    set name(c) {
        if (typeof c === 'string') this._name = c.trim();
    }
}
