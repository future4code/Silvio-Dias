export enum type{
    ADMIN = "admin",
    NORMAL = "normal"

}

export  type user = {
    id:number,
    name:string,
    email:string,
    type: type,
    age:number
}