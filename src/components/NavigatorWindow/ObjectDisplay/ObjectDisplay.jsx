import { useState } from "react";
import './ObjectDisplay.css'

const emptyAvatarHandler = (data) => {
    const emptyAvatar = "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
    for (let i = 0; i < data.length; i++) {
        if (data[i].avatar === "") {
            data[i].avatar = emptyAvatar;
        }
    }
}

const ObjectDisplay = ({displayedData, onSelect, connectionData }) => {
    console.log("connectionData: ",connectionData)
    emptyAvatarHandler(displayedData)
    let getData = displayedData

    if (connectionData.length !== 0) {
        getData = getData.filter(data => connectionData.includes(data.id))
    }
   console.log("getData: ",getData)
   
    const handleItemClick = (item) => {
        onSelect(item);
      };
    
    return(
        <div className="object-list">
            {getData.map(item => (
                <div key={item.id} onClick={() => handleItemClick(item)} className="object-item">
                    <img src={item.avatar} className="object-avatar"/>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default ObjectDisplay;