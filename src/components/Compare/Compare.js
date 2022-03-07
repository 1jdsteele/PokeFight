// import React, { useContext } from "react"
// import { DataContext } from "../../DataContext"


export function Compare({nextPoke}) {
    if (!nextPoke) {
        return <h2>No Pokemon Selected</h2>
    }

    let nextPokeStatTotal = Object.values(nextPoke.stats[0])[0] + Object.values(nextPoke.stats[1])[0] + Object.values(nextPoke.stats[2])[0] + Object.values(nextPoke.stats[3])[0] + Object.values(nextPoke.stats[4])[0] + Object.values(nextPoke.stats[5])[0];
    


    return (
        <>
            <h2>compare has loaded properly</h2>
            <p>User pokemon base stat total: {nextPokeStatTotal}</p>
            <p>{nextPoke.name}</p>
            {/* <p>HP: {Object.values(nextPoke.stats[0])[0]}</p> */}
        </>
    )
}


// export function baseStatTotal(nextPoke) {
//     return Object.values(nextPoke.stats[0])[0] + Object.values(nextPoke.stats[1])[0] + Object.values(nextPoke.stats[2])[0] + Object.values(nextPoke.stats[3])[0] + Object.values(nextPoke.stats[4])[0] + Object.values(nextPoke.stats[5])[0];
// }