import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
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
