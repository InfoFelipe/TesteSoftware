import { EntityAuction } from "../../src/customer/auctioncustomer/entityauction.entity"

describe('Testando a Auction',() => {
    let auction: any = EntityAuction

    beforeEach(() => {
        auction = new EntityAuction(
            'Aberto',
            new Date('2024-03-30'),
            new Date('2024-05-30'),
            80.0,
            'abcd#12345'
        )
    })

    it('Testeando valores iniciais', () => {
        expect(auction.getTag()).toBe('abcd#12345')
        expect(auction.getOpeningDate().toDateString()).toBe(new Date('2024-03-30').toDateString())
        expect(auction.getClosingDate().toDateString()).toBe(new Date('2024-05-30').toDateString())
        expect(auction.getStartingBid()).toBe(80.0)
    })

    it('Alterando valores', () => {
        auction.setStatus('Inativo')
        auction.setStartingBid(90)
        auction.setOpeningDate(new Date('2024-02-03'))
        auction.setClosingDate(new Date('2024-05-30'))

        expect(auction.getTag()).toBe('abcd#12345')
        expect(auction.getOpeningDate().toDateString()).toBe(new Date('2024-02-03').toDateString())
        expect(auction.getClosingDate().toDateString()).toBe(new Date('2024-05-30').toDateString())
        expect(auction.getStartingBid()).toBe(90.0)
    })
})