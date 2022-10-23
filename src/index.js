import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import ToDoList from './components/toDoList'

const root = ReactDOM.createRoot(document.getElementById('root'))

const name = 'Marcin'

const htmlNode = <p>React jest Fajny</p>

const calculateSum = (a, b) => {
	return a + b
}

root.render(
	<React.StrictMode>
		{/* <h1 className='heading'> Hello World {(name, 2 + 7)} !! </h1>
		{htmlNode}
		<p> suma liczby 2+5 to {calculateSum(2, 5)}</p> */}
		<ToDoList />
	</React.StrictMode>
)
