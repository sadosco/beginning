class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data').valor;
        this._inputQuantidade = $('#quantidade').valor;
        this._inputValor = $('#valor').valor;
    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}