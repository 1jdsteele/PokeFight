
import './App.css';
import Team1 from './components/team1/team1';
import SubmissionForm from './components/submissionform/submissionform';
import React, {useEffect, useState} from 'react';
import RightSide from './components/RightSide/RightSide'

import {Compare} from "./components/Compare"
import RandomPoke from './components/RandomPoke/RandomPoke';


export default function App() {


  // ======== THIS SECTION IS FOR USER INPUT ===============

  const [userInput, setUserInput] = useState(1);  //this is the state that goes from user input into the API request
    
  const[nextPoke, setNextPoke] = useState(); //this is the state that holds data from api request and sends it to Team1

  

  function userRequestData(userInput) {

      const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;

     
      fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setNextPoke(data); // this is all the data for the poke
            // console.log(data);
            // console.log(data.name);
            // console.log(data.stats);
            // console.log(Object.values(data.stats[0])[0])
            // console.log(Object.values(data.stats[4])[0])
            setUserInput('');  
          })
          .catch(console.log.error);
  }  

  useEffect(() => {
    userRequestData(userInput);
  }, []); 

  function handleChange(event) {
    event.preventDefault(); // THIS LINE MIGHT NOT BE NECESSARY KEEP FOR NOW BUT AT END CHECK
    setUserInput(event.target.value);

  }

  function handleSubmit(event) {
    event.preventDefault();
    //THIS UPCOMING LINE MIGHT BE NECESSARY BUT I DON'T THINK SO
    //requestData();
    userRequestData(userInput);

  }
  
  //================ THIS SECTION IS FOR RANDOM ENEMY SELECTION

  const [randomInput, setRandomInput] = useState(1);
  
  const[enemyPoke, setEnemyPoke] = useState();

  function randomRequestData(randomInput) {

    const url = `https://pokeapi.co/api/v2/pokemon/${randomInput}`;

   
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setEnemyPoke(data); // this is all the data for the poke
          console.log(data);
          console.log(data.name);
          // console.log(data.stats);
          // console.log(Object.values(data.stats[0])[0])
          // console.log(Object.values(data.stats[4])[0])
          setRandomInput('');  
        })
        .catch(console.log.error);
}  


// useEffect(() => {
//   randomRequestData(randomInput);
// }, []); 

  function generateRandomPoke(){
    let randNum = Math.ceil(Math.random()*898)
    setRandomInput(randNum);
    console.log(randNum);
    randomRequestData(randomInput);

  }

  return (
    <div className="wrapper">
      <h2>Pokemon Battle Game</h2>
      <div className="leftSide">
        <SubmissionForm 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          userInput={userInput}
        />
        <Team1 
        nextPoke={nextPoke} 
        />
      </div>
     
      <RightSide />
      <RandomPoke 
        onClick={generateRandomPoke}
      />
     <button onClick={generateRandomPoke}>This is the test button</button>
     <Compare 
      nextPoke={nextPoke} 
     />
    </div>
  );
}


