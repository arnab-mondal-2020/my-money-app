import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CenterPanelComponent } from './center-panel/center-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { EmailValidator } from './validators/email-validator';
import { PercentageValidator } from './validators/percentage-validator';
import { PhoneInputValidator } from './validators/phone-input-validator';
import { QuantityValidator } from './validators/quantity-validator';
import { SelectValidator } from './validators/select-validator';
import { TextInputValidator } from './validators/text-input-validator';
import { FormsModule } from '@angular/forms';
import { NumberInputValidator } from './validators/number-input-validator';
import { BuyStockComponent } from './center-panel/buy-stock/buy-stock.component';
import { SellStockComponent } from './center-panel/sell-stock/sell-stock.component';
import { AddFundComponent } from './center-panel/add-fund/add-fund.component';
import { BankBalanceComponent } from './center-panel/bank-balance/bank-balance.component';
import {BankBalanceValidator} from './center-panel/bank-validator';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    CenterPanelComponent,
    RightPanelComponent,
    EmailValidator,
    PercentageValidator,
    PhoneInputValidator,
    QuantityValidator,
    SelectValidator,
    TextInputValidator,
    NumberInputValidator,
    BuyStockComponent,
    SellStockComponent,
    AddFundComponent,
    BankBalanceComponent,
    BankBalanceValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
