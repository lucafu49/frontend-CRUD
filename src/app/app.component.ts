import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaService } from './Services/tarea.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Tarea } from './Interfaces/tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'frontend-CRUD';
  public listTarea: Tarea[] = [];

  constructor(private ts:TareaService){

  }

  ngOnInit(): void {
    this.getListTarea();
    console.log(this.listTarea);
  }

  getListTarea(){
    this.ts.getList().subscribe({
      next:(data) =>{
        this.listTarea = data;
      }
    })
  }
  addTarea(value:string){

    if(!value){
      alert("No puede registrarse la tarea, ingrese algo.");
      return;
    }

    const request:Tarea = {
      idTarea:0,
      nombre: value
    }

    this.ts.add(request).subscribe({next:(data) =>{
        this.listTarea.push(data);
      }
    })
  }

  deleteTarea(idTarea : number){
    this.ts.delete(idTarea).subscribe((data) =>{
      this.listTarea = this.listTarea.filter(item => item.idTarea !== idTarea);
    })
  }
}
