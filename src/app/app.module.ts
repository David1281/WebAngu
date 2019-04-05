import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SubmittedDirective } from './submitted.directive';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { MatListModule } from '@angular/material/list';
import {Routes, RouterModule} from '@angular/router';
import { EditAssignmentComponent } from './assignments/assignment-detail/edit-assignment/edit-assignment.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import {AssignmentsService} from './shared/assignments.service';
import {AuthGuard} from './shared/auth.guard';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
    {path: '', component:AssignmentsComponent},
    {path: 'home',component:AssignmentsComponent},
    {path: 'add', component:AddAssignmentComponent},
    {path: 'assignment/:id', component:AssignmentDetailComponent},
    {path: 'assignment/:id/edit', 
    canActivate:[AuthGuard],
    component:EditAssignmentComponent}
   
];

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    SubmittedDirective,
    AssignmentDetailComponent,
    EditAssignmentComponent,
    AddAssignmentComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [AssignmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
