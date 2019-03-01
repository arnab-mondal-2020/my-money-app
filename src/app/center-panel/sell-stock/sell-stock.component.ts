import { Unit } from './../add-entry/unit';
import { TransactionUnit } from './../add-entry/transaction-unit';
import { EntryBasic } from './../add-entry/entry-basic';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sell-stock',
  templateUrl: './sell-stock.component.html',
  styleUrls: ['./sell-stock.component.css']
})
export class SellStockComponent implements OnInit {
  constructor() { }

  @Input('entries') entries: Array<any>;
  @Input('stocks') stocks: Array<TransactionUnit>;

  entryForm = new EntryBasic();
  ngOnInit() {
  }

  addEntry() {
    const newEntry = this.entryForm.createCopy();
  }
  reset(field) {
    console.log('Reset has been called..', field)
    // field = '';
  }

}
