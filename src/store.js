//Redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

function reposReducer(state = [], action) {
    if(action.type === 'CARREGA_REPOS') {
        state = action.repos
    }
    return state
}

const configuraStore = (preloadedState) => {
    return createStore(
        combineReducers({
                repos: reposReducer,
        }),
        preloadedState,
        applyMiddleware(
            thunkMiddleware
        )
    )
}

export default configuraStore