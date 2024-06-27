import { useState } from "react" 

export default function Name(props) {
    const { name, setName } = props.playerName;
    return (
        <>
            {
                props.isEditable ?
                    <input  
                        value={ name }
                        type="text"
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