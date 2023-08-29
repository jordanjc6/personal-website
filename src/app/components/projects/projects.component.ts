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
      title: '',
      image: '',
      altText: '',
      caption: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
