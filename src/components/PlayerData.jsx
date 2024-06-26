import { useEffect, useState } from "react";
import axios from 'axios'
import PlayerRow from "./PlayerRow";


export default function PlayerData() {
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        axios.get('https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/KC?key=53ac94d7422e4a65b18e03b16aeb7418').then((res) => {
            setTimeout(() => {
                setPlayer(res.data);
            }, 0);
        })
    })

    const playerList = player.map((play) =>
        <PlayerRow player={play} />
    )
    return (
        <ul>{playerList}</ul>
    );

}
