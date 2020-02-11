import axios from 'axios'

async function uploadImage(picture) {
    return axios.post(`http://localhost:8080/api/picture/upload`, picture, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then( res=> {
        console.log("Test test", res);
        return res;
    })
}

export {uploadImage}