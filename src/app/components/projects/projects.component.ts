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
    },
    {
      title: 'MCAP Web Analytics Dashboards',
      date: 'April 2022',
      figures: [
        {
          image: 'assets/images/projects/mcapdashboard/datastudio_db.PNG',
          altText: 'Homeowner Portal Dashboard visual one',
          caption: 'Homeowner Portal Dashboard visual one. One of several web analytics dashboards created using Google Data Studio for MCAP\'s various online mortgage portals. Data is pulled directly from the application\'s databases.'
        },
        {
          image: 'assets/images/projects/mcapdashboard/datastudio_db2.PNG',
          altText: 'Homeowner Portal Dashboard visual two',
          caption: 'Homeowner Portal Dashboard visual two. You may interact with the dashboard by changing the date range or the company brand as seen in the top right.'
        },
        {
          image: 'assets/images/projects/mcapdashboard/dashboard_custom.PNG',
          altText: 'Dynamic web analytics dashboard',
          caption: 'Custom Dashboard. This dashboard is dynamic; you select the desired company brand, data metric, and date range you would like to see graphically.'
        },
        {
          image: 'assets/images/projects/mcapdashboard/dashboard_ss.png',
          altText: 'Other Homeowner Portal Dashboard visual one',
          caption: 'Other Homeowner Portal Dashboard visual one. Dashboard for MCAP\'s Homeowner Portal displaying data aggregated from Google Analytics.'
        },
        {
          image: 'assets/images/projects/mcapdashboard/dashboard_table.PNG',
          altText: 'Other Homeowner Portal Dashboard visual two',
          caption: 'Other Homeowner Portal Dashboard visual two. The table displays individual and summed metrics.'
        }
      ]
    },
    {
      title: 'Lea Quotes App',
      date: 'September 2021',
      figures: [
        {
          image: 'assets/images/projects/leaquotes/home.png',
          altText: 'Lea Quotes App home',
          caption: 'Lea Quotes App is a web app made for my sister to record funny phrases said at home. Frontend is Angular and the backend is a NestJS API performing CRUD actions with a PostgreSQL DB. The app was hosted through Heroku.'
        },
        {
          image: 'assets/images/projects/leaquotes/sidenav.png',
          altText: 'Lea Quotes App sidenav',
          caption: 'View of opening the sidenav on a mobile device.'
        },
        {
          image: 'assets/images/projects/leaquotes/form.png',
          altText: 'Lea Quotes App form',
          caption: 'The quote creation page.'
        },
      ]
    },
    {
      title: 'MC Jewelry App',
      date: 'June 2021',
      figures: [
        {
          image: 'assets/images/projects/mcjewelry/search-parameters.png',
          altText: 'MC Jewelry App search parameters',
          caption: 'This app was made so my mom could more easily price the jewelry she made for her jewelry business. Frontend is VanillaJS, backend is NestJS and a PostgreSQL DB. Hosted on Heroku.'
        },
        {
          image: 'assets/images/projects/mcjewelry/item-selection.png',
          altText: 'MC Jewelry App item selection',
          caption: 'After searching for a bead, you may select it and choose how many beads used in the jewelry and add the resulting price value to the calculation.'
        },
        {
          image: 'assets/images/projects/mcjewelry/price-calculation.png',
          altText: 'MC Jewelry App price calculation',
          caption: 'The calculation is a sum given in CAD.'
        },
        {
          image: 'assets/images/projects/mcjewelry/admin-page.png',
          altText: 'MC Jewelry App admin page',
          caption: 'The admin page is where you may add new beads and update values in the database.'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
