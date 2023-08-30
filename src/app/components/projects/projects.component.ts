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
      date: 'August 2023',
      figures: [
        {
          image: 'assets/images/projects/rfbp/rfbp-home.png',
          altText: 'Mutual fund fee calculator app home page',
          caption: 'A web application developed for BMO using Angular and .NET Core that is used to calculate fees for over 1200 possible funds based on the selected portfolio type.'
        },
        {
          image: 'assets/images/projects/rfbp/rfbp-fundsearch.png',
          altText: 'Mutual fund fee calculator app fund search section',
          caption: 'You may filter funds by 3 individual categories or by BMO Portfolio. You may also use the text search to filter by Fund Name or Fund Code.'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
