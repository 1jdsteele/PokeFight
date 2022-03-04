export default function SubmissionForm2({handleSubmit, handleChange, searchString }) {
    return (
        <>
        <h2>submission for 2 has loaded</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userInput">Type in name or ID number</label>
            <input type="text" id="userInput" onChange={handleChange}/>
            <button>Submit</button>
        </form>
        </>
    )
}