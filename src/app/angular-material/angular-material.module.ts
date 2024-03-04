import { NgModule } from '@angular/core';
import { DateFnsAdapter } from '@angular/material-date-fns-adapter';
import { MatButtonModule } from '@angular/material/button';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { enUS } from 'date-fns/locale';

const DATE_FORMATS = {
  parse: {
    dateInput: 'dd.MM.yyyy',
  },
  display: {
    dateInput: 'dd.MM.yyyy',
    monthYearLabel: 'MM yyyy',
    dateA11yLabel: 'dd.MM.yyyy',
    monthYearA11yLabel: 'MM yyyy',
  },
};

@NgModule({
  imports: [],
  exports: [MatButtonModule],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: enUS,
    },
    {
      provide: DateAdapter,
      useClass: DateFnsAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ],
})
export class AngularMaterialModule {}
