import { Unit } from './unit';

export class TransactionUnit {
  constructor(
    public unit: Unit,
    public quantity: number,
    public txnType: string,
    public txnId?: string
  ) {
    const random = Math.random().toString();
    const prefix = (unit.name.length > 3 ? unit.name.substring(0, 3) : name) + 'TXN';
    this.txnId = prefix +  random.substring(random.length - 5);
  }
}
