import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../view-model/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { AppDataService } from '../services/app-data.service';
import { Observable } from 'rxjs';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = {...this.originalUserSettings};
  postError =  false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;
  startDate: Date;
  startTime: Date;
  userRating = 0;
  maxRating = 10;

  constructor(private appData: AppDataService,
              private localeService: BsLocaleService) { }

  ngOnInit() {
    this.subscriptionTypes = this.appData.getSubscriptionTypes();

    this.startDate = new Date();
    this.startTime = new Date();

    defineLocale('pt-br', ptBrLocale); 
    this.localeService.use('pt-br');
  }

  onSubmit(form: NgForm){
    console.log('in onsubmit: ', form.value);
    
    // if (form.valid) {
    //   this.appData.postUserSettingsForm(this.userSettings).subscribe(
    //     result => console.log('success: ', result),
    //     error => this.onHttpError(error)
    //   );
    // }
    // else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Fix the errors above.'
    // }
    
  }
  onHttpError(error: any) {
    console.log('Error: ', error);
    this.postError = true;
    this.postErrorMessage = error.error.errorMessage;
  }

  onBlur(field: NgModel){

  }

}
