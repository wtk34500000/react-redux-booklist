import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBook from './reducer_active_books'

const rootReducer = combineReducers({
  books: BookReducer,
  ActiveBook: ActiveBook
});

export default rootReducer;
