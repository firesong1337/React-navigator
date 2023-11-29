import { useEffect, useState } from "react";
import ObjectConnections from "./ObjectConnections/ObjectConnections";
import ObjectDisplay from "./ObjectDisplay/ObjectDisplay";
import ObjectDisplayChosen from "./ObjectDisplayChosen/ObjectDisplayChosen";
import ObjectNav from "./ObjectNav/ObjectNav";
import { usersData, groupsData, meetingsData }  from './data.js'
import './NavigatorWindow.css'

const NavigatorWindow = () => {

    const [displayedData, setDisplayData] = useState([]); // обновляется
    const [selectedItem, setSelectedItem] = useState({"name":"", "avatar":""}); // обновляется
    const [connectedObjects, setConnectedObjects] = useState([
        {
            "name": "",
            "value": []
        }
    ])
    const [selectedConnection, setSelectedConnection] = useState(false)
    const [connectionData, setConnectionData] = useState([])

    // обработка выбора какие данные выводить из навбара
    const changeDataDisplay = (type) => {
        setDisplayData(type);
        console.log(displayedData)
        setSelectedItem({"name":"", "avatar":""})
    }
    const handleItemSelect = (item) => {
        setSelectedItem({"name": item.name, "avatar": item.avatar});
        console.log("selected item: ", item);
        switch(true) {
            case (("groups" in item) && ("meetings" in item)):
                setConnectedObjects([
                    {"name": "groups", "value": item.groups},
                    {"name": "meetings", "value": item.meetings}
                ])
                break
            case (("users" in item) && ("meetings" in item)):
                setConnectedObjects([
                    {"name": "users", "value": item.users},
                    {"name": "meetings", "value": item.meetings}
                ])
                break
            case (("users" in item) && ("groups" in item)):
                setConnectedObjects([
                    {"name": "users", "value": item.users},
                    {"name": "groups", "value": item.groups}
                ])
                break  
        }
      };

    const changeConnectionDisplay = (type, value) => {
        setDisplayData(type)
        setSelectedConnection(true)
        setConnectionData(value)
    }
    const resetItems = () => {
        setDisplayData([])
        setSelectedItem({"name":"", "avatar":""})
        setConnectedObjects([ {"name": "","value": []}])
        setSelectedConnection(false)
        setConnectionData([])
    }
    return(
        <div className="navigator-window">

            <ObjectDisplayChosen 
            selectedItem={selectedItem}
            />
            <ObjectNav 
            users={usersData} 
            groups={groupsData} 
            meetings={meetingsData} 
            onSelectChange={changeDataDisplay}
            onResetData={resetItems}
            />

            <ObjectDisplay displayedData={displayedData}
            onSelect={handleItemSelect}
            connectionIfSelected={selectedConnection}
            connectionData={connectionData}
            />
            
            <h3>Connected Objects</h3>
            <ObjectConnections
            users={usersData} 
            groups={groupsData} 
            meetings={meetingsData} 
            connectedObjects={connectedObjects}
            onDisplayChange={changeConnectionDisplay}/>

        </div>
    )
}

export default NavigatorWindow;