export class OrderModel {
  static ENABLE = 1;
  static DISABLE = 2;
  static LOCK = 3;
  static PENDING = 4;
  static DELETE = 99;

  private idOrder: number | undefined;
  private idClient: number | undefined;
  private orderDate: string | undefined;
  private totalPrice: number | undefined;
  private status: number | undefined;

  public get getIdOrder(): number | undefined {
    return this.idOrder;
  }
  public set setIdOrder(idOrder: number | undefined) {
    this.idOrder= idOrder;
  }
  public get getIdClient(): number | undefined {
    return this.idClient;
  }
  public set setIdClient(idClient: number | undefined){
    this.idClient = idClient;
  }
  public get getOrderDate(): string | undefined {
    return this.orderDate;
  }
  public set setOrderDate(orderDate: string | undefined) {
    this.orderDate = orderDate;
  }
  public get getTotalPrice(): number | undefined {
    return this.totalPrice;
  }
  public set setTotalPrice(totalPrice: number | undefined) {
    this.totalPrice = totalPrice;
  }
  public get getStatus(): number | undefined {
    return this.status;
  }
  public set setStatus(status: number | undefined) {
    this.status = status;
  }

    
  
}