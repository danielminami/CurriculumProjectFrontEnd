import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPersonalData().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  openDetails() {
    console.log('button clicked');
  }

}
