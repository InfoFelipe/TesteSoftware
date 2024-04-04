import { EntityAuction } from "../customer/auctioncustomer/entityauction.entity"
import { EntityBid } from "../customer/bid_customer/entity_bid.entity"
import { EntityUser } from "../customer/user_customer/entity_user.entity"

export class BidService {

    public add(auction: EntityAuction, user: EntityUser, value: number){
        if(value <= auction.getStartingBid()){
            return {
                message: 'Falha! Lance não pode ser criado.',
                auction: auction
            }
        }

        const bids = auction.bids

        const lastBid = bids? bids[bids.length - 1] : null

        if(lastBid){
            if(user.name == lastBid.user.name){
                return {
                    message: 'Não pode o mesmo lance seguido!',
                    auction: auction
                }
            }

            if(value <= lastBid.value){
                return {
                    message: 'Este lance precisa ser maior que o lance anterior!',
                    auction: auction
                }
            }
        }

        const newBid = new EntityBid(user, auction, value)

        auction.addBid(newBid)

        return {
            message: 'Lance inserido!',
            auction: auction
        }
    }

    

}