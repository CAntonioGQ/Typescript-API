export class Supplier {
    static ENABLE = 1;
    static DISABLE = 2;
    static LOCK = 3;
    static PENDING = 4;
    static DELETE = 99;

    private idSupllier: number | undefined;
    private supplierName: string | undefined;
    private contactName: string | undefined;
    private contactEmail: string | undefined;
    private contactPhone: number | undefined;
    private contactAddress: string | undefined;

    public get getIdSupplier(): number | undefined {
        return this.idSupllier;
    }
    public set setIdSupplier(idSupplier: number | undefined) {
        this.idSupllier = idSupplier
    }
    public get getSupplierName(): string | undefined {
        return this.supplierName;
    }
    public set setSupplierName(supplierName: string | undefined) {
        this.supplierName = supplierName;
    }
    public get getContactName(): string | undefined{
        return this.contactName;
    }
    public set setContactName(contactName: string | undefined){
        this.contactName = contactName;
    }
    public get getContactEmail(): string | undefined{
        return this.contactEmail;
    }
    public set setContactEmail(contactEmail: string | undefined){
        this.contactEmail = contactEmail;
    }
    public get getContactPhone(): number | undefined{
        return this.contactPhone;
    }
    public set setContactPhone(contactPhone: number | undefined){
        this.contactPhone = contactPhone;
    }
    public get getContactAddress(): string | undefined{
        return this.contactAddress;
    }
    public set setContactAddress(contactAddress: string | undefined){
        this.contactAddress = contactAddress;
    }

}