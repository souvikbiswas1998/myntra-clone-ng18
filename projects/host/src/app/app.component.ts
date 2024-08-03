import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLibsComponent, CommonLibsService } from 'common-libs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'host';

  constructor(service: CommonLibsService) {
    service.commonData({ source: 'host', destination: ['host'], data: 'host test data' });
    service.readData('host').subscribe((data: any) => {
      console.log("host", data)
    })
  }
}
