export default class {
    constructor(arr) {
        this.arr = arr.map((item) => {
            const { _id, first_name, last_name, genre, dni, dni_photo, face_photo, year, country_id, state, team, avatar } = item;
            const newItem = {
                _id,
                first_name,
                last_name,
                genre,
                dni,
                dni_photo,
                face_photo,
                year,
                country_id,
                state,
                team,
                avatar,
                age: new Date().getFullYear() - year
            }
            return newItem
        })
    }
}