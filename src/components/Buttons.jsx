
export default function RowButtons(props) {

    const { isEditable, setIsEditable } = props.isEditableState
    // const { index, name, position } = props.buttonData

    return (
        <div className="buttonColumn">
            <button 
                className="editButton"
                onClick={() => setIsEditable(!isEditable)}
            >
                {isEditable? 'Save' : 'Edit'}
                </button> <button className="removeButton">Remove</button>
        </div>
    )
}