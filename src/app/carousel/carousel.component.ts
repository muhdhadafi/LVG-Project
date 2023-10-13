// src/app/carousel/carousel.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  // List of image filenames in the assets/images folder
  // images: string[] = ['image1.jpg', 'image2.jpg', 'image3.jpeg', 'image4.jpeg'/* Add more filenames as needed */];
//'./assets/images/1.jpeg'
images: string[] = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg'];

  constructor() { }

  ngOnInit(): void {
  }

  // Function to get the full path of an image
  getImagePath(image: string): string {
    return `assets/images/${image}`;
  }
}
