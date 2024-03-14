import { state } from "../../../Types/State";
import { EntityBid } from "../bid_customer/entity_bid.entity";


export interface CustomerAuction{
  name: string;
  state: state;
  status?: boolean;
  bids: EntityBid[];
  opening_date: Date;
  closing_date: Date;
  starting_bid:number;
  tag: string;
}

export class EntityAuction{
  private state: state
  private closing_date: Date
  private opening_date: Date
  private _bids: EntityBid[]
  private starting_bid: number
  private tag: string 
    
  constructor(state: state, opening_date: Date, closing_date: Date, starting_bid: number, tag: string) {
    this._bids = []
    this.closing_date = closing_date
    this.opening_date = opening_date
    this.starting_bid = starting_bid
    this.state = state
    this.tag = tag
    }

    
    public getState(): state {
      return this.state
  }

  public setStatus(status: state): void {
      this.state = status
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
      return this.tag
  }

  public getOpeningDate(): Date {
      return this.opening_date
  }

  public setOpeningDate(opening_date: Date): void {
      this.opening_date = opening_date
  }

  public getClosingDate(): Date{
      return this.closing_date
  }

  public setClosingDate(closing_date: Date): void {
      this.closing_date = closing_date
  }

  public getStartingBid(): number {
    return this.starting_bid
}

public setStartingBid(starting_bid: number): void {
    this.starting_bid = starting_bid
}

  }