import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardGrid from '../CardGrid/CardGrid';

import {  
  selectCards
} from '../cardSlice';

function ViewBody(props) {    
  // const dispatch = useDispatch();      

  //No longer needed with infinite scroll
  // useEffect(() => {
  //   dispatch(fetchCards(currentPage));
  // }, []);

  //const currentPage = useSelector(selectPage);  
  const cards = useSelector(selectCards);  

  console.log('cards', cards);

  return (
    <>     
      <CardGrid cards={cards} />
    </>
  );
}

export default ViewBody;