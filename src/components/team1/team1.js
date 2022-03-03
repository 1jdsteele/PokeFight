






export default function Team1({nextPoke}) {
    if (!nextPoke) {
        return <h2>No Pokemon Selected</h2>
    }

    return(
        <>
            <h2>team1 has loaded correctly</h2>
            <h2>{nextPoke.name}</h2>
            <p>{Object.values(nextPoke.stats[0])[0]}</p>
            <p>{Object.values(nextPoke.stats[1])[0]}</p>
            <p>{Object.values(nextPoke.stats[2])[0]}</p>
            <p>{Object.values(nextPoke.stats[3])[0]}</p>
            <p>{Object.values(nextPoke.stats[4])[0]}</p>
            <p>{Object.values(nextPoke.stats[5])[0]}</p>
        </>
    )
}