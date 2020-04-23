import React from 'react';
import { useSelector } from 'react-redux';
import StartScreen from '../StartScreen/StartScreen';
import QuestionScreen from '../QuestionScreen/QuestionScreen';

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
      {/* <StartScreen games={games} createGame={createGame} joinGame={joinGame} /> */}
      <QuestionScreen playerId={0} gameId={0} playerName={"Mark"} />
      {/* gameId: 0,
      playerId: 0,
      playerName: 'Player',
      question: '',
      answer: '',
      score: 0 */}
    </>
  );
}

export default ViewBody;