
import './App.css';
import Team1 from './components/team1/team1';
import SubmissionForm from './components/submissionform/submissionform';
import React, {useEffect, useState} from 'react';
import RightSide from './components/RightSide/RightSide'

import {Compare} from "./components/Compare"
import RandomPoke from './components/RandomPoke/RandomPoke';
import SubmissionForm2 from './components/RightSide/SubmissionForm2/SubmissionForm2';
import Team2 from './components/RightSide/team2/team2';

export default function App() {


  // ======== THIS SECTION IS FOR USER 1 INPUT ===============

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

  // useEffect(() => {
  //   userRequestData(userInput);
  // }, []); 

  function handleChange(event) {
    event.preventDefault(); // THIS LINE MIGHT NOT BE NECESSARY KEEP FOR NOW BUT AT END CHECK
    setUserInput(event.target.value.toLowerCase());

  }

  function handleSubmit(event) {
    event.preventDefault();
    //THIS UPCOMING LINE MIGHT BE NECESSARY BUT I DON'T THINK SO
    //requestData();
    userRequestData(userInput);

  }
  
  //================ THIS SECTION IS FOR RANDOM ENEMY SELECTION ==========

  const [randomInput, setRandomInput] = useState(1);
  
  const[enemyPoke, setEnemyPoke] = useState();

  function randomRequestData(randomInput) {

    const url = `https://pokeapi.co/api/v2/pokemon/${randomInput}`;

   
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setEnemyPoke(data); // this is all the data for the poke
          // console.log(data);
          // console.log(data.name);
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
    setRandomInput(randNum); // PRETTY SURE I DON'T NEED THIS LINE ANYMORE
    // console.log(randNum);
    randomRequestData(randNum);

  }


  // =========== THIS SECTION IS FOR PLAYER 2 SELECTION =========

  const [user2Input, setUser2Input] = useState(2);  //this is the state that goes from user input into the API request
    
  const[ user2Poke, setUser2Poke] = useState(); //this is the state that holds data from api request and sends it to Team1

  

  function user2RequestData(userInput) {

      const url = `https://pokeapi.co/api/v2/pokemon/${user2Input}`;

     
      fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setUser2Poke(data); // this is all the data for the poke
            // console.log(data);
            // console.log(data.name);
            // console.log(data.stats);
            // console.log(Object.values(data.stats[0])[0])
            // console.log(Object.values(data.stats[4])[0])
            setUser2Input('');  
          })
          .catch(console.log.error);
  }  

  // useEffect(() => {
  //   user2RequestData(user2Input);
  // }, []); 

  function handleChangeUser2(event) {
    event.preventDefault(); // THIS LINE MIGHT NOT BE NECESSARY KEEP FOR NOW BUT AT END CHECK
    setUser2Input(event.target.value.toLowerCase());

  }

  function handleSubmitUser2(event) {
    event.preventDefault();
    //THIS UPCOMING LINE MIGHT BE NECESSARY BUT I DON'T THINK SO
    //requestData();
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
     
      {/* <RightSide /> */}
      <div className="random">
        <RandomPoke 
          generateRandomPoke={generateRandomPoke}
          enemyPoke={enemyPoke}
        />
      </div>
     {/* <button onClick={generateRandomPoke}>This is the test button</button> */}
     <div className="compare">
      <Compare 
        nextPoke={nextPoke} 
        user2Poke={user2Poke}
      />
    </div>
    </div>
  );
}


