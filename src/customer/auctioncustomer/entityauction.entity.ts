
export interface CustomerAuction{
  name: string;
  state: string;
  value: number;
  active?: boolean;
}
export class EntityAuction{
    _name: string;
    _state: string;
    _value: number;
    _active: boolean;
    
    constructor(props: CustomerAuction) {
      this._name = props.name;
      this._value = props.value;
      this._state = props.state = 'Inativo';
      this._active = props.active || true;
    }

    get name(): string{
      return this._name
    }

    private set name(value: string){
       this._name = value;
    }

    get state(): string{
      return this._state
    }

    private set state(value: string){
       this._state = value;
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