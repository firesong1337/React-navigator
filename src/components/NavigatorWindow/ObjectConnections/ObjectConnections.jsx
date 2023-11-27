import { useState } from "react";

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
        <div>
            {connectedObjects.map((obj,index) => (
                // Отобразите данные для каждого элемента в соответствии с текущим displayType
                <div key={index} onClick={() => handleConnectionClick(obj.name, obj.value)}>
                    <h1>{obj.name}</h1>
                    <p>{obj.value.length}</p>
                </div>
            ))}
        </div>
    )
}

export default ObjectConnections;