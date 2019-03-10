import {Component, Input, OnInit} from '@angular/core';
import {ValidationErrors} from '@angular/forms';

@Component({
  selector: 'add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent implements OnInit {

  constructor() { }

  @Input('fund') fund: any;
  @Input('bankBalance') bankBalance: any;
  addedFunds = 0.00;
  funds: string;
  payMethod = 'upi';
  ngOnInit() {
  }

  addFunds(addFundsForm, amount) {
    console.log('this.bankBalance.availableBalance', amount);

    this.addedFunds = parseFloat(this.funds);
    this.fund.totalFunds += this.addedFunds;
    console.log('this.totalFunds', this.funds);
    this.funds = '0.0';

    let deduction = this.addedFunds;
    if (this.payMethod !== 'upi') {
      deduction = this.addedFunds + 10.2;
    }
    this.bankBalance.availableBalance = this.bankBalance.availableBalance - deduction;
    addFundsForm.reset();
  }


}
