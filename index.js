import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
//Clientes
const cliente1 = new Cliente("Luís", "11122233309", "123456789");
const cliente2 = new Cliente("Kêmilly", "88822233309", "123456789");

//Contas correntes
const contaCorrente1 = new ContaCorrente(cliente1, "1001");
const contaCorrente2 = new ContaCorrente(cliente2, "1001");

//Depósitos e saques
contaCorrente1.Depositar(100);
contaCorrente1.Sacar(50);
console.log("Saldo Conta 1");
console.log(contaCorrente1.Saldo);

contaCorrente2.Depositar(100);
contaCorrente2.Sacar(50);
console.log("Saldo Conta 2");
console.log(contaCorrente2.Saldo);

//Transferências
console.log("Transferência de 25 reais da conta 1 para conta 2");
contaCorrente1.Transferir(25, contaCorrente2);
console.log("Conta 1");
console.log(contaCorrente1.Saldo);
console.log("Conta 2");
console.log(contaCorrente2.Saldo);

//Atributo estático
console.log("Atributo estático - Número de contas:");
console.log(ContaCorrente.NumeroDeContas);