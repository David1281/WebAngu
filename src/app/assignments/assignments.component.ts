import { Component, OnInit } from '@angular/core';
import {Assignment} from './assignment.model';
import {AssignmentsService} from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  title = 'My Assignments Application'
  name: string; 
  dueDate:  Date;
  enabled = false;
  formVisible = false;
 
  selectedAssignment: Assignment;
  assignments:Assignment[];
  
  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit() {
  	setTimeout(()=>{
  		this.enabled = true;
  	}, 2000)

    //this.assignments = this.assignmentsService.getAssignments();
    this.getAssignments();
  }
   getAssignments(){
      this.assignmentsService.getAssignments()
      .subscribe(assignments => this.assignments = assignments);

   }

  
  onAddBtnClick(){
    //this.formVisible = true;
    this.selectedAssignment = null;
  }
 
  setSelected(assignment){
   this.selectedAssignment = assignment;

  }
  /*onNewAssignment(event: Assignment){
    this.assignmentsService.addAssignments(event).subscribe(success => console.log(success));


    this.formVisible = false;
  }*/
}
