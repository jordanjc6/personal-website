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
  numFigures!: number;

  constructor() { }

  ngOnInit(): void {
    this.numFigures = this.figures.length;
  }

  previousImage() {
    if (this.figureIndex == 0) {
      this.figureIndex = this.numFigures - 1;
    } else {
      this.figureIndex -= 1;
    }
  }

  nextImage() {
    if (this.figureIndex == (this.numFigures - 1)) {
      this.figureIndex = 0;
    } else {
      this.figureIndex += 1;
    }
  }

  removeFocus(element: HTMLButtonElement) {
    element.blur();
  }

}
