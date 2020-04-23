import React from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import './StartScreen.scss';
import CreateSection from './CreateSection';
import JoinSection from './JoinSection';
import { useDispatch } from 'react-redux';

class StartScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'test name'
    };
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
                <JoinSection games={games} joinGame={this.props.joinGame}/>
              </div>
              
              <div className="createBtn--margin">
                <CreateSection name={this.state.name} createGame={this.props.createGame}/>
              </div>              
            </Form>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default StartScreen;
