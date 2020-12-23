import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeartAnimationLibComponent } from './heart-animation-lib.component';
import { HeartsComponent } from './hearts/hearts.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeartAnimationLibComponent, HeartsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeartAnimationLibComponent, HeartsComponent]
})
export class HeartAnimationLibModule { }