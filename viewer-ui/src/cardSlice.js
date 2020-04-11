import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Fuse from 'fuse.js';

const options = {
  isCaseSensitive: false,
  findAllMatches: false,
  includeMatches: false,
  includeScore: false,
  useExtendedSearch: false,
  minMatchCharLength: 1,
  shouldSort: true,
  threshold: 0.5,
  location: 0,
  distance: 100,
  keys: [
    "name"
  ]
};

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    page: 1,
    cards: [],    
    filteredCards: []
  },
  reducers: {    
    cardsReceived(state, action) {     
      if (action.type === 'card/cardsReceived') {
        state.page++;
        state.cards = state.cards.concat(action.payload.cards);    
        console.log('test', action);  
      }          
    },        
    filterCards(state, action) {      
      if (action.type === 'card/filterCards') {
        const fuse = new Fuse(state.cards, options);              
        // console.log('search', fuse.search(action.payload));
        // console.log('test2', state.cards);        
        state.filteredCards = fuse.search(action.payload);
        console.log('filtered', state.filteredCards);
      }      
    }
  },
});

export const { cardsReceived, filterCards } = cardSlice.actions;
export const selectCards = state => state.card.cards;
export const selectFiltered = state => state.card.filteredCards;
export const selectPage = state => state.card.page;

export const fetchCards = (page) => async dispatch => {    
  const response = await axios.get(`https://api.elderscrollslegends.io/v1/cards?pageSize=20&page=${page}`);
  dispatch(cardsReceived(response.data));  
}

export default cardSlice.reducer;
