export{ContaCorrente, clientec}

import { Banco } from "./banco"



class ContaCorrente extends Banco {
    cliente:string;
    saldoC:number;
     conta:string

    mostrarSaldocontaCorrente(){
        console.log(`O saldo do cliente ${clientec.cliente} é ${clientec.saldoC.toFixed(2) } na conta ${clientec.conta} `)
    }
}
var clientec = new ContaCorrente ()
clientec.cliente= "franciele"
clientec.saldoC = 100;
clientec.conta= "ContaCorrente";



clientec.mostrarSaldocontaCorrente()



