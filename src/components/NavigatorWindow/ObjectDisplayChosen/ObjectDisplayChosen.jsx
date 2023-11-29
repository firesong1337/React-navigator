import { useState } from "react";
import './ObjectDisplayChosen.css'

const ObjectDisplayChosen = ({selectedItem}) => {
    console.log(selectedItem)
    return(
        selectedItem.name !== "" && (
        <header className="display-chosen">
            <img src={selectedItem.avatar} className="avatar"/>
            <h3>{selectedItem.name}</h3>
        </header>
        )
    )
}

export default ObjectDisplayChosen;