export default function RandomPoke({generateRandomPoke, enemyPoke}) {
    return (
        <>
            <button onClick={generateRandomPoke}>Click here to generate random opponent</button>
            {enemyPoke ? (
                <p>You can try {enemyPoke.name}</p>
            ) : ( <p></p>

            )}
        </>
    )
}