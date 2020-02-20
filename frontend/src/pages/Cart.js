import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {getCartDetails} from "../services/cartApi";
import {Button} from "react-bootstrap";
import {navigate} from "@reach/router";


export function Cart() {

    const [cart, setCart] = useState(null);

    const countTotalPrice = cart => {

        let totalPrice = 0;
        cart.map(photo => {
            totalPrice += photo.numberOfPictures * photo.picture.price
        });

        return totalPrice;
    };

    useEffect(() => {
        getCartDetails(5)
            .then(res => {
                setCart(res);
                console.log(res);
            });
    }, []);

    return (
        <div className="row mt-5">
            {cart ? cart.map(image => <div className="col-md-4" key={image.id}>
                <Card border="secondary" style={{width: '18rem'}}>
                    <Card.Header>
                        <Card.Img src={"data:image/png;base64," + image.picture.data}/>
                        <Card.Title>
                            {image.picture.name}
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Price for one picture: ${image.picture.price} <br/>
                            Ordered pictures: {image.numberOfPictures}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>) : <div><h2>Your Cart Is Empty</h2></div>}

            <h2 className="mt-2">Total Price for All Images is: ${cart && countTotalPrice(cart)}</h2>
            <Button variant="primary" onClick={() => navigate('/')} >Buy Now</Button>
        </div>
    )
}