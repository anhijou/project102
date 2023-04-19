import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../interface/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }
  private API = "http://localhost:3000/students";

  getListStudent() {

     return this.http.get<Student[]>(this.API); 
     }

   deleteStudent(id:number){
    const url = `${this.API}/${id}`;
    return this.http.delete<Student[]>(url); 
   }  

}
