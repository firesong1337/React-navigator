import { useEffect, useState } from "react";
import ObjectConnections from "./ObjectConnections/ObjectConnections";
import ObjectDisplay from "./ObjectDisplay/ObjectDisplay";
import ObjectDisplayChosen from "./ObjectDisplayChosen/ObjectDisplayChosen";
import ObjectNav from "./ObjectNav/ObjectNav";
import { usersData, groupsData, meetingsData }  from './data.js'
const NavigatorWindow = () => {

    const [displayedData, setDisplayData] = useState('users');
    const [selectedItem, setSelectedItem] = useState(null);
    const [firstLeaf, setFirstLeaf] = useState({
        "name": "",
        "value": []})
    const [secondLeaf, setSecondLeaf] = useState({
        "name": "",
        "value": []})
    const [connectionSelected, setConnectionSelected] = useState(false)
    const [connectionData, setConnectionData] = useState([])
    const changeDataDisplay = (type) => {
        setDisplayData(type);
        setSelectedItem(null);
    }
    const handleItemSelect = (item) => {
        setSelectedItem(item);
        console.log({item});
        switch(true) {
            case (("groups" in item) && ("meetings" in item)):
                setFirstLeaf({
                    "name": "groups",
                    "value": item.groups
                })
                setSecondLeaf({
                    "name": "meetings",
                    "value": item.meetings
                })
                break
            case (("users" in item) && ("meetings" in item)):
                setFirstLeaf({
                    "name": "users",
                    "value": item.users
                })
                setSecondLeaf({
                    "name": "meetings",
                    "value": item.meetings
                })
                break
            case (("users" in item) && ("groups" in item)):
                setFirstLeaf({
                    "name": "users",
                    "value": item.users
                })
                setSecondLeaf({
                    "name": "groups",
                    "value": item.groups
                })
                break  
        }
      };

    const changeConnectionDisplay = (name, value) => {
        setDisplayData(name)
        setConnectionSelected(true)
        setConnectionData(value)
    }
    return(
        <div>
            <ObjectDisplayChosen/>
            <ObjectNav users={usersData} 
            groups={groupsData} 
            meetings={meetingsData} 
            onDisplayChange={changeDataDisplay}/>

            <ObjectDisplay displayedData={displayedData}
            users={usersData} 
            groups={groupsData} 
            meetings={meetingsData} 
            onSelect={handleItemSelect}
            connectionIfSelected={connectionSelected}
            connectionData={connectionData}
            />

            <ObjectConnections
            firstConnection={firstLeaf}
            secondConnection={secondLeaf}
            onDisplayChange={changeConnectionDisplay}/>
        </div>
    )
}

export default NavigatorWindow;