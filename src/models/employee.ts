export class Employee{
    static ENABLE = 1;
    static DISABLE= 2;
    static LOCK = 3;
    static PENDING = 4;
    static DELETE = 99;

    private idEmployee: number | undefined;
    private name: string | undefined;
    private number: number | undefined;
    private email: string | undefined;
    private address: string | undefined;

    public get getIdEmployee(): number | undefined{
        return this.idEmployee;
    }
    public set setIdEmployee(idEmployee: number | undefined){
        this.idEmployee = idEmployee;
    }
    public get getName(): string | undefined{
        return this.name;
    }
    public set setName(name: string | undefined){
        this.name = name;
    }
    public get getNumber(): number | undefined{
        return this.number;
    }
    public set setNumber(number: number | undefined){
        this.number = number;
    }
    public get getEmail(): string | undefined{
        return this.email;
    }
    public set setEmail(email: string | undefined){
        this.email = email;
    }
    public get getAddress(): string | undefined{
        return this.address;
    }
    public set setAddress(address: string | undefined){
        this.address = address;
    }
}