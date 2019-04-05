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
    id:number;
    title: string;
    imdblD: number; 
    spanishTitle: string; 
    imdbPictureURL: string; //Blob 
    year: number;
    rtID: string; 
    rtAllCriticsRating: number; 
    rtAllCriticsNumReviews: number; 
    rtAllCriticsNumFresh: number; 
    rtAllCriticsNumRotten: number; 
    rtAllCriticsScore: number;
    rtTopCriticsRating: number; 
    rtTopCriticsNumReviews: number; 
    rtTopCriticsNumFresh: number; 
    rtTopCriticsNumRotten: number;
    rtTopCriticsScore: number;
    rtAudienceRating: number;
    rtAudienceNumRatings: number; 
    rtAudienceScore: number; 
    rtPictureURL: string;
 
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
    this.assignment.imdblD = this.imdblD;
    this.assignment.spanishTitle = this.spanishTitle; 
    this.assignment.imdbPictureURL = this.imdbPictureURL; 
    this.assignment.year = this.year;
    this.assignment.rtID= this.rtID;
    this.assignment.rtAllCriticsRating= this.rtAllCriticsRating;
    this.assignment.rtAllCriticsNumReviews= this.rtAllCriticsNumReviews;
    this.assignment.rtAllCriticsNumFresh= this.rtAllCriticsNumFresh;
    this.assignment.rtAllCriticsNumRotten= this.rtAllCriticsNumRotten;
    this.assignment.rtAllCriticsScore= this.rtAllCriticsScore;
    this.assignment.rtTopCriticsRating= this.rtTopCriticsRating;
    this.assignment.rtTopCriticsNumReviews= this.rtTopCriticsNumReviews;
    this.assignment.rtTopCriticsNumFresh= this.rtTopCriticsNumFresh;
    this.assignment.rtTopCriticsNumRotten= this.rtTopCriticsNumRotten;
    this.assignment.rtTopCriticsScore= this.rtTopCriticsScore;
    this.assignment.rtAudienceRating= this.rtAudienceRating;
    this.assignment.rtAudienceNumRatings= this.rtAudienceNumRatings;
    this.assignment.rtAudienceScore= this.rtAudienceScore;
    this.assignment.rtPictureURL= this.rtPictureURL;
  	}
    /*
  	if(this.dueDate){
  		this.assignment.dueDate = this.dueDate;
  	}*/

    this.assignmentsService.updateAssignments(this.assignment).subscribe(assignment => console.log(this.assignment.title + 'updated'));
    this.router.navigate(['/home']);
  }

}
