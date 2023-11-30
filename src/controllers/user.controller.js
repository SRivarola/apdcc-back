import AuthService from "../services/user.service.js";

export default class AuthController {

    constructor() {
        this.service = new AuthService()
    }

    register = (data) => this.service.register(data)

    login = () => this.service.login()

    signout = () => this.service.signout()

    readOne = (mail) => this.service.readOne(mail)

    readByCountry = (id) => this.service.readByCountry(id)

    readById = (id) => this.service.readById(id)

    readAll = (query, data) => this.service.readAll(query, data)

    update = (id, data) => this.service.update(id, data)

    delete = (id) => this.service.delete(id)
    
}