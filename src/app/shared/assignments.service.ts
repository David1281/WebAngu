import { Injectable } from '@angular/core';
import {Assignment} from '../assignments/assignment.model';
import {Observable, of} from 'rxjs';
import {LoggingService} from './logging.service';
@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] =[{
   id:1,
   title:'Maths',
   imdbid:'5',
   year:'2010',

   //dueDate: new Date('2018-01-01'),
   submitted:true
  },
  {
    id:2,
  	title:'Science',
    imdbid:'5',
    year:'2010',
  	//dueDate: new Date('2019-01-01'),
  	submitted:false
  }];

  constructor(private loggingService: LoggingService) { }


  getAssignments(): Observable<Assignment[]>{
    return of(this.assignments);
  }
  getAssignment(id:number): Observable<Assignment>{
  	return of (this.assignments.find(x=> x.id === id));
  }

  addAssignments(assignment:Assignment):Observable<string>{
    this.assignments.push(assignment);

    this.loggingService.log(assignment.title,'added');

    return of('assignment added!');
  }

  updateAssignments(assignment:Assignment):Observable<string>{
    this.assignments.forEach((assignment,i)=>{
      if(assignment === assignment){
        this.assignments[i] = assignment;
      }
    });

    this.loggingService.log(assignment.title,'updated');
    return of('assignment updated!');
  }
  
  deleteAssignment(deletedAssignment: Assignment): Observable<string>{
    this.assignments.forEach((assignment, i)=>{
      if(assignment === deletedAssignment){
        this.assignments.splice(i,1);
      }
    });
    this.loggingService.log(deletedAssignment.title,'deleted');
    return of('assignment deleted');
  }


}
