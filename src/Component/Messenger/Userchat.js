import React, { useRef, useEffect } from 'react';
import './style.css'




function Userchat(props) {
	const [menu,setMenu] = React.useState(false)
	const userId =  JSON.parse(localStorage.getItem('__chatauth')).userId

	const logout = () => {
		localStorage.removeItem("__chatauth")
		window.location.href = "/signin"
	}


  	return (
	    <div className="col-md-8 col-xl-6 chat">
			<div className="card">
				<div className="card-header msg_head">
					<div className="d-flex bd-highlight">
						<div className="img_cont">
							<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img"/>
							<span className="online_icon"></span>
						</div>
						<div className="user_info">
							<span>Chat with Khalid</span>
							<p>1767 Messages</p>
						</div>
						<div className="video_cam">
							<span><i className="fas fa-video"></i></span>
							<span><i className="fas fa-phone"></i></span>
						</div>
					</div>
					<span id="action_menu_btn" onClick={()=>setMenu(!menu)}><i className="fas fa-ellipsis-v"></i></span>
					{
						menu &&
							<div className="action_menu">
								<ul>
									<li><i className="fas fa-user-circle"></i> View profile</li>
									<li><i className="fas fa-users"></i> Add to close friends</li>
									<li><i className="fas fa-plus"></i> Add to group</li>
									<li><i className="fas fa-ban"></i> Block</li>
									<li onClick={logout}><i className="fas fa-ban"></i> Logout</li>
								</ul>
							</div>
					}
				</div>
				<div className="card-body msg_card_body">
					{
						props.userchat &&
						props.userchat.map(item=>{
							return	<div key={item._id} className={`${item.senderId===userId ? "d-flex justify-content-end mb-4" : "d-flex justify-content-start mb-4"}`}>
									{
										item.senderId!==userId ?
											<React.Fragment>
												<div className="img_cont_msg">
													<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
												</div>
												<div className="msg_cotainer">
													{item.message}
													<span className="msg_time">8:40 AM, Today</span>
												</div>
											</React.Fragment>
										: 	
											<React.Fragment>
												<div className="msg_cotainer_send">
													{item.message}
													<span className="msg_time">8:40 AM, Today</span>
												</div>
												<div className="img_cont_msg">
													<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
												</div>
											</React.Fragment>
									}
										
									</div>
						})
					}
					<div id="target"></div>
				</div>
				<div className="card-footer">
					<form onSubmit={props.sendmsg}>
						<div className="input-group">
							<div className="input-group-append">
								<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
							</div>
							<input 
								name="" 
								className="form-control type_msg" 
								placeholder="Type your message..."
								value={props.message}
		                    	onChange={(e)=>props.onchangeHandler(e.target.value)}
							/>
							<div className="input-group-append" onClick={props.sendmsg}>
								<span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Userchat;