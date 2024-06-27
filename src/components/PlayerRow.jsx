import { useState } from "react"
import Name from "./Name";
import Position from "./Position";



export default function PlayerRow(props) {
    ///Create state for each key///
    const [isEditable, setIsEditable] = useState(false)
    const [ name, setName ] = useState (props.player.Name)
    const [ position, setPosition ] = useState (props.player.Position)

    return (
        <div className="playerRow">
        <li key={props.player.Info}> 

            <Name 
            playerName={{ name, setName }}
            isEditable={isEditable}
            />

            <Position 
            playerPosition={{ position, setPosition }}
            isEditable={isEditable}
            />

        <div className="buttonColumn">
        <button className="editButton">Edit</button> <button className="removeButton">Remove</button>
        </div>
        </li>
        </div>
        )
    }