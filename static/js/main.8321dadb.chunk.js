(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{110:function(e,a,t){},170:function(e,a,t){e.exports=t(228)},178:function(e,a,t){},228:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),c=t.n(r),s=t(103),m=t(151),o=t(52),i=t(119),u=t(9),d={userList:[],allUsers:[],userchat:[]};function p(e,a){return Object(u.a)(Object(u.a)({},e),{},{userList:a})}function E(e,a){return Object(u.a)(Object(u.a)({},e),{},{allUsers:a})}function f(e,a){var t=Object(i.a)(e.userList);return(t=t.filter((function(e){return e._id!==a._id}))).unshift(a),Object(u.a)(Object(u.a)({},e),{},{userList:t})}function h(e,a){var t=Object(i.a)(e.userchat);return t.push(a),console.log(t),Object(u.a)(Object(u.a)({},e),{},{userchat:t})}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_CHAT_LIST":return p(e,a.payload);case"ALL_USER":return E(e,a.payload);case"ADD_NEWUSER":return f(e,a.payload);case"USER_CHAT":return Object(u.a)(Object(u.a)({},e),{},{userchat:a.payload});case"SEND_MSG":return h(e,a.payload);default:return e}},b=Object(o.c)({chat:g}),N=(t(178),t(109)),v=t(20),y=t(31),_=t(12),w=t(270),x=t(266),j=t(264),O=t(268),S=t(265),k=t(269),C=t(267),I=t(101),P=t.n(I),q=t(229),L=t(259),A=t(262),M=t(104),U=t(37),F=t(97),R=t.n(F),T=Object(L.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function W(e){var a=T(),t=Object(M.a)({initialValues:{psw:"",email_mob:""},validationSchema:U.a({email_mob:U.b().min(10,"Must be 15 characters or less").required("Required"),psw:U.b().required("Required")}),onSubmit:function(e){var a=e.email_mob,t=e.psw;R.a.post("http://localhost:8000/user/login",{email:a,password:t}).then((function(e){console.log(e.data),e.data.error?alert(e.data.error):(localStorage.setItem("__chatauth",JSON.stringify(e.data)),window.location.href="/messenger")})).catch((function(e){}))}});return n.a.createElement(A.a,{component:"main",maxWidth:"xs"},n.a.createElement(j.a,null),n.a.createElement("div",{className:a.paper},n.a.createElement(w.a,{className:a.avatar},n.a.createElement(P.a,null)),n.a.createElement(q.a,{component:"h1",variant:"h5"},"Sign in"),n.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:t.handleSubmit},n.a.createElement(O.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address Or Mobile",name:"email_mob",autoComplete:"new-password",autoFocus:!0},t.getFieldProps("email_mob"))),n.a.createElement(O.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"psw",label:"Password",type:"password",id:"password",autoComplete:"new-password"},t.getFieldProps("psw"))),n.a.createElement(S.a,{control:n.a.createElement(k.a,{value:"remember",color:"primary"}),label:"Remember me"}),n.a.createElement(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,disabled:!function(){var e=Object.keys(t.errors).length,a=Object.keys(t.touched).length;return 0===e&&a>0}()},"Sign In"),n.a.createElement(C.a,{container:!0},n.a.createElement(C.a,{item:!0,xs:!0},n.a.createElement(y.b,{to:"#",onClick:e.clickForgotpassword,variant:"body2"},"Forgot password?")),n.a.createElement(C.a,{item:!0},n.a.createElement(y.b,{to:"/signup",variant:"body2",onClick:e.clickDontAccount},"Don't have an account? Sign Up"))))))}var D=Object(L.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function V(e){var a=D(),t=Object(M.a)({initialValues:{firstName:"",lastName:"",psw:"",email_mob:""},validationSchema:U.a({firstName:U.b().min(2,"Must be 15 characters or less").max(25,"Must be 15 characters or less").required("Required"),lastName:U.b().max(20,"Must be 20 characters or less").required("Required"),email_mob:U.b().min(10,"Must be 15 characters or less").required("Required"),psw:U.b().min(6,"Must be 15 characters or less").required("Required")}),onSubmit:function(a){e.signup(a)}});return n.a.createElement(A.a,{component:"main",maxWidth:"xs"},n.a.createElement(j.a,null),n.a.createElement("div",{className:a.paper},n.a.createElement(w.a,{className:a.avatar},n.a.createElement(P.a,null)),n.a.createElement(q.a,{component:"h1",variant:"h5"},"Sign up"),n.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:t.handleSubmit},n.a.createElement(C.a,{container:!0,spacing:2},n.a.createElement(C.a,{item:!0,xs:12,sm:6},n.a.createElement(O.a,Object.assign({autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0},t.getFieldProps("firstName")))),n.a.createElement(C.a,{item:!0,xs:12,sm:6},n.a.createElement(O.a,Object.assign({variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"},t.getFieldProps("lastName")))),n.a.createElement(C.a,{item:!0,xs:12},n.a.createElement(O.a,Object.assign({variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address Or Mobile",name:"email_mob",autoComplete:"new-password"},t.getFieldProps("email_mob")))),n.a.createElement(C.a,{item:!0,xs:12},n.a.createElement(O.a,Object.assign({variant:"outlined",required:!0,fullWidth:!0,name:"psw",label:"Password",type:"password",id:"password",autoComplete:"new-password"},t.getFieldProps("psw"))))),n.a.createElement(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,disabled:!function(){var e=Object.keys(t.errors).length,a=Object.keys(t.touched).length;return 0===e&&a>0}()},"Sign Up"),n.a.createElement(C.a,{container:!0,justify:"flex-end"},n.a.createElement(C.a,{item:!0},n.a.createElement(y.b,{to:"/signin",onClick:e.clickAlreadyAccount,variant:"body2"},"Already have an account? Sign in"))))))}t(110);var J=Object(_.g)((function(e){var a=n.a.useState(!1),t=Object(v.a)(a,2),l=t[0],r=t[1],c=n.a.useState(""),s=Object(v.a)(c,2),m=s[0],o=s[1],i=n.a.useState([]),u=Object(v.a)(i,2),d=u[0],p=(u[1],n.a.useState([])),E=Object(v.a)(p,2),f=(E[0],E[1]);return n.a.createElement("div",{className:"col-md-4 col-xl-3 chat"},n.a.createElement("div",{className:"card mb-sm-3 mb-md-0 contacts_card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",placeholder:"Search...",onChange:function(e){if(""!==e.target.value){o(e.target.value),r(!0);var a=[];d.map((function(t){var l=e.target.value.toLowerCase();t.name.toLowerCase().includes(l)&&a.push(t)})),f(a)}else r(!1),o("")},value:m,className:"form-control search"}),n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text search_btn"},n.a.createElement("i",{className:"fas fa-search"}))))),n.a.createElement("div",{className:"card-body contacts_body"},l&&n.a.createElement("ul",{className:"seachpopop"},e.chatlistdata.allUsers&&e.chatlistdata.allUsers.map((function(a,t){return n.a.createElement("li",{style:{cursor:"pointer"},key:t,onClick:function(){return function(a){var t=JSON.parse(localStorage.getItem("__chatauth")).userId;r(!1);var l={receiver:a._id,sender:t,name:a.name,img:""};e.addNewUser(l,e.history),o("")}(a)},className:"".concat(0===t?"active":"")},n.a.createElement("div",{className:"d-flex bd-highlight"},n.a.createElement("div",{className:"img_cont"},n.a.createElement("img",{src:"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",className:"rounded-circle user_img"}),n.a.createElement("span",{className:"online_icon"})),n.a.createElement("div",{className:"user_info"},n.a.createElement("span",{style:{fontSize:15}},a.name),n.a.createElement("p",{style:{fontSize:12}},a.lastmsg),n.a.createElement("p",null,"Kalid is online"))))}))),n.a.createElement("ul",{className:"contacts"},e.chatlistdata.userList&&e.chatlistdata.userList.map((function(a,t){return n.a.createElement("li",{style:{cursor:"pointer"},key:t,className:a._id===e.receiver?"active":""},n.a.createElement(y.b,{to:"/messenger/".concat(a._id,"/").concat(a.chatId)},n.a.createElement("div",{className:"d-flex bd-highlight"},n.a.createElement("div",{className:"img_cont"},n.a.createElement("img",{src:"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",className:"rounded-circle user_img"}),n.a.createElement("span",{className:"online_icon"})),n.a.createElement("div",{className:"user_info"},n.a.createElement("span",{style:{fontSize:15}},a.name),n.a.createElement("p",{style:{fontSize:12}},a.lastmsg),n.a.createElement("p",null,"Kalid is online")))))})))),n.a.createElement("div",{className:"card-footer"})))}));var H=function(e){var a=n.a.useState(!1),t=Object(v.a)(a,2),l=t[0],r=t[1],c=JSON.parse(localStorage.getItem("__chatauth")).userId;return n.a.createElement("div",{className:"col-md-8 col-xl-6 chat"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header msg_head"},n.a.createElement("div",{className:"d-flex bd-highlight"},n.a.createElement("div",{className:"img_cont"},n.a.createElement("img",{src:"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",className:"rounded-circle user_img"}),n.a.createElement("span",{className:"online_icon"})),n.a.createElement("div",{className:"user_info"},n.a.createElement("span",null,"Chat with Khalid"),n.a.createElement("p",null,"1767 Messages")),n.a.createElement("div",{className:"video_cam"},n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-video"})),n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-phone"})))),n.a.createElement("span",{id:"action_menu_btn",onClick:function(){return r(!l)}},n.a.createElement("i",{className:"fas fa-ellipsis-v"})),l&&n.a.createElement("div",{className:"action_menu"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-user-circle"})," View profile"),n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-users"})," Add to close friends"),n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-plus"})," Add to group"),n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-ban"})," Block"),n.a.createElement("li",{onClick:function(){localStorage.removeItem("__chatauth"),window.location.href="/signin"}},n.a.createElement("i",{className:"fas fa-ban"})," Logout")))),n.a.createElement("div",{className:"card-body msg_card_body"},e.userchat&&e.userchat.map((function(e){return n.a.createElement("div",{key:e._id,className:"".concat(e.senderId===c?"d-flex justify-content-end mb-4":"d-flex justify-content-start mb-4")},e.senderId!==c?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"img_cont_msg"},n.a.createElement("img",{src:"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",className:"rounded-circle user_img_msg"})),n.a.createElement("div",{className:"msg_cotainer"},e.message,n.a.createElement("span",{className:"msg_time"},"8:40 AM, Today"))):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"msg_cotainer_send"},e.message,n.a.createElement("span",{className:"msg_time"},"8:40 AM, Today")),n.a.createElement("div",{className:"img_cont_msg"},n.a.createElement("img",{src:"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",className:"rounded-circle user_img_msg"}))))})),n.a.createElement("div",{id:"target"})),n.a.createElement("div",{className:"card-footer"},n.a.createElement("form",{onSubmit:e.sendmsg},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-append"},n.a.createElement("span",{className:"input-group-text attach_btn"},n.a.createElement("i",{className:"fas fa-paperclip"}))),n.a.createElement("input",{name:"",className:"form-control type_msg",placeholder:"Type your message...",value:e.message,onChange:function(a){return e.onchangeHandler(a.target.value)}}),n.a.createElement("div",{className:"input-group-append",onClick:e.sendmsg},n.a.createElement("span",{className:"input-group-text send_btn"},n.a.createElement("i",{className:"fas fa-location-arrow"}))))))))},z=localStorage.getItem("__chatauth"),B=null;z&&(B=JSON.parse(z).token);var K=R.a.create({baseURL:"http://localhost:8000/"});K.defaults.headers.common.Authorization="Bearer "+B;var G=K,Q=function(e){return{type:"USER_CHAT_LIST",payload:e}},X=function(e){return{type:"ALL_USER",payload:e}},Y=function(e){return{type:"ADD_NEWUSER",payload:e}},Z=function(e){return{type:"USER_CHAT",payload:e}},$=function(e){return{type:"SEND_MSG",payload:e}},ee=Object(_.g)(Object(s.b)((function(e,a){return{chatlistdata:e.chat,userchat:e.chat.userchat}}),(function(e){return{getuserlist:function(a,t){return e((l=a,function(e){return G({method:"get",url:"chatroom/chateduser"}).then((function(a){l.push("/messenger/"+a.data[0]._id+"/"+a.data[0].chatId),e(Q(a.data))})).catch((function(a){l.push("/messenger"),e(Q([]))}))}));var l},getalluser:function(a,t){return e((function(e){return G({method:"get",url:"user/getusers"}).then((function(a){e(X(a.data))})).catch((function(a){console.log(a),e(X([]))}))}))},addNewUser:function(a,t){return e(function(e,a){return function(t){return G({method:"post",url:"chatroom/create-channel",data:e}).then((function(e){t(Y(e.data)),a.push("/messenger/"+e.data._id+"/"+e.data.chatId)})).catch((function(e){console.log(e)}))}}(a,t))},getuserchat:function(a,t){return e((l=a,function(e){return G({method:"get",url:"chatroom/getuserchat/"+l}).then((function(a){e(Z(a.data))})).catch((function(a){console.log(a),e(Z([]))}))}));var l},sendmsg:function(a,t){return e(function(e,a){return function(a){return a($(e))}}(a))}}}))((function(e){var a=n.a.useState({message:"",userchat:[],chatusers:[],userList:[],open:!1,searchkey:"",searchpeopledata:[],suggetionvalue:[],alluser:[]}),t=Object(v.a)(a,2),l=t[0],r=t[1],c=n.a.useState([]),s=Object(v.a)(c,2);s[0],s[1];n.a.useEffect((function(){var a=e.socket;a&&a.on("newMessage",(function(a){e.sendmsg(a),console.log("message",a)}))}),[e.socket]),n.a.useEffect((function(){e.getuserlist(e.history),e.getalluser(),e.getuserchat(e.match.params.cid)}),[]),n.a.useEffect((function(){var a=e.socket;e.getuserchat(e.match.params.cid),a&&a.emit("joinChat",{channelId:e.match.params.cid}),setTimeout((function(){document.querySelector("#target").scrollIntoView()}),100)}),[e.match.params.cid,e.socket]);var m=document.querySelector("#target");m&&m.scrollIntoView();return n.a.createElement("div",{className:"container-fluid h-100"},n.a.createElement("div",{className:"row justify-content-center h-100"},n.a.createElement(J,{chatlistdata:e.chatlistdata,addNewUser:e.addNewUser,receiver:e.match.params.id}),n.a.createElement(H,{userchat:e.userchat,onchangeHandler:function(e){r(Object(u.a)(Object(u.a)({},l),{},{message:e}))},message:l.message,sendmsg:function(a){a.preventDefault();var t=JSON.parse(localStorage.getItem("__chatauth")).userId,n=e.socket,c={message:l.message,attachmentName:"",attachmentType:"",channelId:e.match.params.cid,receiver:e.match.params.id,senderId:t};n&&(n.emit("chatroomMessage",c),r(Object(u.a)(Object(u.a)({},l),{},{message:""}))),setTimeout((function(){document.querySelector("#target").scrollIntoView()}),100)},receiver:e.match.params.id})))})));var ae=function(){return n.a.createElement("div",{className:"container bootstrap snippet"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("h1",null,"User name")),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("a",{href:"/users",className:"pull-right"},n.a.createElement("img",{title:"profile image",className:"img-circle img-responsive",src:"http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"http://ssl.gstatic.com/accounts/ui/avatar_2x.png",className:"avatar img-circle img-thumbnail",alt:"avatar"}),n.a.createElement("h6",null,"Upload a different photo..."),n.a.createElement("input",{type:"file",className:"text-center center-block file-upload"})),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("div",{className:"panel panel-default"},n.a.createElement("div",{className:"panel-heading"},"Website ",n.a.createElement("i",{className:"fa fa-link fa-1x"})),n.a.createElement("div",{className:"panel-body"},n.a.createElement("a",{href:"http://bootnipets.com"},"bootnipets.com"))),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item text-muted"},"Activity ",n.a.createElement("i",{className:"fa fa-dashboard fa-1x"})),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Shares"))," 125"),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Likes"))," 13"),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Posts"))," 37"),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Followers"))," 78")),n.a.createElement("div",{className:"panel panel-default"},n.a.createElement("div",{className:"panel-heading"},"Social Media"),n.a.createElement("div",{className:"panel-body"},n.a.createElement("i",{className:"fa fa-facebook fa-2x"})," ",n.a.createElement("i",{className:"fa fa-github fa-2x"})," ",n.a.createElement("i",{className:"fa fa-twitter fa-2x"})," ",n.a.createElement("i",{className:"fa fa-pinterest fa-2x"})," ",n.a.createElement("i",{className:"fa fa-google-plus fa-2x"})))),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement("ul",{className:"nav nav-tabs"},n.a.createElement("li",{className:"active"},n.a.createElement("a",{"data-toggle":"tab",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{"data-toggle":"tab",href:"#messages"},"Menu 1")),n.a.createElement("li",null,n.a.createElement("a",{"data-toggle":"tab",href:"#settings"},"Menu 2"))),n.a.createElement("div",{className:"tab-content"},n.a.createElement("div",{className:"tab-pane active",id:"home"},n.a.createElement("hr",null),n.a.createElement("form",{className:"form",action:"##",method:"post",id:"registrationForm"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"first_name"},n.a.createElement("h4",null,"First name")),n.a.createElement("input",{type:"text",className:"form-control",name:"first_name",id:"first_name",placeholder:"first name",title:"enter your first name if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"last_name"},n.a.createElement("h4",null,"Last name")),n.a.createElement("input",{type:"text",className:"form-control",name:"last_name",id:"last_name",placeholder:"last name",title:"enter your last name if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"phone"},n.a.createElement("h4",null,"Phone")),n.a.createElement("input",{type:"text",className:"form-control",name:"phone",id:"phone",placeholder:"enter phone",title:"enter your phone number if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"mobile"},n.a.createElement("h4",null,"Mobile")),n.a.createElement("input",{type:"text",className:"form-control",name:"mobile",id:"mobile",placeholder:"enter mobile number",title:"enter your mobile number if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"email"},n.a.createElement("h4",null,"Email")),n.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"you@email.com",title:"enter your email."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"email"},n.a.createElement("h4",null,"Location")),n.a.createElement("input",{type:"email",className:"form-control",id:"location",placeholder:"somewhere",title:"enter a location"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"password"},n.a.createElement("h4",null,"Password")),n.a.createElement("input",{type:"password",className:"form-control",name:"password",id:"password",placeholder:"password",title:"enter your password."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"password2"},n.a.createElement("h4",null,"Verify")),n.a.createElement("input",{type:"password",className:"form-control",name:"password2",id:"password2",placeholder:"password2",title:"enter your password2."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-12"},n.a.createElement("br",null),n.a.createElement("button",{className:"btn btn-lg btn-success",type:"submit"},n.a.createElement("i",{className:"glyphicon glyphicon-ok-sign"})," Save"),n.a.createElement("button",{className:"btn btn-lg",type:"reset"},n.a.createElement("i",{className:"glyphicon glyphicon-repeat"})," Reset")))),n.a.createElement("hr",null)),n.a.createElement("div",{className:"tab-pane",id:"messages"},n.a.createElement("h2",null),n.a.createElement("hr",null),n.a.createElement("form",{className:"form",action:"##",method:"post",id:"registrationForm"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"first_name"},n.a.createElement("h4",null,"First name")),n.a.createElement("input",{type:"text",className:"form-control",name:"first_name",id:"first_name",placeholder:"first name",title:"enter your first name if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"last_name"},n.a.createElement("h4",null,"Last name")),n.a.createElement("input",{type:"text",className:"form-control",name:"last_name",id:"last_name",placeholder:"last name",title:"enter your last name if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"phone"},n.a.createElement("h4",null,"Phone")),n.a.createElement("input",{type:"text",className:"form-control",name:"phone",id:"phone",placeholder:"enter phone",title:"enter your phone number if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"mobile"},n.a.createElement("h4",null,"Mobile")),n.a.createElement("input",{type:"text",className:"form-control",name:"mobile",id:"mobile",placeholder:"enter mobile number",title:"enter your mobile number if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"email"},n.a.createElement("h4",null,"Email")),n.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"you@email.com",title:"enter your email."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"email"},n.a.createElement("h4",null,"Location")),n.a.createElement("input",{type:"email",className:"form-control",id:"location",placeholder:"somewhere",title:"enter a location"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"password"},n.a.createElement("h4",null,"Password")),n.a.createElement("input",{type:"password",className:"form-control",name:"password",id:"password",placeholder:"password",title:"enter your password."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"password2"},n.a.createElement("h4",null,"Verify")),n.a.createElement("input",{type:"password",className:"form-control",name:"password2",id:"password2",placeholder:"password2",title:"enter your password2."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-12"},n.a.createElement("br",null),n.a.createElement("button",{className:"btn btn-lg btn-success",type:"submit"},n.a.createElement("i",{className:"glyphicon glyphicon-ok-sign"})," Save"),n.a.createElement("button",{className:"btn btn-lg",type:"reset"},n.a.createElement("i",{className:"glyphicon glyphicon-repeat"})," Reset"))))),n.a.createElement("div",{className:"tab-pane",id:"settings"},n.a.createElement("hr",null),n.a.createElement("form",{className:"form",action:"##",method:"post",id:"registrationForm"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"first_name"},n.a.createElement("h4",null,"First name")),n.a.createElement("input",{type:"text",className:"form-control",name:"first_name",id:"first_name",placeholder:"first name",title:"enter your first name if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"last_name"},n.a.createElement("h4",null,"Last name")),n.a.createElement("input",{type:"text",className:"form-control",name:"last_name",id:"last_name",placeholder:"last name",title:"enter your last name if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"phone"},n.a.createElement("h4",null,"Phone")),n.a.createElement("input",{type:"text",className:"form-control",name:"phone",id:"phone",placeholder:"enter phone",title:"enter your phone number if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"mobile"},n.a.createElement("h4",null,"Mobile")),n.a.createElement("input",{type:"text",className:"form-control",name:"mobile",id:"mobile",placeholder:"enter mobile number",title:"enter your mobile number if any."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"email"},n.a.createElement("h4",null,"Email")),n.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"you@email.com",title:"enter your email."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"email"},n.a.createElement("h4",null,"Location")),n.a.createElement("input",{type:"email",className:"form-control",id:"location",placeholder:"somewhere",title:"enter a location"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"password"},n.a.createElement("h4",null,"Password")),n.a.createElement("input",{type:"password",className:"form-control",name:"password",id:"password",placeholder:"password",title:"enter your password."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-6"},n.a.createElement("label",{for:"password2"},n.a.createElement("h4",null,"Verify")),n.a.createElement("input",{type:"password",className:"form-control",name:"password2",id:"password2",placeholder:"password2",title:"enter your password2."}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-xs-12"},n.a.createElement("br",null),n.a.createElement("button",{className:"btn btn-lg btn-success pull-right",type:"submit"},n.a.createElement("i",{className:"glyphicon glyphicon-ok-sign"})," Save"),n.a.createElement("button",{className:"btn btn-lg",type:"reset"},n.a.createElement("i",{className:"glyphicon glyphicon-repeat"})," Reset")))))))))},te=t(80);var le=n.a.memo((function(e){e.handleClick;var a=e.handlerChange,t=e.name;return n.a.createElement("div",null,n.a.createElement("label",null,"Enter number : "),n.a.createElement("br",null),n.a.createElement("input",{type:"number",onChange:function(e){return a(e.target.value,t)}}))}));var ne=n.a.memo((function(e){var a=e.handleClick,t=e.children;return n.a.createElement("button",{onClick:a},t)}));var re=n.a.memo((function(e){var a=e.type,t=n.a.useState(""),l=Object(v.a)(t,2);return l[0],l[1],n.a.createElement("div",null,n.a.createElement("span",null,"This number is a ",a," "))}));function ce(){var e=this,a=Object(l.useState)({oddEven:"",isPrimeNo:"",isEven:"",isPrime:""}),t=Object(v.a)(a,2),r=t[0],c=t[1],s=Object(l.useCallback)((function(e,a){c(Object(u.a)(Object(u.a)({},r),{},Object(te.a)({},a,e)))}),[r.oddEven]),m=Object(l.useCallback)((function(e,a){c(Object(u.a)(Object(u.a)({},r),{},Object(te.a)({},a,e)))}),[r.isPrimeNo]);var o=function(){console.log(e)};function i(){console.log(this)}return o(),i(),n.a.createElement("div",null,n.a.createElement(ne,{handleClick:o},"Arrow function"),n.a.createElement(ne,{handleClick:i},"Normal function"),n.a.createElement(le,{handlerChange:s,name:"oddEven"}),n.a.createElement("br",null),n.a.createElement(re,{type:r.isEven}),n.a.createElement("br",null),n.a.createElement(ne,{handleClick:function(){console.log("12");var e="even";1===r.oddEven%2&&(e="odd"),c(Object(u.a)(Object(u.a)({},r),{},{isEven:e}))}},"Check odd or even no"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(le,{handlerChange:m,name:"isPrimeNo"}),n.a.createElement("br",null),n.a.createElement(re,{type:r.isPrime}),n.a.createElement("br",null),n.a.createElement(ne,{handleClick:function(){console.log(r.isPrimeNo);var e=parseInt(r.isPrimeNo),a="prime";if(1===e)alert("1 is neither prime nor composite number.");else if(e>1){for(var t=2;t<e;t++)if(e%t===0){a="non prime";break}c(Object(u.a)(Object(u.a)({},r),{},{isPrime:a}))}}},"Check prime no."))}var se=t(155),me=t.n(se);var oe=function(e){var a=e.component,t=Object(N.a)(e,["component"]);return localStorage.getItem("__chatauth")?n.a.createElement(_.b,Object.assign({},t,{render:function(e){return n.a.createElement(a,e)}})):n.a.createElement(_.a,{to:{pathname:"/signin",state:{from:t.location.pathname}}})},ie=function(e){var a=e.component,t=Object(N.a)(e,["component"]);return localStorage.getItem("__chatauth")?n.a.createElement(_.a,{to:{pathname:"/messenger",state:{from:t.location.pathname}}}):n.a.createElement(_.b,Object.assign({},t,{render:function(e){return n.a.createElement(a,e)}}))},ue=function(){var e=n.a.useState(null),a=Object(v.a)(e,2),t=a[0],l=a[1];return n.a.useEffect((function(){!function e(){var a=localStorage.getItem("__chatauth"),n=null;if(a&&(n=JSON.parse(a).token),n&&!t){var r=me()("http://localhost:8000",{query:{token:n}});r.on("disconnect",(function(){l(null),setTimeout(e,3e3),console.log("error","Socket Disconnected!")})),r.on("connect",(function(){console.log("success","Socket Connected!")})),l(r)}}()}),[]),n.a.createElement(y.a,null,n.a.createElement(_.d,null,n.a.createElement(y.a,{basename:"/realTimeChatApp"}),n.a.createElement(_.b,{path:"/demo",component:ce}),n.a.createElement(ie,{path:"/",component:W,exact:!0}),n.a.createElement(ie,{path:"/signin",component:W,exact:!0}),n.a.createElement(ie,{path:"/signup",component:V,exact:!0}),n.a.createElement(_.b,{path:"/messenger/:id?/:cid?",render:function(){return n.a.createElement(ee,{socket:t})},exact:!0}),n.a.createElement(oe,{path:"/Profile",component:ae,exact:!0})))},de=Object(o.e)(b,Object(o.d)(Object(o.a)(m.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,{store:de},n.a.createElement(ue,null))),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.8321dadb.chunk.js.map