import { Unit } from './../add-entry/unit';
import { TransactionUnit } from './../add-entry/transaction-unit';
import { EntryBasic } from './../add-entry/entry-basic';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'buy-stock',
  templateUrl: './buy-stock.component.html',
  styleUrls: ['./buy-stock.component.css']
})
export class BuyStockComponent implements OnInit {
  constructor() { }

  @Input('entries') entries: Array<any>;
  @Input('stocks') stocks: Array<TransactionUnit>;

  entryForm = new EntryBasic();
  message: string;

  ngOnInit() {
  }

  addEntry() {
    const newEntry = this.entryForm.createCopy();
  }

  addStock() {
    const name = this.entryForm.stockName;
    const quantity = this.entryForm.quantity;
    const unitPrice = this.entryForm.unitPrice;

    const currentStock = this.getStock(name);

    if (currentStock) {
      const totalQuantity = currentStock.quantity + quantity;
      const totalPrice = (currentStock.unit.unitPrice * currentStock.quantity) + (unitPrice * quantity);
      const averageUnitPrice = totalPrice / totalQuantity;

      currentStock.quantity = totalQuantity;
      currentStock.unit.unitPrice = averageUnitPrice;
      this.message = 'Stock ' + name  + ' has been updated.';
    } else {
      const unit = new Unit(name, unitPrice);
      const txUnit = new TransactionUnit(unit, quantity, 'B');

      this.stocks.push(txUnit);
      this.message = 'Stock ' + name  + ' has been added.';
    }

    this.entryForm.reset();

  }

  reset(field) {
    console.log('Reset has been called..', field)
    // field = '';
  }
  getStock(name: string) {
    for(let i = 0; i < this.stocks.length; i++) {
      const item = this.stocks[i];
      if (item.unit.name === name) {
        return item;
      }
    }
    return undefined;
  }

}
