import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector: 'nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
    
    valor: number;
    destino: number;

    constructor(private service: TransferenciaService, private router: Router) { }

    transferir() {
        console.log('Transferencia realizada');
        console.log(`valor: ${this.valor}`)
        console.log(`destino: ${this.destino}`)
        const transferencia: Transferencia = {valor: this.valor, destino: this.destino};
        this.service.transferir(transferencia)
        .subscribe(resultado => {
            console.log(resultado);
            this.limpaInput();
            this.router.navigateByUrl('extrato');
        },
        (error) => {
            console.error(error);
        });        
        
    }

    private limpaInput(){
        this.valor = 0;
        this.destino = 0;
    }

}