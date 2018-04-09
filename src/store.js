//Redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

function userInfoReducer(state = [], action) {
    if(action.type === 'USERINFO__LOAD') {
        state = action.userInfo
    }
    return state
}


function tweetsReducer(state = [], action) {
    if(action.type === 'CARREGA_TWEETS') {
        state = action.tweets
    }
    return state
}

const configuraStore = (preloadedState) => {
    return createStore(
        combineReducers({
                tweets: tweetsReducer,
                userInfo: userInfoReducer
        }),
        preloadedState,
        applyMiddleware(
            thunkMiddleware
        )
    )
}

export default configuraStore