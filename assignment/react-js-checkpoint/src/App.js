import React from "react";

import {
  Navbar,
  Container,
  Nav,
  Card,
  Button
} from "react-bootstrap";

function App() {
  return (
    <>
      {/* React Fragment */}

      <div className="App">

        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">My React Bootstrap App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>


        {/* Heading */}
        <Container className="mt-4">
          <h1>Welcome to My Project</h1>
          <p>This is a React Bootstrap example.</p>
        </Container>


        {/* Cards */}
        <Container className="mt-4 d-flex gap-3">

          {/* Card 1 */}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card One</Card.Title>
              <Card.Text>
                This is the first card.
              </Card.Text>
              <Button variant="primary">Click Me</Button>
            </Card.Body>
          </Card>


          {/* Card 2 */}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Two</Card.Title>
              <Card.Text>
                This is the second card.
              </Card.Text>
              <Button variant="success">Click Me</Button>
            </Card.Body>
          </Card>


          {/* Card 3 */}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Three</Card.Title>
              <Card.Text>
                This is the third card.
              </Card.Text>
              <Button variant="warning">Click Me</Button>
            </Card.Body>
          </Card>

        </Container>

      </div>

    </>
  );
}

export default App;
