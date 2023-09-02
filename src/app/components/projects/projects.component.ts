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
          caption: 'A web application developed for BMO using Angular and .NET Core that is used to calculate fees for over 1200 possible funds based on the selected portfolio type. This tool is meant to be used by BMO employees when consulting clients.'
        },
        {
          image: 'assets/images/projects/rfbp/rfbp-fundsearch.png',
          altText: 'Mutual fund fee calculator app fund search section',
          caption: 'You may filter funds by 3 individual categories or by BMO Portfolio. You may also use the text search to filter by Fund Name or Fund Code.'
        },
        {
          image: 'assets/images/projects/rfbp/rfbp-portfoliolist.png',
          altText: 'Mutual fund fee calculator app portfolio list',
          caption: 'You can enter an investment value and add funds to your portfolio list.'
        },
        {
          image: 'assets/images/projects/rfbp/rfbp-provinceselect.png',
          altText: 'Mutual fund fee calculator app province selection',
          caption: 'Here you may select a province to calculate taxes on your portfolio.'
        },
        {
          image: 'assets/images/projects/rfbp/rfbp-feecomparison.png',
          altText: 'Mutual fund fee calculator app fee comparison screen',
          caption: 'This summary screen gives a tabular comparison between existing portfolio fees and the fees if you switched to a preferred BMO portfolio.'
        },
        {
          image: 'assets/images/projects/rfbp/rfbp-pdfmodal.png',
          altText: 'Mutual fund fee calculator app PDF modal',
          caption: 'This modal accepts details of the client and BMO employee to use in generating the PDF summary.'
        },
        {
          image: 'assets/images/projects/rfbp/rfbp-generatedpdf.png',
          altText: 'Mutual fund fee calculator app generated PDF',
          caption: 'The generated PDF contains information on the investment portfolio and the tabular summary shown in the app.'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
