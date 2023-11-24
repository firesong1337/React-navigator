import { useEffect, useState } from "react";
import ObjectConnections from "./ObjectConnections/ObjectConnections";
import ObjectDisplay from "./ObjectDisplay/ObjectDisplay";
import ObjectDisplayChosen from "./ObjectDisplayChosen/ObjectDisplayChosen";
import ObjectNav from "./ObjectNav/ObjectNav";
import {dataAll} from './data.js'
const NavigatorWindow = () => {
    const [data, setData] = useState(dataAll)
    console.log(dataAll)
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