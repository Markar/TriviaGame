import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function JoinSection(props) {
  const dispatch = useDispatch();

  const [gameId, setGameId] = useState(0);  
  const handleChange = e => setGameId(e.target.value);

  function handleJoin(e) {  
    let player = {
      gameId: gameId,
      playerName: props.playerName
    };

    dispatch(props.joinGame(player));
  }

  return (    
    <>
      <Form.Group controlId="formJoinGame">
        <Form.Label>Join Game</Form.Label>
        <Form.Control as="select" onChange={handleChange}>
          {props.games.map((game) => {
            return (
              <option key={game.id} value={game.id}>{game.name}</option>
            );
          })}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" onClick={handleJoin}>
        Join
      </Button>
    </>
  );
}


export default JoinSection;

