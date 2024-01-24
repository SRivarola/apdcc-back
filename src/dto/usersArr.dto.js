export default class {
    constructor(arr) {
        this.arr = arr.map((item) => {
            const { first_name, last_name, mail, role, country_id, _id, phone } = item
            const newItem = {
                _id,
                first_name,
                last_name,
                mail,
                role,
                country_id, 
                phone
            }
            return newItem
        })
    }
}