class Clientes {
    private clientes: Array<Cliente>;
    constructor() {
        this.clientes = new Array<Cliente>();
        const c1 = new Cliente('Carlos','111', '1');
        const c2 = new Cliente('Paula','222', '2');
        this.clientes.push(c1, c2);
    }

    inserir(novoCliente: Cliente): void {
        this.clientes.push(novoCliente);
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
}
