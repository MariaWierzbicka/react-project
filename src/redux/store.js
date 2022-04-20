import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, searchInput}, columnId) => cards
  .filter(card => card.columnId === columnId && (!searchInput || strContains(card.title, searchInput.search)));

export const getAllColumns = (state) => {return state.columns};

export const getListById = ({ lists }, listId) => 
  lists.find( list => list.id === listId );

export const getColumnsByList = ({columns}, listId) =>
  columns.filter( column => column.listId === listId);

export const getAllLists = (state) => {return state.lists};

export const getFavoriteCards = (state) => state.cards
  .filter(card => card.isFavorite);

// action creators
export const addList = payload => ({ type: 'ADD_LIST', payload});
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearch = payload => ({ type: 'SEARCH', payload });
export const resetSearch = () => ({type: 'RESET'});
export const toggleFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload})


const reducer = (state, action) => {

  switch (action.type){
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, {...action.payload, id : shortid()}]};

    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {...action.payload, id : shortid()}]};

    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id : shortid()}]};

    case 'SEARCH':
      return {...state, searchInput: action.payload};
    
    case 'RESET':
      return {...state, searchInput: ''};
    
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    
    default:
      return state;
  };

  
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;