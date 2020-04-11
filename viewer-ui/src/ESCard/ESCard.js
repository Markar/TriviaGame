import React from 'react';
import './ESCard.scss';
import Card from 'react-bootstrap/Card';

function ESCard(props) {  
  const { data } = props.data;
  console.log('props', data);

  return (
    <>
      <Card className="elder-scrolls-card">
        <Card.Img variant="top" src={props.data.imageUrl} />
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>
            <span className="card--text">{props.data.text}</span>
            <span className="card--set-name">{props.data.set.name}</span>
            <span className="card--type">{props.data.type}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ESCard;
