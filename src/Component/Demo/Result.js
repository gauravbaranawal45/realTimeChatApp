import React from "react"

function Result({type}){
		
	const [state,setState] = React.useState('')

	// console.log('this is result',type)

	const handlerChange = (e) => {
		setState(e.target.value)
	}

	return(
		<div>
			{/*<input type="text" onChange={handlerChange} value={state}/>*/}
			<span>This number is a {type} </span>
		</div>
	)
}

export default React.memo(Result)