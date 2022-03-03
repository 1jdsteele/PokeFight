import React, {useState} from "react";

export default function SubmissionForm() {

    const [userinput, setUserInput] = useState();

    function handleClick(event) {
        event.preventDefault();
        setUserInput("example3");

    }

    return (
        <>
        <h2>submission form has loaded</h2>
        <form action="">
            <label htmlFor="userInput">Type in name or ID number</label>
            <input type="text" id="userInput" />
            <button onClick={handleClick}>Submit</button>
        </form>
        </>
    )
}