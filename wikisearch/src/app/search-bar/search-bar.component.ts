import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent{

  @Output() submitSearchTerm = new EventEmitter<string>()

  term = ''

  constructor() { }

  onSearchSubmit(event: Event) {
    event.preventDefault()
    this.submitSearchTerm.emit(this.term)
  }
}
