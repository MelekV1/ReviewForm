import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Greet from './Greet'
import Button from 'react-bootstrap/Button';
import Image from "./console.png"

function App() {

  return (
    <div className="AppBox">

      <Greet/>
      <Spinner animation="grow" variant="info" />
      <Form>
        <Form.Label>Username</Form.Label>
        <Form.Control placeholder="username" />
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          <Form.Text className="text-muted">
          Your data will remain secure with us
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select a product </Form.Label>
          <img className="image" src={Image} alt="Video Game"/>
          <Form.Control as="select">
            <option>Red ded Redumption</option>
            <option>Assassin creed Valhalla</option>
            <option>Watch Dogs legion</option>
            <option>Last of Us</option>
            <option>Ghost of tsushima</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>write your review</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="This is a video Game review ">
        </Form.Control>
        <Form.Text className="text-muted">
        Most trusted measurement of quality for Games ,Movies , TV.
        </Form.Text>
        </Form.Group>
        <Button variant="outline-success">Submit your review</Button>
      </Form>

    </div>

  );
}

export default App;
