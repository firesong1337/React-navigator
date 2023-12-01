import { useEffect, useState } from "react";
import {ObjectConnections} from "./ObjectConnections/ObjectConnections";
import {ObjectDisplay} from "./ObjectDisplay/ObjectDisplay";
import {ObjectDisplayChosen} from "./ObjectDisplayChosen/ObjectDisplayChosen";
import {ObjectNav} from "./ObjectNav/ObjectNav";
import { users, groups, meetings }  from '../data/data.js'
import './NavigatorWindow.css'
import { ItemSelection } from "../Helper/Helper.js";

export const NavigatorWindow = () => {

    const [displayedData, setDisplayData] = useState([]); 
    const [selectedItem, setSelectedItem] = useState({"name":"", "avatar":""}); 
    const [connectedObjects, setConnectedObjects] = useState([
        {
            "name": "",
            "value": []
        }
    ])
    const [selectedConnection, setSelectedConnection] = useState(false)
    const [connectionData, setConnectionData] = useState([])

    const changeDataDisplay = (type) => {
        setDisplayData(type);
        console.log(displayedData)
        setSelectedItem({"name":"", "avatar":""})
    }

    const handleItemSelect = (item) => {
        ItemSelection(item, setSelectedItem, setConnectedObjects)
    }
    
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
            users={users} 
            groups={groups} 
            meetings={meetings} 
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
            users={users} 
            groups={groups} 
            meetings={meetings} 
            connectedObjects={connectedObjects}
            onDisplayChange={changeConnectionDisplay}/>

        </div>
    )
}

