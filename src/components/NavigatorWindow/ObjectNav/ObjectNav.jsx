import { useState } from "react";

const ObjectNav= ({ users, groups, meetings, onDisplayChange }) => {
    const [] = useState()
    return(
            <nav>
                <button onClick={() => onDisplayChange('users')}>Users</button>
                <button onClick={() => onDisplayChange('groups')}>Groups</button>
                <button onClick={() => onDisplayChange('meetings')}>Meetings</button>
            </nav>
    )
}

export default ObjectNav;