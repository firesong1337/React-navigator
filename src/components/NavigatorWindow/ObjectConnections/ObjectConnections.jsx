import { useState } from "react";
import './ObjectConnections.css'

const ObjectConnections = ({users, groups, meetings, connectedObjects, onDisplayChange}) => {
    const [selectedConnection, setSelectedConnection] = useState();
    console.log("connectedObjects: ",connectedObjects)

    const handleConnectionClick = (type, value) => {
        switch(type) {
            case "users": type = users 
            break
            case "groups": type = groups 
            break
            case "meetings": type = meetings 
            break
        }
        setSelectedConnection(type);
        console.log("selectedConnection: ", type)
        onDisplayChange(type, value); // Передаем выбранный элемент в родительский компонент
      };

    return(
        <div className="connected-objects">
            {connectedObjects.map((obj,index) => (
                // Отобразите данные для каждого элемента в соответствии с текущим displayType
                obj.value.length !== 0 && (
                <div 
                key={index} 
                onClick={() => handleConnectionClick(obj.name, obj.value)}
                className="secondary connected-item" role="button">
                    <span>{obj.name}</span>
                    <div className="connected-item-length">{obj.value.length}</div>
                </div>)
            ))}
        </div>
    )
}

export default ObjectConnections;