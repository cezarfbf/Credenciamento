import { Injectable } from '@angular/core';
import { Customer } from '../view-model/customer';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/internal/operators';

@Injectable()
export class AppDataService {

  private customers : Array<Customer> = [
    { id: 100, name:"João Switzerland", phone: "96456-6589", speciality: "Médico do Trabalho", register: "13269"},
    { id: 651, name:"Francisco Luxembourg", phone: "96567-6589", speciality: "Técnico Sgurança", register: "43234" },
    { id: 687, name:"Maria Australia", phone: "96454-8659", speciality: "Terapeuta Ocupacional", register: "525535" },
    { id: 568, name:"Michel Singapore", phone: "96454-5679", speciality: "Socorrista", register: "" },
    { id: 132, name:"Marcos Czech Republic", phone: "96765-6589", speciality: "Médico do Trabalho", register: "5433" },
    { id: 654, name:"Thiago Germany", phone: "96454-6765", speciality: "Bombeiro Civíl", register: "75477" },
    { id: 127, name:"Claudia Spain", phone: "96765-6589", speciality: "Socorrista", register: "4543" },
    { id: 108, name:"Bruna Austria", phone: "96434-9879", speciality: "Médico do Trabalho", register: "54435" },
    { id: 209, name:"Aline Sweden", phone: "96454-9879", speciality: "Terapeuta Ocupacional", register: "54353" },
    { id: 180, name:"Gal Norway", phone: "96544-6987", speciality: "Médico do Trabalho", register: "76768" }
  ];

  constructor(private userService: UserService) {
  }

  createCustomer(vm: Customer) : Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create country'));
    let id = 0;
    this.customers.forEach(c => { if (c.id >= id) id = c.id+1 });
    vm.id = id;
    this.customers.push(vm);
    return of(vm);
  }

  deleteCustomer(id: number) : Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
    return of({}).pipe(delay(2000), 
    tap(e => this.customers.splice(this.customers.findIndex(c => c.id == id), 1)));
  }

  getCustomers() : Observable<any> {
    return of(this.customers);
  }

  getCustomer(id: number) : Observable<Customer> {
    var customer = this.customers.find(c => c.id == id);
    return of(customer);
  }

  updateCustomer(updatedCustomer: Customer) : Observable<any> {
    var customer = this.customers.find(c => c.id == updatedCustomer.id);
    Object.assign(customer, updatedCustomer);
    return of(customer).pipe(delay(2000));
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw(''));
  }
}