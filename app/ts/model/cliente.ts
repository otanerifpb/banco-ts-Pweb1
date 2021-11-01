class Cliente {
    private _nome;
    private _cpf;
    private _conta;


    constructor(nome: string, cpf: string, conta: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;

    }

    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }

    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }

    get conta() {
        return this._conta;
    }
    set conta(conta) {
        this._conta = conta;
    }

    toString() {
        return `Nome: ${this._nome}, CPF: ${this._cpf}, Conta: ${this._conta},  `;
    }
}
