import { Unit } from './add-entry/unit';
import { Component, OnInit } from '@angular/core';
import {PartyOrder} from './party-order';
import {AllOrdersSummary} from './all-orders-summary';
import { TransactionUnit } from './add-entry/transaction-unit';

@Component({
  selector: 'center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.css']
})
export class CenterPanelComponent implements OnInit {

  constructor() { }
  entries = new Array<any>();
  allOrders = new AllOrdersSummary();
  stocks = new Array<TransactionUnit>();

  ngOnInit() {
    this.loadStocks();
  }

  private loadStocks() {
    const u1 = new Unit('MARICO', 334.35);
    const s1 = new TransactionUnit(u1, 3, 'B');

    const u2 = new Unit('HINDUNILVR', 1732.75);
    const s2 = new TransactionUnit(u2, 5, 'B');

    this.stocks.push(s1);
    this.stocks.push(s2);
  }
}
