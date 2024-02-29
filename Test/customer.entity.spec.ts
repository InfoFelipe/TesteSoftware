import { EntityAuction } from "../src/customer/auctioncustomer/entityauction.entity";

describe("Testando a inicialização da classe EntityAuction", ()=>{
    let customer: any = EntityAuction;

    beforeEach(()=>{
        customer = new EntityAuction({
            name: 'dummy name',
            value: 0,
            type: 'Inativo',

        })
    })

    it("inicialização da classe EntityAuction", ()=>{
        expect(customer).toBeDefined;
    })

    it("getters", ()=>{
        expect(customer.name).toBe("dummy name")
        expect(customer.active).toBeTruthy()
        expect(customer.value).toBe(0);
        expect(customer.types).toBe("Inativo")
    })
})