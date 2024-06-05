export class EmployeeModel{
  static ENABLE = 1;
  static DISABLE= 2;
  static LOCK = 3;
  static PENDING = 4;
  static DELETE = 99;

  private idEmployee: number | undefined;
  private name: string | undefined;
  private email: string | undefined;
  private address: string | undefined;
  private status: number | undefined;

  public get getIdEmployee(): number | undefined{
      return this.idEmployee;
  }
  public set setIdEmployee(idEmployee: number | undefined){
      this.idEmployee = idEmployee;
  }
  public get getName(): string | undefined {
      return this.name;
  }
  public set setName(name: string | undefined){
      this.name = name;
  }
  public get getEmail(): string | undefined {
      return this.email;
  }
  public set setEmail(email: string | undefined){
      this.email = email;
  }
  public get getAddress(): string | undefined {
      return this.address;
  }
  public set setAddress(address: string | undefined){
      this.address = address;
  }
  public get getStatus(): number | undefined{
      return this.status;
  }
  public set setStatus(status: number | undefined){
      this.status = status;
  }
}