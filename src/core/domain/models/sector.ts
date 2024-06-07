export class SectorModel{
  static ENABLE = 1;
  static DISABLE= 2;
  static LOCK = 3;
  static PENDING = 4;
  static DELETE = 99;

  private idSector: number | undefined;
  private sector: string | undefined;

  public get getIdSector(): number | undefined{
    return this.idSector;
  }
  public set setIdSector(idSector: number | undefined){
    this.idSector = idSector;
  }
  public get getSector(): string | undefined{
    return this.sector;
  }
  public set setSector(sector: string | undefined){
    this.sector = sector;
  }
}