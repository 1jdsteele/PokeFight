






export default function Team1({nextPoke}) {
    if (!nextPoke) {
        return <h2>No Pokemon Selected</h2>
    }

    return(
        <>
        <h2>team1 has loaded correctly</h2>
        <h2>{nextPoke.name}</h2>
        </>
    )
}