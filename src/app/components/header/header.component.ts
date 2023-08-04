import { Component, OnInit } from '@angular/core';

import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @translate() global: any;

  constructor() { }

  ngOnInit(): void {
  }

}
