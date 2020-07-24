import { Component, OnInit, Host } from '@angular/core';

@Component({
  selector: 'basic-template-driven-form',
  templateUrl: './basicForm.component.html'
})
export class BasicFormComponent implements OnInit {
  form: any;
  powers: string[];
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
    this.powers = ['Fire Control', 'Magnetism', 
                'Mind Control'];
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }
}
