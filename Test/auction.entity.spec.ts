import EntityError from "../src/Exception";
import { EntityAuction } from "../src/customer/auctioncustomer/entityauction.entity";
import { AuctionService } from "../src/services/AuctionServices";


const auctionService = new AuctionService();
let auctions: EntityAuction[] = [
    new EntityAuction('Aberto', new Date('2024-02-01'),  new Date('2024-03-30'),  20.0, 'abcd#12345'),
    new EntityAuction('Inativo', new Date('2024-02-01'),  new Date('2024-03-30'),  23.0, 'abcd#12346'),
    new EntityAuction('Finalizado', new Date('2024-02-01'),  new Date('2024-03-30'),  30.0, 'abcd#12347'),
    new EntityAuction('Finalizado', new Date('2024-02-01'),  new Date('2024-03-30'),  30.0, 'ABCD#12347'),
    new EntityAuction('Finalizado', new Date('2024-02-01'),  new Date('2024-03-30'),  30.0, 'uidf#12347'),
    new EntityAuction('Expirados', new Date('2024-02-01'),  new Date('2024-02-27'),  80.0, 'abcd#12348'),
    new EntityAuction('Expirados', new Date('2024-02-01'),  new Date('2024-02-27'),  80.0, 'abcd#98745'),
]

describe('Teste para criar leilão', () => {
    test('Criado com sucesso!', () => {
        const status = 'Aberto'
        const opening_date = new Date('2024-02-01')
        const closing_date = new Date('2024-03-30')
        const starting_bid = 20.0
        const result: any = auctionService.create(status, opening_date,closing_date,starting_bid, auctions); 
        auctions = result.auctions
        expect(result.message).toBe('Leilão criado com sucesso!')
        expect(result.status).toBe(200)
    });

    test('Teste para falha com datas incorretas', () => {
        try {
            const status = 'Aberto'
            const opening_date = new Date('2024-04-30')
            const closing_date = new Date('2024-03-01')
            const starting_bid = 40.0
            const result: any = auctionService.create(status, opening_date,closing_date,starting_bid, auctions);  
        } catch (error: any) {
            expect(error).toThrow(EntityError)
            expect(error.message).toBe('A data de inicio precisa ser menor que a data de fechamento!');
            expect(error.status).toBe(402)
        }   
        
    });

    test('Valor de lance inicial menor ou igual a 0.', () => {
        try {
            const status = 'Aberto'
            const opening_date = new Date('2024-03-01')
            const closing_date = new Date('2024-04-30')
            const starting_bid = 0
            const result: any = auctionService.create(status, opening_date,closing_date,starting_bid, auctions);  
        } catch (error: any) {
            expect(error).toThrow(EntityError)
            expect(error.message).toBe('O valor inicial precisa ser maior que 0!')
            expect(error.status).toBe(402)
        }   
        
    });
})

describe('Teste de busca de Leilão', () => {
   
    test('Busca pela tag', () => {
        const tag = 'abcd#12345';

        const auction = auctionService.searchByTag(tag, auctions)

        expect(auction.toString()).toBe('Aberto, Wed Jan 31 2024,Fri Mar 29 2024,20,abcd#12345')
    })

    test('Leilão não pode encontrado.', () => {
        const tag = 'abcd#12349';

        const auction: any = auctionService.searchByTag(tag, auctions)

        expect(auction.message).toBe('Leilão não encontrado!')
    })
})

describe('Teste de update de leilão', () => {
    test('Alterando o status do leilão', () => {
        const auction: any = auctionService.searchByTag('abcd#12346', auctions)
        const response = auctionService.updateStatus('Aberto','abcd#12346',  auctions)
        if(response.message == 'Leilão atualizado com sucesso!'){
            auctions = response?.auctions
        }
        expect(response.message).toBe('Leilão atualizado com sucesso!');
    })

    test('Alterando todos os dados do leilão.', () => {
        const tag = 'abcd#12346'
        const opening_date = new Date('2024-02-05')
        const closing_date = new Date('2024-03-05')
        const starting_bid = 100.0
        const response = auctionService.update(tag, 'Aberto', opening_date, closing_date, starting_bid, auctions)
        if(response.message == 'Leilão atualizado com sucesso!'){
            auctions = response?.auctions
        }
        expect(response.message).toBe('Leilão atualizado com sucesso!')
    })

    test('Dados do leilão incorretos', () => {
        const tag = 'abcd#12346'
        const opening_date = new Date('2024-04-05')
        const closing_date = new Date('2024-03-05')
        const starting_bid = 100.0
        const response = auctionService.update(tag, 'Aberto', opening_date, closing_date, starting_bid, auctions)
        if(response.message == 'Leilão atualizado com sucesso!'){
            auctions = response?.auctions
        }
        expect(response.message).toBe('A data de inicio precisa ser menor que a data de fechamento!')
    })
})