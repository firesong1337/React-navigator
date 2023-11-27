import { useState } from "react";

const ObjectDisplayChosen = ({selectedItem}) => {
    return(
        <div>
            <h1>{selectedItem.name}</h1>
        </div>
    )
}

export default ObjectDisplayChosen;