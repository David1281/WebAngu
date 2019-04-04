import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Assignment} from '../assignment.model';
import {AssignmentsService} from '../../shared/assignments.service';
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  title: string; 
  imdbid: string; 
  year: string;
  dueDate:  Date;

  //@Output() newAssignment = new EventEmitter<Assignment>();
  newAssignment:Assignment; 
  constructor(private assignmentService: AssignmentsService) { }

  ngOnInit() {
  }

  assignments: Assignment[] =[{
   id:1,
   title:'One',
   imdbid: '5',
   year: '2010',
   //dueDate: new Date('2018-01-01'),
   submitted:true
  },
  {
    id:2,
   title:'Two',
   imdbid: '5',
   year: '2010',
   //dueDate: new Date('2018-01-01'),
   submitted:false
  },
  {
   id:3,
   title:'Two',
   imdbid: '5',
   year: '2010',
   //dueDate: new Date('2018-01-01'),
   submitted:false
  }];

 onSubmit(){
    const assignment = new Assignment();
    assignment.title = this.title;
    assignment.imdbid = this.imdbid;
    assignment.year = this.year;
    assignment.submitted = false;

    //this.newAssignment.emit(assignment);
    this.assignmentService.addAssignments(assignment);
  }

}
