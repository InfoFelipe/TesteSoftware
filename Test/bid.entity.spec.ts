import { EntityAuction } from "../src/customer/auctioncustomer/entityauction.entity";
import { EntityUser } from "../src/customer/user_customer/entity_user.entity";
import { AuctionService } from "../src/services/AuctionServices";
import { BidService } from "../src/services/BidService";


const auctionService = new AuctionService();
let auctions: EntityAuction[] = [
    new EntityAuction('Aberto', new Date('2024-03-01'),  new Date('2024-05-30'),  30.0, 'abcd#12345'),
    new EntityAuction('Inativo', new Date('2024-03-01'),  new Date('2024-04-30'),  25.0, 'abcd#12346'),
    new EntityAuction('Finalizado', new Date('2024-02-01'),  new Date('2024-03-30'),  40.0, 'abcd#12347'),
    new EntityAuction('Expirados', new Date('2024-02-01'),  new Date('2024-02-27'),  60.0, 'abcd#12348'),
]
describe('Teste inserção de lances', () => {
    const users: EntityUser[] = []
    const bidService = new BidService()
    let auction: any = new EntityAuction('Aberto', new Date('2024-02-01'),  new Date('2024-03-30'),  20.0, 'abcd#12345')

    beforeEach(() => {
        let userOne: EntityUser = new EntityUser({name: 'Felipe', password:'letsvamos123', email: 'felipe@gmail.com'})
        let userTwo: EntityUser = new EntityUser({name: 'Rafael', password:'letsvamos1234', email: 'rafael@gmail.com'})
        users.push(new EntityUser(userOne))
        users.push(new EntityUser(userTwo))
    })

    it('Lance proposto com sucesso pelo Felipe!', () => {
        const tag = 'abcd#12345'
        const value: number = 25;
        const user = users[0];
        auction = auctionService.searchByTag(tag, auctions)
        const result = bidService.add(auction, user, value);
        auction = result.auction
        expect(result.message).toBe('Lance inserido!')
    })

    it('Lance proposto com erro pelo Rafael', () => {
        const tag = 'abcd#12345'
        const value: number = 10;
        const user = users[0];
        auction = auctionService.searchByTag(tag, auctions)
        const result = bidService.add(auction, user, value);
        expect(result.message).toBe('Falha! Lance não pode ser criado.')
    })

    it('Lance proposto duas vezes pela mesma pessoa', () => {
        const tag = 'abcd#12345'
        const value: number = 21.5;
        const user = users[0];
        auction = auctionService.searchByTag(tag, auctions)
        const result = bidService.add(auction, user, value);
        expect(result.message).toBe('Não pode o mesmo lance seguido!');
    })

    it('Lance proposto por duas pessoas', () => {
        const tag = 'abcd#12345'
        const value: number = 22;
        const user = users[1]
        auction = auctionService.searchByTag(tag, auctions)
        let result = bidService.add(auction, user, value);
        auction = result.auction
        expect(result.message).toBe('Lance proposto!');
        result = bidService.add(auction, users[0], value+1);
        auction = result.auction
        expect(result.message).toBe('Lance inserido!');
    })
})
