import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSortModule} from '@angular/material/sort';

import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
   imports: [
     // tslint:disable-next-line:max-line-length
    MatListModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatCardModule, MatDatepickerModule,
    MatSortModule, MatExpansionModule,MatCheckboxModule,MatProgressSpinnerModule,MatAutocompleteModule, ScrollingModule, MatTabsModule,  MatSnackBarModule ,MatStepperModule,MatSelectModule,MatTableModule,MatPaginatorModule

  ,MatNativeDateModule],
  exports: [
    MatListModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatSnackBarModule,MatPaginatorModule,
    MatSortModule, MatCheckboxModule,MatInputModule, MatMenuModule,MatProgressSpinnerModule
    ,MatExpansionModule, MatCardModule, MatDatepickerModule, MatAutocompleteModule, ScrollingModule, MatTabsModule, MatStepperModule,MatSelectModule,MatTableModule

  ,MatNativeDateModule]
})
export class MaterialModule { }

