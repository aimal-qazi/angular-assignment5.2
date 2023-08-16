import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  productForm!: FormGroup;
  proData: any;
  productValue: any;

  constructor(public service: ApiService) {}
  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.proData = data;

      this.productValue = {
        title: this.proData.title,
        desc: this.proData.description,
        category: this.proData.category,
        rating: this.proData.rating,
        stock: this.proData.stock,
      };

      this.productForm.patchValue(this.productValue);
    });

    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
    });
  }
}
