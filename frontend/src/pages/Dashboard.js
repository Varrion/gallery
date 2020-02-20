import React from "react";
import {Carousel} from "react-bootstrap";
import Photo1 from '../assets/images/maxresdefault.jpg'
import Photo2 from '../assets/images/maxresdefault (1).jpg'
import Photo3 from '../assets/images/sunset-1373171__340.jpg'

function Dashboard() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Photo1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Gallery</h3>
                        <p>Welcome to the best gallery in the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Photo2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Picaso, Mona Liza</h3>
                        <p>We have them all.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Photo3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Join Us</h3>
                        <p>Register Now and buy some of the best pictures in the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Dashboard