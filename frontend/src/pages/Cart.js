import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {deleteCartForUser, getCartDetails} from "../services/cartApi";
import {Alert, Button, Toast} from "react-bootstrap";
import {navigate} from "@reach/router";


export function Cart() {

    const [cart, setCart] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const countTotalPrice = cart => {

        let totalPrice = 0;
        cart.map(photo => {
            totalPrice += photo.numberOfPictures * photo.picture.price
        });

        return totalPrice;
    };

    const buyImages = personId => {
        deleteCartForUser(personId)
            .then(res => {
                setShowAlert(true);
            })
    };

    const toastClose = () => {
        setShowAlert(false);
        navigate('/');
    };

    useEffect(() => {
        getCartDetails(5)
            .then(res => {
                setCart(res);
                console.log(res);
            });
    }, []);

    const addRemoveImages = pictureId => {

    };

    return (
        <div style={{
            position: 'relative',
            minHeight: '200px',
        }}>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: -200,
                }}
            >
                <Toast onClose={() => toastClose()} show={showAlert} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="mr-auto">Congratulations</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>Succesfully bought all pictures</Toast.Body>
                </Toast>
            </div>
            <br/>
            <div className="row mt-5">
                {cart ? cart.map(image => <div className="col-md-4 mt-2" key={image.id}>
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
                                Ordered pictures: {image.numberOfPictures} <br/>
                                {/*<Button variant={"danger"} className="mr-2"> - </Button>*/}
                                {/*<Button variant={"success"}> + </Button>*/}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>) : <div><h2>Your Cart Is Empty</h2></div>}
            </div>
            {cart && cart.length > 0 ? <div className="row">
                <h2 className="mt-2">Total Price for All Images is: ${countTotalPrice(cart)}</h2>
                <Button variant="primary" onClick={() => buyImages(5)}>Buy Now</Button>
            </div> : <div>You have no pictures in your cart </div>}
        </div>
    )
}