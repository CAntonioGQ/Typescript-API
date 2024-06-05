export class ClientModel{
  static ENABLE = 1;
  static DISABLE= 2;
  static LOCK = 3;
  static PENDING = 4;
  static DELETE = 99;

  private idClient: number | undefined;
  private name: string | undefined;
  private number: number | undefined;
  private email: string | undefined;
  private status: number | undefined;

  public get getIdClient(): number | undefined{
      return this.idClient;
  }
  public set setIdClient(idClient: number | undefined){
      this.idClient = idClient;
  }
  public get getName(): string | undefined {
      return this.name;
  }
  public set setName(name: string | undefined){
      this.name = name;
  }
  public get getNumber(): number | undefined {
      return this.number;
  }
  public set setNumber(number: number | undefined){
      this.number = number;
  }
  public get getEmail(): string | undefined {
      return this.email;
  }
  public set setEmail(email: string | undefined){
      this.email = email;
  }
  public get getStatus(): number | undefined{
      return this.status;
  } 
  public set setStatus(status: number | undefined){
      this.status = status;
  }
}