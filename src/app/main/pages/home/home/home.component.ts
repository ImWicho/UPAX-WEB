/* eslint-disable id-blacklist */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: { image: string }[] = [];
  constructor() {}

  ngOnInit(): void {


    for (let index = 1; index < 6; index++) {
      this.slides.push(
        { image: `assets/images/eon${index}.svg` }
      );
    }
  }

}
