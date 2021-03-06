import { combineReducers } from 'redux';

import chatReducers from './chatReducers';

const reducer = combineReducers({
    chat: chatReducers,
});

export default reducer;