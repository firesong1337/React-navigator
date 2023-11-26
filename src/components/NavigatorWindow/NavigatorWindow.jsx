import { useEffect, useState } from "react";
import ObjectConnections from "./ObjectConnections/ObjectConnections";
import ObjectDisplay from "./ObjectDisplay/ObjectDisplay";
import ObjectDisplayChosen from "./ObjectDisplayChosen/ObjectDisplayChosen";
import ObjectNav from "./ObjectNav/ObjectNav";
import { usersData, groupsData, meetingsData }  from './data.js'
const NavigatorWindow = () => {
    const [displayedData, setDisplayData] = useState('users');
    const [selectedItem, setSelectedItem] = useState(null);
    const changeDataDisplay = (type) => {
        setDisplayData(type);
        setSelectedItem(null);
    }
    const handleItemSelect = (item) => {
        switch(true) {
            case (("groups" in item) && ("meetings" in item)):
                console.log(item.groups)
                console.log(item.meetings)
                break
            case (("users" in item) && ("meetings" in item)):
                console.log(item.users)
                console.log(item.meetings)
                break
            case (("users" in item) && ("groups" in item)):
                console.log(item.users)
                console.log(item.groups) 
                break  
        }
        console.log({item});
        setSelectedItem(item);
      };
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
            onSelect={handleItemSelect}/>
            <ObjectConnections/>
        </div>
    )
}

export default NavigatorWindow;