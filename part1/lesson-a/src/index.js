import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const Footer = () => {
  return (
    <p>Greetings app created by <strong>Sayed Ali</strong></p>
  )
}
const App = () => {
  let name = 'Max'
  let age = 23
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Sayed" age={32} />
      <Hello name={name} age={age}/>
      <Footer />
    </>
)}

ReactDOM.render(<App />, document.getElementById('root'))
