// import React, { useContext } from "react"
// import { DataContext } from "../../DataContext"


export function Compare({nextPoke, user2Poke}) {
    if (!nextPoke) {
        return <h2>Select two Pokemon to battle!</h2>
    }
    if (!user2Poke) {
        return <h2>Select two Pokemon to battle!</h2>
    }

    let nextPokeStatTotal = Object.values(nextPoke.stats[0])[0] + Object.values(nextPoke.stats[1])[0] + Object.values(nextPoke.stats[2])[0] + Object.values(nextPoke.stats[3])[0] + Object.values(nextPoke.stats[4])[0] + Object.values(nextPoke.stats[5])[0];
    
    let user2PokeStatTotal = Object.values(user2Poke.stats[0])[0] + Object.values(user2Poke.stats[1])[0] + Object.values(user2Poke.stats[2])[0] + Object.values(user2Poke.stats[3])[0] + Object.values(user2Poke.stats[4])[0] + Object.values(user2Poke.stats[5])[0];

    return (
        <div className="compare">
            {/* <h2>compare has loaded properly</h2>
            <p>User pokemon base stat total: {nextPokeStatTotal}</p>
            <p>User 2 pokemon base stat total: {user2PokeStatTotal}</p> */}
            {nextPokeStatTotal > user2PokeStatTotal ? (
                <h2>Player 1 has won the battle!!!</h2>
            ) : (
                <h2>Player 2 has won the battle!!!</h2>
            )}
        
        </div>
    )
}


// export function baseStatTotal(nextPoke) {
//     return Object.values(nextPoke.stats[0])[0] + Object.values(nextPoke.stats[1])[0] + Object.values(nextPoke.stats[2])[0] + Object.values(nextPoke.stats[3])[0] + Object.values(nextPoke.stats[4])[0] + Object.values(nextPoke.stats[5])[0];
// }