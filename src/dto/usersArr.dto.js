export default class {
    constructor(arr) {
        this.arr = arr.map((item) => {
            const { first_name, last_name, mail, role, country_id, _id, phone } = item
            let newItem
            if (phone){
                let phone_str = phone.toString();
                newItem = {
                  _id,
                  first_name,
                  last_name,
                  mail,
                  role,
                  country_id,
                  phone: `${phone_str.slice(0,3)}-${phone_str.slice(3,7)}-${phone_str.slice(7)}`,
                };
            } else{
                newItem = {
                    _id,
                    first_name,
                    last_name,
                    mail,
                    role,
                    country_id
                }
            }
            return newItem
        })
    }
}