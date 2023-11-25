import { useState } from "react";

const ObjectDisplay = ({displayedData, users, groups, meetings }) => {
    let getData = [];

    switch (displayedData) {
        case 'users':
            getData = users;
            break;
        case 'groups':
            getData = groups;
            break;
        case 'meetings':
            getData = meetings;
            break;
        default:
            getData = [];
    }
    return(
        <div>
            {getData.map(item => (
                // Отобразите данные для каждого элемента в соответствии с текущим displayType
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}

export default ObjectDisplay;