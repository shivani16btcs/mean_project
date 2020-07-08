import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { mimeType } from "./mime-type.validator";
import {HomeSidebarComponent} from "../home-sidebar/home-sidebar.component";
import {PostCreateService} from "../shared/post-create.service"

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostcreateComponent implements OnInit {
  form: FormGroup;
  isLoading=false;
  imagePreview: string;

  constructor(
  private  homesidebar:HomeSidebarComponent,
  private  postsService:PostCreateService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
  }


onImagePicked(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.form.patchValue({ image: file });
  this.form.get("image").updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result as string;
  };
  reader.readAsDataURL(file);
}

onSavePost() {
  if (this.form.invalid) {
    return;
  }
  // console.log(`title: ${this.form.value.title},content:${this.form.value.content},file:${this.form.value.image}`);
this.postsService.addPost(
    this.form.value.title,
    this.form.value.content,
    this.form.value.image
);
this.homesidebar.uploadclick=false;
this.form.reset();
}

oncancel(){
  this.homesidebar.uploadclick=false;
}


}
