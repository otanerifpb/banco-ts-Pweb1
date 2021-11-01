
class ClienteController {
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;
    private clientes: Clientes;

    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.inputConta = document.querySelector("#conta");

        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, this.inputConta.value);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    inserirApp(cliente: Cliente) {
        return this.clientes.inserir(cliente);
    }

    pesquisarCli(cliente: Cliente) {
        return this.clientes.pesquisar(cliente.cpf);
    }

    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }

    remover(cliente: Cliente): void {
        this.clientes.remover(cliente.cpf);
    }


    private  inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('Removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            (<Element>event.target).parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        console.log('Adicionando cliente ' + cliente.toString());
        document.body.appendChild(elementoP);

    }

}
