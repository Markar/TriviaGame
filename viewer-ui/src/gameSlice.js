import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',    

  initialState: {
    id: 1,
    gameCount: 0, // used for new game ids
    playerCount: 0, // used for new player ids
    // 0 is the start screen
    // 1 is the question screen
    // 2 is the end of round score screen
    // 3 is the score screen
    page: 2,

    games: [
      {
        id: 0,
        name: `Wayne's World`,
        players: [
          {
            id: 0,
            gameId: 0,            
            playerName: 'Picard',
            questionId: 0,
            answer: '',
            score: 4,
            eliminated: false
          },
          {
            id: 1,
            gameId: 0,            
            playerName: 'Riker',
            questionId: 0,
            answer: 'a',
            score: 3,
            eliminated: false
          },
          {
            id: 2,
            gameId: 0,            
            playerName: 'La Forge',
            questionId: 0,
            answer: 'b',
            score: 5,
            eliminated: false
          },
          {
            id: 3,
            gameId: 0,            
            playerName: 'Worf',
            questionId: 0,
            answer: 'c',
            score: 5,
            eliminated: false
          },
          {
            id: 4,
            gameId: 0,            
            playerName: 'Dorf',
            questionId: 0,
            answer: 'd',
            score: 6,
            eliminated: false
          },
        ]
      },
      {
        id: -2,
        name: `Garth's World`,
        players: []
      }
    ],
    questions: [
      {
        id: 0,
        question: "What species is Guinan from The Next Generation?",
        a: "Twi-lek",
        b: "Ferengi",
        c: "El-Aurian",
        d: "Android",
        answer: "c"
      },
      {
        id: 1,
        question: "What species is Quark from Deep Space Nine?",
        a: "Ferengi",
        b: "Twi-lek",
        c: "El-Aurian",
        d: "Android",
        answer: "a"
      },
      {
        id: 2,
        question: "Which show is Captain Janeway from?",
        a: "Next Generation",
        b: "Breaking Bad",
        c: "Deep Space Nine",
        d: "Voyager",
        answer: "d"
      },
      {
        id: 3,
        question: "What is the actor who portays Captain Kirk's name?",
        a: "William Shatner",
        b: "William Shakespeare",
        c: "William Windsor",
        d: "James Kirk",
        answer: "a"
      },
      {
        id: 3,
        question: "Which choice is an alien from Star Trek?",
        a: "Furby",
        b: "Pokemon",
        c: "Tribble",
        d: "Wookie",
        answer: "c"
      }
    ],
    isFetching: false
  },
  reducers: {
    loading(state, action) {
      // This bit allows us to display the loading indicator while waiting for the API response.
      state.isFetching = true;
    },    
    createGame(state, action) {
      // this should probably check the games object for unique names
      if (action.type === 'game/createGame') {
        state.id++;

        let game = action.payload;
        game.id = state.id;
        state.games.push(game);
        console.log('create game');
        state.page++;
      }
    },
    joinGame(state, action) {
      if (action.type === 'game/joinGame') {
        console.log('join game action', action.payload);
        let player = action.payload;
        if (!player.playerName) {
          player.playerName = 'Player';
        }

        let games = state.games;        
        for (let i = 0; i < games.length; i++) {
          // find the right game by id
          let game = games[i];          
          if (+game.id === +player.gameId) {
            // add the player to the game's array of player objects so we can track their stats            
            game.players.push(player);
          }
        }
      }
    },
    answerQuestion(state, action) {      
      if (action.type === 'game/answerQuestion') {        
        let player = action.payload;
        let games = state.games;        
        
        for (let i = 0; i < games.length; i++) {
          let game = games[i];          
          if (+game.id === +player.gameId) {
            //find the right game, then update the right player            
            game.players.map((gamePlayer) => {              
              // only update the matching player in the matching game
              if (gamePlayer.id === player.id) {
                //check if player is eliminated and compute their score                                
                //look up answer in questions array
                let question = state.questions[player.questionId];
                let correct = question.answer;                
                if (player.answer === correct) {
                  // If the answer is correct, set all gamePlayer logic here
                  // this would include terminating them, modifying score, etc
                  gamePlayer.score++;
                } else {
                  gamePlayer.eliminated = true;
                }
              }
              state.page++;
            })

          }

        }
      }
    },
    cardsReceived(state, action) {
      if (action.type === 'card/cardsReceived') {
        state.page++;
        state.cards = state.cards.concat(action.payload.cards);
        state.isFetching = false;
      }
    },
    filterCards(state, action) {
      if (action.type === 'card/filterCards') {
        // const fuse = new Fuse(state.cards, options);                 
        // state.filteredCards = fuse.search(action.payload);
      }
    }
  },
});

export const { cardsReceived, filterCards, loading, createGame, joinGame, answerQuestion } = gameSlice.actions;
export const selectPage = state => state.game.page;
export const selectGames = state => state.game.games;
export const selectGameCount = state => state.game.gameCount;
export const selectPlayerCount = state => state.game.playerCount;
export const selectQuestions = state => state.game.questions;
export const isFetching = state => state.card.isFetching;



// Default the page size to 20 in params, but either can be passed in via the function
// export const fetchCards = (page, pageSize = 20) => async dispatch => {
//   dispatch(loading);
//   const response = await axios.get(`https://api.elderscrollslegends.io/v1/cards?pageSize=${pageSize}&page=${page}`);
//   dispatch(cardsReceived(response.data));
// }

export default gameSlice.reducer;
