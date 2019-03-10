import { Unit } from '../unit';
import { Component, OnInit } from '@angular/core';
import { TransactionUnit } from '../transaction-unit';

@Component({
  selector: 'center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.css']
})
export class CenterPanelComponent implements OnInit {

  constructor() { }
  entries = new Array<any>();
  stocks = new Array<TransactionUnit>();

  fund = {
    totalFunds : 1000.00
  };

  ngOnInit() {
    this.loadStocks();
  }
  getStock(name: string) {
    return this.contains(name) ? this.stocks[this.getStockIndex(name)] : undefined;
  }
  removeStock(name: string) {
    if (this.contains(name)) {
      this.stocks.splice(this.getStockIndex(name), 1);
    }
  }
  getStockIndex(name: string) {
    for (let i = 0; i < this.stocks.length; i++) {
      const item = this.stocks[i];
      if (item.unit.name === name) {
        return i;
      }
    }
    return -1;
  }
  contains(name: string): boolean {
    return this.getStockIndex(name) > -1;
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
