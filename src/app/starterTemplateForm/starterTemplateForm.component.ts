import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    message: string;

    constructor() { }

    ngOnInit() { 
        this.customer = {
            firstName: 'thibaud'
        };
    }

    onSubmit() {
        this.message = 'submit ' + this.customer.firstName;
    }

}
