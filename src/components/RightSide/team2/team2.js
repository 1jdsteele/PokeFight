import { useState } from "react";
import { DataContext } from "../../../DataContext";
import Compare from "../../Compare/Compare";




export default function Team2({user2Poke}) {
    
    const [team2State, setTeam2State] = useState(1);

    //  setTeam2State(2);
    
    
    if (!user2Poke) {
        return <h2>No Pokemon Selected</h2>
    }


    

    


    // DIRECTLY BELOW IS ORIGINAL LINE THAT WORKED, NOW EXPERIMENTING WITH PUTTING THIS VARIABLE IN STATE TO PASS VIA CONTEXT TO COMPARE

    let team2StatTotal = Object.values(user2Poke.stats[0])[0] + Object.values(user2Poke.stats[1])[0] + Object.values(user2Poke.stats[2])[0] + Object.values(user2Poke.stats[3])[0] + Object.values(user2Poke.stats[4])[0] + Object.values(user2Poke.stats[5])[0];


   



    return(
        <div className="team2">
            <h2>team2 has loaded correctly</h2>
            <h2>{user2Poke.name}</h2>
            <img src={Object.values(user2Poke.sprites.other)[2].front_default} alt="" />
            {/* <p>HP: {user2Poke.stats[0].base_stat}</p>
            <p>Attack: {Object.values(user2Poke.stats[1])[0]}</p>
            <p>Defense: {Object.values(user2Poke.stats[2])[0]}</p>
            <p>Special Attack:{Object.values(user2Poke.stats[3])[0]}</p>
            <p>Special Defence:{Object.values(user2Poke.stats[4])[0]}</p>
            <p>Speed: {Object.values(user2Poke.stats[5])[0]}</p>
            <p>Total Stats: {team2StatTotal}</p> */}
        
        </div>
    )
}