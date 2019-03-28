import { Component, OnInit } from '@angular/core';
import { User } from '../view-model/user.model';
import { ReqresDataService } from '../services/reqres-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[];
    
  constructor(private reqresService: ReqresDataService) { } 

  ngOnInit() {
    
    this.reqresService.getUsers().subscribe( resp => this.userList = resp.data);
        
  }

}
