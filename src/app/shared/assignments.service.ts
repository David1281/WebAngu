import { Injectable } from '@angular/core';
import {Assignment} from '../assignments/assignment.model';
import {Observable, of} from 'rxjs';
import {LoggingService} from './logging.service';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] =[{
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
    rtPictureURL: 'One',
  },
  {
    id:3,
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
    rtPictureURL: 'One',
  }];


  url = 'http://localhost:8010/api/movies';
  url2 = 'http://localhost:8010/api/movie';

  constructor(private loggingService: LoggingService,
              private http: HttpClient) { }


  getAssignments(): Observable<Assignment[]>{
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.url);
  }
  getAssignment(id:number): Observable<Assignment>{
  	//return of (this.assignments.find(x=> x.id === id));
    return this.http.get<Assignment>(this.url2 + '/' + id);
  }

  addAssignments(assignment:Assignment):Observable<any>{
    //this.assignments.push(assignment);

    //this.loggingService.log(assignment.title,'added');

    //return of('assignment added!');
    return this.http.post<Assignment>(this.url2, assignment);
  }

  updateAssignments(assignment:Assignment):Observable<any>{
    //this.assignments.forEach((assignment,i)=>{
      ///if(assignment === assignment){
       // this.assignments[i] = assignment;
     // }
   // });

   // this.loggingService.log(assignment.title,'updated');
   // return of('assignment updated!');
   return this.http.put<Assignment>(this.url2,assignment);
  }
  
  deleteAssignment(deletedAssignment: Assignment): Observable<any>{
    //this.assignments.forEach((assignment, i)=>{
     // if(assignment === deletedAssignment){
     //   this.assignments.splice(i,1);
     // }
   // });
   // this.loggingService.log(deletedAssignment.title,'deleted');
   // return of('assignment deleted');
   const newUrl = this.url2 + '/' + deletedAssignment._id;
   return this.http.delete(newUrl);
  }


}
