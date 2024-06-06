export class SupplierModel{
  static ENABLE = 1;
  static DISABLE= 2;
  static LOCK = 3;
  static PENDING = 4;
  static DELETE = 99;

  private idSupplier: number | undefined;
  private supplierName: string | undefined;
  private contactName: string | undefined;
  private contactEmail: string | undefined;
  private contactPhone: string | undefined;
  private status: number | undefined;

  public get getIdSupplier(): number | undefined{
      return this.idSupplier;
  }
  public set setIdSupplier(idSupplier: number | undefined){
      this.idSupplier = idSupplier;
  }
  public get getsupplierName(): string | undefined {
      return this.supplierName;
  }
  public set setsupplierName(supplierName: string | undefined){
      this.supplierName = supplierName;
  }
  public get getContactName(): string | undefined {
      return this.contactName;
  }
  public set setContactName(contactName: string | undefined){
      this.contactName = contactName;
  }
  public get getContactEmail(): string | undefined {
      return this.contactEmail;
  }
  public set setContactEmail(contactEmail: string | undefined){
      this.contactEmail = contactEmail;
  }
  public get getContactPhone(): string | undefined {
      return this.contactPhone;
  }
  public set setContactPhone(contactPhone: string | undefined){
      this.contactPhone = contactPhone;
  }
  public get getStatus(): number | undefined{
      return this.status;
  }
  public set setStatus(status: number | undefined){
      this.status = status;
  }
}