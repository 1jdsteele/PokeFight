
import './App.css';
import Team1 from './components/team1/team1';
import SubmissionForm from './components/submissionform/submissionform';
import React, {useEffect, useState} from 'react';

function App() {

  const [userInput, setUserInput] = useState(1);  //this is the state that goes from user input into the API request
    
  const[nextPoke, setNextPoke] = useState(); //this is the state that holds data from api request and sends it to Team1

  function requestData(userInput) {

      const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;

      //THE ERROR
      //Uncaught (in promise) SyntaxError: Unexpected token N in JSON at position 0
      // IS FROM THIS FETCH
      fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setNextPoke(data); // this is all the data for the poke
            console.log(data);
            console.log(data.name);
            setUserInput('');  
          })
          .catch(console.log.error);
  }  

  useEffect(() => {
    requestData(userInput);
  }, []);

  function handleChange(event) {
    event.preventDefault(); // THIS LINE MIGHT NOT BE NECESSARY KEEP FOR NOW BUT AT END CHECK
    setUserInput(event.target.value);

  }

  function handleSubmit(event) {
    event.preventDefault();
    //THIS UPCOMING LINE MIGHT BE NECESSARY BUT I DON'T THINK SO
    //requestData();
    requestData(userInput);

  }

  return (
    <div>
      <h2>app has loaded properly</h2>
      <SubmissionForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userInput={userInput}
      />
      <Team1 
       nextPoke={nextPoke} 
      />
    </div>
  );
}

export default App;
