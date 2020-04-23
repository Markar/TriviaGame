import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    id: 1,
    games: [
      {
        id: -1, 
        name: `Wayne's World`,
      },
      {
        id: -2, 
        name: `Garth's World`,
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

export const { cardsReceived, filterCards, loading, createGame, joinGame } = gameSlice.actions;
export const selectGames = state => state.game.games;
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