import { Component, OnInit } from '@angular/core';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @translate() global: any;

  constructor() { }

  ngOnInit(): void {
  }

}
