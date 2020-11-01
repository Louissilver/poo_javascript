// #Saldo = 0;
// https://github.com/tc39/proposal-class-fields#private-fields
import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    // Atributos
    static NumeroDeContas = 0;
    Agencia;
    _Saldo = 0;
    _Cliente;
    
    // Assessores
    get Saldo(){
        return this._Saldo;
    }

    set Cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._Cliente = novoValor;
        }
    }
    
    get Cliente(){
        return this._Cliente;
    }

    // Construtor
    constructor(cliente, agencia){
        this.Agencia = agencia;
        this.Cliente = cliente;
        ContaCorrente.NumeroDeContas += 1;
    }
    
    // Métodos
    Sacar(valor){
        if (this._Saldo >= valor){
            this._Saldo -= valor;
            return valor;
        }
    }
    
    Depositar(valor){
        if (valor > 0){
            this._Saldo += valor;
        }
    }
    
    Transferir(valor, contaDestino){
        const valorSacado = this.Sacar(valor);
        contaDestino.Depositar(valorSacado);
    }
}