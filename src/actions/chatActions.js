import * as types from "../constants/ActionTypes";
import httpInstance from "../httpClient";

export const getuserlist = (history,callback) => {
    // console.log(history)
    return dispatch => {
        return  httpInstance({
                  method: "get",
                  url: "chatroom/chateduser"
                })
                .then((res) => {
                    history.push("/messenger/"+res.data[0]._id+"/"+res.data[0].chatId)
                    dispatch(setUserlist(res.data))
                })
                .catch((error) => {
                    // console.log(error)
                    history.push("/messenger")
                    dispatch(setUserlist([]))
                });
    }
}

export const getalluser = (payload,callback) => {
    return dispatch => {
        return  httpInstance({
                  method: "get",
                  url: "user/getusers"
                })
                .then((res) => {
                    // console.log(res.data)
                    dispatch(setAlluser(res.data))
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(setAlluser([]))
                });
    }
}

export const getuserchat = (cid,callback) => {
    return dispatch => {
        return  httpInstance({
                  method: "get",
                  url: "chatroom/getuserchat/"+cid
                })
                .then((res) => {
                    // console.log(res.data)
                    dispatch(setUserchat(res.data))
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(setUserchat([]))
                });
    }
}

export const sendmsg = (payload,callback) => {
    return dispatch => {
        return    dispatch(setNewmsg(payload))
    }
}

export const setUserlist = (payload) => {
    return {
        type: types.USER_CHAT_LIST,
        payload: payload,
    }
}

export const setAlluser = (payload) => {
    return {
        type: types.ALL_USER,
        payload: payload,
    }
}

export const addNewUser = (payload,history) => {
    return dispatch => {
        return  httpInstance({
                  method: "post",
                  url: "chatroom/create-channel",
                  data:payload
                })
                .then((res) => {
                    dispatch(setNewUser(res.data))
                    history.push("/messenger/"+res.data._id+"/"+res.data.chatId)
                })
                .catch((error) => {
                    console.log(error)
                    // dispatch(setNewUser([]))
                });
    }
}


export const setNewUser = (payload) => {
    return {
        type: types.ADD_NEWUSER,
        payload: payload,
    }
}

export const setUserchat = (payload) => {
    return {
        type: types.USER_CHAT,
        payload: payload,
    }
}

export const setNewmsg = (payload) => {
    return {
        type: types.SEND_MSG,
        payload: payload,
    }
}