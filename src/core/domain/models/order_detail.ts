export class OrderDetailModel {
  static ENABLE = 1;
  static DISABLE= 2;
  static LOCK = 3;
  static PENDING = 4;
  static DELETE = 99;
  
  private idOrderDetail: number | undefined;
  private idOrder: number | undefined;
  private idProduct: number | undefined;
  private quantity: number | undefined;
  private price: number | undefined;
  private status: number | undefined;
  
  public get getIdOrderDetail(): number | undefined {
    return this.idOrderDetail;
  }
  public set setIdOrderDetail(idOrderDetail: number | undefined) {
    this.idOrderDetail = idOrderDetail;
  }
  public get getIdOrder(): number | undefined {
    return this.idOrder;
  }
  public set setIdOrder(idOrder: number | undefined) {
    this.idOrder = idOrder;
  }
  public get getIdProduct(): number | undefined {
    return this.idProduct;
  }
  public set setIdProduct(idProduct: number | undefined) {
    this.idProduct = idProduct;
  }
  public get getQuantity(): number | undefined {
    return this.quantity;
  }
  public set setQuantity(quantity: number | undefined) {
    this.quantity = quantity;
  }
  public get getPrice(): number | undefined {
    return this.price;
  }
  public set setPrice(price: number | undefined) {
    this.price = price;
  }
  public get getStatus(): number | undefined {
    return this.status;
  }
  public set setStatus(status: number | undefined) {
    this.status = status;
  }

}