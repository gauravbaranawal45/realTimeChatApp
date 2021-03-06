import React ,{Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import Userlist from "./Userlist";
import Userchat from "./Userchat";
import {getuserlist,getalluser,addNewUser,getuserchat,sendmsg} from '../../actions/chatActions'
import './style.css'




const Messenger = (props) => {

	const [state,setState] = React.useState({
		message:"",
	    userchat:[],
	    chatusers:[],
	    userList:[],
	    open:false,
	    searchkey:'',
	    searchpeopledata:[],
	    suggetionvalue:[],
	    alluser:[],
	})

	const [messages, setMessages] = React.useState([]);

	const sendmsg = (e) => {
	    e.preventDefault();
	    let userId = JSON.parse(localStorage.getItem('__chatauth')).userId;
	    let socket = props.socket;
	    let payload = {
			message:state.message,
			attachmentName:'',
			attachmentType:'',
			channelId:props.match.params.cid,
			receiver:props.match.params.id,
			senderId:userId,
	    }
	    if (socket) {
	      	socket.emit("chatroomMessage", payload);
	      	setState({...state,message:""})
	    }
	    setTimeout(()=>{
	    	let target = document.querySelector("#target");
			target.scrollIntoView();
	    },100)
	}


	React.useEffect(() => {
		let socket = props.socket;
	    if (socket) {
	      socket.on("newMessage", (message) => {
	      	props.sendmsg(message)
	      	console.log('message',message)
	      });
	    }
	}, [props.socket]);

 	React.useEffect(() => {
 		props.getuserlist(props.history)
		props.getalluser()
		props.getuserchat(props.match.params.cid)
	}, []);


 	React.useEffect(() => {
 		let socket = props.socket;
		props.getuserchat(props.match.params.cid)
		if (socket) {
	      socket.emit("joinChat", {
	        channelId:props.match.params.cid,
	      });
	    }
	    setTimeout(()=>{
	    	let target = document.querySelector("#target");
			target.scrollIntoView();
	    },100)
	}, [props.match.params.cid,props.socket]);

 	let target = document.querySelector("#target");
	if(target){
		target.scrollIntoView();
	}

	const onchangeHandler = (val) => {
	    setState({...state,message:val})
	}

	return (
	    <div className="container-fluid h-100">
			<div className="row justify-content-center h-100">
				<Userlist
					chatlistdata={props.chatlistdata}
					addNewUser={props.addNewUser}
					receiver={props.match.params.id}
				/>
				<Userchat
					userchat={props.userchat}
					onchangeHandler={onchangeHandler}
					message={state.message}
					sendmsg={sendmsg}
					receiver={props.match.params.id}
				/>
			</div>
		</div>
	  );
  	
}

const mapStateToProps = (state, ownProps) => {
    return {
    	chatlistdata:state.chat,
    	userchat:state.chat.userchat,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getuserlist: (payload,callback) => dispatch(getuserlist(payload,callback)),
        getalluser: (payload,callback) => dispatch(getalluser(payload,callback)),
        addNewUser: (payload,callback) => dispatch(addNewUser(payload,callback)),
        getuserchat: (payload,callback) => dispatch(getuserchat(payload,callback)),
        sendmsg: (payload,callback) => dispatch(sendmsg(payload,callback)),
    };
  };
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Messenger))