import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interface/student';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{


  listStudent!:Student[];

  constructor(private studentService:ListService){

  }
ngOnInit(): void {
    this.studentService.getListStudent().subscribe(list=>this.listStudent=list);
}
deleteStudent(id:number){
  this.studentService.deleteStudent(id).subscribe();
}

}
