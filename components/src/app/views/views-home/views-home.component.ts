import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {value: 22, label: '# of Users'},
    {value: 900, label: 'Revenue'},
    {value: 1000, label: 'Reviews'}
  ]

  items = [
    {image: '../../../assets/img/couch.jpeg', title: 'Couch', description: 'This is a fantastic couch to sit on.'},
    {image: '../../../assets/img/dresser.jpeg', title: 'Dresser', description: 'This is a fantastic dresser to put stuff in.'}
  ]

  constructor() { }


  ngOnInit(): void {
  }

}
