import axios from 'axios'

let source = axios.CancelToken.source();

async function addToCart(picture) {
    return axios.post(`http://localhost:8080/api/store/save`, picture)
        .then(res => console.log(res))
}

async function getCartDetails(userId) {
    return axios.get(`http://localhost:8080/api/store/user/${userId}`,{
        // Assign the source.token to this request
        cancelToken: source.token
    })
        .then(res => res.data);
}

export {addToCart, getCartDetails}