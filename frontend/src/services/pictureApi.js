import axios from 'axios'

async function uploadImage(photo) {
    return axios.post(`http://localhost:8080/api/picture/upload`, photo).then(res => {
        return res;
    })
}


async function fetchImage(id) {
    return axios.get(`http://localhost:8080/api/picture/${id}`, {responseType: "arraybuffer"})
        .then(response => {
            let image = btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            return `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
        });
}

async function fetchImageData(id) {
    return axios.get(`http://localhost:8080/api/picture/${id}/data`)
        .then(response => response.data);
}

async function getAllImages() {
    return axios.get(`http://localhost:8080/api/picture/`)
        .then(res => res.data);
}

async function deletePictureById(pictureId) {
    return axios.delete(`http://localhost:8080/api/picture/delete/${pictureId}`)
        .then(res => console.log(res))

}


export {uploadImage, fetchImage, fetchImageData, getAllImages, deletePictureById}