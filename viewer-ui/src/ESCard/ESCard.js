import React from 'react';
import './ESCard.scss';
import Card from 'react-bootstrap/Card';

function ESCard(props) {
  const { imageUrl, name, text, set, type, blank } = props.data;
  
  if (blank) {
    return (
      <>
        <Card className="elder-scrolls-card">
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <span className="card--set-name">{set.name}</span>
              <span className="card--type">{type}</span>
              <span className="card--text">{text}</span>            
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }

  if (!props.data || !props.data.set) {
    return (
      <>
        <div>Oops! An error occurred.</div>
      </>
    );
  }

  // Moved text to the bottom since the length varies more than the set and type
  // Also lowered the font size to differentiate the description
  return (
    <>
      <Card className="elder-scrolls-card">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <span className="card--set-name">{set.name}</span>
            <span className="card--type">{type}</span>
            <span className="card--text">{text}</span>            
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ESCard;
