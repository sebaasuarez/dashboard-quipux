import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {img: 'assets/images/slider-1.png'},
    {img: 'assets/images/slider-2.png'},
    {img: 'assets/images/slider-1.png'},
    {img: 'assets/images/slider-2.png'}
  ];
  slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, dots: true};

  addSlide() {
    this.slides.push({img: 'http://placehold.it/350x150/777777'});
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }

}
