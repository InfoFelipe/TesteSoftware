
export interface CustomerAuction{
  name: string;
  type: string;
  value: number;
  active?: boolean;
}
export class EntityAuction{
    _name: string;
    _type: string;
    _value: number;
    _active: boolean;
    
    constructor(props: CustomerAuction) {
      this._name = props.name;
      this._value = props.value;
      this._type = props.type;
      this._active = props.active || true;
    }

    get name(): string{
      return this._name
    }

    private set name(value: string){
       this._name = value;
    }

    get types(): string{
      return this._type
    }

    private set types(value: string){
       this._type = value;
    }

    get value(): number{
      return this._value
    }

    private set value(value: number){
       this._value = value;
    }

    get active(): boolean{
      return this._active
    }

    private set active(value: boolean){
       this._active = value;
    }
  }