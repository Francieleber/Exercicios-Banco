
import { ContaCorrente, clientec} from "./contacorrente"
import { saldoPoupanca, clientep} from "./contapoupanca"

export{ cliente}



export class Banco {
    nomecliente:string;
    saldo:number;
    ativo:boolean;
    
    mostrarSaldo(){
        console.log(`O saldo do cliente ${cliente.nomecliente} é ${cliente.saldo.toFixed(2)}`)
    }
}
var cliente = new Banco()
cliente.nomecliente= "franciele"
cliente.saldo= 100000;
cliente.ativo=true;

var somasaldo =  new Banco()
somasaldo.saldo = clientec.saldoC + clientep.saldop
 


cliente.mostrarSaldo()
