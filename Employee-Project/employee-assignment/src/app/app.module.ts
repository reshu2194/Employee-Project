import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import {
  MatSidenavModule,
  MatMenuModule,
  MatCheckboxModule,
  MatButtonModule,
  MatTabsModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatTableModule,
  MatDividerModule,
  MatExpansionModule,
  MatSortModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatChipsModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatListModule,
  MatToolbarModule,
  MatBadgeModule,
  MatProgressBarModule,
  MatRippleModule,
  MatTreeModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatStepperModule,
  MatOptionModule,
  MAT_DIALOG_DATA,
  MatInputModule

} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    EditEmployeeComponent
  ],
  imports: [
    //material modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDividerModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatTooltipModule,
    MatListModule,
    MatToolbarModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatRippleModule,
    MatTreeModule,
  
    MatGridListModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatOptionModule,
    

//time picker
 



  ],
  exports: [

    //form module
    FormsModule,
   
    //material modules

    MatSidenavModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDividerModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatListModule,
    MatToolbarModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatRippleModule,
    MatTreeModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatOptionModule,
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
