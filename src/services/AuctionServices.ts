import { state } from "../../Types/State";
import EntityError from "../Exception";
import { EntityAuction } from "../customer/auctioncustomer/entityauction.entity";


export class AuctionService{
    public create(state: state, opening_date: Date, closing_date: Date, starting_bid: number, auctions: EntityAuction[]){
        try {
            if(opening_date >= closing_date) throw new EntityError("Data inválida", 400, auctions)
            if(starting_bid <= 0) throw new EntityError("O valor de lance inicial precisa ser maior que 0!", 400, auctions);

            const tag = this.generateTag(auctions)
            
            const auction: EntityAuction = new EntityAuction(state, opening_date,closing_date,starting_bid, tag)
            auctions.push(auction)

            return {
                auctions,
                message: "Operação realizada com sucesso!",
                status: 200
            }

        } catch (error) {
            return error
        }
    }

    public searchByTag(tag: string, auctions: EntityAuction[]){
        const auction = auctions.filter(item => item.getTag() == tag)
        try {
            
        } catch (error) {
            
        }
        if(auction.length == 0) return {
            auction: [],
            message: 'Não foi possível encontrar o Leilão não encontrado'
        }
        return auction[0];
    }

    public updateStatus(state: state, tag: string, auctions: EntityAuction[]){
        const auction: any = this.searchByTag(tag, auctions)

        try {
            if(auction.message) throw new EntityError('Não foi possível encontrar o Leilão', 402, auctions)
    
            const updatesAuctions =  auctions 
            
            updatesAuctions.map(item => {
                if(item.getTag() == tag){
                    item.setStatus(state)
                }
            })
    
            return {
                auctions: updatesAuctions,
                message: 'Leilão atualizado com sucesso!'
            }
            
        } catch (error: any) {
            return error
        }
    }

    public update(tag: string, status: state, opening_date: Date, closing_date: Date, starting_bid: number, auctions: EntityAuction[]) {
        const auction: any = this.searchByTag(tag, auctions)

        try {
            if(auction.message) throw new EntityError('Leilão não encontrado', 404, auctions)
    
            if(!opening_date) throw new EntityError('A data inicial é obrigatória', 402, auctions)
    
            if(!closing_date) throw new EntityError('A data de fechamento é obrigatória', 402, auctions)
    
            if(opening_date >= closing_date) throw new EntityError('A data de inicío precisa ser menor que a data de fechamento!', 402, auctions)
    
            if(!starting_bid && starting_bid <= 0) throw new EntityError('O valor inicial é obrigatório', 402, auctions)
    
            const updatesAuctions =  auctions
    
            updatesAuctions.map(item => {
                if(item.getTag() == tag){
                    item.setStatus(status)
                    item.setClosingDate(closing_date)
                    item.setOpeningDate(opening_date)
                    item.setStartingBid(starting_bid)
                }
            })
    
            return {
                auctions: updatesAuctions,
                message: 'Leilão atualizado com sucesso!'
            }
        } catch (error: any) {
            return error
        }  
    }

    private generateTag(auctions: EntityAuction[]){
        let result: any
        let tag : string = ''
        do{
            var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const numbers = '0123456789'
            for (var i = 0; i < 4; i++) {
                tag += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
            tag+= '#'
            for(var i = 0; i<5; i++){
                tag += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }

            result = auctions.filter(item => item.getTag() == tag)

        } while(result.length > 0)

        return tag
    }
}