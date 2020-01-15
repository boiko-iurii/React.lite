
class Header {
    constructor(title, subtitle, slogan, image, contacts = {}) {
        this.title = title;
        this.subtitle = subtitle;
        this.slogan = slogan;
        this.image = image;
        this.contacts = contacts;
    }

    redner(outId) {
        let li = '';
        for (let key in this.contacts) {
            li += `<li>${key}: ${this.contacts[key]}</li>`
        }
        document.getElementById(outId).innerHTML = `
            <div class="row justify-content-center">
                <div class="col col-sm-3">
                    <img src="${this.image}" alt="${this.title}">
                </div>
                <div class="col col-sm-4">
                    <h1 class="title">${this.title}</h1>
                    <h2 class="subtitle">${this.subtitle}</h2>
                    <h3>${this.slogan}</h3>
                </div>
                <div class="col col-sm-3">
                    <p class="h3">Contacts</p>
                    <ul class="contacts">
                        ${li}
                    </ul>
                </div>
            </div>
            <a class="scroll-down" href="#offer"></a>
            `;
    }
}