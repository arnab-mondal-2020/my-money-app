export class EntryBasic {
  constructor(
    public stockName?: string,
    public txnType?: string,
    public unitPrice?: number,
    public quantity?: number,
    public entryId?: string
  ) {}
  createCopy() {
    const copy = new EntryBasic(this.stockName, this.txnType, this.unitPrice, this.quantity);
    this.reset();
    return copy;
  }
  reset() {
    this.stockName = '';
    this.txnType = '';
    this.unitPrice = 0.0;
    this.quantity = 0;
  }
}
