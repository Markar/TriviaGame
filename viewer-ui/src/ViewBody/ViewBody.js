import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardGrid from '../CardGrid/CardGrid';

import {  
  filterCards, selectCards, selectPage, fetchCards
} from '../cardSlice';

function ViewBody(props) {    
  const dispatch = useDispatch();      

  useEffect(() => {
    dispatch(fetchCards(currentPage));
  }, []);

  const currentPage = useSelector(selectPage);  
  const cards = useSelector(selectCards);  

  console.log('cards', cards);

  return (
    <>     
      <CardGrid cards={cards} />
    </>
  );
}

export default ViewBody;