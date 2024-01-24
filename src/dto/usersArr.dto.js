export default class {
    constructor(arr) {
        this.arr = arr.map((item) => {
            const { first_name, last_name, mail, role, country_id, _id, phone } = item
            const first = phone.toString().slice(0, 3);
            const second = phone.toString().slice(3, 7);
            const third = phone.toString().slice(7);
            const newItem = {
                _id,
                first_name,
                last_name,
                mail,
                role,
                country_id, 
                phone: `${first}-${second}-${third}`
            }
            return newItem
        })
    }
}