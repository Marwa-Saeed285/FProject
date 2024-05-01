export interface IUser
{
    id:number,
    name:string,
    address:{
        city:string,
        postalcode:string,
        street:string
    },
    email:string,
    phone:string[],
    password:string,
    exampleRadios:string
}