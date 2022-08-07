import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title:"Neat Tree",
      subtitle:"nature", 
      content:"Saw this awesome tree during my hike today.",
      imgSrc:"../assets/tree.jpeg"
    },
    {
      title:"Snowy Mountains",
      subtitle:"hikingperson", 
      content:"Beautiful view of some mountains i saw during my hike.",
      imgSrc:"../assets/mountain.jpeg"
    },
    {
      title:"Mountain Bike" ,
      subtitle:"biking12222",
      content:"Action shot of me riding my bike.",
      imgSrc:"../assets/biking.jpeg"
    }
  ]
}
