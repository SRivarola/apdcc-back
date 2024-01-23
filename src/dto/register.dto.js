import bcrypt from 'bcryptjs';

export default class {
    constructor(obj){
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.mail = obj.mail;
        this.password = bcrypt.hashSync(obj.password, bcrypt.genSaltSync(10));
        this.role = obj.role;
        this.country_id = obj.country_id;
        this.phone = obj.phone;
    }
}