import { Unit } from '../../unit';
import { TransactionUnit } from '../../transaction-unit';
import { EntryBasic } from '../../entry-basic';
import { Component, OnInit, Input } from '@angular/core';
import {CenterPanelComponent} from '../center-panel.component';

@Component({
  selector: 'sell-stock',
  templateUrl: './sell-stock.component.html',
  styleUrls: ['./sell-stock.component.css']
})
export class SellStockComponent implements OnInit {
  constructor(private centerPanel: CenterPanelComponent) { }
  static MARGIN_PERCENTAGE = 5.00;
  @Input('entries') entries: Array<any>;
  @Input('stocks') stocks: Array<TransactionUnit>;
  @Input('fund') fund: any;
  selectedStock: string;
  maxStock = 0;

  done = false;
  error = false;
  soldStock = '';
  soldQuantity = 0;
  soldUnitPrice = 0.00;
  gain = 0.0;
  isLoss = false;

  sellUnitPrice = 0.00;
  sellQuantity = 0;

  entryForm = new EntryBasic();

  ngOnInit() {
    this.changeOption();
  }

  addEntry() {
    const newEntry = this.entryForm.createCopy();
  }

  changeOption() {
    const stock = this.centerPanel.getStock(this.selectedStock);

    if (stock) {
      this.sellUnitPrice = 0.00;
      this.maxStock = stock.quantity;
      this.sellQuantity = stock.quantity;
      const sellUnitPrice = stock.unit.unitPrice;
      this.sellUnitPrice += (sellUnitPrice * 1.035);
    }
  }
  sell(sellStockForm) {
    this.done = true;
    const sellPrice = this.sellUnitPrice * this.sellQuantity;

    this.fund.totalFunds = this.fund.totalFunds + sellPrice;

    const stock = this.centerPanel.getStock(this.selectedStock);
    stock.quantity = stock.quantity - this.sellQuantity;
    if (stock.quantity === 0) {
      this.centerPanel.removeStock(this.selectedStock);
    }
    this.maxStock = stock.quantity;

    this.soldStock = this.selectedStock;

    this.isLoss = stock.unit.unitPrice * this.sellQuantity > sellPrice;

    this.gain = sellPrice - (stock.unit.unitPrice * this.sellQuantity);

    if (this.isLoss) {
      this.gain = this.gain * (-1);
    }
    this.soldQuantity = this.sellQuantity;
    this.soldUnitPrice = this.sellUnitPrice;
    this.resetForm(sellStockForm);
  }
  resetForm(sellStockForm) {
    sellStockForm.reset();
  }
}
