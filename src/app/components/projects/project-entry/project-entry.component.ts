import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.scss']
})
export class ProjectEntryComponent implements OnInit {

  @Input() title!: string;
  @Input() image!: string;
  @Input() altText!: string;
  @Input() caption!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
