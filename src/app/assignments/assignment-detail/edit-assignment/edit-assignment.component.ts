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
    }
    if(this.imdblD){
    this.assignment.imdblD = this.imdblD;
    }
    if(this.spanishTitle){
    this.assignment.spanishTitle = this.spanishTitle; 
    }
    if(this.imdbPictureURL){
    this.assignment.imdbPictureURL = this.imdbPictureURL; 
    }
    if(this.year){
    this.assignment.year = this.year;
    }
    if(this.rtID){
    this.assignment.rtID= this.rtID;
    } 
    if(this.rtAllCriticsRating){
    this.assignment.rtAllCriticsRating= this.rtAllCriticsRating;
    }
    if(this.rtAllCriticsNumReviews){
    this.assignment.rtAllCriticsNumReviews= this.rtAllCriticsNumReviews;
    }
    if(this.rtAllCriticsNumFresh){
    this.assignment.rtAllCriticsNumFresh= this.rtAllCriticsNumFresh;
    }
    if(this.rtAllCriticsNumRotten){
    this.assignment.rtAllCriticsNumRotten= this.rtAllCriticsNumRotten;
    }
    if(this.rtAllCriticsScore){
    this.assignment.rtAllCriticsScore= this.rtAllCriticsScore;
    }
    if(this.rtTopCriticsRating){
    this.assignment.rtTopCriticsRating= this.rtTopCriticsRating;
    }
    if(this.rtTopCriticsNumReviews){
    this.assignment.rtTopCriticsNumReviews= this.rtTopCriticsNumReviews;
    }
    if(this.rtTopCriticsNumFresh){
    this.assignment.rtTopCriticsNumFresh= this.rtTopCriticsNumFresh;
    }
    if(this.rtTopCriticsNumRotten){
    this.assignment.rtTopCriticsNumRotten= this.rtTopCriticsNumRotten;
    }
    if(this.rtTopCriticsScore){
    this.assignment.rtTopCriticsScore= this.rtTopCriticsScore;
    }
    if(this.rtAudienceRating){
    this.assignment.rtAudienceRating= this.rtAudienceRating;
    }
    if(this.rtAudienceNumRatings){
    this.assignment.rtAudienceNumRatings= this.rtAudienceNumRatings;
    }
    if(this.rtAudienceScore){
    this.assignment.rtAudienceScore= this.rtAudienceScore;
    }
    if(this.rtPictureURL){
    this.assignment.rtPictureURL= this.rtPictureURL;
  	}
    /*
  	if(this.dueDate){
  		this.assignment.dueDate = this.dueDate;
  	}*/

    this.assignmentsService.updateAssignments(this.assignment)
    .subscribe(assignment => this.router.navigate(['/assignment/' + this.assignment.id]));
    
  }

}
