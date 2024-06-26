import { useState } from "react"
import Name from "./Name";



export default function PlayerRow(props) {
    ///Create state for each key///
    const [ name, setName ] = useState (props.player.Name)
    const [ position, setPosition ] = useState (props.player.Position)

    console.log(props)
    return (
        <div className="playerRow">
        <li key={props.player.Info}> 

            <Name playerName={ name }/>,
            
            {position}
        <div className="buttonColumn">
        <button className="editButton">Edit</button> <button className="removeButton">Remove</button>
        </div>
        </li>
        </div>
        )
    }