// import { useEffect, useState } from "react";
// import axios from 'axios'
// import PlayerRow from "./PlayerRow";


// export default function PlayerData() {
//     const [player, setPlayer] = useState([]);

//     useEffect(() => {
//         axios.get('https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/KC?key=53ac94d7422e4a65b18e03b16aeb7418').then((res) => {
//             setTimeout(() => {
//                 setPlayer(res.data);
//             }, 0);
//         })
//     })

//     const playerList = player.map((play) =>
//         <PlayerRow player={play} />
//     )
//     return (
//     <ul>{playerList}</ul>
//     );

// }

import { useEffect, useState } from "react";
import axios from 'axios';
import PlayerRow from "./PlayerRow";

export default function PlayerData() {
    const [player, setPlayer] = useState([]);
    console.log(player)
    useEffect(() => {
        axios.get('https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/KC?key=53ac94d7422e4a65b18e03b16aeb7418')
            .then((res) => {
                setPlayer(res.data);
            })
            .catch((error) => console.error('Error fetching player data:', error));
    }, []); // Empty dependency array to run only once on component mount

    
    const addNewPlayer = () =>  {
        const newPlayer = {
            PlayerID: player.length ? player[player.length - 1].PlayerID + 1 : 1,
            Name: "New Player", 
            Position: "New Position"
        }
        setPlayer([...player, newPlayer]);
    }
    
    const deleteCard = (playerID) => {
        setPlayer(player.filter(play => play.PlayerID !== playerID));
    };

    const playerList = player.map((play) => (
        <PlayerRow key={play.PlayerID} player={play} deleteCard={deleteCard} />
    ));

    return (
        <>
        <ul>{playerList}</ul>
        <div className='addAPlayer'>
        <button 
            className='addPlayer'
            onClick={addNewPlayer}
            >Add a player here</button>
      </div>
        </>
    );
}
