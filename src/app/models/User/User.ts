import {Role} from './Role';

export class userreg {
    id:number ; 
    username:string ;
    email :string ; 
    password :string ; 

}

export class usertoreg {
    
    username:string ;
    email :string ; 
    password :string ; 
}

export class User {
    id: number;
    email: string;
    name: string;
    lastName: string;
    active: boolean;
    password: string
    roles: Role[];
}

export class UserSimpleDto {
    id: number;
    email: string;
    firstName: string;
    lastName: string;

}
