import React from "react";
import { Card } from "react-bootstrap";

function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  image
}) {
  const cardStyle = {
    width: "18rem",
    margin: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center"
  };

  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px"
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} style={imageStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
}


Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: "N/A",
  image: "https://via.placeholder.com/200"
};

export default Player;