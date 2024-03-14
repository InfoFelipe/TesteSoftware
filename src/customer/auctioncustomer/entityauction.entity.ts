import { state } from "../../../Types/State";
import { EntityBid } from "../bid_customer/entity_bid.entity";


export interface CustomerAuction{
  name: string;
  state: state;
  status?: boolean;
  bids: EntityBid[];
  opening_date: Date;
  closing_date: Date;
  tag: string;
}

export class EntityAuction{
   private _name: string;
   private _state: state;
   private _status: boolean;
   private _bids: EntityBid[];
   private _opening_date: Date;
   private _closing_date: Date;
   private _tag:string;
    
    constructor(props: CustomerAuction) {
      this._name = props.name;
      this._state = props.state;
      this._status = props.status || true;
      this._bids = props.bids;
      this._opening_date = props.opening_date;
      this._closing_date = props.closing_date;
      this._tag = props.tag
    }

    get name(): string{
      return this._name
    }

    private set name(value: string){
       this._name = value;
    }

    public getState(): state {
      return this._state
  }

  public setStatus(status: state): void {
      this._state = status
  }

    get active(): boolean{
      return this._status
    }

    private set active(value: boolean){
       this._status = value;
    }

    public addBid(bid: EntityBid){
      this._bids.push(bid)
  }

  get bids():EntityBid[]{
      return this._bids
  }

  set bids(bids: EntityBid[]){
      this._bids = bids
  }

    public getTag(): string {
      return this._tag
  }

  public getOpeningDate(): Date {
      return this._opening_date
  }

  public setOpeningDate(opening_date: Date): void {
      this._opening_date = opening_date
  }

  public getClosingDate(): Date{
      return this._closing_date
  }

  public setClosingDate(closing_date: Date): void {
      this._closing_date = closing_date
  }

  }