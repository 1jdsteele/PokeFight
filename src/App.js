import './App.css';
import Team1 from './components/team1/team1';
import SubmissionForm from './components/submissionform/submissionform';
import React, {useEffect, useState} from 'react';
import {Compare} from "./components/Compare"
import RandomPoke from './components/RandomPoke/RandomPoke';
import SubmissionForm2 from './components/RightSide/SubmissionForm2/SubmissionForm2';
import Team2 from './components/RightSide/team2/team2';

export default function App() {


  // ======== THIS SECTION IS FOR USER 1 INPUT ===============

  const [userInput, setUserInput] = useState(1);  //this is the state that goes from player 1 input into the API request
    
  const[nextPoke, setNextPoke] = useState(); //this is the state that holds data from api request and sends it to Team1

  

  function userRequestData(userInput) {

      const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;

     
      fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setNextPoke(data); // this is all the data for the player 1 Poke
            setUserInput('');  
          })
          .catch(setNextPoke("mistake"));
  }  

 

  function handleChange(event) {
    //event.preventDefault(); // THIS LINE MIGHT NOT BE NECESSARY KEEP FOR NOW BUT AT END CHECK I'M SO SCARED TO DELETE THIS I WILL CHECK LATER ok very certain i don't need it but still scred
    setUserInput(event.target.value.toLowerCase());

  }

  function handleSubmit(event) {
    event.preventDefault();
    userRequestData(userInput);

  }
  
  //================ THIS SECTION IS FOR RANDOM POKE SUGGESTION ==========

  const [randomInput, setRandomInput] = useState();
  
  const[enemyPoke, setEnemyPoke] = useState();

  function randomRequestData(randomInput) {

    const url = `https://pokeapi.co/api/v2/pokemon/${randomInput}`;

   
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setEnemyPoke(data); // this is all the data for the rando poke
          setRandomInput('');  
        })
        .catch(console.log.error);
}  




  function generateRandomPoke(){
    let randNum = Math.ceil(Math.random()*898)
    randomRequestData(randNum);

  }


  // =========== THIS SECTION IS FOR PLAYER 2 SELECTION =========

  const [user2Input, setUser2Input] = useState(2);  //this is the state that goes from player 2 input into the API request
    
  const[ user2Poke, setUser2Poke] = useState(); //this is the state that holds data from api request and sends it to Team2

  

  function user2RequestData(userInput) {

      const url = `https://pokeapi.co/api/v2/pokemon/${user2Input}`;

     
      fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setUser2Poke(data); // this is all the data for the poke for player 2
            setUser2Input('');  
          })
          .catch(setUser2Poke("mistake"));
  }  

 

  function handleChangeUser2(event) {
    setUser2Input(event.target.value.toLowerCase());

  }

  function handleSubmitUser2(event) {
    event.preventDefault();
    user2RequestData(userInput);

  }


  return (
    <div className="wrapper">
      <h1 className="header">Pokemon Battle Game</h1>
      <div className="leftSide">
        <h2>Player 1</h2>
        <SubmissionForm 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          userInput={userInput}
        />
        <Team1 
        nextPoke={nextPoke} 
        />
      </div>
      <div className="rightSide">
        <h2>Player 2</h2>
        <SubmissionForm2 
          handleChangeUser2={handleChangeUser2}
          handleSubmitUser2={handleSubmitUser2}
          user2Input={user2Input}

        />
        <Team2 
          user2Poke={user2Poke}
        />
      </div>
      <div className="random">
        <RandomPoke 
          generateRandomPoke={generateRandomPoke}
          enemyPoke={enemyPoke}
        />
      </div>
     <div className="compare">
      <Compare 
        nextPoke={nextPoke} 
        user2Poke={user2Poke}
      />
    </div>
    </div>
  );
}


