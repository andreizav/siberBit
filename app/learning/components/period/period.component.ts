import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Time } from '../../models/time.interface';

@Component({
  selector: 'period',
  styleUrls: ['period.component.scss'],
  templateUrl: 'period.component.html'
})
export class PeriodComponent {
  checkedPeriod:Time;
  constructor(){}

  @Input()
  times:Time[];

  @Input()
  currentPeriod:Time;

  @Output()
  setCurrentPeriod:EventEmitter<Time> = new EventEmitter<Time>();
  setPeriod(period){
    this.setCurrentPeriod.emit(period);
  }
}
