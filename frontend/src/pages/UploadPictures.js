import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {uploadImage} from "../services/pictureApi";
import axios from 'axios'

export function UploadPictures() {

    const [photo, setPhoto] = useState(null);

    const handleFile = event => {
        const file = event.target.files[0];
        setPhoto(file);
    }
    const uploadFile = event => {
        event.preventDefault();
        console.log("Testing image", photo);


        let file = photo;
        let formData = new FormData();
        formData.append("image", file);

        uploadImage(formData).then(res => console.log("res: ", res));
    }

    return (
        <div>
            upload

            <Form onSubmit={uploadFile}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="file" placeholder="Your name"
                                  onChange={handleFile}/>
                </Form.Group>

                <Button variant="outline-primary" type="submit">Upload</Button>
            </Form>
        </div>
    )
}