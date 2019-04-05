import { Component, OnInit, Input } from '@angular/core';
import {Assignment} from '../assignment.model';
import {AssignmentsService} from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../../shared/auth.service';
@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

   //@Input() passedAssignment: Assignment;
   passedAssignment: Assignment;
  constructor(private assignmentsService:AssignmentsService,
    private route: ActivatedRoute, private router:Router, 
    private authService: AuthService) { }

  ngOnInit() {
    this.getAssignment();
  }
  getAssignment(){
    const id = +this.route.snapshot.params.id;
    this.assignmentsService.getAssignment(id).subscribe(assignment=>this.passedAssignment = assignment);
  
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe(params => console.log(params));
    this.route.fragment.subscribe(fragment => console.log(fragment));
  
  }


   onAssignmentSubmitted(){
     this.assignmentsService.updateAssignments(this.passedAssignment).subscribe(success=>console.log(success));
   	//this.passedAssignment.submitted = true;
   }

   onDelete(){
     this.assignmentsService.deleteAssignment(this.passedAssignment).subscribe(res => this.router.navigate(['/home']));
     //this.passedAssignment = null; 
     
   }


   onClickEdit(){
     this.router.navigate(['/movie',this.passedAssignment.id,'edit'],
       {queryParams:{name:this.passedAssignment.title},fragment:'editing'});
   }

   isAdmin():boolean{
     return this.authService.loggedIn;
   }
}
