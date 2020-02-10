import axios from 'axios'

async function getAllusers() {
    return axios.get('http://localhost:8080/api/person').then(res => res.data)
}

export {getAllusers}