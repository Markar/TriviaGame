import React from 'react';
import { useSelector } from 'react-redux';
import StartScreen from '../StartScreen/StartScreen';

import {  
  selectGames, createGame, joinGame
} from '../gameSlice';

function ViewBody(props) {    
  // const dispatch = useDispatch();      
  
  // useEffect(() => {
  //   dispatch(fetchCards(currentPage));
  // }, []);

  //const currentPage = useSelector(selectPage);  
  const games = useSelector(selectGames);  

  return (
    <>     
      <StartScreen games={games} createGame={createGame} joinGame={joinGame} />
    </>
  );
}

export default ViewBody;