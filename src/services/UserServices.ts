import { EntityUser } from "../customer/user_customer/entity_user.entity";

export class UserServices{

   

    public create(name: string, email: string, password: string, users: EntityUser[]){
       
        if(!name || !password || !email) {
                return {
                    message: 'Preencha todos os campos'
                }
            }
            
            const user: EntityUser = new EntityUser({name, password, email})
            
            users.push(user)
    
            return {
                message: 'Usuário criado com sucesso!',
                users
            }
       
    }
}