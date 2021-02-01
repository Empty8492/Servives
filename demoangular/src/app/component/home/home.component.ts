import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../servives/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public aa:CommonService) { }
  
  public list: any[] = [];

  ngOnInit(): void {
  this.list= this.aa.get('api/Users');

  }

}
