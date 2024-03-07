// import { name, listName, filtro } from "../modules/auction";


// describe("Testando se o nome esperando caracter vazio e recebendo vazio.", ()=>{
//   it("Testando Vazio",()=>{
//       expect(name('')).toBe('');
//   })
// })

// describe("Testando se o nome como caracter preenchido e recebendo vazio.", ()=>{
//   it("Preenchido-Vazio",()=>{
//       expect(name('Felipe')).toBe('');
//   })
// })

// describe("Testando se o nome como caracter preenchido igual e recebendo preenchido igual.", ()=>{
//   it("Preenchido(igual)-Preenchido(igual)",()=>{
//       expect(name('Leilão1')).toBe('Leilão1');
//   })
// })
// describe("Testando se o nome como caracter preenchido e recebendo preenchido com outro tipo de nome.", ()=>{
//   it("Preenchido(diferente)-Preenchido(diferente)",()=>{
//       expect(name('Leilão1')).toBe('Leilão2');
//   })
// })

// describe("Testando se o nome possui valor null.", ()=>{
//   it("Valor null",()=>{
//       expect(name.toString()).toBeNull();
//   })
// })

// describe("Testando se o nome possui valor Undefined.", ()=>{
//   it("Valor Undefined.",()=>{
//       expect(name.toString()).toBeUndefined();
//   })
// })

// describe("Testando lista de nomes.", ()=>{
//   it("Lista nomes.",()=>{

    
//       expect(listName()).toEqual(["Nome 1", "Nome 2", "Nome 3", "Nome 4", "Nome 5"])
//   })
// })

// describe("Testando lista de nomes.", ()=>{
//   it("Lista nomes.",()=>{
//       expect(filtro()).toBeTruthy();
//   })
// })

// import { EntityAuction } from "../src/customer/auctioncustomer/entityauction.entity";

// describe("Testando a inicialização da classe EntityAuction", ()=>{

//     let customer: any = EntityAuction;

//     beforeEach(()=>{
//         customer = new EntityAuction({
//             name: 'dummy name',
//             value: 0,
//             state: 'Ativo',
//             lance: 30,

//         })
//     })

//     it("inicialização da classe EntityAuction", ()=>{
//         expect(customer).toBeDefined;
//     })

//     it("getters", ()=>{
//         expect(customer.name).toBe("dummy name")
//         expect(customer.active).toBeTruthy()
//         expect(customer.value).toBe(30);
//     })
// })

// describe("Testando a inicialização da classe EntityAuction", ()=>{
    
//     let customer1: any = new EntityAuction({
//         name: 'Celular',
//         value: 10,
//         state: 'Ativo',
//         lance: 20,

//     });

//     let customer2: any = new EntityAuction({
//         name: 'Notebook',
//         value: 0,
//         state: 'Ativo',
//         lance: 20,

//     });

//    function dados(){
//     if(customer1.value > customer2.value){
//         console.log("Não pode.")
//     }
//    }

//     it("Customer1", ()=>{
//         expect(customer1.name).toBe("Celular")
//         expect(customer1.active).toBeTruthy()
//         expect(customer1.value).toBe(30);
//         expect(customer1.state).toBe("Ativo")
//     })

//     it("Customer2", ()=>{
//         expect(customer2.name).toBe("Notebook")
//         expect(customer2.active).toBeTruthy()
//         expect(customer2.value).toBe(0);
//         expect(customer2.state).toBe("Ativo")
//     })
//     it("Customer2", ()=>{
//         expect(dados()).toBe("")
//     })
// })





