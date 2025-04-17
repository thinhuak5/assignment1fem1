import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IAlertMessage} from '../interface/alert-message.interface';

@Component({
  selector: 'ng-alerts',
  imports: [CommonModule],
  template: `
    <div *ngFor="let item of messages; let i = index">
        <div
            class="alert"
            [ngClass]="{
            'alert-primary': item.status === 'primary',
            'alert-success': item.status === 'success',
            'alert-danger': item.status === 'danger',
            'alert-warning': item.status === 'warning'
            }"
            role="alert"
        >
            {{item.message}}
        </div>
    </div>
  `,
})
export class AlertShowcaseComponent {
  @Input() messages!: IAlertMessage[];

  ngOnChanges() {
    setTimeout(() => {
      this.messages = [];
    }, 3000);
  }
}
