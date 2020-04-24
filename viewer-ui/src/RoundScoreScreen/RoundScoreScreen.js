import React, { useState } from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import './RoundQuestionScreen.scss';

import {  
  selectQuestions, selectGames
} from '../gameSlice';

function RenderScoreScreen(props) {
  const dispatch = useDispatch();
  
  const questions = useSelector(selectQuestions);  
  const games = useSelector(selectGames);      
  const time = 5;
  let currentQuestion = questions[1];
  let players = games[0].players;

  players = players.slice().sort((a, b) => b.score - a.score);      

  function getAnswerStats(players) {
    let a = 0; 
    let b = 0;
    let c = 0;
    let d = 0;
    let none = 0;
    
    for (let i = 0; i < players.length; i++) {
      let player = players[i];            
      switch(player.answer) {
        case 'a':          
          a++;          
          break;
        case 'b':
          b++;
          break;
        case 'c':
          c++;
          break;
        case 'd':
          d++
          break;
        default:
          none++;
      }
    }      

    let pLen = players.length || 1;          
    a = (a/pLen)*100;
    b = (b/pLen)*100;
    c = (c/pLen)*100;
    d = (d/pLen)*100;    
    none = (none/pLen)*100;

    let stats = {
      a: a,
      b: b,
      c: c,
      d: d,
      none: none
    };    
    return stats;
  }
    
  function renderStat(question, key, stats) {      
    if (key === 'none') {
      return (
        <>
        <div
          className='question--stats'
          value={question[key]}
          id={question[key]}        
        >
          No Answer
        </div>      
        <div>
          {stats[key]}%
        </div>
        </>
      );
    }  

    return (
      <>
      <div
        className='question--stats'
        value={question[key]}
        id={question[key]}        
      >
        {question[key]}        
      </div>      
      <div>
        {stats[key]}%
      </div>
      </>
    );
  }
  
  if (props.page === 2) {    
    const stats = getAnswerStats(players);  
    
    return (
      <>
        <h2>{currentQuestion.question}</h2>
        <Container fluid>
          <Form>
            <Row>
              <Col>
                {renderStat(currentQuestion, 'a', stats)}
              </Col>
              <Col>
                {renderStat(currentQuestion, 'b', stats)}
              </Col>
            </Row>
            <Row>
              <Col>
                {renderStat(currentQuestion, 'c', stats)}
              </Col>
              <Col>
                {renderStat(currentQuestion, 'd', stats)}
              </Col>              
            </Row>
            <Row>
              <Col>
                {renderStat(currentQuestion, 'none', stats)}
              </Col>
            </Row>
            <h3 className='score--footer'>
              Moving to the next round in {time} seconds.
            </h3>
          </Form>
        </Container>
      </>
    );
  } else {
    return (
      <div></div>
    )
  }  
}

export default RenderScoreScreen;