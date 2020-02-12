import React, {useState, useEffect} from "react";
import {Button, Form, Jumbotron} from "react-bootstrap";
import {fetchImage, uploadImage} from "../services/pictureApi";
import {getAllUsers, registerUser} from "../services/userApi";
import {navigate} from "@reach/router";

export function UploadPictures() {

    const [photo, setPhoto] = useState({
        description: '',
        quantity: 0,
        price: 0,
    });
    const [photoData, setPhotoData] = useState(null);
    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        getAllUsers().then(res => {
            setAuthors(res);
        });
    }, []);

    const handleFile = event => {
        const file = event.target.files[0];
        setPhotoData(file);
    };

    const handleChange = name => event => {
        if (name === "author") {
            setPhoto({...photo, [name]: event.target.options[event.target.selectedIndex]});
        }
        setPhoto({...photo, [name]: event.target.value});
    };

    const uploadFile = event => {
        event.preventDefault();

        let file = photoData;
        console.log(file);
        console.log(photo);
        let formData = new FormData();
        formData.append("picture", file);
        formData.append("pictureData", photo);
        uploadImage(formData).then(res => res);
    };


    return (
        <div>
            <Jumbotron>
                <Form onSubmit={uploadFile}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="4" placeholder="Description"
                                      value={photo.description} onChange={handleChange("description")}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" placeholder="How many copies do you have"
                                      value={photo.quantity} onChange={handleChange("quantity")}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Price of the picture"
                                      value={photo.price} onChange={handleChange("price")}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Author name </Form.Label>
                        <Form.Control as="select" onChange={handleChange("author")}>
                            <option key={0}>Select...</option>
                            {authors && authors.map((item, key) =>
                                <option key={key}>{item.name}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="file" placeholder="Image name"
                                      onChange={handleFile}/>
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">Upload</Button>
                </Form>
            </Jumbotron>
        </div>
    )
}