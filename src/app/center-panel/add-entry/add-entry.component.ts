import { EntryBasic } from './entry-basic';
import {Component, Input, OnInit} from '@angular/core';
import {CustomerBasic} from './customer-basic';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddOrderComponent} from '../add-order/add-order.component';

@Component({
  selector: 'add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  constructor() { }

  @Input('entries') entries: Array<any>;

  entryForm = new EntryBasic();
  ngOnInit() {

  }
  addEntry() {
    const newEntry = this.entryForm.createCopy();
    this.entryForm.reset();

    this.entries.push(
      {
        id: newEntry.entryId,
        type: newEntry.unitPrice
      });
  }
}
