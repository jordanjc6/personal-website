import { Component } from '@angular/core';

import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';

  @translate() global: any;
}
