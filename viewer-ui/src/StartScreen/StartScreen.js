import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
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
    const { games, createGame, joinGame, page } = this.props;    

    if (page === 0) {
      return (
        <React.Fragment>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Form>
                <Form.Group controlId="formPlayer">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Player" onChange={this.handleNameChange}/>
                </Form.Group>              
                
                <JoinSection 
                  games={games} 
                  joinGame={joinGame} 
                  playerName={this.state.playerName} 
                />                            
                
                <div className="create-section--margin">
                  <CreateSection                   
                    name={this.state.name} 
                    createGame={createGame} 
                    playerName={this.state.playerName} 
                  />              
                </div>              
              </Form>
            </Row>
          </Container>
        </React.Fragment>
      );
    } else {
      return (<div></div>);
    }  
  }
}

export default StartScreen;
