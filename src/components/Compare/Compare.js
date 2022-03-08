
export function Compare({nextPoke, user2Poke}) {
    if (!nextPoke) {
        return <h2>Select two Pokemon to battle!</h2>
    }
    if (!user2Poke) {
        return <h2>Select two Pokemon to battle!</h2>
    }
    if (nextPoke === "mistake" && user2Poke === "mistake") {
        return <h2>Select two Pokemon to battle!</h2>
    }

    let nextPokeStatTotal = Object.values(nextPoke.stats[0])[0] + Object.values(nextPoke.stats[1])[0] + Object.values(nextPoke.stats[2])[0] + Object.values(nextPoke.stats[3])[0] + Object.values(nextPoke.stats[4])[0] + Object.values(nextPoke.stats[5])[0];
    
    let user2PokeStatTotal = Object.values(user2Poke.stats[0])[0] + Object.values(user2Poke.stats[1])[0] + Object.values(user2Poke.stats[2])[0] + Object.values(user2Poke.stats[3])[0] + Object.values(user2Poke.stats[4])[0] + Object.values(user2Poke.stats[5])[0];

    return (
        <div className="compare">
          
            {nextPokeStatTotal > user2PokeStatTotal ? (
                <h2>Player 1 has won the battle!!!</h2>
            ) : (
                <h2>Player 2 has won the battle!!!</h2>
            )}
        
        </div>
    )
}
