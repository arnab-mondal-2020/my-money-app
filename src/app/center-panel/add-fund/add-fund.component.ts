import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent implements OnInit {

  constructor() { }

  @Input('fund') fund: any;
  addedFunds = 0.00;
  funds: string;
  ngOnInit() {
  }

  addFunds(addFundsForm) {
    this.addedFunds = parseFloat(this.funds);
    this.fund.totalFunds += this.addedFunds;
    console.log('this.totalFunds', this.funds);
    this.funds = '0.0';
    addFundsForm.reset();
  }
}
