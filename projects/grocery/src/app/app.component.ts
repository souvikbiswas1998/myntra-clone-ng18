import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
// import { CommonLibsComponent, CommonLibsService } from 'common-libs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  // providers: [CommonLibsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'grocery';
  users=[{userName:"prem", userId:"455346464"}]
  dataFromChild: any;

  constructor() { }
  addTwoNums(a: number, b: number) {
    return a + b
  }

  childEvent(event: any) {
    this.dataFromChild= event
  }
}
