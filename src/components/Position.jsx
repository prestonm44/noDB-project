import { useState } from "react" 

export default function Position(props) {
    const { position, setPosition } = props.playerPosition;

    return (
        <>
            {
                props.isEditable ?
                    <input  
                        type="text"
                        value={props.playerPosition}
                        onChange={(e) => {
                            setPosition(e.target.value)
                        }}
                    />
                    :
                    <h4>{ position }</h4>
            }   
        </>
    )
}