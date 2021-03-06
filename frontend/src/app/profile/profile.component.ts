import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../service/authen.service';
import { ProfileService } from '../service/profile.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface User {
  name: string;
  email: string;
  studentId: string;
  picture: string;
  major: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  input: any = {
    stuid: '',
    major: '',
    email: ''
  }

  user: firebase.User;
  users: User = {
    name: '',
    email: '',
    studentId: '',
    picture: '',
    major: ''
  }
  constructor(private authenService: AuthenService, private profileService: ProfileService, private route: ActivatedRoute, private router: Router) { }
  picURL: string;
  ngOnInit() {
    this.authenService.getLoggedInUser()
      .subscribe(user => {
        console.log(user);
        this.user = user;
        this.picURL = this.user.photoURL;
        this.users.email = this.user.email;
        this.users.name = this.user.displayName;
        this.users.picture = this.picURL;
        console.log(this.picURL);
      })
  }

  confirm() {
    console.log(this.input.email);
    console.log(this.input.stuid);
    console.log(this.input.major);
    if (this.input.stuid === '' || this.input.major === '') {
      alert('Please enter studentId and Major');
    } else {
      this.users.email = this.input.email;
      this.users.studentId = this.input.stuid;
      this.users.major = this.input.major;
      console.log(this.users);
      this.profileService.createUser(this.users).subscribe(
        data => {
          if (data) {
            alert(data);
          } else {
            alert('success');
          }
        },
        error1 => {
        }
      );
    }

  }

  logout() {
    this.router.navigate(['/login']);
    this.authenService.logout();
  }

  profile(){
    this.router.navigate(['/profile']);
  }

  aboutme(){
    this.router.navigate(['/aboutme']);
  }

}
