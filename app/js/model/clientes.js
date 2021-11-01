class Clientes {
    constructor() {
        this.clientes = new Array();
        const c1 = new Cliente('Carlos', '111', '1');
        const c2 = new Cliente('Paula', '222', '2');
        this.clientes.push(c1, c2);
    }
    inserir(novoCliente) {
        this.clientes.push(novoCliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
}
//# sourceMappingURL=clientes.js.map