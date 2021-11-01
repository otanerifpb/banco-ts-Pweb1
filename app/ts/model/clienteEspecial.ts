class ClienteEspecial extends Cliente {
    private depemdentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: string, dependentes: Array<Cliente>) {
        super(nome, cpf, conta);
    }

}