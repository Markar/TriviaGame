import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function CreateSection(props) {
  const dispatch = useDispatch();  

  const [gameName, setGameName] = useState('');
  const [gameId, setGameId] = useState(0);
  const onChange = e => setGameName(e.target.value);

  function handleCreateClick(e) {    
    console.log('props', props);
    let player = {
      id: 0,
      gameId: 0,            
      playerName: props.playerName,
      questionId: 0,
      answer: '',
      score: 0,
      eliminated: false
    };

    let game = {
      id: gameId, 
      name: gameName,      
      players: [player]      
    };    
  
    dispatch(props.createGame(game));    
  }  

  return (
    <>
      <Form.Group controlId="formMakeGame">
        <Form.Label>Make Game</Form.Label>
        <Form.Control type="text" placeholder="Marks World" onChange={onChange} />
      </Form.Group>
      <Button variant="primary" onClick={handleCreateClick}>
        Create
      </Button>
    </>
  );
}


export default CreateSection;