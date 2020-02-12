import axios from 'axios'

async function uploadImage(photo) {
    return axios.post(`http://localhost:8080/api/picture/upload`, photo,
        {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
    ).then(res => {
        console.log("Test test", res);
        return res;
    })
}



async function fetchImage(id) {
    return axios.get(`http://localhost:8080/api/picture/${id}`, { responseType: 'arraybuffer' })
        .then((response) => {
            let image = btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            return `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
        });
}

async function getAllImages() {
    return axios.get(`http://localhost:8080/api/picture/`)
        .then(res => res.data);
    
}


export {uploadImage, fetchImage, getAllImages}