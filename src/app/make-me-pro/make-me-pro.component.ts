import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-make-me-pro',
  templateUrl: './make-me-pro.component.html',
  styleUrls: ['./make-me-pro.component.scss']
})
export class MakeMeProComponent {
  myForm!: FormGroup; // Use the definite assignment assertion here

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      image: ['']
    });
  }
  images: any[] = [
    { url: 'image1.jpg' },
    { url: 'image2.jpg' },
    { url: 'image3.jpg' }
  ];

  onImageDropped(event: CdkDragDrop<any[]>) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;

    if (previousIndex !== currentIndex) {
      const movedImage = this.images.splice(previousIndex, 1)[0];
      this.images.splice(currentIndex, 0, movedImage);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.myForm.patchValue({ image: file });
  }
}
