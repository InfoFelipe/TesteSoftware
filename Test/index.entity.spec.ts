import { name, listName, filtro } from "../modules/auction";


describe("Testando se o nome esperando caracter vazio e recebendo vazio.", ()=>{
  it("Testando Vazio",()=>{
      expect(name('')).toBe('');
  })
})

describe("Testando se o nome como caracter preenchido e recebendo vazio.", ()=>{
  it("Preenchido-Vazio",()=>{
      expect(name('Felipe')).toBe('');
  })
})

describe("Testando se o nome como caracter preenchido igual e recebendo preenchido igual.", ()=>{
  it("Preenchido(igual)-Preenchido(igual)",()=>{
      expect(name('Leilão1')).toBe('Leilão1');
  })
})
describe("Testando se o nome como caracter preenchido e recebendo preenchido com outro tipo de nome.", ()=>{
  it("Preenchido(diferente)-Preenchido(diferente)",()=>{
      expect(name('Leilão1')).toBe('Leilão2');
  })
})

describe("Testando se o nome possui valor null.", ()=>{
  it("Valor null",()=>{
      expect(name.toString()).toBeNull();
  })
})

describe("Testando se o nome possui valor Undefined.", ()=>{
  it("Valor Undefined.",()=>{
      expect(name.toString()).toBeUndefined();
  })
})

describe("Testando lista de nomes.", ()=>{
  it("Lista nomes.",()=>{

    
      expect(listName()).toEqual(["Nome 1", "Nome 2", "Nome 3", "Nome 4", "Nome 5"])
  })
})

describe("Testando lista de nomes.", ()=>{
  it("Lista nomes.",()=>{
      expect(filtro()).toBeTruthy();
  })
})






