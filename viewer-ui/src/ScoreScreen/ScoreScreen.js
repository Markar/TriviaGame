import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import './ScoreScreen.scss';

import {  
  selectGames, selectQuestions
} from '../gameSlice';

function ScoreScreen(props) {
  const dispatch = useDispatch();  
  const questions = useSelector(selectQuestions);  
  const games = useSelector(selectGames);    
  const time = 5;

  function renderRows(players) {
    //sort players in descending order
    players = players.slice().sort((a, b) => b.score - a.score);    

    return players.map( (player) => {      
      let winner = '';
      if (questions.length === player.score) {
        winner = 'winner'
      }        

      return (
        <>
        <Row className={winner}>
          <Col>{player.playerName}</Col>        
          <Col>{player.score}</Col>
        </Row>
        </>
      );
    });    
  }
  
  if (props.page === 2) {
    console.log('props page', games);
    let players = games[0].players;    

    return (
      <>        
        <Container fluid>
          <h1>{'Top Scores'}</h1>
          <h3 className='score--footer'>
            Moving to the next round in {time} seconds.
          </h3>
          {renderRows(players)}                             
        </Container>
      </>
    );
  } else
    return (<div></div>)  
}


export default ScoreScreen;