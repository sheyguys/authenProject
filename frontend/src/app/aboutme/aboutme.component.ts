import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../service/authen.service';
import { ProfileService } from '../service/profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  user: firebase.User;

  constructor(
    private service: AuthenService, private route: ActivatedRoute, private router: Router
  ) { }
  picURL: string;
  ngOnInit() {
    this.service.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;
        this.picURL = this.user.photoURL;
        console.log(this.picURL);
      }); 
  }
  logout() {
    this.router.navigate(['/login']);
    this.service.logout();
  }

  profile(){
    this.router.navigate(['/profile']);
  }

  aboutme(){
    this.router.navigate(['/aboutme']);
  }

}
