
//YOU NEED TO CHECK IF THE CONNECTION TO THE CSS FILE WORKS
import "./RightSide.css"
import Team2 from './team2/team2';
import SubmissionForm2 from './SubmissionForm2/SubmissionForm2';


import React, {useEffect, useState} from 'react';

export default function RightSide() {

  const [userInput, setUserInput] = useState(1);  //this is the state that goes from user input into the API request
    
  const[nextPoke, setNextPoke] = useState(); //this is the state that holds data from api request and sends it to Team1

  function requestData(userInput) {

      const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;

     
      fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setNextPoke(data); // this is all the data for the poke
            console.log(data);
            console.log(data.name);
            console.log(data.stats);
            console.log(Object.values(data.stats[0])[0])
            console.log(Object.values(data.stats[4])[0])
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
    <div className='rigthSide'>
      <h2>app has loaded properly</h2>
      <SubmissionForm2 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userInput={userInput}
      />
      <Team2 
       nextPoke={nextPoke} 
      />
      
      
    </div>
  );
}


