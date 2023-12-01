import './ObjectDisplayChosen.css'

export const ObjectDisplayChosen = ({selectedItem}) => {
    return(
        selectedItem.name !== "" && (
        <header className="display-chosen">
            <img src={selectedItem.avatar} className="avatar"/>
            <h3>{selectedItem.name}</h3>
        </header>
        )
    )
}