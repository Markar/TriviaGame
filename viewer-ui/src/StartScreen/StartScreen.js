import React from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import './StartScreen.scss';
import { connect } from 'react-redux';

class StartScreen extends React.Component {

  // constructor(props) {
  //   super(props);
  //}

  renderJoinSection(games) {
    return (
      <>
        <Form.Group controlId="formJoinGame">
          <Form.Label>Join Game</Form.Label>
          <Form.Control as="select">
            {games.map((game) => {
              return (
                <option key={game.id} value={game.id}>{game.name}</option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Join
          </Button>
      </>
    );
  }

  renderCreateSection() {
    return (
      <>
        <Form.Group controlId="formMakeGame">
          <Form.Label>Make Game</Form.Label>
          <Form.Control type="text" placeholder="Marks World" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </>
    );
  }

  render() {
    const { games, createGame } = this.props;    

    console.log('props', this.props);
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Form>
              <Form.Group controlId="formPlayer">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Player" />
              </Form.Group>
              <div>
                {this.renderJoinSection(games)}
              </div>
              
              <div className="createBtn--margin">
                {this.renderCreateSection()}
              </div>              
            </Form>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default StartScreen;
