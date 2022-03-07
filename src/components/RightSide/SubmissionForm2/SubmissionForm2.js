export default function SubmissionForm2({handleSubmitUser2, handleChangeUser2, searchString }) {
    return (
        <>
        
        <form onSubmit={handleSubmitUser2}>
            <label htmlFor="user2Input">Type in name or ID number</label>
            <input type="text" id="user2Input" onChange={handleChangeUser2}/>
            <button>Submit</button>
        </form>
        </>
    )
}