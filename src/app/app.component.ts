import { Component } from '@angular/core';

import { WebcamImage } from 'ngx-webcam';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  public webcamImage: WebcamImage | undefined;
  isCamera=false;
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
  imageArray: any[] = [];
  selectedImages(event: any) {
    if (Array.from(event.target.files).length <= 6) {
      Array.from(event.target.files).forEach((element: any, index: number) => {
        const file = event.target.files[index];
        const reader = new FileReader();
        reader.onload = e => this.imageArray.push(reader.result);
        reader.readAsDataURL(file);
      }
      );
    }
    else {
      console.log("error")
    }
  }
  removeImage(i: number) {
    if (i > -1) {
      this.imageArray.splice(i, 1);
    }
  }
}
