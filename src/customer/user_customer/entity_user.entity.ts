

export interface CustomerUser{
    name: string;
    password: string;
    email: string;
  }

export class EntityUser {
    public _name: string
    private _password: string
    private _email: string

    constructor(props: CustomerUser){
        this._email = props.email;
        this._password = props.password;
        this._name = props.name;
    }

    get name(): string{
        return this._name
    }

    set name(name:string){
        this._name = name
    }

    get password(): string {
        return this._password
    }

    set password(password: string){
        this._password = password
    }

    get email(): string {
        return this._email
    }

    set email(email:string){
        this._email = email
    }
}