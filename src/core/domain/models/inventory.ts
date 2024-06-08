export class InventoryModel{
  static ENABLE = 1;
  static DISABLE= 2;
  static LOCK = 3;
  static PENDING = 4;
  static DELETE = 99;

  private idInventory: number | undefined;
  private idProduct: number | undefined;
  private idSupplier: number | undefined;
  private quantity: number | undefined;
  private status: number | undefined;

  public get getIdInventory(): number | undefined{
      return this.idInventory;
  }
  public set setIdInventory(idInventory: number | undefined){
      this.idInventory = idInventory;
  }
  public get getIdProduct(): number | undefined {
      return this.idProduct;
  }
  public set setIdProduct(idProduct: number | undefined){
      this.idProduct = idProduct;
  }
  public get getIdSupplier(): number | undefined{
      return this.idSupplier;
  }
  public set setIdSupplier(idSupplier: number | undefined) {
      this.idSupplier = idSupplier;
  }
  public get getQuantity(): number | undefined {
      return this.quantity;
  }
  public set setQuantity(quantity: number | undefined){
      this.quantity = quantity;
  }
  public get getStatus(): number | undefined{
      return this.status;
  }
  public set setStatus(status: number | undefined){
      this.status = status;
  }
}