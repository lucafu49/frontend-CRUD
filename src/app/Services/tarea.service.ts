import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Tarea } from '../Interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl:string = "http://www.dbangular.somee.com/api/" 

  constructor(private http:HttpClient) { }

  getList():Observable<Tarea[]>{
    return this.http.get<Tarea[]>(`${this.apiUrl}Tarea/Lista`);
  }
  add(request:Tarea):Observable<Tarea>{
    return this.http.post<Tarea>(`${this.apiUrl}Tarea/Agregar`,request);
  }
  delete(idTarea:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}Tarea/Eliminar/${idTarea}`);
  }
}
