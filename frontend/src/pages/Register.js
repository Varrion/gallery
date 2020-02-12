import React, {useState} from "react";
import {Button, Form, Jumbotron} from "react-bootstrap";
import {registerUser} from "../services/userApi";
import {navigate} from "@reach/router";

function RegisterPage() {

    const [registerValues, setRegisterValues] = useState({
        name: '',
        surname: '',
        phone: '',
        age: null,
        email: '',
        isAuthor: false
    });

    const [error, setError] = useState(false);

    const handleChange = name => event => {
        if (name !== "isAuthor") {
            setRegisterValues({...registerValues, [name]: event.target.value});
        }
        setRegisterValues({...registerValues, [name]: event.target.checked});
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (registerValues.password === registerValues.confirmPassword) {
            registerUser(registerValues)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            navigate('/login')

        } else setError(true)
    };


    return (
        <div>
            <Jumbotron>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" value={registerValues.name}
                                      onChange={handleChange("name")}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Your surname" value={registerValues.surname}
                                      onChange={handleChange("surname")}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Your email address" value={registerValues.email}
                                      onChange={handleChange("email")}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter your age" value={registerValues.age}
                                      onChange={handleChange("age")}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter your phone number" value={registerValues.phone}
                                      onChange={handleChange("phone")}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Are you an Author?" value={registerValues.isAuthor}
                                    onChange={handleChange("isAuthor")}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    )
}

export default RegisterPage