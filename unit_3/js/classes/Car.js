
class Car {
    constructor(brand, name, weight, fuel_type, color, img) {
        this.brand = brand;
        this.name = name;
        this.weight = weight;
        this.fuel_type = fuel_type;
        this.color = color;
        this.img = img;
    }

    redner(outId) {
        document.getElementById(outId).innerHTML = `
            <p class="package-name">${this.brand}&nbsp;${this.name}</p>
            <hr>
            <br>
            <img src="${this.img}" alt="${this.brand}&nbsp;${this.name}">
            <br>
            <hr>
            <ul class="features">
                <li>Weight: ${this.weight.min} - ${this.weight.max} kg</li>
                <li>Fuel type: ${this.fuel_type}</li>
                <li>Color: ${this.color}</li>
            </ul>
            <button class="button-primary">More details</button>`;
    }
}
