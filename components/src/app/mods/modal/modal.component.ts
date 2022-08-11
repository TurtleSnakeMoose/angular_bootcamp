import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter()

  constructor(private el: ElementRef) { 
    
  }
  
  ngOnDestroy(): void {
    this.el.nativeElement.remove()
  }
  
  ngOnInit(): void {
    document.body.append(this.el.nativeElement)
  }
  
  onClose() {
    this.close.emit()
  }
    
  
}
