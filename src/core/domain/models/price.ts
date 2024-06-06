export class PriceModel {
  static ENABLE = 1;
  static DISABLE = 2;
  static LOCK = 3;
  static PENDING = 4;
  static DELETE = 99;

  private idPrice: number | undefined;
  private price: number | undefined;

  public get getIdPrice(): number | undefined {
    return this.idPrice
  }
  public set setIdPrice(idPrice: number | undefined) {
    this.idPrice = idPrice;
  }
  public get getPrice(): number | undefined {
    return this.price;
  }
  public set setPrice(price: number | undefined) {
    this.price = price;
  }

}