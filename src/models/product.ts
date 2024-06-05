export class Product{
    static ENABLE = 1;
    static DISABLE= 2;
    static LOCK = 3;
    static PENDING = 4;
    static DELETE = 99;

    private idProduct: number | undefined;
    private product: string | undefined;
    private description: string | undefined;

    public get getIdProduct(): number | undefined{
        return this.idProduct;
    }
    public set setIdProduct(idProduct: number | undefined){
        this.idProduct = idProduct;
    }
    public get getProduct(): string | undefined{
        return this.product;
    }
    public set setProduct(product: string | undefined){
        this.product = product;
    }
    public get getDescription(): string | undefined{
        return this.description;
    }
    public set setDescription(description: string | undefined){
        this.description = description;
    }
}