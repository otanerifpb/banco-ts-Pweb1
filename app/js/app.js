const clienteController = new ClienteController();
//clienteController.listar();
//Add novo Cliente no BD
const c3 = new Cliente('Nanda', '333', '3');
const c5 = new Cliente('Junior', '555', '5');
clienteController.inserirApp(c3);
clienteController.inserirApp(c5);
clienteController.listar();
//Remover um cliente
clienteController.remover(c3);
clienteController.listar();
//Pequisar um cliente
console.log(clienteController.pesquisarCli(c5));
//# sourceMappingURL=app.js.map