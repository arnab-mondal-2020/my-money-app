export class Unit {
  constructor(
    public name: string,
    public unitPrice: number,
    public unitId?: string
  ) {
    this.unitId = this.name;
  }
}
