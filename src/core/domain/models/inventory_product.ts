export class InventoryProductModel {
  static ENABLE = 1;
  static DISABLE = 2;
  static LOCK = 3;
  static PENDING = 4;
  static DELETE = 99;

  private idInventoryProduct: number | undefined;
  private inventoryProduct: string | undefined;

  public get getIdInventoryProduct(): number | undefined {
    return this.idInventoryProduct;
  }
  public set setIdInvetoryProduct(idInventoryProduct: number | undefined){
    this.idInventoryProduct = idInventoryProduct;
  }
  public get getInventoryProduct(): string | undefined {
    return this.inventoryProduct;
  }
  public set setInventoryProduct(inventoryProduct: string | undefined) {
    this.inventoryProduct = inventoryProduct;
  }
}