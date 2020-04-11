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
    filteredCards: [],
    isFetching: false
  },
  reducers: {    
    loading(state, action) {
      state.isFetching = true;
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
        const fuse = new Fuse(state.cards, options);                 
        state.filteredCards = fuse.search(action.payload);
      }      
    }
  },
});

export const { cardsReceived, filterCards, loading } = cardSlice.actions;
export const selectCards = state => state.card.cards;
export const selectFiltered = state => state.card.filteredCards;
export const selectPage = state => state.card.page;
export const isFetching = state => state.card.isFetching;

export const fetchCards = (page, pageSize = 2) => async dispatch => {    
  dispatch(loading);
  const response = await axios.get(`https://api.elderscrollslegends.io/v1/cards?pageSize=${pageSize}&page=${page}`);
  dispatch(cardsReceived(response.data));  
}

export default cardSlice.reducer;
