import { Unit } from '../../unit';
import { TransactionUnit } from '../../transaction-unit';
import { EntryBasic } from '../../entry-basic';
import { Component, OnInit, Input } from '@angular/core';
import {CenterPanelComponent} from '../center-panel.component';
import {getCurrencySymbol} from '@angular/common';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'buy-stock',
  templateUrl: './buy-stock.component.html',
  styleUrls: ['./buy-stock.component.css']
})
export class BuyStockComponent implements OnInit {
  constructor(private centerPanel: CenterPanelComponent) { }

  @Input('entries') entries: Array<any>;
  @Input('stocks') stocks: Array<TransactionUnit>;
  @Input('fund') fund: any;

  entryForm = new EntryBasic();
  message: string;
  error = false;
  requiredFunds = 0.00;

  ngOnInit() {
  }
  addEntry() {
    const newEntry = this.entryForm.createCopy();
  }
  addStock(buyStockForm) {
    this.message = undefined;
    const name = this.entryForm.stockName.toUpperCase();
    const quantity = this.entryForm.quantity;

    const unitPrice = this.entryForm.unitPrice;
    let totalPrice = unitPrice * quantity;
    console.log('totalPrice', totalPrice);

    console.log(this.fund);
    if (totalPrice > this.fund.totalFunds) {
      this.requiredFunds = totalPrice;
      this.error = true;
      return false;
    }
    console.log('Proceeding to add stock');
    const currentStock = this.centerPanel.getStock(name);

    this.fund.totalFunds = this.fund.totalFunds - totalPrice;

    if (currentStock) {
      const totalQuantity = currentStock.quantity + quantity;
      totalPrice = (currentStock.unit.unitPrice * currentStock.quantity) + (unitPrice * quantity);
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
    this.error = false;
    this.requiredFunds = 0.00;

    this.resetForm(buyStockForm);
  }

  resetForm(buyStockForm) {
    buyStockForm.reset();
  }

}
