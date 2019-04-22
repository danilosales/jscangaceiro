export class View {

    constructor(elemento) {
        this._elemento = document.querySelector(elemento);
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model) {
        throw new Error('Você precisa implementar o método template');
    }
}