export default function RandomPoke({generateRandomPoke, enemyPoke}) {
    return (
        <>
            <button onClick={generateRandomPoke}>Click here for Pokemon suggestion</button>
            {enemyPoke ? (
                <p>You can try {enemyPoke.name}</p>
            ) : ( <p></p>

            )}
        </>
    )
}