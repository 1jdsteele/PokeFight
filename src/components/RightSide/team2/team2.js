

export default function Team2({user2Poke}) {
    if (!user2Poke) {
        return <h2>No Pokemon Selected</h2>
    } else if (user2Poke === "mistake") {
        return <h2>Sorry, that's not a valid entry</h2>
    }


    return(
        <div className="team2">
            
            <h2>{user2Poke.name}</h2>
            <img src={Object.values(user2Poke.sprites.other)[2].front_default} alt="" /> 
        </div>
    )
}