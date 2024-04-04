import { EntityAuction } from "../auctioncustomer/entityauction.entity";
import { EntityUser } from "../user_customer/entity_user.entity";

export interface CustomerBid{
    user: EntityUser;
    auction: EntityAuction;
    value: number;
  }

export class EntityBid {
    private _user: EntityUser;
    private _auction: EntityAuction;
    private _value: number;

    constructor(user: EntityUser, auction: EntityAuction, value: number){

        this._user = user;
        this._auction = auction;
        this._value = value;

    }

    get user(): EntityUser {
        return this._user;
    }

    set user(user: EntityUser){
        this._user = user
    }

    get auction(): EntityAuction {
        return this._auction
    }

    set auction(auction: EntityAuction){
        this._auction = auction
    }

    get value(): number{
        return this._value;
    }

    set value(value:number){
        this._value = value
    }

}