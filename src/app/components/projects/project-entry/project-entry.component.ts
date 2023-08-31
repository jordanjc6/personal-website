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

  ngAfterViewInit(): void {
    this.setActiveDot(0);
  }

  previousImage() {
    if (this.figureIndex == 0) {
      this.figureIndex = this.numFigures - 1;
    } else {
      this.figureIndex -= 1;
    }
    this.setActiveDot(this.figureIndex);
  }

  nextImage() {
    if (this.figureIndex == (this.numFigures - 1)) {
      this.figureIndex = 0;
    } else {
      this.figureIndex += 1;
    }
    this.setActiveDot(this.figureIndex);
  }

  setActiveDot(index: number) {
    let dots = document.getElementsByClassName("slide-dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("dot-active");
    }
    dots[index].classList.add("dot-active");
  }

  changeImage(index: number) {
    this.figureIndex = index;
    this.setActiveDot(index);
  }

  removeFocus(element: HTMLButtonElement) {
    element.blur();
  }

}
