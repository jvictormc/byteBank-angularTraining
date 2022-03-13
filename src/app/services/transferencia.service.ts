import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  url: string = 'http://localhost:3000/transferencias'

  
  constructor(private httpClient: HttpClient) {   
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  transferir(transferencia: Transferencia): Observable<Transferencia> {
    this.adicionarData(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private adicionarData(transferencia: any){
    transferencia.data = new Date;
  } 

}
