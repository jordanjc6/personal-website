import { Component, OnInit } from '@angular/core';
import { translate } from '@rxweb/translate';
import { ProjectEntryComponent } from './project-entry/project-entry.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @translate() global: any;

  constructor() { }

  ngOnInit(): void {
  }

}
