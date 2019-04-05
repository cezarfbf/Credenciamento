import { Component, OnInit } from '@angular/core';
import { Customer } from '../view-model/customer';
import { AppDataService } from '../services/app-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [AppDataService]
})
export class CustomerListComponent implements OnInit {

  allCustomers: Array<Customer>;
  customers: Array<Customer>;
  option: string;

  constructor(private dataService: AppDataService,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.dataService.getCustomers().subscribe(
      customers => {
        this.allCustomers = customers;

        this.option = this.route.snapshot.params['option'];
        this.updateList();
      }
    );

    this.route.params.subscribe(params => {
      this.option = params['option'];
      this.updateList();
     });
  }

  updateList() {
    this.customers = this.option == 'city'?this.allCustomers.slice(0, 5): this.allCustomers.slice(5, this.allCustomers.length);
  }

}
