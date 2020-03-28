import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  mySearch: string = "";
  resultUsers: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getUsers().subscribe((res: any[]) => {
      this.users = res;
      this.resultUsers = res;
      console.log(res);
    })
  }

  searchUsers(){
    if(this.mySearch == ""){
      this.resultUsers = this.users;
      return;
    }

    this.userService.searchUser(this.mySearch).subscribe((res: any[]) => {
      this.resultUsers = res['items'];
    })
  }


}
