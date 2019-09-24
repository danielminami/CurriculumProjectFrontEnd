import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-curriculum-data',
  templateUrl: './curriculum-data.component.html',
  styleUrls: ['./curriculum-data.component.css']
})
export class CurriculumDataComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;



  constructor(private formBuilder: FormBuilder)  {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

  onSubmit () {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;

  }

  ngOnInit() {
  }

}
