import React from "react"

function Newcompo({handleClick,handlerChange,name}){
	
	// console.log('this is form Component')
	return(
		<div>
			<label>Enter number : </label><br/>
			<input type="number" onChange={(e)=>handlerChange(e.target.value,name)}/>
		</div>
	)
}

export default React.memo(Newcompo)