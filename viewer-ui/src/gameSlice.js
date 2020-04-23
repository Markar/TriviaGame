import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    id: 1,
    games: [
      {
        id: 0,
        name: `Wayne's World`,
        players: [
          {
            id: 0,
            gameId: 0,            
            playerName: 'Player',
            questionId: 0,
            answer: '',
            score: 0,
            eliminated: false
          }
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
        answer: "c"
      },
      {
        id: 2,
        question: "Which show is Captain Janeway from?",
        a: "Next Generation",
        b: "Breaking Bad",
        c: "Voyager",
        d: "Deep Space Nine",
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
export const selectGames = state => state.game.games;
export const selectQuestions = state => state.game.questions;
// export const selectFiltered = state => state.card.filteredCards;
// export const selectPage = state => state.card.page;
export const isFetching = state => state.card.isFetching;

// export const createNewGame = (game = null) => {
//   console.log('in createGame action', game);
//   if (game) {
//     store.dispatch(createGame(game));    
//   }  
// }

// Default the page size to 20 in params, but either can be passed in via the function
export const fetchCards = (page, pageSize = 20) => async dispatch => {
  dispatch(loading);
  const response = await axios.get(`https://api.elderscrollslegends.io/v1/cards?pageSize=${pageSize}&page=${page}`);
  dispatch(cardsReceived(response.data));
}

export default gameSlice.reducer;
