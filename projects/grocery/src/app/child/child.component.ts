import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {

  }

  @Input() userDetails:any="prem";
  @Output() valuechanged = new EventEmitter()
  @Output() userValueChanged = new EventEmitter()

  emitEvent(){
    this.valuechanged.emit('Data from child')
  }

  emitUserEvent(){
    this.userValueChanged.emit('user data from child')
  }
}
