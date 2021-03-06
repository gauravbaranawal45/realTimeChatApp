import React ,{Component,useRef,useState,useCallback} from "react"
import Form from "./Form"
import Button from "./Button"
import Result from "./Result"


export default function Main() {

	const [state,setState] = useState({
		oddEven:"",
		isPrimeNo:"",
		isEven:"",
		isPrime:"",
	})


	const handlerChange = useCallback((value,name) => {
		setState({...state,[name]:value})
	},[state.oddEven])

	const handlerChange1 = useCallback((value,name) => {
		setState({...state,[name]:value})
	},[state.isPrimeNo])

	function handleClick() {
		console.log('12')
		let val = state.oddEven%2;
		let isEven = "even"
		if(val===1){
			isEven="odd"
		}
		setState({
			...state,
			isEven:isEven
		})
	}

	function checkPrime() {
		console.log(state.isPrimeNo)
		
		let val = parseInt(state.isPrimeNo);
		let isPrime = "prime";

		if(val===1){
			alert("1 is neither prime nor composite number.")
		}else if(val>1){
			for (var i = 2; i < val; i++) {
				if(val%i===0){
					isPrime="non prime";
					break;
				}
			}
			setState({
				...state,
				isPrime:isPrime
			})
		}
	}

	const arrowFunction = () => {
		console.log(this)
	}
	function nrmlFunction() {
		console.log(this)
	}

	arrowFunction()
	nrmlFunction()


	return <div>
				<Button handleClick={arrowFunction}>Arrow function</Button>
				<Button handleClick={nrmlFunction}>Normal function</Button>
				<Form handlerChange={handlerChange} name="oddEven"/>
				<br/>
				<Result type={state.isEven}/><br/>
				<Button handleClick={handleClick} >Check odd or even no</Button>
				<br/><br/><br/>
				<Form handlerChange={handlerChange1} name="isPrimeNo"/>
				<br/>
				<Result type={state.isPrime}/><br/>
				<Button handleClick={checkPrime} >Check prime no.</Button>
			</div>
}
