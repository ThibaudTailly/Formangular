import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basicForm/basicForm.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
import { StarterTemplateFormComponent } from './starterTemplateForm/starterTemplateForm.component';
import { StarterReactiveFormComponent } from './starterReactiveForm/starterReactiveForm.component';

import { ControlValueAccessorComponent } from './controlValueAccessor/controlValueAccessor.component';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/startertemplateform' },
  { path: 'startertemplateform', component: StarterTemplateFormComponent    },
  { path: 'starterreactiveform', component: StarterReactiveFormComponent },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'reactiveform',     component: ReactiveFormComponent  },
  { path: 'controlvalueaccessor', component: ControlValueAccessorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    StarterTemplateFormComponent, StarterReactiveFormComponent,
    BasicFormComponent, TemplateFormComponent, ReactiveFormComponent,
    ControlValueAccessorComponent
  ];
}

