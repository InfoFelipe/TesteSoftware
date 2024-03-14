import { EntityUser } from "../src/customer/user_customer/entity_user.entity";
import { UserServices } from "../src/services/UserServices";

describe('Processo de criação de usuário', ()=>{

    let users: EntityUser[] = [
        new EntityUser({
            name: 'Felipe',
            password:'123',
            email: 'teste@gmail.com',
        })
    ]

    const userService = new UserServices(); 

    it('Criado com sucesso!', ()=>{
        const name = 'Felipe'
        const password = 'lavamos1234568'
        const  email = 'felipe@gmail.com' 
        const result: any = userService.create(name, password, email, users);
        users = result.users
        expect(result.message).toBe('Usuário criado com sucesso!')
    })

    it('Campos sem preenchimento.', ()=>{
        const name = 'Felipe'
        const password = 'lavamos1234568'
        const email = 'felipe@gmail.com'
        const result: any = userService.create(name, password, '', users); 
        const result2: any = userService.create('', password, email, users); 
        const result3: any = userService.create(name, '', '', users); 
        expect(result.message).toBe('Preencha todos os campos')
        expect(result2.message).toBe('Preencha todos os campos')
        expect(result3.message).toBe('Preencha todos os campos')
    })


})