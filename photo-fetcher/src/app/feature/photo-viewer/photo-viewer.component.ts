import { Component, OnInit } from '@angular/core';
import { PhotoFetcherService } from 'src/app/services/photo-fetcher.service';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})
export class PhotoViewerComponent implements OnInit {

  photoUrl: string = ''

  constructor(private photoService: PhotoFetcherService) { }

  ngOnInit(): void {
    
  }

  randomizeImage() {
    this.photoService.fetchRandomPhoto().subscribe(randomPhotoUrl => {
      this.photoUrl = randomPhotoUrl
    })
  }
}
