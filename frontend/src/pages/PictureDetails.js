import React, {useEffect, useState} from "react";
import {fetchImage, fetchImageData} from "../services/pictureApi";
import {Button} from "react-bootstrap";
import {addToCart} from "../services/cartApi";

function PictureDetails(props) {

    const [picture, setPicture] = useState(null);
    const [pictureData, setPictureData] = useState(null);

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
        addToCart(pictureData).then(res => console.log(res));
    };

    return (
        <div className="row mt-3">
            <div className="col-md-9">
                {picture && <img src={picture}/>}
            </div>
            <div className="col-md-3">
                {pictureData && <div><h2> {pictureData.name.substring(0,pictureData.name.length - 4)} </h2>
                <p>Photo Description: {pictureData.description}</p>
                <p>Author: {pictureData.author}</p>
                <p>Price: ${pictureData.price}</p>
                <p>Quantity: {pictureData.quantity}</p>
                    <Button variant="primary" onClick={() => storeInCart(pictureData)} >Add to Cart</Button>
                </div>}
            </div>

        </div>
    )
}

export default PictureDetails