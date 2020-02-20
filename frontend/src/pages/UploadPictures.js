import React, {useEffect, useState} from "react";
import {Button, Form, Jumbotron} from "react-bootstrap";
import {uploadImage} from "../services/pictureApi";
import {getAllUsers} from "../services/userApi";
import {navigate} from "@reach/router";

export function UploadPictures() {

    const [photo, setPhoto] = useState({
        description: '',
        quantity: 0,
        price: 0,
    });
    const [photoData, setPhotoData] = useState(null); // file
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

        let formData = new FormData();
        console.log("photo: ", {...photo});
        formData.append("picture", photoData);
        formData.append('pictureData', new Blob([JSON.stringify({...photo})], {
            type: "application/json"
        }));
        uploadImage(formData).then(res => navigate('/pictures-buy'));
    };


    return (
        <div>
            <Jumbotron>
                <h1> Upload Picture </h1>
                <Form onSubmit={uploadFile} className="mt-2">
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