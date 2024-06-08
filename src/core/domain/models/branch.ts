export class BranchModel {
  static ENABLE = 1;
  static DISABLE= 2;
  static LOCK = 3;
  static PENDING = 4;
  static DELETE = 99;

  private idBranch: number | undefined;
  private idSector: number | undefined;
  private branchName: string | undefined;
  private status: number | undefined;


  public get getIdBranch(): number | undefined{
    return this.idBranch;
  }
  public set setIdBranch(idBranch: number | undefined){
    this.idBranch = idBranch;
  }
  public get getIdSector(): number | undefined{
    return this.idSector;
  }
  public set setIdSector(idSector: number | undefined){
    this.idSector = idSector;
  }
  public get getBranch(): string | undefined{
    return this.branchName;
  }
  public set setBranch(branchName: string | undefined){
    this.branchName = branchName;
  }
  public get getStatus(): number | undefined{
    return this.status;
  } 
  public set setStatus(status: number | undefined){
    this.status = status;
  }
}