import { EntityAuction } from "../src/customer/auctioncustomer/entityauction.entity";

describe("Testando a inicialização da classe EntityAuction", ()=>{

    let customer: any = EntityAuction;

    beforeEach(()=>{
        customer = new EntityAuction({
            name: 'dummy name',
            state: 'Ativo',
            lance: 0,
            value: 0

        })
    })

    it("inicialização da classe EntityAuction", ()=>{
        expect(customer).toBeDefined;
    })

    it("getters", ()=>{
        expect(customer.name).toBe("dummy name")
        expect(customer.active).toBeTruthy()
        expect(customer.value).toBe(0);
        expect(customer.state).toBe("Ativo")
    })
})

describe("Testando o método Lance", ()=>{
    
    let customer1: any = new EntityAuction({
        name: 'Celular',
        state: 'Ativo',
        lance: 2,
        value: 10,
        

    });

    // let customer2: any = new EntityAuction({
    //     name: 'Notebook',
        
    //     state: 'Ativo',
    //     lance: 10,
    //     value: 20

    // });

    it("Lance maior que o valor do produto.", ()=>{
        expect(customer1.Lances()).toBe(10)
        expect(customer1.active).toBeTruthy()
        expect(customer1.value).toBe(10);
        expect(customer1.state).toBe("Ativo")
    })

    // it("Lance menor que o valor do produto.", ()=>{
    //     expect(customer2.Lances()).toBe(10)
    //     expect(customer2.name).toBe("Notebook")
    //     expect(customer2.active).toBeTruthy()
    //     expect(customer2.value).toBe(20);
    //     expect(customer2.state).toBe("Ativo")
    // })
})
