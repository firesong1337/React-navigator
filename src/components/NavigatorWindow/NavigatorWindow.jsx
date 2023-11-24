import { useEffect, useState } from "react";
import ObjectConnections from "./ObjectConnections/ObjectConnections";
import ObjectDisplay from "./ObjectDisplay/ObjectDisplay";
import ObjectDisplayChosen from "./ObjectDisplayChosen/ObjectDisplayChosen";
import ObjectNav from "./ObjectNav/ObjectNav";

const NavigatorWindow = () => {
    
    return(
        <div>
            <ObjectDisplayChosen/>
            <ObjectNav/>
            <ObjectDisplay/>
            <ObjectConnections/>
        </div>
    )
}

export default NavigatorWindow;