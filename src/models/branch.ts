export class BranchModel {
  static ENABLE = 1;
  static DISABLE = 2;
  static BLOCK = 3;
  static PENDING = 4;
  static DELETE = 99;

  private idBranch: number | undefined;
  private idSector: number | undefined;
  private branch: string | undefined;

  public get getIdBranch(): number | undefined{
    return this.idBranch;
  }
  public set setIdBranch(idBranch: number | undefined){
    this.idBranch = idBranch;
  }
  public get getIdSector():number | undefined{
    return this.idSector;
  }
  public set setIdSector(idSector: number | undefined){
    this.idSector = idSector;
  }
  public get getBranch(): string | undefined{
    return this.branch;
  }
  public set setBranch(branch: string | undefined){
    this.branch = branch;
  }

}