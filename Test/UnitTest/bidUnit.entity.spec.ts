import { EntityAuction } from "../../src/customer/auctioncustomer/entityauction.entity"
import { EntityBid } from "../../src/customer/bid_customer/entity_bid.entity"
import { EntityUser } from "../../src/customer/user_customer/entity_user.entity"


describe('Testando os processos de Lance.', ()=>{

    let bid: any = EntityBid
    

    beforeEach(() => {
        let user: EntityUser = new EntityUser({name: 'Felipe', password:'letsvamos123', email: 'felipe@gmail.com'})
        let auction: EntityAuction =  new EntityAuction('Aberto', new Date('2024-01-30'),new Date('2024-03-30'), 20.0,'abcd#12345')
        bid = new EntityBid(
            user,
            auction,
            30
        )
    })

    it('Teste de valores iniciais.', () => {
        expect(bid.user.name).toBe('Felipe')
        expect(bid.auction.getTag()).toBe('letsvamos123')
        expect(bid.value).toBe(30)
    })

    it('Alterando valores', () => {
        let user: EntityUser = new EntityUser({name: 'Manoel', password:'letsvamos1234', email: 'manoel@gmail.com'})
        let auction: EntityAuction =  new EntityAuction('Aberto', new Date('2024-02-30'),new Date('2024-05-30'), 30.0,'abcd#12345')

        bid.user =  user,
        bid.auction =  auction
        bid.value = 40

        expect(bid.user.name).toBe('Pedro Gabriel')
        expect(bid.auction.getTag()).toBe('abcd#12385')
        expect(bid.value).toBe(40)
    })

})