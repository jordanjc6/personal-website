import { Component, Input, OnInit } from '@angular/core';
import { Figure } from '../../../interfaces/figure.interface';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.scss']
})
export class ProjectEntryComponent implements OnInit {

  @Input() title!: string;
  @Input() date!: string;
  @Input() figures!: Figure[];

  figureIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
