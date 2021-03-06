import React from "react";
import { BrowserRouter, Redirect,Switch, Route } from "react-router-dom";
import Signin from './Component/Auth/Signin'
import Signup from './Component/Auth/Signup'
import Messenger from './Component/Messenger/Messenger'
import Profile from './Component/Profile'

import Demo from './Component/Demo'


import io from "socket.io-client";


function App() {

  const [socket, setSocket] = React.useState(null);

  const setupSocket = () => {
    let AUTH = localStorage.getItem('__chatauth')
    let token = null;
    if(AUTH){
      token = JSON.parse(AUTH).token;  
    }
    if (token && !socket) {
      const newSocket = io("http://localhost:8000", {
        query: {
          token: token,
        },
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        console.log("error", "Socket Disconnected!");
      });

      newSocket.on("connect", () => {
        console.log("success", "Socket Connected!");
      });

      setSocket(newSocket);
    }
  };

  React.useEffect(() => {
    setupSocket();
    //eslint-disable-next-line
  }, []);

  // console.log(socket)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/demo" component={Demo}/>
        <Changepage path="/" exact />
        <LoginRoute path="/signin" component={Signin} exact />
        <LoginRoute path="/signin" component={Signin} exact />
        <LoginRoute path="/signup" component={Signup} exact />
        <Route path="/messenger/:id?/:cid?" render={() => <Messenger socket={socket} />} exact />
        <PrivateRoute path="/Profile" component={Profile} exact />
      </Switch>
    </BrowserRouter>
  );
}

const PrivateRoute = ({ component: Component, ...props }) => {
    let chatauth = localStorage.getItem('__chatauth')
    if(chatauth){
      return <Route {...props} render={propsParams =><Component {...propsParams}/>}/>
    } else {
      return <Redirect to={{ pathname: '/signin', state: { from: props.location.pathname } }} />
    }
}


const LoginRoute = ({ component: Component, ...props }) => {
    let chatauth = localStorage.getItem('__chatauth')
    if(!chatauth){
      return <Route {...props} render={propsParams =><Component {...propsParams}/>}/>
    } else {
      return <Redirect to={{ pathname: '/messenger', state: { from: props.location.pathname } }} />
    }
}

const Changepage  = ({ component: Component, ...props }) => {
    let chatauth = localStorage.getItem('__chatauth')
    if(!chatauth){
      return <Redirect to={{ pathname: '/signin', state: { from: props.location.pathname } }} />
    } else {
      return <Redirect to={{ pathname: '/messenger', state: { from: props.location.pathname } }} />
    }
}

export default App;