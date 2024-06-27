import { useState } from "react" 

export default function Name(props) {
    const { name, setName } = props.playerName;
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
                    <h4>{ name }</h4>
            }   
        </>
    )
}