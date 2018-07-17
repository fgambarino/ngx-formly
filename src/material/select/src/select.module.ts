import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FormlyFieldSelect } from './select.type';

@NgModule({
  declarations: [FormlyFieldSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,

    FormlyMatFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [{
        name: 'select',
        component: FormlyFieldSelect,
        wrappers: ['form-field'],
        defaultOptions: {
          templateOptions: {
            options: [],
          },
        },
      }],
    }),
  ],
})
export class FormlyMatSelectModule { }
