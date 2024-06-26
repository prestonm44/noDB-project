import { useState } from "react" 

export default function Name(props) {

    return (
        <>
            {
                props.isEditable ?
                    <input  
                        type="text"
                        value={props.playerName}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    :
                    <h4>{props.playerName}</h4>
            }   
        </>
    )
}