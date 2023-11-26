import { useState } from "react";

const ObjectConnections = ({firstConnection, secondConnection , onDisplayChange}) => {
    const [selectedConnection, setSelectedConnection] = useState(null);
    console.log(firstConnection)
    console.log(secondConnection)

    const handleConnectionClick = (name, value) => {
        setSelectedConnection(name);
        onDisplayChange(name, value); // Передаем выбранный элемент в родительский компонент
      };
    return(
        <div>
            <h1 
            onClick={() => handleConnectionClick(firstConnection.name, firstConnection.value)}>{firstConnection.name}</h1>
            <p>{firstConnection.value.length}</p>
            <h1
            onClick={() => handleConnectionClick(secondConnection.name, secondConnection.value)}>{secondConnection.name}</h1>
            <p>{secondConnection.value.length}</p>
        </div>
    )
}

export default ObjectConnections;