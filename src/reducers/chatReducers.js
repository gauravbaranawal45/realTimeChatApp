import * as types from "../constants/ActionTypes";

const initialState = {
	userList:[],
	allUsers:[],
    userchat:[],
}

function setUserList(state, payload) {
    return {...state,userList:payload}
}

function setAllusers(state, payload) {
    return {...state,allUsers:payload}
}

function setNewUser(state, payload) {
    let newState = [...state.userList]
    newState = newState.filter(item=>item._id!==payload._id)
    newState.unshift(payload)
    return {...state,userList:newState}
}

function setNewmsg(state, payload) {
    let newState = [...state.userchat]
    newState.push(payload)
    console.log(newState)
    return {...state,userchat:newState}
}


const Chat = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_CHAT_LIST :
            return setUserList(state,action.payload);
        case types.ALL_USER :
            return setAllusers(state,action.payload);
        case types.ADD_NEWUSER :
            return setNewUser(state,action.payload);
        case types.USER_CHAT :
            return {...state,userchat:action.payload};
        case types.SEND_MSG :
            return setNewmsg(state,action.payload);
        default:
            return state;
    }
}
export default Chat;