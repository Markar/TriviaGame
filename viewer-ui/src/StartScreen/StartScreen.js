import React from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import './StartScreen.scss';
import CreateSection from './CreateSection';
import JoinSection from './JoinSection';

class StartScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playerName: ''
    };
    
  }

  handleNameChange = (e) => {
    this.setState({
      playerName: e.target.value
    });
  }
  
  render() {
    const { games, createGame, joinGame } = this.props;

    console.log('props', this.props);    
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Form>
              <Form.Group controlId="formPlayer">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Player" onChange={this.handleNameChange}/>
              </Form.Group>
              <div>
                <JoinSection games={games} joinGame={joinGame} playerName={this.state.playerName} />
              </div>

              <div className="createBtn--margin">
                <CreateSection name={this.state.name} createGame={createGame} playerName={this.state.playerName} />
              </div>
            </Form>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default StartScreen;
