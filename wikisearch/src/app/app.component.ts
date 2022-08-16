import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages: any[] = []

  constructor(private wikiService: WikipediaService) {}

  async initSearch(searchTerm: string) {

    this.wikiService.search(searchTerm).subscribe(pages => {
      this.pages = pages
    })
  }

}
