import { Component, OnInit } from '@angular/core';
import { translate } from '@rxweb/translate';
import { ProjectEntry } from '../../interfaces/projectEntry.interface';
import { ProjectEntryComponent } from './project-entry/project-entry.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @translate() global: any;

  projects: ProjectEntry[] = [
    {
      title: 'RFBP - Mutual Fund Fee Calculator',
      image: 'assets/images/projects/rfbp/rfbp-home.png',
      altText: 'Mutual fund fee calculator app',
      caption: 'A web application developed for BMO using Angular and .NET Core that is used to calculate fees for over 1200 possible funds based on the selected portfolio type.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
