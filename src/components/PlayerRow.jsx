import { useState } from "react"
import Name from "./Name";
import Position from "./Position";
import Buttons from "./Buttons";




export default function PlayerRow({ player, deleteCard }) {
    ///Create state for each key///
    const [isEditable, setIsEditable] = useState(false)
    const [ name, setName ] = useState (player.Name)
    const [ position, setPosition ] = useState (player.Position)

    return (
        <div className="playerRow">
        <li key={player.PlayerID}> 

            <Name 
            playerName={{ name, setName }}
            isEditable={isEditable}
            />

            <Position 
            playerPosition={{ position, setPosition }}
            isEditable={isEditable}
            />

        <div className="buttonColumn">
            <button 
                className="editButton"
                onClick={() => setIsEditable(!isEditable)}
            >
                {isEditable? 'Save' : 'Edit'}
                </button> 
            <button 
                className="removeButton"
                onClick={() => deleteCard(player.PlayerID)}
                >
                    Remove
            </button>
        </div>
        </li>
        </div>
        )
    }