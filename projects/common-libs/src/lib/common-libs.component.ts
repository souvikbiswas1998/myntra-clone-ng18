import { Component, Optional, SkipSelf } from '@angular/core';
import { CommonLibsService } from './common-libs.service';

@Component({
  selector: 'lib-common-libs',
  standalone: true,
  imports: [],
  providers: [CommonLibsService],
  template: `
    <p>
      common-libs works!
    </p>
  `,
  styles: ``
})
export class CommonLibsComponent {

  constructor(@Optional() @SkipSelf() parentModule?: CommonLibsComponent) {
    if (parentModule) {
      throw new Error(
        'CommonLib is already loaded. Import it in the AppModule only');
    }
  }
}
