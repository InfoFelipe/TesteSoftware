
export interface CustomerAuction{
  name: string;
  state: string;
  value: number;
  active?: boolean;
  lance: number;
}

export class EntityAuction{
    _name: string;
    _state: string;
    _value: number;
    _active: boolean;
    _lance: number;
    
    constructor(props: CustomerAuction) {
      this._name = props.name;
      this._value = props.value;
      this._state = 'Ativo';
      this._active = props.active || true;
      this._lance = props.lance;
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

     let lance = this.lance
      let valor = this.value
      if(valor < lance){
        value = lance
        this._value = value 
      }
    }

    get active(): boolean{
      return this._active
    }

    private set active(value: boolean){
       this._active = value;
    }

    get lance(): number{
      return this._lance
    }

    private set lance(value: number){
       this._lance = value;
    }

    public Lances(valor: number, lanceteste: number){
      let valorinicial = this.value
      const lanceincial = this.lance

      if(valorinicial < lanceincial){
        const newvalue = valorinicial + lanceincial
        valorinicial = newvalue
        return  valorinicial
      }else{
        return valorinicial
      }
      
    }
  }