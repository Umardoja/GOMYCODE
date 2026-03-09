import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from "react-bootstrap";

import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Umar"; // Change or remove to test condition

function App() {

  return (
    <Container className="d-flex flex-column align-items-center mt-5">

      <Card style={{ width: '22rem', padding: "10px", boxShadow:"0 4px 10px rgba(0,0,0,0.2)" }}>
        
        <Image />

        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>

      </Card>

      <h3 className="mt-3">
        Hello, {firstName ? firstName : "there!"}
      </h3>

      {firstName && (
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          alt="profile"
          style={{width:"80px", marginTop:"10px"}}
        />
      )}

    </Container>
  );
}

export default App;