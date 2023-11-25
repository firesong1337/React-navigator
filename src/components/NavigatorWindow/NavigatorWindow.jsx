import { useEffect, useState } from "react";
import ObjectConnections from "./ObjectConnections/ObjectConnections";
import ObjectDisplay from "./ObjectDisplay/ObjectDisplay";
import ObjectDisplayChosen from "./ObjectDisplayChosen/ObjectDisplayChosen";
import ObjectNav from "./ObjectNav/ObjectNav";
import { usersData, groupsData, meetingsData }  from './data.js'
const NavigatorWindow = () => {
    const [displayedData, setDisplayData] = useState('users');
    const changeDataDisplay = (type) => {
        setDisplayData(type);
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
            meetings={meetingsData} />
            <ObjectConnections/>
        </div>
    )
}

export default NavigatorWindow;