import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { movieReducer } from "./movieReducer/movie.reducer";
import { detailsReducer } from "./detailsReducer/details.reducer";

const rootReducer = combineReducers({
    movies: movieReducer,
    details: detailsReducer,
})
const composeEnhancer = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
export default store;