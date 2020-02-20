import React, {useEffect, useState} from "react";
import {deletePictureById, fetchImage, fetchImageData} from "../services/pictureApi";
import {Button, Toast} from "react-bootstrap";
import {addToCart} from "../services/cartApi";
import {navigate} from "@reach/router";

function PictureDetails(props) {

    const [picture, setPicture] = useState(null);
    const [pictureData, setPictureData] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        fetchImage(props.pictureId)
            .then(res => setPicture(res));
        fetchImageData(props.pictureId)
            .then(res => {
                setPictureData(res);
                console.log(res);
            });
    }, []);

    const storeInCart = pictureData => {
        addToCart(pictureData).then(res => setShowAlert(true));
    };

    const toastClose = () => {
        setShowAlert(false);
    };

    const deletePicture = pictureId => {
        deletePictureById(pictureId)
            .then(() => navigate('/pictures-buy'))
    }

    return (
        <div>
            <Toast onClose={() => toastClose()} show={showAlert} delay={2000} autohide>
                <Toast.Header>
                    <strong className="mr-auto">Congratulations</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body>Succesfully added picture in your cart</Toast.Body>
            </Toast>
            <div className="row mt-3">
                <div className="col-md-9">
                    {picture && <img src={picture} width={800} height={500}/>}
                </div>
                <div className="col-md-3">
                    {pictureData && <div><h2> {pictureData.name.substring(0, pictureData.name.length - 4)} </h2>
                        <p>Photo Description: {pictureData.description}</p>
                        <p>Author: {pictureData.author}</p>
                        <p>Price: ${pictureData.price}</p>
                        <p>Quantity: {pictureData.quantity}</p>
                        <div className="row">
                            <div className="col-md-6">
                                <Button variant="danger" className="mr-2" onClick={() => deletePicture(pictureData.id)}>Delete</Button>
                            </div>
                            <div className="col-md-6">
                                <Button variant="primary" onClick={() => storeInCart(pictureData)}>Add to Cart</Button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default PictureDetails