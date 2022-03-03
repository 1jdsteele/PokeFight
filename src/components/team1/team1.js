import React, {useEffect} from "react";




const url = "https://pokeapi.co/api/v2/pokemon/7";

export default function Team1() {
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch(console.log.error)

    }, []);
    return(
        <h2>team1 has loaded correctly</h2>
    )
}