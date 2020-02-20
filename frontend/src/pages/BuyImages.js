import React, {useEffect, useState} from "react";
import {getAllImages} from "../services/pictureApi";
import {Card} from "react-bootstrap";
import {navigate} from "@reach/router";

export function BuyImages() {

    const [images, setImages] = useState(null);

    useEffect(() => {
        getAllImages().then(res => {
            setImages(res);
        })
    }, []);

    return (
        <div>
            <h1>Photos Gallery</h1>
            <div className="row mt-3">
                {images && images.map(image => <div key={image.id} className="col-4 mt-2">
                    <Card style={{width: '18rem'}}>
                        <Card.Header>
                            <Card.Img src={"data:image/png;base64," + image.data} />
                            <Card.Title>{image.name.substring(0, image.name.length - 4)}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">{image.author.name}</Card.Subtitle>
                            <Card.Text>
                                {image.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Link href="" onClick={() => navigate(`picture/${image.id}`)}>More Details</Card.Link>
                        </Card.Footer>
                    </Card>
                </div>)}
            </div>
        </div>
    )

}