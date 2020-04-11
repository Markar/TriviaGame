import React from 'react';
import './CardGrid.scss';
import { Container, Row, Col } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';
import { useSelector, useDispatch } from 'react-redux';
import ESCard from '../ESCard/ESCard';

import {
  selectPage, fetchCards, selectFiltered, isFetching
} from '../cardSlice';

function renderRows(cards, isFiltered) {  
  if (!cards) {
    return;
  }

  return (
    cards.map((card, index) => (
      <Col key={index}>
        <ESCard data={isFiltered ? card.item : card} />
      </Col>
    ))
  );
}

function CardGrid(props) {  
  let cardRows;      
  const loading = useSelector(isFetching);  
  const filtered = useSelector(selectFiltered);  
  if (filtered.length > 0) {
    cardRows = renderRows(filtered, true);    
  } else {
    cardRows = renderRows(props.cards, false);    
  }
  
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);      

  function loadMore() {       
    if (filtered.length === 0) {
      // We only want to load more results while the results are not currently filtered
      // otherwise this will load very rapidly due to limited results. 
      dispatch(fetchCards(currentPage));    
    }    
  }  
  
  if (loading) {
    return (
      <>
        <div>Loading more results...</div>
      </>
    )
  }
  
  const loader = (<div className="loader" key={0}>{'Loading more cards...'}</div>);

  return (
    <>
      <Container className="card-grid--position">        
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={true}
          loader={filtered.length > 0 ? '' : loader}
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
