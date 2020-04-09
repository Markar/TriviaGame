import React from 'react';
import './CardGrid.scss';
import {Container, Row, Col } from 'react-bootstrap';
import ESCard from '../ESCard/ESCard';

function renderRows(cards) {
  console.log('cards', cards);  
  return (
    cards.map(card => (
      <Col>
        <ESCard data={card}/>
      </Col>
    ))
  );    
}

function CardGrid(props) {    
  console.log('props', props.cards);
  
  const cardRows = renderRows(props.cards);
  return (
    <>
      <Container>
        <Row className="card-grid--row">          
          {cardRows}
        </Row>        
      </Container>    
    </>
  );
}

export default CardGrid;
