import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatTableModule,
  MatSidenavModule, MatCheckboxModule, MatDialogModule, MatBadgeModule, MatIconModule, MatSelectModule,  MatDatepickerModule,
  MatGridListModule, MatNativeDateModule, MatMenuModule, MatRadioModule} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthenService } from './service/authen.service';
import { ProfileService } from './service/profile.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'profile' , component:ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDialogModule,
    MatBadgeModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NoopAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
