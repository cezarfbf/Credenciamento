import { Component, OnInit } from '@angular/core';
import { Customer } from '../view-model/customer';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [AppDataService]
})
export class CustomerComponent {

  customers : Array<Customer>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private router: Router,
              private dataService: AppDataService) {
                dataService.getCustomers().subscribe((data) => this.customers = data)
               }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createCustomer() {
    this.router.navigate(['/authenticated/customer-detail/', 0, 'create']);
  }

  deleteCustomer(id: number) {
    this.isDeleting = true;
    this.dataService.deleteCustomer(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
      );
  }

  deleteCustomerQuestion(id:number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editCustomer(id: number) {
    this.router.navigate(['/authenticated/customer-detail/', id, 'edit']);
  }

  showCustomerDetail(id: number) {
    this.router.navigate(['/authenticated/customer-detail/', id, 'details']);
  }

}
