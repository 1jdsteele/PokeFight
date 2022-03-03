import React, {useState, useEffect} from "react";



export default function SubmissionForm({handleSubmit, handleChange, searchString }) {

    //LINES 9-24 ALREADY IN APP.JS - TO MAKE WORK UNCOMMENT OUT THAT AND LINE 28

    // const [userInput, setUserInput] = useState();  //this is the state that goes from user input into the API request
    
    // const[nextPoke, setNextPoke] = useState(); //this is the state that holds data from api request and sends it to Team1

    // function requestData(userInput) {

    //     const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;

    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             let nextPoke = data.name // YO JAKE CHECK AND FIX THIS LINE
    //         })
    //         .catch(console.log.error);
    // }

//     function HandleClick(event) {
//         event.preventDefault();
//         // setUserInput("example3");
//         //this is where the logic to move the state (since it was already changed by handle change) to the url and fetch shoould accur
//         //and then fetch in turn will...display the data? check birds I guess
        


    
        

// ;

//     }
//      function handleChange(event) {
//          event.preventDefault();
//         //  setUserInput(event.target.value);
//      }

    return (
        <>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="userInput">Type in name or ID number</label>
            <input type="text" id="userInput" onChange={handleChange}/>
            <button>Submit</button>
        </form>
        
        </>
    )
}