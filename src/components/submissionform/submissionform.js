import React, {useState, useEffect} from "react";



export default function SubmissionForm({handleSubmit, handleChange, searchString }) {

  

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