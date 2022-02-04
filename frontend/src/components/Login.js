import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password: pass,
    });
    if (res.success) {
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setPass(event.target.value)}
              value={pass}
            />
          </Col>
        </Form.Group>

        <ButtonGroup>
          <Button type="submit" onClick={onSubmit}>
            Submit
          </Button>
          <Button>Cancel</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default Login;
