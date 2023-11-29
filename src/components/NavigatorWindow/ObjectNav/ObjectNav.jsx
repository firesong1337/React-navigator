import { useState } from "react";
import './ObjectNav.css'

const ObjectNav= ({ users, groups, meetings, onSelectChange, onResetData }) => {
    return(
            <nav className="navbar">
                <ul>
                    <li><button onClick={() => onSelectChange(users)}>Users</button></li>
                    <li><button onClick={() => onSelectChange(groups)}>Groups</button></li>
                    <li><button onClick={() => onSelectChange(meetings)}>Meetings</button></li>
                </ul>
                <ul>
                    <li><button className="contrast" onClick={() => onResetData()}>Cancel</button></li>
                </ul>
            </nav>
    )
}

export default ObjectNav;