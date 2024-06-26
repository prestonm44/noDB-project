import { useState } from "react" 

export default function Name(props) {

    return (
        <>
            {
                props.isEditable ?
                    <input  
                        type="text"
                        value={position}
                        onChange={(e) => {
                            setPosition(e.target.value)
                        }}
                    />
                    :
                    <h4>{position}</h4>
            }   
        </>
    )
}