import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'Mike', age:'33', job: 'Dev'},
    { name: 'Bomj', age:'33', job: 'Malgeza'},
    { name: 'Mini', age:'33', job: 'TAPI'},
    { name: 'Igor', age:'35', job: 'Crypto'}
  ]

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]

  constructor() { }

  ngOnInit(): void {}

}
