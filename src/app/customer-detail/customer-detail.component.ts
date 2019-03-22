import { Component, OnInit } from '@angular/core';
import { Customer } from '../view-model/customer';
import { FieldDefinition } from 'src/fw/dynamic-forms/field-definition';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers: [AppDataService]
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;
  customerDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    { key: 'name',
      type: 'string',
      isId: false,
      label: 'Customer Name',
      required: true
    },
    {
      key: 'phone',
      type: 'string',
      isId: false,
      label: 'Phone',
      required: false
    },
    {
      key: 'speciality',
      type: 'string',
      isId: false,
      label: 'Speciality',
      required: true
    },
    {
      key: 'register',
      type: 'string',
      isId: false,
      label: 'Register',
      required: false
    }
  ];
  errorMessage: string;
  operation: string;

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private dataService: AppDataService) { }

  createCustomer(customer: Customer) {
    customer.id = 0;
    this.errorMessage = null;
    this.dataService.createCustomer(customer).subscribe(
      c => this.router.navigate(['/authenticated/customer']),
      err => this.errorMessage = 'Error creating customer'
      );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    if (this.operation === 'create') {
      this.customer = { id: 0, name: "", phone: "", speciality: "", register: "" };
    }
    else
      this.dataService.getCustomer(this.route.snapshot.params['id'])
        .subscribe((customer: Customer) => this.customer = customer);
  }

  updateCustomer(customer: Customer) {
    this.errorMessage = null;
    this.dataService.updateCustomer(customer).subscribe(
      c => this.router.navigate(['/authenticated/customer']),
      err => this.errorMessage = 'Error updating customer'
      );
  }

}
