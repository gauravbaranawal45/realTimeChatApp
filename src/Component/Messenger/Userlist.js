import React from "react";
import {Link,withRouter} from "react-router-dom";
import './style.css'


function Userlist(props) {
	const [open,setOpen] = React.useState(false)
	const [searchkey,setSearchkey] = React.useState('')
	const [searchpeopledata,setSearchpeopledata] = React.useState([])
	const [suggetionvalue,setSuggetionvalue] = React.useState([])

	const onchange = (e) => {
		if(e.target.value!==''){
			setSearchkey(e.target.value)
			setOpen(true)
			let suggetionVal = [];
			searchpeopledata.map(item=>{
		        let searchkeyval = e.target.value.toLowerCase();
		        let itemval = item.name.toLowerCase()
		        if(itemval.includes(searchkeyval)){
		          suggetionVal.push(item)
		        }
		    })
		    setSuggetionvalue(suggetionVal)
		}else{
			setOpen(false)
			setSearchkey("")
		}
	}

	const selectuser = (item) => {
		let userId = JSON.parse(localStorage.getItem('__chatauth')).userId;
		setOpen(false)
		let payload = {
			receiver:item._id,
			sender:userId,
			name:item.name,
			img:""
		}
		props.addNewUser(payload,props.history)
		setSearchkey('')
		// props.history.push("/messenger/"+item._id)
	}


  	return (
	    <div className="col-md-4 col-xl-3 chat">
			<div className="card mb-sm-3 mb-md-0 contacts_card">
				<div className="card-header">
					<div className="input-group">
						<input 
							type="text"
			              	placeholder="Search..."
			              	onChange={onchange}
			              	value={searchkey}
							className="form-control search"
						/>
						<div className="input-group-prepend">
							<span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
						</div>
					</div>
				</div>
				<div className="card-body contacts_body">
				{
					open &&
						<ul className="seachpopop">
							{	
								props.chatlistdata.allUsers &&
								props.chatlistdata.allUsers.map((item,i)=>
									<li style={{cursor:"pointer"}} key={i} onClick={()=>selectuser(item)} className={`${i===0 ? "active" : ""}`}>
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img"/>
												<span className="online_icon"></span>
											</div>
											<div className="user_info">
												<span style={{fontSize:15}}>{item.name}</span>
												<p style={{fontSize:12}}>{item.lastmsg}</p>
												<p>Kalid is online</p>
											</div>
										</div>
									</li>
								)
							}
						</ul>
				}
					<ul className="contacts">
						{	
							props.chatlistdata.userList &&
							props.chatlistdata.userList.map((item,i)=>
								<li style={{cursor:"pointer"}} key={i} className={item._id===props.receiver ? "active" : ""}>
									<Link to={`/messenger/${item._id}/${item.chatId}`}>
									<div className="d-flex bd-highlight">
										<div className="img_cont">
											<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img"/>
											<span className="online_icon"></span>
										</div>
										<div className="user_info">
											<span style={{fontSize:15}}>{item.name}</span>
											<p style={{fontSize:12}}>{item.lastmsg}</p>
											<p>Kalid is online</p>
										</div>
									</div>
									</Link>
								</li>
							)
						}
					</ul>
				</div>
				<div className="card-footer"></div>
			</div>
		</div>
    );
}

export default withRouter(Userlist);