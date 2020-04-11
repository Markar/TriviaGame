import React from 'react';
import './CardGrid.scss';
import { Container, Row, Col } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';
import { useSelector, useDispatch } from 'react-redux';
import ESCard from '../ESCard/ESCard';

import {
  selectPage, fetchCards
} from '../cardSlice';

function renderRows(cards) {
  if (!cards) {
    return;
  }

  return (
    cards.map((card, index) => (
      <Col key={index}>
        <ESCard data={card} />
      </Col>
    ))
  );
}

function CardGrid(props) {  
  const cardRows = renderRows(props.cards);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);  

  function loadMore() {
    dispatch(fetchCards(currentPage));
  }

  return (
    <>
      <Container>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={true}
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
          <Row className="card-grid--row">
            {cardRows}
          </Row>
        </InfiniteScroll>

      </Container>
    </>
  );
}

export default CardGrid;
