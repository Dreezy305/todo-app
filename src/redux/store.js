import reducer from './reducer'
import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'

let todoCreateStore = compose(
    applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = { todos: []}){
    return todoCreateStore(reducer, initialState)
}