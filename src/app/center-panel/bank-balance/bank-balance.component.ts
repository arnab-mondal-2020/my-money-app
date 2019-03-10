import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bank-balance',
  templateUrl: './bank-balance.component.html',
  styleUrls: ['./bank-balance.component.css']
})
export class BankBalanceComponent implements OnInit {

  constructor() { }

  amount = 0.0;
  isOperating = false;
  amountInput = '0.00';
  @Input('bankBalance') bankBalance: any;

  ngOnInit() {
  }
  addAmount(form) {
    // console.log('bankBalance.availableBalance', this.bankBalance.availableBalance);
    // console.log('this.amountInput', this.amountInput);
    this.bankBalance.availableBalance = parseFloat(this.bankBalance.availableBalance) + parseFloat(this.amountInput);
    // console.log('bankBalance.availableBalance', this.bankBalance.availableBalance);
    this.amountOk();
    form.reset();
  }
  amountOk() {
    this.amountInput = '0.00';
    this.isOperating = false;
  }
  amountCancel() {
    this.isOperating = false;
    this.amountInput = '0.00';
  }
  addAmtDisplay() {
    this.isOperating = true;
  }
}
