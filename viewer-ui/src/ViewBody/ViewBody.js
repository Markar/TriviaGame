import React from 'react';
import { useSelector } from 'react-redux';
import StartScreen from '../StartScreen/StartScreen';
import QuestionScreen from '../QuestionScreen/QuestionScreen';
import ScoreScreen from '../ScoreScreen/ScoreScreen';

import {  
  selectGames, createGame, joinGame, selectPage
} from '../gameSlice';

function ViewBody(props) {    
  // const dispatch = useDispatch();      
  
  // useEffect(() => {
  //   dispatch(fetchCards(currentPage));
  // }, []);

  //const currentPage = useSelector(selectPage);  
  const games = useSelector(selectGames);  
  const page = useSelector(selectPage);  

  return (
    <>     
      <StartScreen games={games} createGame={createGame} joinGame={joinGame} page={page} />
      <QuestionScreen playerId={0} gameId={0} playerName={"Mark"} page={page} />
      <ScoreScreen playerId={0} gameId={0} playerName={"Mark"} page={page} />
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