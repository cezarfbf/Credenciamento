import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  formError: string;
  submitting = false;

  constructor() { }

  ngOnInit() {
  }

}
