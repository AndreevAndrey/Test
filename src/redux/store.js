import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userListReducer from '../components/UsersList/userListReducer';
import userReducer from '../components/UserInfoView/userReducer';

const reducers = combineReducers({
  usersList: userListReducer,
  user: userReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
