import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignmentsService} from '../../../shared/assignments.service';
import {Assignment} from '../../assignment.model';
@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
   title:string;
   dueDate: Date;
   assignment:Assignment;

  constructor(private route:ActivatedRoute,
  	          private router: Router,
  	          private assignmentsService: AssignmentsService){}

  ngOnInit() {
  	const id = + this.route.snapshot.params.id;
  	this.getAssignment(id);
  }
  getAssignment(id){
  	this.assignmentsService.getAssignment(id).subscribe(assignment => this.assignment = assignment);
  }
  onSaveAssignment(){
  	if(this.title){
  		this.assignment.title = this.title;
  	}
    /*
  	if(this.dueDate){
  		this.assignment.dueDate = this.dueDate;
  	}*/

    this.assignmentsService.updateAssignments(this.assignment).subscribe(assignment => console.log(this.assignment.title + 'updated'));
    this.router.navigate(['/home']);
  }

}
