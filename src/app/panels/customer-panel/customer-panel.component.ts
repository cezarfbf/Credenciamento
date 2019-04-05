import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/view-model/customer';

@Component({
  selector: 'app-customer-panel',
  templateUrl: './customer-panel.component.html',
  styleUrls: ['./customer-panel.component.css']
})
export class CustomerPanelComponent implements OnInit {

  @Input() customer: Customer;
  @Input() index = 1;

  constructor() { }

  ngOnInit() {
  }

}
