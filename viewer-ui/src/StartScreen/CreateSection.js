import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function CreateSection(props) {
  const dispatch = useDispatch();

  const [gameName, setGameName] = useState('');
  const onChange = e => setGameName(e.target.value);

  function handleCreateClick(e) {
    let game = {
      name: gameName
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