import React, {useEffect} from "react";
import {getAllUsers} from "../services/userApi";
import {Button, Form, Jumbotron} from "react-bootstrap";

function LoginPage() {

    useEffect(() => {
        getAllUsers().then(
            res => console.log(res)
        );
    }, []);

    return (
        <div>
            <Jumbotron>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    )
}

export default LoginPage