export{saldoPoupanca, clientep}

import { Banco } from "./banco";




class saldoPoupanca extends Banco {
    cliente:string;
    saldop:number;
     conta:string

    mostrarSaldoPoupanca(){
        console.log(`O saldo do cliente ${clientep.cliente} é ${clientep.saldop.toFixed(2) } na conta ${clientep.conta} `)
    }
}
var clientep= new saldoPoupanca ()
clientep.cliente= "franciele"
clientep.saldop= 340;
clientep.conta= "saldoPoupanca";




clientep.mostrarSaldoPoupanca()
