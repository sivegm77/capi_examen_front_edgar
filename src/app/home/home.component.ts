import { Component, OnInit } from '@angular/core';
import { UsersI } from '../interfaces/User';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: UsersI[];

  constructor(private apiServices: ApiService) {
    this.getUsers();
   }

  ngOnInit(): void {
  }

  getUsers(){
    this.apiServices.get().subscribe( (data: UsersI[])=>{
      this.users = data;
    }, (error) => {
      console.log('error');
      alert('Ocurrió un error');
    })
  } 

}
