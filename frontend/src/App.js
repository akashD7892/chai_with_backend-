import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react' ;
import axios from 'axios' ;

function App() {
  
  const [jokes, setJokes] = useState([]) ;

  useEffect(()=> {
    // Make a fetch request to the server
    fetch('/jokes')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setJokes(data))
    .catch(error => console.error('Fetch error:', error));

  })
  
  return (
    <div className="App">
      <h1>Chai and Full Stack</h1>
      {/* <p>JOKES: {jokes.length} </p> */}

      {

        jokes.map( (joke, index) => {
          return(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
          )
        })
        
      }
    </div>
  );
}

export default App;
