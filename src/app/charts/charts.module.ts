import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ChartsPageRoutingModule } from './charts-routing.module';
import {ChartsModule} from 'ng2-charts';
import { ChartsPage } from './charts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    FlexLayoutModule,
    ChartsPageRoutingModule,
    
  ],
  declarations: [ChartsPage]
})
export class ChartsPageModule {}
