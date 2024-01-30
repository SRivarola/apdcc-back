import dao from "../dao/factory.js";
import RegisterDto from "../dto/register.dto.js";
import userDto from "../dto/usersArr.dto.js";
import dataUserDto from "../dto/dataUser.dto.js";

export default class AuthService {
    
    constructor() {
        this.model = new dao.User();
    }

    register(data) {
        let dataDto = new RegisterDto(data);
        let response = this.model.register(dataDto);
        return response;
    }

    login = () => this.model.login()

    signout = () => this.model.signout()

    readOne = (mail) => this.model.readOne(mail)

    async readByCountry(id) {
        const response = await this.model.readByCountry(id)
        const data = response ? new dataUserDto(response) : null
        return data
    }
    
    readById = (id) => this.model.readById(id)

    async readAll(query, data) {
        let response = await this.model.readAll(query, data);
        if(response.docs?.length > 0) {
            let dataDto = new userDto(response.docs)
            response.docs = dataDto.arr
            return {
                message: 'Users Found',
                response: response
            }
        }
        return response
    }

    async read(query) {
        let response = await this.model.read(query);
        if(response.length) {
            let dataDto = new userDto(response);
            response = dataDto.arr
        }
        return {
          message: "Users Found",
          response: response,
        }; 
    }

    update = (id, data) => this.model.update(id, data)

    delete = (id) => this.model.delete(id)

}