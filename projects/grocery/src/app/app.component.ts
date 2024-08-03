import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { CommonLibsComponent, CommonLibsService } from 'common-libs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // providers: [CommonLibsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grocery';

  constructor() { }
  addTwoNums(a: number, b: number) {
    return a + b
  }
}
