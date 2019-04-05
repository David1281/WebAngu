import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Assignment} from '../assignment.model';
import {AssignmentsService} from '../../shared/assignments.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
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

  //@Output() newAssignment = new EventEmitter<Assignment>();
  newAssignment:Assignment; 
  constructor(private assignmentService: AssignmentsService,
              private router: Router) { }

  ngOnInit() {
  }

  assignments: Assignment[] =[
  {
    id:2,
    title: 'One',
    imdblD: 2, 
    spanishTitle: 'One', 
    imdbPictureURL: 'One', //Blob 
    year: 2,
    rtID: 'One',
    rtAllCriticsRating: 2,
    rtAllCriticsNumReviews: 2,
    rtAllCriticsNumFresh: 2,
    rtAllCriticsNumRotten: 2,
    rtAllCriticsScore: 2,
    rtTopCriticsRating: 2,
    rtTopCriticsNumReviews: 2, 
    rtTopCriticsNumFresh: 2,
    rtTopCriticsNumRotten: 2,
    rtTopCriticsScore: 2,
    rtAudienceRating: 2,
    rtAudienceNumRatings: 2,
    rtAudienceScore: 2, 
    rtPictureURL: 'One', //Blob

  }];

 onSubmit(){
    const assignment = new Assignment();
    assignment.id = Math.floor(Math.random() * 1000) + 10000;
    assignment.title = this.title;
    assignment.imdblD = this.imdblD;
    assignment.spanishTitle = this.spanishTitle; 
    assignment.imdbPictureURL = this.imdbPictureURL; 
    assignment.year = this.year;
    assignment.rtID= this.rtID;
    assignment.rtAllCriticsRating= this.rtAllCriticsRating;
    assignment.rtAllCriticsNumReviews= this.rtAllCriticsNumReviews;
    assignment.rtAllCriticsNumFresh= this.rtAllCriticsNumFresh;
    assignment.rtAllCriticsNumRotten= this.rtAllCriticsNumRotten;
    assignment.rtAllCriticsScore= this.rtAllCriticsScore;
    assignment.rtTopCriticsRating= this.rtTopCriticsRating;
    assignment.rtTopCriticsNumReviews= this.rtTopCriticsNumReviews;
    assignment.rtTopCriticsNumFresh= this.rtTopCriticsNumFresh;
    assignment.rtTopCriticsNumRotten= this.rtTopCriticsNumRotten;
    assignment.rtTopCriticsScore= this.rtTopCriticsScore;
    assignment.rtAudienceRating= this.rtAudienceRating;
    assignment.rtAudienceNumRatings= this.rtAudienceNumRatings;
    assignment.rtAudienceScore= this.rtAudienceScore;
    assignment.rtPictureURL= this.rtPictureURL;
    //this.newAssignment.emit(assignment);
    this.assignmentService.addAssignments(assignment)
    .subscribe(res => this.router.navigate(['/home']));
  }

}
