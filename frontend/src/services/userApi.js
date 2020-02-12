import axios from 'axios'

async function getAllUsers() {
    return axios.get('http://localhost:8080/api/person').then(res => res.data)
}

async function registerUser(person) {
    return axios.post(`http://localhost:8080/api/person/save`, person)
        .then(res => {
            console.log(res);
            return res
        })
        .catch(err => console.log(err))

}

export {getAllUsers, registerUser}