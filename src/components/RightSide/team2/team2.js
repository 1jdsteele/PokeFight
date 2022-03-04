export default function Team2({nextPoke}) {
    if (!nextPoke) {
        return <h2>No Pokemon Selected</h2>
    }

    let team1StatTotal = Object.values(nextPoke.stats[0])[0] + Object.values(nextPoke.stats[1])[0] + Object.values(nextPoke.stats[2])[0] + Object.values(nextPoke.stats[3])[0] + Object.values(nextPoke.stats[4])[0] + Object.values(nextPoke.stats[5])[0];

    return(
        <div className="team2">
            <h2>team2 has loaded correctly</h2>
            <h2>{nextPoke.name}</h2>
            <p>HP: {Object.values(nextPoke.stats[0])[0]}</p>
            <p>Attack: {Object.values(nextPoke.stats[1])[0]}</p>
            <p>Defense: {Object.values(nextPoke.stats[2])[0]}</p>
            <p>Special Attack:{Object.values(nextPoke.stats[3])[0]}</p>
            <p>Special Defence:{Object.values(nextPoke.stats[4])[0]}</p>
            <p>Speed: {Object.values(nextPoke.stats[5])[0]}</p>
            <p>Total Stats: {team1StatTotal}</p>
        </div>
    )
}