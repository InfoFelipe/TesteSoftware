import { EntityAuction } from "../customer/auctioncustomer/entityauction.entity";


class EntityError extends Error{
    public status
    public auctions

    constructor(message: string, status: number, auctions: EntityAuction[]) {
      super(message);
      this.status = status;
      this.auctions = auctions
    }
}

export default EntityError