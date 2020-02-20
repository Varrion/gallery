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

async function deleteCartForUser(userId) {
    return axios.delete(`http://localhost:8080/api/store/delete/${userId}`).then(res => console.log(res))
}

async function editPicturesInStore(storeId) {
    return  axios.post(`http://localhost:8080/api/store/${storeId}`)

}

export {addToCart, getCartDetails, deleteCartForUser}