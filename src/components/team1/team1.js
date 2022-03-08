






export default function Team1({nextPoke}) {
    if (!nextPoke) {
        return <h2>No Pokemon Selected</h2>
    }

    let team1StatTotal = Object.values(nextPoke.stats[0])[0] + Object.values(nextPoke.stats[1])[0] + Object.values(nextPoke.stats[2])[0] + Object.values(nextPoke.stats[3])[0] + Object.values(nextPoke.stats[4])[0] + Object.values(nextPoke.stats[5])[0];

    return(
        <div className="team1">
            
            <h2>{nextPoke.name}</h2>
            <img src={Object.values(nextPoke.sprites.other)[2].front_default} alt="" />

        </div>
    )
}