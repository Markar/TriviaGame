import React, { useState } from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import './QuestionScreen.scss';

import {  
  selectQuestions, answerQuestion
} from '../gameSlice';

function QuestionScreen(props) {
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const questions = useSelector(selectQuestions);  

  const btnClick = e => setAnswer(e.target.value);

  function handleSubmit(e) {
      // let player = {
      //   id: props.playerId,
      //   gameId: props.gameId,
      //   playerName: props.playerName,
      //   question: question,
      //   answer: answer
      // };    

      let player = {
        id: props.playerId,
        gameId: props.gameId,
        playerName: props.playerName,
        questionId: questions[0].id,
        answer: answer
      };

      dispatch(answerQuestion(player));
  }

  let currentQuestion = questions[1];

  function renderButton(question, key) {    
    return (
      <Button
        className='question--margins'
        value={question[key]}
        id={question[key]}
        onClick={btnClick}
      >
        {question[key]}
      </Button>
    );
  }
  
  if (props.page === 1) {    
    return (
      <>
        <h2>{currentQuestion.question}</h2>
        <Container fluid>
          <Form>
            <Row>
              <Col>
                {renderButton(currentQuestion, 'a')}
              </Col>
              <Col>
                {renderButton(currentQuestion, 'b')}
              </Col>
            </Row>
            <Row>
              <Col>
              {renderButton(currentQuestion, 'c')}
              </Col>
              <Col>
              {renderButton(currentQuestion, 'd')}
              </Col>
            </Row>
            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
        </Container>
      </>
    );
  } else {
    return (
      <div>

      </div>
    )

  }
  
}


export default QuestionScreen;