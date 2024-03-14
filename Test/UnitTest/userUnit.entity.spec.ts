import { EntityUser } from "../../src/customer/user_customer/entity_user.entity"

describe('Testando a Auction',() => {
    
    
    let user: EntityUser = new EntityUser({name: 'Felipe', password:'letsvamos123', email: 'felipe@gmail.com'})
    beforeEach(() => {

         user = new EntityUser({
            name: 'Felipe', 
            password:'letsvamos123', 
            email: 'felipe@gmail.com'
         }
           
        )
    })

    it('Testando valores', () => {
        expect(user.name).toBe('Felipe')
        expect(user.password).toBe('letsvamos123')
        expect(user.email).toBe('felipe@gmail.com')
    })

    it('Alterando valores', () => {
        user.name = 'Pedro'
        user.password = '1234'
        user.email = 'teste@gmail.com'

        expect(user.name).toBe('Pedro')
        expect(user.password).toBe('1234')
        expect(user.email).toBe('teste@gmail.com')
    })
})